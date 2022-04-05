<template>
  <el-pro-drawer v-model="showVisible" :title="title" :size="size" :drawer-options="drawerOptions">
    <el-pro-form
      ref="dataForm"
      v-model="localQuery"
      :is-row="isRow"
      is-search
      :columns="searchColumn"
      :form-options="formProcessOptions"
    />
    <template v-if="showFooter">
      <div style="height: 40px; width: 100%" />
      <div class="footer">
        <slot name="before" />
        <el-button
          v-if="showReset"
          icon="el-icon-refresh-right"
          v-bind="resetBtnProps"
          @click="handleReset"
        >
          {{ resetBtnText }}
        </el-button>
        <slot name="middle" />
        <el-button
          icon="el-icon-search"
          type="primary"
          v-bind="searchBtnProps"
          @click="handleSearch"
        >
          {{ searchBtnText }}
        </el-button>
        <slot name="after" />
      </div>
    </template>
    <slot v-if="!showFooter && $slots.footer" name="footer" />
  </el-pro-drawer>
</template>

<script>
import ElProDrawer from 'vue-element-pro-components/packages/drawer'
import ElProForm from 'vue-element-pro-components/packages/form'
import { isEqual, cloneDeep } from 'lodash-es'
import { filterObject } from 'vue-element-pro-components/src/utils'
export default {
  name: 'ElProAdvancedSearch',
  components: { ElProDrawer, ElProForm },
  model: {
    prop: 'query',
    event: 'change'
  },
  props: {
    showReset: {
      type: Boolean,
      default: true
    },
    searchBtnText: {
      type: String,
      default: '查询'
    },
    searchBtnProps: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    resetBtnText: {
      type: String,
      default: '重置'
    },
    resetBtnProps: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    isRow: {
      type: Boolean,
      default: false
    },
    formOptions: {
      type: Object,
      default: () => {}
    },
    query: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    columns: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    searchColumns: {
      type: [Object, Array, null],
      required: false,
      default: null
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: 450
    },
    visible: {
      type: Boolean,
      default: false
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      localQuery: {}
    }
  },
  computed: {
    searchColumn() {
      const { searchColumns, columns } = this
      if (searchColumns) {
        return searchColumns
      } else if (columns) {
        if (Array.isArray(columns)) {
          return columns.filter((column) => column.showInSearch || column.showInAdvance)
        } else {
          return filterObject(columns, (column) => column.showInSearch || column.showInAdvance)
        }
      }
      return {}
    },
    formProcessOptions() {
      const { ...rest } = this.formOptions || {}
      return {
        inline: false,
        labelWidth: '80px',
        ...(rest || {})
      }
    },
    showVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    query: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateQuery()
      }
    },
    localQuery: {
      deep: true,
      handler: function () {
        this.$emit('change', this.localQuery)
      }
    }
  },
  methods: {
    handleSearch() {
      this.search()
      this.showVisible = false
    },
    search() {
      this.$emit('search')
    },
    updateQuery() {
      if (!isEqual(this.query, this.localQuery)) {
        this.localQuery = cloneDeep(this.query)
      }
    },
    handleReset() {
      this.showVisible = false
      this.$refs.dataForm.resetFields()
      this.$emit('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding: 15px 15px 0 15px;
  text-align: center;
  left: 0;
  background: #fff;
  border-radius: 0 0 4px 4px;
}
</style>
