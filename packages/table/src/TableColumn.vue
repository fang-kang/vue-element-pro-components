<template>
  <el-table-column
    :key="child.key"
    :align="child.align || 'center'"
    :label="child.tableLabel || child.label"
    v-bind="child.tableColumnOption"
  >
    <template v-for="item in child.children">
      <!-- 树型数据 -->
      <template v-if="item.children && item.children.length">
        <table-column
          :key="item[key]"
          :child="item"
        />
      </template>
      <template v-else>
        <el-table-column
          :key="item.key"
          :align="item.align || 'center'"
          :label="item.tableLabel || item.label"
          v-bind="item.tableColumnOption"
        >
          <template
            v-if="$slots[item.key + 'Header']"
            #header="scope"
          >
            <slot
              :name="item.key + 'Header'"
              :scope="scope"
            />
          </template>
          <template slot-scope="scope">
            <slot
              :name="item.key"
              :scope="scope"
            >
              <i
                v-if="item.copy"
                v-clipboard:copy="scope.row[item.key]"
                v-clipboard:success="clipboardSuccess"
                class="el-icon-copy-document"
                style="cursor: pointer; color: #409eff; margin-right: 5px"
              />
              <span v-if="!item.isTag">{{ formatShow(item, scope.row, scope) }}</span>
              <el-tag
                v-if="item.isTag"
                v-bind="getTagOptions(item, scope.row)"
              >
                {{ formatShow(item, scope.row, scope) }}
              </el-tag>
            </slot>
          </template>
        </el-table-column>
      </template>
    </template>
  </el-table-column>
</template>

<script>
import { types } from 'packages/form/src/type'
export default {
  name: 'TableColumn',
  props: {
    child: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      })
    },
    getTagOptions(column, row) {
      let options = {}
      const { tagOptions } = column
      if (typeof tagOptions === 'string') {
        options.type = tagOptions
      }
      if (typeof tagOptions === 'object') {
        options = tagOptions
      } else if (typeof tagOptions === 'function') {
        options = tagOptions(row) || {}
      }
      return {
        ...options
      }
    },
    formatShow(column, row, scope) {
      const { showFormat } = column
      if (showFormat && typeof showFormat === 'function') {
        return showFormat(row[column.key], row, scope)
      }
      if ([types.select, types.checkBox, types.radio].includes(column.type)) {
        let options = []
        if (Array.isArray(column.options)) {
          options = column.options
        } else if (typeof column.options === 'function') {
          options = column.options(row)
        }
        const option = options.find((item) => String(item.value) === String(row[column.key]))
        return option ? option.name : ''
      }
      return row[column.key]
    }
  }
}
</script>

<style lang="scss" scoped></style>
