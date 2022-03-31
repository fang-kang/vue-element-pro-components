import { VNode } from 'vue'

import { ElCol } from 'element-ui/types/col'
import { ElForm } from 'element-ui/types/form'
import { ElFormItem } from 'element-ui/types/form-item'
import { ElRow } from 'element-ui/types/row'
import { ElTableColumn } from 'element-ui/types/table-column'
import { ElTag } from 'element-ui/types/tag'

import { VueElementProComponents } from './component'
import { ElProDialogOptions } from './dialog'
import { types } from './vue-element-pro-components'
import { ElProTableOptions } from './table'


interface ElProFormSlots {

  /** 表单内前面的内容 参数(form) */
  columnBefore: VNode[];

  /** 表单内后面的内容 参数(form) */
  columnAfter: VNode[];

  /** 表单前面的内容 参数(form) */
  formBefore: VNode[];

  /** 表单后面的内容 参数(form) */
  formAfter: VNode[];

  /** el-form-item 之前的内容 参数(form) */
  rowBefore: VNode[];

  /** el-form-item 之后的内容 参数(form) */
  rowAfter: VNode[];

  [key: string]: VNode[]
}

export type ElProFormOptions = Omit<ElForm, 'model'>

export interface ElProColumns {
  /** 表单的 label */
  label: string

  /** 当 label 和表格中的显示不一致时，优先匹配 tableLabel */
  tableLabel: string

  /** 当 label 和搜索中的显示不一致时，优先匹配 searchLabel */
  searchLabel: string

  /** form-item 后面的小提示 */
  tooltip: string

  /** 默认值 */
  defaultValue: any

  /** 表单的 type，不填默认为 input */
  type: types

  /** 是否必填 */
  required: boolean

  /** 检验数组 */
  rules: any[]

  /** 组件的内部 options,例如 maxlength,placeholder */
  columnOption: object

  /** 下拉框/单选框/多选框的 options 默认[{name,value}]格式 */
  options: ant[] | Function

  /** 是否显示在搜索框中 */
  showInSearch: boolean

  /** 是否显示在表格中 */
  showInTable: boolean

  /** 是否显示在高级查询中 */
  showInAdvance: boolean

  /** form-item 的 options,常用比如 label-width	 */
  formItemOption: ElFormItem

  /** 是否在表单里显示,接收一个函数或者布尔值，返回 boolean false 隐藏 */
  formColumnShow: boolean | Function

  /** 栅格布局 比例 默认 18 一共 24 */
  span: number

  /** el-col 的配置项 */
  colSpanOption: ElCol

  /** 表格格式化,例如 select/radio 传的值为 1,2,3,渲染成 options 的 name */
  showFormat: Function

  /** 表格 el-column 的配置项,例如 width,showOverflowTooltip */
  tableColumnOption: ElTableColumn

  /** 表单的 change 回调事件 */
  onChange: (e: any) => void

  /** 表格内是否显示复制图标 */
  copy: boolean

  /** 表格内是否用 el-tag 渲染*/
  isTag: boolean

  /**el-tag 的配置项,也可以直接写 tag 的类型 */
  tagOptions: ElTag | string | Function
}

/** ElForm Component */
export declare class ElProForm extends VueElementProComponents {

  /** 官方支持的参数集合 */
  formOptions: ElProFormOptions

  /** 表单数据  */
  formData: object

  /** 表单类型-table 的表单 options */
  tableFormOptions: ElProFormOptions

  /** 表单类型-table 的弹窗 options */
  tableDialogOptions: ElProDialogOptions

  /** 表单类型-table 的表格 options */
  tableOptions: ElProTableOptions

  /** 搜索组件内部使用,是否展开收起 */
  showAll: boolean

  /** 是否启用栅格布局 */
  isRow: boolean

  /** 搜索组件内部使用,是否开启展开收起 */
  isCollapse: boolean

  /** 搜索组件内部使用,显示可见的表单项个数 */
  showNum: number | string

  /** el-row配置 */
  rowOptions: ElRow

  /** 表单 loading */
  loading: boolean

  /** 是否是搜索 */
  isSearch: boolean

  /** 是否预览 */
  isPreview: boolean

  /** 表单配置项 */
  columns: ElProColumns | ElProColumns[]

  /** ElProForm slots */
  $slots: ElProFormSlots
}
