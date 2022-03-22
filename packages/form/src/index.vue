<template>
  <div class="el-pro-form">
    <slot
      name="formBefore"
      :form="form"
    />
    <el-form
      ref="ruleForm"
      v-loading="showLoading"
      :validate-on-rule-change="false"
      v-bind="formProcessOptions"
      :model="form"
      v-on="$listeners"
    >
      <slot
        name="columnBefore"
        :form="form"
      />
      <component
        :is="isRow ? 'el-row' : 'fragment'"
        :gutter="0"
      >
        <fragment
          v-for="column in metaData"
          :key="column.key"
        >
          <component
            :is="isRow ? 'el-col' : 'fragment'"
            v-bind="getColSpanOptions(column)"
          >
            <h3
              v-if="column.type === cmpTypes.title"
              class="title"
            >
              {{ column.label }}
            </h3>
            <template v-else-if="column.type === cmpTypes.table">
              <el-button
                type="default"
                size="small"
                style="margin-bottom: 10px"
                icon="el-icon-plus"
                @click="handleClickBtn(column)"
              >
                <span>新增{{ column.label }}</span>
              </el-button>
              <el-pro-table
                :data="form[column.key]"
                :columns="createColumn(column)"
                :operation-options="{ width: 200 }"
                :table-options="{ rowStyle: { height: '50px' }, hasOperation: true }"
              >
                <template #operationMiddle="{ scope }">
                  <el-button
                    size="small"
                    type="primary"
                    @click="handleEdit(column, scope.row, scope.$index)"
                  >
                    修改
                  </el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(form[column.key], scope.$index)"
                  >
                    删除
                  </el-button>
                </template>
              </el-pro-table>
            </template>
            <slot
              v-else
              :name="`${column.key}-all`"
              :form="form"
            >
              <slot
                name="rowBefore"
                :form="form"
              />
              <el-form-item
                v-show="column.isShow"
                :label="column.serachLabel || column.label"
                :prop="column.key"
                :required="column.required"
                v-bind="getFormItemOptions(column)"
              >
                <template slot="label">
                  <span :title="column.serachLabel || column.label">{{
                    column.serachLabel || column.label
                  }}</span>
                  <el-tooltip
                    v-if="column.tooltip"
                    placement="right"
                    :content="column.tooltip"
                  >
                    <i
                      class="el-icon-question"
                      style="margin-left: 5px; vertical-align: baseline"
                    />
                  </el-tooltip>
                </template>
                <slot
                  :name="column.key"
                  :form="form"
                >
                  <el-input
                    v-if="column.type === cmpTypes.input"
                    v-model="form[column.key]"
                    clearable
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  >
                    <template #prefix>
                      <slot
                        :name="`${column.key}Prefix`"
                        :form="form"
                      />
                    </template>
                    <template #suffix>
                      <slot
                        :name="`${column.key}Suffix`"
                        :form="form"
                      />
                    </template>
                    <template #prepend>
                      <slot
                        :name="`${column.key}Prepend`"
                        :form="form"
                      />
                    </template>
                    <template #append>
                      <slot
                        :name="`${column.key}Append`"
                        :form="form"
                      />
                    </template>
                  </el-input>

                  <el-input-number
                    v-else-if="column.type === cmpTypes.number"
                    v-model.number="form[column.key]"
                    :min="0"
                    controls-position="right"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-select
                    v-else-if="column.type === cmpTypes.select"
                    v-model="form[column.key]"
                    filterable
                    clearable
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  >
                    <el-option
                      v-for="(item, optionIndex) in getOptions(column) || []"
                      :key="item.value + optionIndex"
                      :disabled="item.disabled"
                      :label="item[column.labelName] || item.name"
                      :value="item[column.valueName] || item.value"
                    />
                  </el-select>

                  <el-checkbox
                    v-else-if="column.type === cmpTypes.check"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  >
                    {{ column.checkLabel }}
                  </el-checkbox>
                  <el-checkbox-group
                    v-else-if="column.type === cmpTypes.checkBox"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  >
                    <el-checkbox
                      v-for="(item, checkboxIndex) in getOptions(column) || []"
                      :key="item.value + checkboxIndex"
                      :name="column.key"
                      :disabled="item.disabled"
                      :label="item[column.valueName] || item.value"
                    >
                      {{ item[column.labelName] || item.name }}
                    </el-checkbox>
                  </el-checkbox-group>

                  <el-radio-group
                    v-else-if="column.type === cmpTypes.radio"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  >
                    <el-radio
                      v-for="(item, radioIndex) in getOptions(column) || []"
                      :key="item.value + radioIndex"
                      :disabled="item.disabled"
                      :label="item[column.valueName] || item.value"
                    >
                      {{ item[column.labelName] || item.name }}
                    </el-radio>
                  </el-radio-group>

                  <el-date-picker
                    v-else-if="column.type === cmpTypes.date"
                    v-model="form[column.key]"
                    clearable
                    :picker-options="pickerOptions"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-time-picker
                    v-else-if="column.type === cmpTypes.time"
                    v-model="form[column.key]"
                    clearable
                    value-format="HH:mm:ss"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-switch
                    v-else-if="column.type === cmpTypes.switch"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-slider
                    v-else-if="column.type === cmpTypes.slider"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-rate
                    v-else-if="column.type === cmpTypes.rate"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-color-picker
                    v-else-if="column.type === cmpTypes.color"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <el-cascader
                    v-else-if="column.type === cmpTypes.cascader"
                    v-model="form[column.key]"
                    clearable
                    filterable
                    :options="getOptions(column) || []"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />

                  <tinymce
                    v-else-if="column.type === cmpTypes.editor"
                    v-model="form[column.key]"
                    :height="300"
                    v-bind="getColumnOptions(column)"
                    @change="
                      () => {
                        changeVal(column)
                      }
                    "
                  />
                  <slot
                    name="rowAfter"
                    :form="form"
                  />
                </slot>
              </el-form-item>
            </slot>
          </component>
        </fragment>
      </component>
      <slot
        name="columnAfter"
        :form="form"
      />
    </el-form>
    <slot
      name="formAfter"
      :form="form"
    />
    <el-pro-dialog
      v-model="visible"
      :title="`${modalType == 'add' ? '新增' : '编辑'}${currentColumn.label}`"
      :dialog-options="tableDialogOptions"
      @ok="handleOk"
      @closed="closedDialog"
    >
      <el-pro-form
        ref="formData"
        v-model="subForm"
        :columns="subFormColumn"
        :form-options="tableFormOptions"
      />
    </el-pro-dialog>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { isEqual, cloneDeep, debounce } from 'lodash-es'
