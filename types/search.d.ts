import { VNode } from 'vue'

import { ElButton } from 'element-ui/types/button'

import { VueElementProComponents } from './component'
import { ElProColumns, ElProFormOptions } from './form'

interface ElProSearchSlots {
  /** 搜索表单前面的内容 */
  colBefore: VNode[]

  /** 搜索表单后面的内容 */
  colBefore: VNode[]

  /** 查询按钮前面的内容 */
  before: VNode[]

  /** 查询按钮和重置按钮中间的内容 */
  middle: VNode[]

  /** 查询按钮后面的内容 */
  after: VNode[]

  [key: string]: VNode[]
}

/** ElProSearch Component */
export declare class ElProSearch extends VueElementProComponents {
  /** 绑定的查询参数 */
  query: object

  /** 表单配置项 */
  columns: ElProColumns | ElProColumns[]

  /** 表单配置项,全部显示 */
  searchColumns: ElProColumns | ElProColumns[]

  /** 不显示查询按钮 */
  noSearch: boolean

  /** 查询最外层自定义 style */
  customStyle: CSSStyleDeclaration

  /** 是否显示展开收起文字 */
  isCollapse: boolean

  /** 是否显示高级查询 */
  showAdvanced: boolean

  /** 收起后显示的表单数量 */
  showNum: number | string

  /** 是否显示重置按钮 */
  showReset: boolean

  /** 查询按钮文字 */
  searchBtnText: string

  /** 查询按钮 props */
  searchBtnProps: ElButton

  /** 重置按钮文字 */
  resetBtnText: string

  /** 重置按钮 props */
  resetBtnProps: ElButton

  /** 查询按钮 loading */
  loading: boolean

  /** 高级查询抽屉 title */
  advancedTitle: string

  /** 高级查询抽屉宽度 */
  size: number | string

  /** 高级查询表单配置项 */
  formAdvanceOptions: ElProFormOptions

  /** 查询表单配置项 */
  formOptions: ElProFormOptions

  /** ElProSearch slots */
  $slots: ElProSearchSlots
}
