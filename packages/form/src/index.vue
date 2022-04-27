<template>
  <div class="el-pro-form">
    <slot name="formBefore" :form="form" />
    <el-form
      ref="ruleForm"
      v-loading="showLoading"
      :validate-on-rule-change="false"
      v-bind="formProcessOptions"
      :model="form"
      v-on="$listeners"
    >
      <slot name="columnBefore" :form="form" />
      <component :is="isRow ? 'el-row' : 'fragment'" v-bind="rowOptions">
        <fragment v-for="column in metaData" :key="column.key">
          <component :is="isRow ? 'el-col' : 'fragment'" v-bind="getColSpanOptions(column)">
            <h3 v-if="column.type === cmpTypes.title" class="title">
              {{ column.label }}
              <el-tooltip v-if="column.tooltip" placement="right" :content="column.tooltip">
                <i class="el-icon-question" style="font-size: 16px; vertical-align: baseline" />
              </el-tooltip>
            </h3>
            <template v-else-if="column.type === cmpTypes.table">
              <el-button
                v-if="!isPreview"
                type="default"
                style="margin-bottom: 10px"
                icon="el-icon-plus"
                @click="handleClickBtn(column)"
              >
                <span>新增{{ column.label }}</span>
              </el-button>
              <el-pro-table
                :data="form[column.key]"
                :columns="createColumn(column)"
                :auto-height="false"
                style="margin-bottom: 10px"
                :operation-options="{ width: 200 }"
                :table-options="tableOptions"
              >
                <template v-slot:operationMiddle="{ scope }">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    @click="handleEdit(column, scope.row, scope.$index)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    style="color: red"
                    @click="handleDelete(form[column.key], scope.$index)"
                  >
                    删除
                  </el-button>
                </template>
              </el-pro-table>
            </template>
            <slot v-else :name="`${column.key}All`" :form="form">
              <slot name="rowBefore" :form="form" />
              <el-form-item
                v-show="column.isShow"
                :label="column.serachLabel || column.label"
                :prop="column.key"
                :required="isSearch ? false : column.required"
                v-bind="getFormItemOptions(column)"
              >
                <template v-slot:label>
                  <span :title="column.serachLabel || column.label">
                    {{ column.serachLabel || column.label }}
                  </span>
                  <el-tooltip v-if="column.tooltip" placement="right" :content="column.tooltip">
                    <i
                      class="el-icon-question"
                      style="margin-left: 5px; vertical-align: baseline"
                    />
                  </el-tooltip>
                </template>
                <component
                  :is="column.isTag ? 'el-tag' : 'fragment'"
                  v-if="isPreview"
                  v-bind="getTagOptions(column, form)"
                >
                  {{ formatShow(column, form, 'scope') }}
                </component>
                <slot v-else :name="column.key" :form="form">
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
                    <template v-slot:prefix>
                      <slot :name="`${column.key}Prefix`" :form="form" />
                    </template>
                    <template v-slot:suffix>
                      <slot :name="`${column.key}Suffix`" :form="form" />
                    </template>
                    <template v-slot:prepend>
                      <slot :name="`${column.key}Prepend`" :form="form" />
                    </template>
                    <template v-slot:append>
                      <slot :name="`${column.key}Append`" :form="form" />
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
                </slot>
              </el-form-item>
              <slot name="rowAfter" :form="form" />
            </slot>
          </component>
        </fragment>
      </component>
      <slot name="columnAfter" :form="form" />
    </el-form>
    <slot name="formAfter" :form="form" />
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
import { removeArrayByIndex } from 'vue-element-pro-components/src/utils'
import { types } from './type'
import ElProTable from 'vue-element-pro-components/packages/table'
import ElProDialog from 'vue-element-pro-components/packages/dialog'
import Tinymce from './Tinymce/index'
import { formatShow, getTagOptions } from 'vue-element-pro-components/packages/table/src/utils'
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
      type: [Object, Array],
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
    rowOptions: {
      type: Object,
      required: false,
      default() {
        return {
          gutter: 10
        }
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    isSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    isPreview: {
      type: Boolean,
      required: false,
      default: false
    },
    tableOptions: {
      type: Object,
      required: false,
      default() {
        return {
          hasOperation: !this.isPreview
        }
      }
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
            const preStr = [types.input, types.number].includes(type) ? '请输入' : '请选择'
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
      const { isSearch } = this
      const { rules = {}, ...rest } = this.formOptions || {}
      return {
        labelWidth: '70px',
        ...(rest || {}),
        rules: isSearch ? {} : { ...this.formRules, ...rules }
      }
    },
    cmpTypes() {
      return types
    },
    metaData() {
      const { isCollapse, showNum, isShowAll, columns } = this
      // 展开收起模式 并且 显示表单数量大于1
      if (isCollapse && showNum > 0) {
        // 展开
        if (isShowAll) {
          return this.createMetaData('expand', columns, showNum)
        } else {
          // 收起
          return this.createMetaData('fold', columns, showNum)
        }
      } else {
        // 非展开收起模式
        return this.createMetaData('expand', columns, showNum)
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
      handler: function () {
        this.checkDefaultValue()
      }
    },
    formData: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateFormData()
      }
    },
    form: {
      deep: true,
      handler: function () {
        this.$emit('change', this.form)
      }
    }
  },
  methods: {
    formatShow,
    getTagOptions,
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
    mapMetaData(key, item, index, mode, showNum) {
      const { label = key, span = 18, type = types.input, columnOption = {}, options = [] } = item
      return {
        ...item,
        key,
        label,
        span,
        type,
        columnOption,
        options,
        isShow: mode === 'expand' ? true : !(index >= showNum)
      }
    },
    /**
     * @param {*} mode
     */
    createMetaData(mode, columns, showNum) {
      if (Array.isArray(columns)) {
        return columns
          .filter((item) => this.checkShow(item))
          .map((item, index) => {
            return this.mapMetaData(item.key, item, index, mode, showNum)
          })
      } else {
        return Object.keys(columns)
          .filter((key) => this.checkShow(columns[key]))
          .map((key, index) => {
            const item = columns[key]
            return this.mapMetaData(key, item, index, mode, showNum)
          })
      }
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
      if ([types.input, types.number].includes(type)) {
        processColumnOption = {
          placeholder: `请输入${label}`
        }
      } else if (
        type === types.date &&
        ['datetimerange', 'daterange'].includes(columnOption.type)
      ) {
        processColumnOption = {
          startPlaceholder: '请选择开始日期',
          endPlaceholder: '请选择结束日期'
        }
      } else if (type === types.time && columnOption.isRange) {
        processColumnOption = {
          startPlaceholder: '请选择开始时间',
          endPlaceholder: '请选择结束时间'
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
    handleDefaultValue(key, item, newForm) {
      const { type, columnOption = {}, defaultValue } = item
      if (
        [types.checkBox, types.cascader, types.table].includes(type) &&
        !Array.isArray(newForm[key])
      ) {
        newForm[key] = []
      }
      if (
        type === types.date &&
        !Array.isArray(newForm[key]) &&
        ['datetimerange', 'daterange'].includes(columnOption.type)
      ) {
        newForm[key] = []
      }
      if (type === types.time && !Array.isArray(newForm[key]) && columnOption.isRange) {
        newForm[key] = []
      }
      if (!this.checkEmpty(defaultValue) && this.checkEmpty(newForm[key])) {
        newForm[key] = defaultValue
      }
    },
    checkDefaultValue() {
      const { columns } = this
      const newForm = cloneDeep(this.form)
      if (Array.isArray(columns)) {
        columns.forEach((item) => {
          return this.handleDefaultValue(item.key, item, newForm)
        })
      } else {
        Object.keys(columns).forEach((key) => {
          const item = columns[key]
          return this.handleDefaultValue(key, item, newForm)
        })
      }
      this.form = newForm
    },
    updateFormData() {
      if (!this.debounceUpdate) {
        this.debounceUpdate = debounce(
          () => {
            if (!isEqual(this.formData, this.form)) {
              const data = cloneDeep(this.formData)
              this.form = data
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
    },
    clearValidate(a) {
      const { ruleForm } = this.$refs
      ruleForm.clearValidate(a)
    },
    validateField(a, b) {
      const { ruleForm } = this.$refs
      return ruleForm.validateField(a, b)
    },
    validate(a, b) {
      const { ruleForm } = this.$refs
      return ruleForm.validate(a, b)
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
  margin: 10px;
  font-size: 18px;
  font-weight: normal;
  color: #000;
  &::before {
    position: absolute;
    top: 50%;
    left: -6px;
    display: block;
    width: 3.5px;
    height: 14.5px;
    background-color: #1890ff;
    border-radius: 2px;
    content: '';
    transform: translateY(-50%);
  }
}
</style>
