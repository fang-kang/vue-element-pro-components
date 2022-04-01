import { VNode } from 'vue'

import { ElButton } from 'element-ui/types/button'

import { VueElementProComponents } from './component'
import { ElProColumns, ElProFormOptions } from './form'
import { ElProDrawerOptions } from './drawer'

interface ElProAdvancedSearchSlots {
  /** 自定义 footer */
  footer: VNode[]

  /** 重置按钮前面的内容 */
  before: VNode[]

  /** 重置按钮和查询按钮中间的内容 */
  middle: VNode[]

  /** 查询按钮后面的内容 */
  after: VNode[]

  [key: string]: VNode[]
}

/** ElProAdvancedSearch Component */
export declare class ElProAdvancedSearch extends VueElementProComponents {
  /** 绑定的查询参数 */
  query: object

  /** 官方支持的抽屉的 options */
  drawerOptions: ElProDrawerOptions

  /** 是否显示抽屉 */
  visible: boolean

  /** 表单配置项,只显示 showInSearch:true 的表单(详情见 ElProForm 说明) */
  columns: ElProColumns | ElProColumns[]

  /** 表单配置项,全部显示 */
  searchColumns: ElProColumns | ElProColumns[]

  /** 是否栅格布局 */
  isRow: boolean

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

  /** 抽屉标题 */
  title: string

  /** 抽屉宽度 */
  size: number | string

  /** 查询表单配置项 */
  formOptions: ElProFormOptions

  /** 是否显示底部重置查询按钮 */
  showFooter: boolean

  /** ElProAdvancedSearch slots */
  $slots: ElProAdvancedSearchSlots
}
