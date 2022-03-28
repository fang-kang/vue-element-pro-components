<template>
  <div
    class="el-pro-table"
    :class="[isFullScreen ? 'is--maximize' : '']"
  >
    <!-- <toolbar
      v-if="showToolbar"
      :row-option="rowOption"
      :show-search="showSearch"
      :is-search-icon="isSearchIcon"
      :columns="tableColumn"
      :metadata="metadata"
      @toggleSearch="toggleSearch"
      @changeSize="changeSize"
      @refresh="$emit('refresh')"
      @change="handleChange"
    >
      <template #left>
        <slot name="left"></slot>
      </template>
    </toolbar> -->

    <div
      v-if="showToolbar"
      class="el-pro-toolbar"
    >
      <el-row
        type="flex"
        justify="space-between"
        :gutter="20"
        v-bind="rowOption"
      >
        <div class="el-pro-toolbar__left">
          <slot name="toolbarLeft" />
        </div>
        <div
          v-if="showToolbarRight"
          class="el-pro-toolbar__right"
        >
          <el-row>
            <slot name="toolbarRightBefore" />
            <el-tooltip
              v-if="isSearchIcon"
              class="item"
              effect="dark"
              :content="showSearch ? '隐藏搜索' : '显示搜索'"
              placement="top"
            >
              <el-button
                size="mini"
                circle
                icon="el-icon-search"
                @click="toggleSearch()"
              />
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              :content="isFullScreen ? '还原' : '全屏'"
              placement="top"
            >
              <el-button
                size="mini"
                circle
                :icon="isFullScreen ? 'el-icon-minus' : 'el-icon-full-screen'"
                @click="isFullScreen = !isFullScreen"
              />
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="刷新"
              placement="top"
            >
              <el-button
                size="mini"
                circle
                icon="el-icon-refresh"
                @click="$emit('refresh')"
              />
            </el-tooltip>
            <slot name="toolbarRightMiddle" />
            <el-tooltip
              class="item"
              effect="dark"
              content="密度"
              placement="top"
            >
              <el-dropdown
                trigger="click"
                style="margin: 0 10px"
                @command="handleCommand"
              >
                <el-button
                  size="mini"
                  circle
                  icon="el-icon-s-operation"
                />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="medium">
                    默认
                  </el-dropdown-item>
                  <el-dropdown-item command="small">
                    中等
                  </el-dropdown-item>
                  <el-dropdown-item command="mini">
                    紧凑
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-tooltip>
            <el-tooltip
              v-if="columns"
              class="item"
              effect="dark"
              content="列设置"
              placement="top"
            >
              <el-popover
                v-model="showPopover"
                popper-class="el-pro-popover"
                placement="bottom"
                width="200"
              >
                <div class="el-pro-popover__title">
                  列展示
                </div>
                <el-tree
                  ref="tree"
                  :data="treeList"
                  show-checkbox
                  default-expand-all
                  node-key="key"
                  :default-checked-keys="defaultCheckedKeys"
                  highlight-current
                />
                <div class="el-pro-popover__footer">
                  <el-button
                    type="primary"
                    plain
                    icon="el-icon-check"
                    size="mini"
                    @click="handleSure"
                  >
                    确认
                  </el-button>
                  <el-button
                    type="default"
                    plain
                    size="mini"
                    icon="el-icon-refresh-right"
                    @click="handleReset"
                  >
                    重置
                  </el-button>
                </div>
                <el-button
                  slot="reference"
                  size="mini"
                  circle
                  icon="el-icon-setting"
                />
              </el-popover>
            </el-tooltip>
            <slot name="toolbarRightAfter" />
          </el-row>
        </div>
      </el-row>
    </div>

    <el-table
      ref="table"
      v-loading="loading"
      v-adaptive="{
        bottomOffset: calcBottomOffset,
        autoHeight: autoHeight
      }"
      :size="size"
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
            v-if="column.showInTable"
            :key="column.key"
            :align="column.align || 'center'"
            :label="column.tableLabel || column.label"
            v-bind="column.tableColumnOption"
          >
            <!-- 表头插槽 -->
            <template #header="scope">
              <slot
                :name="column.key + 'Header'"
                :scope="scope"
              >
                {{ column.label }}
                <el-tooltip
                  v-if="column.tableHeadTooltip"
                  placement="right"
                  :content="column.tableHeadTooltip"
                >
                  <i
                    class="el-icon-question"
                    style="vertical-align: baseline; font-size: 16px"
                  />
                </el-tooltip>
              </slot>
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
                  icon="el-icon-edit"
                  type="text"
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
                  icon="el-icon-delete"
                  type="text"
                  style="color: red"
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
    <el-pro-pagination
      v-if="pagination"
      :pagination.sync="localPagination"
      :page-sizes="pageSizes"
      :pagination-options="paginationOptions"
      :custom-props="customProps"
      :total="total"
      :custom-style="customStyle"
      :pagination-style="paginationStyle"
      @onLoad="onLoad"
    />
  </div>
</template>

<script>
import { types } from 'vue-element-pro-components/packages/form/src/type'
import { filterObject } from 'vue-element-pro-components/src/utils'
import clipboard from 'vue-element-pro-components/src/directive/clipboard/index.js'
import adaptive from 'vue-element-pro-components/src/directive/el-table/index.js'
import TableColumn from './TableColumn.vue'
import { getTagOptions, formatShow, clipboardSuccess } from './utils'
import { cloneDeep } from 'lodash-es'
import ElProPagination from 'vue-element-pro-components/packages/pagination'
// import Toolbar from "./toolbar/index";

