import { VNode } from 'vue'

import { ElTable } from 'element-ui/types/table'
import { ElTableColumn } from 'element-ui/types/table-column'
import { ElButton } from 'element-ui/types/button'
import { ElRow } from 'element-ui/types/row'

import { VueElementProComponents } from './component'
import { ElProColumns } from './form'
import { ElProPaginationOptions, ElProPaginationCustomProps } from './pagination'

interface ElProTableSlots {

  /** 展开行内容 */
  expandColumn: VNode[];

  /** 操作栏内容 */
  operationColumn: VNode[];

  /** 修改删除按钮之前的内容 */
  operationBefore: VNode[];

  /** 修改删除按钮的内容 */
  autoOperation: VNode[];

  /** 修改删除按钮之间的内容 */
  operationMiddle: VNode[];

  /** 修改删除按钮之后的内容 */
  operationAfter: VNode[];

  /** 工具栏左侧 */
  toolbarLeft: VNode[];

  /** 工具栏右侧前面 */
  toolbarRightBefore: VNode[];

  /** 工具栏右侧中间 */
  toolbarRightMiddle: VNode[];

  /** 工具栏右侧后面 */
  toolbarRightAfter: VNode[];

  [key: string]: VNode[]
}

export type ElProTableOptions = Omit<ElTable, 'data'> & { hasOperation: boolean }


/** ElProTable Components */
export declare class ElProTable extends VueElementProComponents {

  /** 表格配置项,只显示 showInTable:true 的表格(详情见 CustomForm 说明) 多级表头使用数组类型,children 是子项 */
  columns: ElProColumns | ElProColumns[]

  /** 表格配置项,全部显示 */
  tableColumns: ElProColumns | ElProColumns[]

  /** 表格 loading */
  loading: boolean

  /** 是否多选 */
  selection: boolean

  /** 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） */
  reserveSelection: boolean

  /** 表格数据 */
  data: any[]

  /** 是否自动计算表格高度 */
  autoHeight: boolean

  /** 表格配置项,例如 hasOperation:ture,显示操作栏 */
  tableOptions: ElProTableOptions

  /** 操作栏的配置项，默认{label: "操作",fixed: "right",width: "150",align: "center",} */
  operationOptions: ElTableColumn

  /** 修改事件 */
  updateFunc: (row: object, index: number) => void

  /** 删除事件 */
  deleteFunc: (row: object, index: number) => void

  /** 修改按钮文字 */
  updateText: string

  /** 删除按钮文字 */
  deleteText: string

  /** 修改按钮 props */
  updateProps: ElButton

  /** 删除按钮 props */
  deleteProps: ElButton

  /** 工具栏el-row配置项 */
  rowOption: ElRow

  /** 是否显示搜索 */
  showSearch: boolean

  /** 是否显示工具栏 */
  showToolbar: boolean

  /** 是否展开行 */
  expand: boolean

  /** 表格自动高度距离底部多少 */
  bottomOffset: number | string

  /** 删除时提示语 */
  deleteTip: string

  /** 是否显示右侧工具栏 */
  showToolbarRight: boolean

  /** 总条数 */
  total: number

  /** 分页显示的条数 */
  pageSizes: number[]

  /** el-pagination 的 style */
  paginationStyle: CSSStyleDeclaration

  /** 自定义外层容器 style */
  customStyle: CSSStyleDeclaration

  /** 自定义分页 page 和 pageSize 字段 */
  customProps: ElProPaginationCustomProps

  /** 官方支持分页的其他 option */
  paginationOptions: ElProPaginationOptions

  /** 分页数据 */
  pagination: object

  /** ElProTable slots */
  $slots: ElProTableSlots
}
