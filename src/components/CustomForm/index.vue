<template>
  <div class="custom-form">
    <el-form
      ref="ruleForm"
      v-loading="showLoading"
      :validate-on-rule-change="false"
      v-bind="formProcessOptions"
      :model="form"
    >
      <slot name="columnBefore" :form="form" />
      <component :gutter="0" :is="isRow ? 'el-row' : 'fragment'">
        <fragment v-for="column in metaData" :key="column.key">
          <component
            v-bind="getColSpanOptions(column)"
            :is="isRow ? 'el-col' : 'fragment'"
          >
            <h3 class="title" v-if="column.type === cmpTypes.title">
              {{ column.label }}
            </h3>
            <slot v-else :name="`${column.key}-all`" :form="form">
              <el-form-item
                :label="column.label"
                :prop="column.key"
                :required="column.required"
                v-bind="getFormItemOptions(column)"
              >
                <slot :name="column.key" :form="form">
                  <!-- input -->
                  <el-input
                    v-if="column.type === cmpTypes.input"
                    v-model="form[column.key]"
                    clearable
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- number -->
                  <el-input-number
                    v-else-if="column.type === cmpTypes.number"
                    v-model.number="form[column.key]"
                    :min="0"
                    controls-position="right"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- select -->
                  <el-select
                    v-else-if="column.type === cmpTypes.select"
                    v-model="form[column.key]"
                    filterable
                    clearable
                    v-bind="getColumnOptions(column)"
                  >
                    <el-option
                      v-for="(item, index) in getOptions(column) || []"
                      :key="item.value + index"
                      :disabled="item.disabled"
                      :label="item[column.labelName] || item.name"
                      :value="item[column.valueName] || item.value"
                    />
                  </el-select>
                  <!-- checkbox -->
                  <el-checkbox-group
                    v-else-if="column.type === cmpTypes.checkBox"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  >
                    <el-checkbox
                      v-for="(item, index) in getOptions(column) || []"
                      :key="item.value + index"
                      :name="column.key"
                      :disabled="item.disabled"
                      :label="item[column.valueName] || item.value"
                    >
                      {{ item[column.labelName] || item.name }}
                    </el-checkbox>
                  </el-checkbox-group>
                  <!-- radio -->
                  <el-radio-group
                    v-else-if="column.type === cmpTypes.radio"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  >
                    <el-radio
                      v-for="(item, index) in getOptions(column) || []"
                      :key="item.value + index"
                      :disabled="item.disabled"
                      :label="item[column.valueName] || item.value"
                    >
                      {{ item[column.labelName] || item.name }}
                    </el-radio>
                  </el-radio-group>
                  <!-- date-picker -->
                  <el-date-picker
                    v-else-if="column.type === cmpTypes.date"
                    v-model="form[column.key]"
                    clearable
                    :picker-options="pickerOptions"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- time-picker -->
                  <el-time-picker
                    v-else-if="column.type === cmpTypes.time"
                    v-model="form[column.key]"
                    clearable
                    value-format="HH:mm:ss"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- switch -->
                  <el-switch
                    v-else-if="column.type === cmpTypes.switch"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- slider -->
                  <el-slider
                    v-else-if="column.type === cmpTypes.slider"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- rate -->
                  <el-rate
                    v-else-if="column.type === cmpTypes.rate"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- color -->
                  <el-color-picker
                    v-else-if="column.type === cmpTypes.color"
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                  />
                  <!-- cascader -->
                  <el-cascader
                    v-else-if="column.type === cmpTypes.cascader"
                    clearable
                    filterable
                    v-model="form[column.key]"
                    :options="getOptions(column) || []"
                    v-bind="getColumnOptions(column)"
                    @change="handleCascaderChange"
                  />
                  <!-- area -->
                  <el-cascader
                    v-else-if="column.type === cmpTypes.area"
                    :options="geoNameOptions"
                    clearable
                    :props="{ label: 'text' }"
                    filterable
                    v-model="form[column.key]"
                    v-bind="getColumnOptions(column)"
                    @change="changeArea"
                  />
                  <slot name="rowAfter" :form="form"></slot>
                </slot>
              </el-form-item>
            </slot>
          </component>
        </fragment>
      </component>
      <slot name="columnAfter" :form="form" />
    </el-form>
    <slot name="formAfter" :form="form" />
  </div>
</template>