import { filterObject, removeArrayByIndex } from 'vue-element-pro-components/src/utils'
import { types } from './type'
import ElProTable from 'vue-element-pro-components/packages/table'
import ElProDialog from 'vue-element-pro-components/packages/dialog'
import Tinymce from './Tinymce/index'
export default {
  name: 'ElProForm',
  components: {
    Fragment,
    Tinymce,
    ElProTable,
    ElProDialog
  },
  model: {
    prop: 'formData',
    event: 'change'
  },
  props: {
    tableDialogOptions: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    tableFormOptions: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    showAll: {
      type: Boolean,
      required: false,
      default: true
    },
    isRow: {
      type: Boolean,
      required: false,
      default: true
    },
    isCollapse: {
      type: Boolean,
      required: false,
      default: false
    },
    showNum: {
      type: [Number, String],
      default: 2
    },
    columns: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    formData: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    formOptions: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      index: 0,
      modalType: 'add',
      currentColumn: {}, // 当前操作的column
      subForm: {}, // 子表单
      subFormColumn: {}, // 子表单配置项
      visible: false,
      form: {},
      debounceUpdate: null,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  computed: {
    isShowAll: {
      get() {
        return this.showAll
      },
      set(val) {
        this.$emit('update:showAll', val)
      }
    },
    showLoading: {
      get() {
        return this.loading
      },
      set(val) {
        this.$emit('update:loading', val)
      }
    },
    formRules() {
      const rules = this.metaData.reduce((pre, now) => {
        const { required, rules: originRules, type, label } = now || {}
        if (required || Array.isArray(originRules)) {
          const rules = originRules ? [...originRules] : []
          if (required && !rules.some((item) => item && item.required)) {
            const preStr = [types.input].includes(type) ? '请输入' : '请选择'
            rules.push({
              required: true,
              message: `${preStr}${label}`,
              trigger: now.type === types.number ? 'change' : ['blur', 'change']
            })
          }
          return {
            ...pre,
            [now.key]: rules
          }
        }
        return pre
      }, {})
      return rules
    },
    formProcessOptions() {
      const { rules = {}, ...rest } = this.formOptions || {}
      return {
        labelWidth: '70px',
        ...(rest || {}),
        rules: { ...this.formRules, ...rules }
      }
    },
    cmpTypes() {
      return types
    },
    metaData() {
      const { isCollapse, showNum, isShowAll } = this
      // 展开收起模式 并且 显示表单数量大于1
      if (isCollapse && showNum > 0) {
        // 展开
        if (isShowAll) {
          return this.createMetaData('expand')
        } else {
          // 收起
          return this.createMetaData('fold')
        }
      } else {
        // 非展开收起模式
        return this.createMetaData('expand')
      }
    },
    elForm() {
      return this.$refs.ruleForm
    }
  },
  watch: {
    columns: {
      deep: true,
      immediate: true,
      handler: function() {
        this.checkDefaultValue()
      }
    },
    formData: {
      deep: true,
      immediate: true,
      handler: function() {
        this.updateFormData()
      }
    },
    form: {
      deep: true,
      handler: function() {
        this.$emit('change', this.form)
      }
    }
  },
  created() {},
  methods: {
    changeVal(column) {
      if (column.onChange) {
        column.onChange({
          column: column,
          value: this.form[column.key],
          form: this.form
        })
      }
    },
    // 关闭弹窗
    closedDialog() {
      const { formData } = this.$refs
      formData.resetFields()
    },
    // 弹窗确定回调
    async handleOk() {
      const { formData } = this.$refs
      const { key } = this.currentColumn
      try {
        const checkResult = await formData.checkRule()
        if (checkResult) {
          if (this.modalType === 'add') {
            const arr = [...this.form[key]]
            arr.push({ ...this.subForm, uid: Date.now() })
            this.form[key] = arr
          } else {
            this.$set(this.form[key], this.index, this.subForm)
          }
          this.visible = false
          this.subForm = {}
        }
      } catch (error) {
        console.log(error)
      }
    },
    createColumn(column) {
      const { tableDataOptions } = column
      return tableDataOptions || {}
    },
    handleEdit(column, row, index) {
      this.currentColumn = column
      this.subFormColumn = column.tableDataOptions
      this.modalType = 'edit'
      this.index = index
      this.visible = true
      this.subForm = row
    },
    handleDelete(tableData, index) {
      removeArrayByIndex(tableData, index)
    },
    // 表格类型 点击打开弹窗
    handleClickBtn(column) {
      this.modalType = 'add'
      this.currentColumn = column
      this.subFormColumn = column.tableDataOptions
      this.subForm = {}
      this.visible = true
    },
    /**
     * @param {*} mode
     */
    createMetaData(mode) {
      const { columns, showNum } = this
      return Object.keys(columns)
        .filter((key) => this.checkShow(columns[key]))
        .map((key, index) => {
          const item = columns[key]
          const {
            label = key,
            span = 18,
            type = types.input,
            columnOption = {},
            options = []
          } = item

          return {
            ...item,
            key,
            label,
            span,
            type,
            columnOption,
            options,
            isShow: mode === 'expand' ? true : !(index > showNum)
          }
        })
    },
    getFormItemOptions(column) {
      const { formItemOption } = column
      return {
        ...formItemOption
      }
    },
    getColSpanOptions(column) {
      const { colSpanOption, span } = column
      return {
        span: span || 24,
        ...(colSpanOption || {})
      }
    },
    // 获取
    getColumnOptions(column) {
      const { columnOption, type, label } = column
      let processColumnOption = {}
      if (type === types.input) {
        processColumnOption = {
          placeholder: `请输入${label}`
        }
      } else {
        processColumnOption = {
          placeholder: `请选择${label}`
        }
      }
      let options = {}
      if (typeof columnOption === 'object') {
        options = columnOption
      } else if (typeof columnOption === 'function') {
        options = columnOption() || {}
      }
      return {
        ...processColumnOption,
        ...options
      }
    },
    checkShow(column) {
      if (typeof column.formColumnShow === 'boolean') {
        return column.formColumnShow
      }
      if (typeof column.formColumnShow === 'function') {
        return column.formColumnShow(this.form)
      }
      return true
    },
    checkEmpty(data) {
      if (Array.isArray(data)) {
        return data.length === 0
      } else {
        return [undefined, null].includes(data)
      }
    },
    getOptions(column) {
      let options = column.options
      if (typeof column.options === 'function') {
        options = column.options({ ...this.formData })
      }
      return options || []
    },
    checkDefaultValue() {
      const { columns } = this
      const newForm = cloneDeep(this.form)
      Object.keys(columns).forEach((key) => {
        const item = columns[key]
        if (
          [types.checkBox, types.area, types.cascader, types.table].includes(item.type) &&
          !Array.isArray(newForm[key])
        ) {
          newForm[key] = []
        }
        if (!this.checkEmpty(item.defaultValue) && this.checkEmpty(newForm[key])) {
          newForm[key] = item.defaultValue
        }
      })
      this.form = newForm
    },
    updateFormData() {
      if (!this.debounceUpdate) {
        this.debounceUpdate = debounce(
          () => {
            if (!isEqual(this.formData, this.form)) {
              const data = cloneDeep(this.formData)
              this.form = filterObject(data, (_, key) => {
                return this.columns[key] || !['createTime', 'updateTime'].includes(key)
              })
              this.checkDefaultValue()
            }
          },
          100,
          {
            leading: true
          }
        )
      }
      this.debounceUpdate()
    },
    checkRule() {
      return new Promise((resolve, reject) => {
        const { ruleForm } = this.$refs
        if (ruleForm) {
          ruleForm.validate((valid, error) => {
            if (valid) {
              resolve(true)
            } else {
              this.$nextTick(() => {
                const isError = document.getElementsByClassName('is-error')
                isError[0].scrollIntoView({
                  block: 'center',
                  behavior: 'smooth'
                })
              })
              reject(error)
            }
          })
        }
      })
    },
    resetFields() {
      const { ruleForm } = this.$refs
      ruleForm.resetFields()
    }
  }
}
</script>
<style lang="scss">
.el-cascader-panel {
  height: 250px;
}
.el-pro-form {
  .el-rate {
    line-height: 48px;
  }
}
</style>
<style lang="scss" scoped>
.title {
  position: relative;
  font-weight: bold;
  margin: 10px 0 10px 30px;
  &::before {
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: 3.5px;
    border-radius: 2px;
    height: 14.5px;
    background-color: #1890ff;
  }
}
</style>