export default {
  name: 'ElProTable',
  components: {
    TableColumn,
    ElProPagination
    // Toolbar,
  },
  directives: {
    clipboard,
    adaptive
  },
  props: {
    updateText: {
      type: String,
      default: '编辑'
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
    },
    rowOption: {
      type: Object,
      default() {
        return {
          gutter: 10
        }
      }
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    showToolbarRight: {
      type: Boolean,
      default: true
    },
    isSearchIcon: {
      type: Boolean,
      default: false
    },
    bottomOffset: {
      type: [Number, String],
      default: 30
    },
    deleteTip: {
      type: String,
      default: '此操作将永久删除该行, 是否继续?'
    },
    pagination: {
      type: [Object, null],
      default: null
    },
    total: {
      type: [Number, String],
      default: 0
    },
    pageSizes: {
      type: Array,
      required: false,
      default: () => [10, 20, 30, 50, 100]
    },
    paginationOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    customProps: {
      type: Object,
      default() {
        return {
          page: 'page',
          pageSize: 'pageSize'
        }
      }
    },
    customStyle: {
      type: Object,
      default: () => {}
    },
    paginationStyle: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tableHeight: '400px',
      showPopover: false,
      size: '',
      localColumns: {},
      defaultCheckedKeys: [],
      treeList: [],
      isFullScreen: false
    }
  },
  computed: {
    localPagination: {
      get() {
        return this.pagination
      },
      set(val) {
        this.$emit('update:pagination', val)
      }
    },
    tableColumn: {
      get() {
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
      set(val) {
        return val
      }
    },
    metadata() {
      const { localColumns } = this
      if (Array.isArray(localColumns)) {
        return localColumns.map((item) => {
          return this.mapTableColumn(item.key, item)
        })
      } else {
        return Object.keys(localColumns).map((key) => {
          const item = localColumns[key]
          return this.mapTableColumn(key, item)
        })
      }
    },
    tableSetting() {
      const setting = {
        data: this.data,
        size: 'medium',
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
    },
    calcBottomOffset() {
      const { pagination, bottomOffset } = this
      return pagination ? bottomOffset + 60 : bottomOffset
    }
  },
  watch: {
    isFullScreen(val) {
      if (val) {
        const { calcBottomOffset } = this
        const height = window.innerHeight - 20 - calcBottomOffset
        this.$refs.table.layout.setHeight(height)
        this.$refs.table.doLayout()
      }
    },
    showSearch() {
      const { calcBottomOffset } = this
      const { top } = this.$refs.table.$el.getBoundingClientRect()
      const height = window.innerHeight - top - calcBottomOffset
      this.$refs.table.layout.setHeight(height)
      this.$refs.table.doLayout()
    }
  },
  created() {
    this.size = this.tableSetting.size
  },
  mounted() {
    this.localColumns = cloneDeep(this.tableColumn)
    this.treeList = cloneDeep(this.metadata)
    this.defaultCheckedKeys = this.mapKeys(this.metadata)
  },
  methods: {
    getTagOptions,
    formatShow,
    clipboardSuccess,
    mapKeys(data, array = []) {
      data.forEach((item) => {
        array.push(item.key)
        if (item.children) {
          this.mapKeys(item.children, array)
        }
      })
      return array
    },
    onLoad() {
      console.log(this.pagination, 'pagination')
      this.$emit('onLoad')
    },
    handleCheck(e) {
      if (!e) {
        this.$refs.tree.setCheckedKeys([])
      } else {
        const keys = this.mapKeys(this.metadata)
        this.$refs.tree.setCheckedKeys(keys)
      }
    },
    handleSure() {
      const data = this.$refs.tree.getCheckedNodes()
      let keys = []
      if (Array.isArray(this.tableColumn)) {
        keys = this.tableColumn.map((item) => {
          return item.key
        })
      } else {
        keys = Object.keys(this.tableColumn)
      }
      this.localColumns = data.filter((item) => keys.includes(item.key))
      this.$refs.table.doLayout()
      this.showPopover = false
    },
    handleReset() {
      this.localColumns = this.tableColumn
      const keys = this.mapKeys(this.metadata)
      this.$refs.tree.setCheckedKeys(keys)
      this.$refs.table.doLayout()
      this.showPopover = false
    },
    // 密度
    handleCommand(e) {
      this.size = e
    },
    toggleSearch() {
      this.$emit('update:showSearch', !this.showSearch)
    },
    changeSize(e) {
      this.size = e
    },
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
      this.$confirm(this.deleteTip, '提示', {
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
    }
  }
}
</script>

<style lang="scss">
.el-table__fixed-right::before {
  display: none !important;
}
.el-table th > .cell {
  color: #000;
  padding: 5px 0;
  font-weight: bold;
}

.el-table table th.el-table__cell,
.el-table thead.is-group th.el-table__cell {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.el-pro-toolbar {
  padding: 0 10px;
  margin-bottom: 10px;
}

.el-pro-popover {
  padding: 0;
  &__title {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
  }
  &__footer {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e8e8e8;
  }
}
.el-pro-table.is--maximize {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  z-index: 2000;
  box-sizing: border-box;
}
</style>