<script>
import { isEqual, cloneDeep, debounce } from "lodash-es";
import { filterObject } from "@/utils";
import { types } from "./type";
import geoNameOptions from "@/assets/json/geo_names.json";
export default {
  name: "CustomForm",
  model: {
    prop: "formData",
    event: "change",
  },
  props: {
    isRow: {
      type: Boolean,
      required: false,
      default: true,
    },
    columns: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    formData: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    formOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      geoNameOptions,
      form: {},
      debounceUpdate: null,
      watchers: {},
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  computed: {
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    formRules() {
      const rules = this.metaData.reduce((pre, now) => {
        const { required, rules: originRules, type, label } = now || {};
        if (required || Array.isArray(originRules)) {
          const rules = originRules ? [...originRules] : [];
          if (required && !rules.some((item) => item && item.required)) {
            const preStr = [types.input].includes(type) ? "请输入" : "请选择";
            rules.push({
              required: true,
              message: `${preStr}${label}`,
              trigger: now.type === types.number ? "change" : ["blur", "change"],
            });
          }
          return {
            ...pre,
            [now.key]: rules,
          };
        }
        return pre;
      }, {});
      return rules;
    },
    formProcessOptions() {
      const { rules = {}, ...rest } = this.formOptions || {};
      return {
        labelWidth: "100px",
        ...(rest || {}),
        rules: { ...this.formRules, ...rules },
      };
    },
    cmpTypes() {
      return types;
    },
    metaData() {
      return Object.keys(this.columns)
        .filter((key) => this.checkShow(this.columns[key]))
        .map((key) => {
          const item = this.columns[key];
          const {
            label = key,
            span = 18,
            type = types.input,
            columnOption = {},
            options = [],
          } = item;
          return {
            ...item,
            key,
            label,
            span,
            type,
            columnOption,
            options,
          };
        });
    },
    elForm() {
      return this.$refs.ruleForm;
    },
  },
  watch: {
    columns: {
      deep: true,
      immediate: true,
      handler: function () {
        this.checkDefaultValue();
      },
    },
    formData: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateFormData();
      },
    },
    form: {
      deep: true,
      handler: function () {
        this.$emit("change", this.form);
      },
    },
  },
  created() {},
  methods: {
    changeArea(e) {
      this.$emit("changeArea", e);
    },
    handleCascaderChange(e) {
      this.$emit("handleCascaderChange", e);
    },
    getFormItemOptions(column) {
      const { formItemOption } = column;
      return {
        ...formItemOption,
      };
    },
    getColSpanOptions(column) {
      const { colSpanOption, span } = column;
      return {
        span: span || 24,
        ...(colSpanOption || {}),
      };
    },
    // 获取
    getColumnOptions(column) {
      const { columnOption, type, label } = column;
      let processColumnOption = {};
      if (type == types.input) {
        processColumnOption = {
          placeholder: `请输入${label}`,
        };
      } else {
        processColumnOption = {
          placeholder: `请选择${label}`,
        };
      }
      let options = {};
      if (typeof columnOption === "object") {
        options = columnOption;
      } else if (typeof columnOption === "function") {
        options = columnOption() || {};
      }
      return {
        ...processColumnOption,
        ...options,
      };
    },
    checkShow(column) {
      if (typeof column.formColumnShow === "boolean") {
        return column.formColumnShow;
      }
      if (typeof column.formColumnShow === "function") {
        return column.formColumnShow(this.form);
      }
      return true;
    },
    checkEmpty(data) {
      if (Array.isArray(data)) {
        return data.length === 0;
      } else {
        return [undefined, null].includes(data);
      }
    },
    getOptions(column) {
      let options = column.options;
      if (typeof column.options === "function") {
        options = column.options({ ...this.formData });
      }
      return options || [];
    },
    checkDefaultValue() {
      const { columns } = this;
      const newForm = cloneDeep(this.form);
      Object.keys(columns).forEach((key) => {
        const item = columns[key];
        if (
          [types.checkBox, types.area, types.cascader].includes(item.type) &&
          !Array.isArray(newForm[key])
        ) {
          newForm[key] = [];
        }
        if (!this.checkEmpty(item.defaultValue) && this.checkEmpty(newForm[key])) {
          newForm[key] = item.defaultValue;
        }
      });
      this.form = newForm;
    },
    updateFormData() {
      if (!this.debounceUpdate) {
        this.debounceUpdate = debounce(
          () => {
            if (!isEqual(this.formData, this.form)) {
              const data = cloneDeep(this.formData);
              this.form = filterObject(data, (_, key) => {
                return this.columns[key] || !["createTime", "updateTime"].includes(key);
              });
              this.checkDefaultValue();
            }
          },
          100,
          {
            leading: true,
          }
        );
      }
      this.debounceUpdate();
    },
    checkRule() {
      return new Promise((resolve, reject) => {
        const { ruleForm } = this.$refs;
        if (ruleForm) {
          ruleForm.validate((valid, error) => {
            if (valid) {
              resolve(true);
            } else {
              this.$nextTick(() => {
                const isError = document.getElementsByClassName("is-error");
                isError[0].scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              });
              reject(error);
            }
          });
        }
      });
    },
    resetFields() {
      const { ruleForm } = this.$refs;
      ruleForm.resetFields();
    },
  },
};
</script>
<style lang="scss">
.el-cascader-panel {
  height: 250px;
}
.custom-form {
  .el-rate {
    line-height: 48px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
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
    content: "";
    display: block;
    width: 3.5px;
    border-radius: 2px;
    height: 14.5px;
    background-color: #1890ff;
  }
}
</style>
