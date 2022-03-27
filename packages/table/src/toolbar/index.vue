<template>
  <div class="el-pro-toolbar">
    <el-row
      type="flex"
      justify="space-between"
      :gutter="20"
      v-bind="rowOption"
    >
      <div class="el-pro-toolbar__left">
        <slot name="left" />
      </div>
      <div class="el-pro-toolbar__right">
        <el-row>
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
            content="刷新"
            placement="top"
          >
            <el-button
              size="mini"
              circle
              icon="el-icon-refresh"
              @click="refresh()"
            />
          </el-tooltip>
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
              popper-class="el-pro-popover"
              placement="bottom"
              width="200"
              trigger="click"
            >
              <div class="el-pro-popover__title">
                <el-checkbox
                  v-model="allChecked"
                  @change="handlecheck"
                >
                  列展示
                </el-checkbox>
                <el-button
                  type="text"
                  @click="allChecked = true"
                >
                  重置
                </el-button>
              </div>
              <el-tree
                ref="tree"
                :data="metadata"
                show-checkbox
                default-expand-all
                node-key="key"
                :default-checked-keys="defaultCheckedKeys"
                highlight-current
                :props="defaultProps"
                @check-change="handleCheckChange"
              />
              <el-button
                slot="reference"
                size="mini"
                circle
                icon="el-icon-setting"
              />
            </el-popover>
          </el-tooltip>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash-es'
export default {
  name: 'Toolbar',
  props: {
    rowOption: {
      type: Object,
      default() {
        return {}
      }
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    columns: {
      type: [Array, Object, null],
      default: null
    },
    metadata: {
      type: [Array],
      default() {
        return []
      }
    },
    isSearchIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      defaultCheckedKeys: [], // 默认选中key
      allChecked: true,
      localColumns: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {},
  watch: {
    allChecked(val) {
      if (val) {
        this.changeIsHide(false)
        const keys = this.metadata.map((item) => {
          return item.key
        })
        this.$refs.tree.setCheckedKeys(keys)
      }
    }
  },
  created() {
    if (Array.isArray(this.columns)) {
      this.localColumns = cloneDeep(this.columns).map((item) => {
        return {
          ...item,
          isHide: false
        }
      })
    } else {
      for (const key in cloneDeep(this.columns)) {
        if (Object.hasOwnProperty.call(this.columns, key)) {
          const element = this.columns[key]
          this.localColumns[key] = {
            ...element,
            isHide: false
          }
        }
      }
    }
    this.treeList = cloneDeep(this.metadata)
    this.defaultCheckedKeys = this.metadata.map((item) => {
      return item.key
    })
  },
  methods: {
    changeIsHide(e) {
      if (Array.isArray(this.localColumns)) {
        this.localColumns.forEach((_, index) => {
          this.$set(this.localColumns[index], 'isHide', e)
        })
      } else {
        Object.keys(this.localColumns).forEach((key) => {
          this.$set(this.localColumns[key], 'isHide', e)
        })
      }
      this.$emit('change', this.localColumns)
    },
    handlecheck(e) {
      if (!e) {
        this.$refs.tree.setCheckedKeys([])
        this.changeIsHide(true)
      }
    },
    handleCheckChange() {
      const keys = this.$refs.tree.getCheckedKeys()
      this.allChecked = keys.length === this.treeList.length
      keys.forEach((key) => {
        if (Array.isArray(this.localColumns)) {
          this.localColumns.forEach((item, index) => {
            if (item.key !== key) {
              this.$set(this.localColumns[index], 'isHide', true)
            }
          })
        } else {
          this.$set(this.localColumns[key], 'isHide', false)
        }
      })
      if (Array.isArray(this.localColumns)) {
        this.localColumns.forEach((item, index) => {
          if (!keys.includes(item.key)) {
            this.$set(this.localColumns[index], 'isHide', true)
          }
        })
      } else {
        const hideKeys = Object.keys(this.localColumns).filter((key) => !keys.includes(key))
        hideKeys.forEach((key) => {
          this.$set(this.localColumns[key], 'isHide', true)
        })
        this.$emit('change', this.localColumns)
      }
    },
    // 搜索
    toggleSearch() {
      this.$emit('toggleSearch', !this.showSearch)
    },
    // 密度
    handleCommand(e) {
      this.$emit('changeSize', e)
    },
    // 刷新
    refresh() {
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pro-toolbar {
  padding: 0 10px;
  margin-bottom: 10px;
}

.el-pro-popover {
  padding-top: 0px;
  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
