<template>
  <el-table
    ref="table"
    v-loading="loading"
    v-bind="tableSetting"
    v-on="$listeners"
  >
    <!-- 多选 -->
    <el-table-column
      v-if="selection"
      type="selection"
      align="center"
      :reserve-selection="reserveSelection"
      width="60"
    />
    <template v-for="column in metadata">
      <!-- 树型数据 -->
      <template v-if="column.children && column.children.length">
        <table-column
          :key="column.key"
          :child="column"
        />
      </template>

      <template v-else>
        <el-table-column
          :key="column.key"
          :align="column.align || 'center'"
          :label="column.tableLabel || column.label"
          v-bind="column.tableColumnOption"
        >
          <!-- 表头插槽 -->
          <template
            v-if="$slots[column.key + 'Header']"
            #header="scope"
          >
            <slot
              :name="column.key + 'Header'"
              :scope="scope"
            />
          </template>
          <template slot-scope="scope">
            <slot
              :name="column.key"
              :scope="scope"
            >
              <i
                v-if="column.copy"
                v-clipboard:copy="scope.row[column.key]"
                v-clipboard:success="clipboardSuccess"
                class="el-icon-copy-document"
                style="cursor: pointer; color: #409eff; margin-right: 5px"
              />
              <span v-if="!column.isTag">{{ formatShow(column, scope.row, scope) }}</span>
              <el-tag
                v-if="column.isTag"
                v-bind="getTagOptions(column, scope.row)"
              >
                {{ formatShow(column, scope.row, scope) }}
              </el-tag>
            </slot>
          </template>
        </el-table-column>
      </template>
    </template>
    <el-table-column
      v-if="hasOperation && showOperation"
      v-bind="processOperationOptions"
    >
      <template slot-scope="scope">
        <slot
          :scope="scope"
          name="operationColumn"
        >
          <div class="operationContainer">
            <slot
              :scope="scope"
              name="operationBefore"
            />
            <slot
              :scope="scope"
              name="autoOperation"
            >
              <el-button
                v-if="updateFunc"
                size="small"
                type="primary"
                v-bind="updateProps(scope.row, scope.$index)"
                @click="updateFunc(scope.row, scope.$index)"
              >
                {{ updateText }}
              </el-button>
              <slot
                :scope="scope"
                name="operationMiddle"
              />
              <el-button
                v-if="deleteFunc"
                size="small"
                type="danger"
                v-bind="deleteProps(scope.row, scope.$index)"
                @click="handleDeleteFunc(scope.row, scope.$index)"
              >
                {{ deleteText }}
              </el-button>
            </slot>
            <slot
              :scope="scope"
              name="operationAfter"
            />
          </div>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { types } from 'vue-element-pro-components/packages/form/src/type'
import { filterObject } from 'vue-element-pro-components/src/utils'
import clipboard from 'vue-element-pro-components/src/directive/clipboard/index.js'
import { debounce } from 'lodash-es'
import TableColumn from './TableColumn.vue'
import { getTagOptions, formatShow, clipboardSuccess } from './utils'

export default {
  name: 'ElProTable',
  components: {
    TableColumn
  },
  directives: {
    clipboard
  },
  props: {
    updateText: {
      type: String,
      default: '修改'
    },
    deleteText: {
      type: String,
      default: '删除'
    },
    // 是否多选
    selection: {
      type: Boolean,
      default: false
    },
    // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    reserveSelection: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: [Object, Array],
      required: false,
      default: () => {}
    },
    updateProps: {
      type: Function,
      required: false,
      default: () => {}
    },
    deleteProps: {
      type: Function,
      required: false,
      default: () => {}
    },
    tableColumns: {
      type: [Object, Array, null],
      required: false,
      default: null
    },
    tableOptions: {
      type: [Object, null],
      required: false,
      default: null
    },
    deleteFunc: {
      type: Function,
      required: false,
      default: null
    },
    updateFunc: {
      type: Function,
      required: false,
      default: null
    },
    operationOptions: {
      type: Object,
      required: false,
      default: () => {}
    },
    showOperation: {
      type: Boolean,
      required: false,
      default: true
    },
    autoHeight: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      tableHeight: '',
      debounceHeightListener: null
    }
  },
  computed: {
    tableColumn() {
      const { tableColumns, columns } = this
      if (tableColumns) {
        return tableColumns
      } else if (columns) {
        if (Array.isArray(columns)) {
          return columns.filter((column) => column.showInTable)
        } else {
          return filterObject(columns, (column) => column.showInTable)
        }
      }
      return {}
    },
    metadata() {
      const { tableColumn } = this
      if (Array.isArray(tableColumn)) {
        return tableColumn.map((item) => {
          return this.mapTableColumn(item.key, item)
        })
      } else {
        return Object.keys(tableColumn).map((key) => {
          const item = tableColumn[key]
          return this.mapTableColumn(key, item)
        })
      }
    },
    tableSetting() {
      const setting = {
        data: this.data,
        highlightCurrentRow: true,
        style: 'width: 100%',
        ...(this.tableOptions || {})
      }
      if (this.tableHeight) {
        setting.height = this.tableHeight
      }
      return setting
    },
    processOperationOptions() {
      return {
        fixed: 'right',
        label: '操作',
        width: '150',
        align: 'center',
        ...(this.operationOptions || {})
      }
    },
    hasOperation() {
      return this.tableOptions
        ? this.tableOptions.hasOperation
        : false || this.deleteFunc || this.updateFunc
    }
  },
  mounted() {
    if (this.autoHeight) {
      this.setTableHeight()
      this.setChangeHeightListener()
    }
  },
  beforeDestroy() {
    if (this.debounceHeightListener) {
      window.removeEventListener('resize', this.debounceHeightListener)
    }
  },
  methods: {
    getTagOptions,
    formatShow,
    clipboardSuccess,
    mapTableColumn(key, item) {
      const { label = key, type = types.input, tableColumnOption = {}, options } = item
      return {
        ...item,
        key,
        label,
        type,
        tableColumnOption,
        options
      }
    },
    handleDeleteFunc(row, index) {
      this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteFunc && this.deleteFunc(row, index)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setChangeHeightListener() {
      if (!this.debounceHeightListener) {
        this.debounceHeightListener = debounce(this.setTableHeight, 100)
      }
      window.addEventListener('resize', this.debounceHeightListener)
    },
    setTableHeight() {
      const searchDom = document.querySelector('.el-pro-search')
      const appMainDom = document.querySelector('#el-pro-wrapper')
      if (searchDom && appMainDom) {
        const paginationDom = document.querySelector('.el-pro-pagination')
        const paginationDomHeight = paginationDom ? paginationDom.clientHeight : 0
        this.tableHeight =
          appMainDom.offsetHeight - searchDom.clientHeight - paginationDomHeight - 50 + 'px'
      }
    }
  }
}
</script>

<style lang="scss"></style>
