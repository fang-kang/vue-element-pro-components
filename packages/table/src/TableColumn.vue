<template>
  <el-table-column
    v-if="!child.isHide"
    :key="child.key"
    :prop="child.key"
    :align="child.align || 'center'"
    :label="child.tableLabel || child.label"
    v-bind="child.tableColumnOption"
  >
    <template v-for="item in child.children">
      <!-- 树型数据 -->
      <template v-if="item.children && item.children.length">
        <table-column :child="item" />
      </template>
      <template v-else>
        <el-table-column
          v-if="!item.isHide"
          :key="item.key"
          :align="item.align || 'center'"
          :prop="item.key"
          :label="item.tableLabel || item.label"
          v-bind="item.tableColumnOption"
        >
          <template #header="scope">
            <slot :name="item.key + 'Header'" :scope="scope" />
            {{ item.label }}
            <el-tooltip
              v-if="item.tableHeadTooltip"
              placement="right"
              :content="item.tableHeadTooltip"
            >
              <i class="el-icon-question" style="vertical-align: baseline; font-size: 16px" />
            </el-tooltip>
          </template>
          <template slot-scope="scope">
            <slot :name="item.key" :scope="scope">
              <i
                v-if="item.copy"
                v-clipboard:copy="scope.row[item.key]"
                v-clipboard:success="clipboardSuccess"
                class="el-icon-copy-document"
                style="cursor: pointer; color: #409eff; margin-right: 5px"
              />
              <span v-if="!item.isTag">{{ formatShow(item, scope.row, scope) }}</span>
              <el-tag v-if="item.isTag" v-bind="getTagOptions(item, scope.row)">
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
import { getTagOptions, formatShow, clipboardSuccess } from './utils'
export default {
  name: 'TableColumn',
  props: {
    child: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clipboardSuccess,
    getTagOptions,
    formatShow
  }
}
</script>

<style lang="scss" scoped></style>
