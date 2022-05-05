<template>
  <el-table-column
    v-if="!child.isHide"
    :key="child.key"
    :prop="child.key"
    :align="child.align || 'center'"
    :label="child.tableLabel || child.label"
    v-bind="child.tableColumnOption"
  >
    <fragment v-for="item in child.children" :key="item.key">
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
          <template slot="header" slot-scope="scope">
            <slot :name="item.key + 'Header'" :scope="scope" />
            <span v-if="!$slots[item.key + 'Header']">{{ item.tableLabel || item.label }}</span>
            <el-tooltip
              v-if="item.tableHeadTooltip && !$slots[item.key + 'Header']"
              placement="right"
              :content="item.tableHeadTooltip"
            >
              <i
                class="el-icon-question"
                style="font-size: 16px; vertical-align: baseline; margin-left: 5px"
              />
            </el-tooltip>
          </template>
          <template slot-scope="scope">
            <slot :name="item.key" :scope="scope" />
            <i
              v-if="item.copy && !$slots[item.key]"
              v-clipboard:copy="scope.row[item.key]"
              v-clipboard:success="clipboardSuccess"
              class="el-icon-copy-document"
              style="margin-right: 5px; color: #409eff; cursor: pointer"
            />
            <span v-if="!item.isTag && !$slots[item.key]">{{
              formatShow(item, scope.row, scope)
            }}</span>
            <el-tag v-if="item.isTag && !$slots[item.key]" v-bind="getTagOptions(item, scope.row)">
              {{ formatShow(item, scope.row, scope) }}
            </el-tag>
          </template>
        </el-table-column>
      </template>
    </fragment>
  </el-table-column>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { getTagOptions, formatShow, clipboardSuccess } from './utils'
export default {
  name: 'TableColumn',
  components: { Fragment },
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
