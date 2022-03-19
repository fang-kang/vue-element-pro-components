<template>
  <div class="custom-search" :style="customStyle">
    <slot name="col-before" />
    <el-form :inline="true">
      <el-row :gutter="0">
        <el-col
          v-for="column in metadata"
          :key="column.key"
          v-bind="column.searchColOptions"
        >
          <slot :name="`${column.key}-all`">
            <el-form-item
              :label="column.searchLabel || column.label"
              v-bind="getFormItemOptions(column)"
            >
              <slot :name="column.key" :form="localQuery">
                <!-- input -->
                <el-input
                  v-if="column.type === cmpTypes.input"
                  v-model="localQuery[column.key]"
                  clearable
                  v-bind="getColumnOptions(column)"
                  @keyup.enter.native="search"
                />
                <!-- number -->
                <el-input-number
                  v-else-if="column.type === cmpTypes.number"
                  v-model.number="localQuery[column.key]"
                  :min="0"
                  controls-position="right"
                  v-bind="getColumnOptions(column)"
                />
                <!-- select -->
                <el-select
                  v-else-if="column.type === cmpTypes.select"
                  v-model="localQuery[column.key]"
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
                  v-model="localQuery[column.key]"
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
                  v-model="localQuery[column.key]"
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
                  v-model="localQuery[column.key]"
                  clearable
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  v-bind="getColumnOptions(column)"
                />
                <!-- time-picker -->
                <el-time-picker
                  v-else-if="column.type === cmpTypes.time"
                  v-model="localQuery[column.key]"
                  clearable
                  value-format="HH:mm:ss"
                  v-bind="getColumnOptions(column)"
                />
                <!-- switch -->
                <el-switch
                  v-else-if="column.type === cmpTypes.switch"
                  v-model="localQuery[column.key]"
                  v-bind="getColumnOptions(column)"
                />
                <!-- slider -->
                <el-slider
                  v-else-if="column.type === cmpTypes.slider"
                  v-model="localQuery[column.key]"
                  v-bind="getColumnOptions(column)"
                />
                <!-- rate -->
                <el-rate
                  v-else-if="column.type === cmpTypes.rate"
                  v-model="localQuery[column.key]"
                  v-bind="getColumnOptions(column)"
                />
                <!-- color -->
                <el-color-picker
                  v-else-if="column.type === cmpTypes.color"
                  v-model="localQuery[column.key]"
                  v-bind="getColumnOptions(column)"
                />
                <!-- cascader -->
                <el-cascader
                  v-else-if="column.type === cmpTypes.cascader"
                  clearable
                  filterable
                  v-model="localQuery[column.key]"
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
                  v-model="localQuery[column.key]"
                  v-bind="getColumnOptions(column)"
                  @change="changeArea"
                />
              </slot>
            </el-form-item>
          </slot>
        </el-col>
        <el-col v-bind="buttonsSetting">
          <el-form-item class="btn-options">
            <el-row type="flex">
              <slot name="before" />
              <el-button
                v-if="!noSearch"
                icon="el-icon-search"
                type="primary"
                :loading="showLoading"
                v-bind="searchBtnProps"
                @click="search"
                >{{ searchBtnText }}</el-button
              >
              <slot name="after" />
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <slot name="col-after" />
  </div>
</template>

<script>
import geoNameOptions from "@/assets/json/geo_names.json";
import { filterObject } from "@/utils";
import { types } from "@/components/CustomForm/type";
import { isEqual, cloneDeep } from "lodash";

export default {
  name: "CustomSearch",
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    searchBtnText: {
      type: String,
      default: "查询",
    },
    searchBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    query: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    columns: {
      type: Object,
      required: false,
    },
    searchColumns: {
      type: Object,
      required: false,
    },
    buttonsOptions: {
      type: Object,
      required: false,
    },
    noSearch: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
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
      localQuery: {},
      geoNameOptions,
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
    cmpTypes() {
      return types;
    },
    searchColumn() {
      if (this.searchColumns) {
        return this.searchColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInSearch);
      }
      return {};
    },
    metadata() {
      return Object.keys(this.searchColumn).map((key) => {
        const item = this.searchColumn[key];
        const {
          label = key,
          type = this.cmpTypes.input,
          options,
          searchColOptions = {},
        } = item;
        return {
          key,
          label,
          type,
          options,
          ...item,
          searchColOptions: {
            xs: 24,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 4,
            ...searchColOptions,
          },
        };
      });
    },
    buttonsSetting() {
      return {
        xs: 24,
        sm: 24,
        md: 6,
        lg: 6,
        xl: 6,
        xxl: 4,
        ...(this.buttonsOptions || {}),
      };
    },
  },
  watch: {
    query: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateQuery();
      },
    },
    localQuery: {
      deep: true,
      handler: function () {
        this.$emit("change", this.localQuery);
      },
    },
    metadata: {
      immediate: true,
      handler: function () {
        console.log(11);
        this.checkDefaultValue();
      },
    },
  },
  methods: {
    checkEmpty(data) {
      if (Array.isArray(data)) {
        return data.length === 0;
      } else {
        return [undefined, null].includes(data);
      }
    },
    checkDefaultValue() {
      const { columns, cmpTypes } = this;
      const newForm = cloneDeep(this.localQuery);
      Object.keys(columns).forEach((key) => {
        const item = columns[key];
        if (
          [cmpTypes.checkBox, cmpTypes.area, cmpTypes.cascader].includes(item.type) &&
          !Array.isArray(newForm[key])
        ) {
          newForm[key] = [];
        }
        if (!this.checkEmpty(item.defaultValue) && this.checkEmpty(newForm[key])) {
          newForm[key] = item.defaultValue;
        }
      });
      this.localQuery = newForm;
    },
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
    // 获取
    getColumnOptions(column) {
      const { cmpTypes } = this;
      const { columnOption, type, label, searchLabel } = column;
      let processColumnOption = {};
      if ([cmpTypes.input, cmpTypes.number].includes(type)) {
        processColumnOption = {
          placeholder: `请输入${searchLabel || label}`,
        };
      } else {
        processColumnOption = {
          placeholder: `请选择${searchLabel || label}`,
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
    getOptions(column) {
      let options = column.options;
      if (typeof column.options === "function") {
        options = column.options({ ...this.localQuery });
      }
      return options || [];
    },
    search() {
      this.$emit("search");
    },
    updateQuery() {
      if (!isEqual(this.query, this.localQuery)) {
        this.localQuery = cloneDeep(this.query);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-search {
  display: flex;
  padding: 10px;
  margin: 10px 0px;

  .el-form-item {
    margin-bottom: 10px;

    .el-input__inner {
      width: 180px;
    }
  }
  .btn-options {
    margin: 0 0 0 20px;
  }
}
</style>
