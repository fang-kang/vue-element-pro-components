import { ElPagination } from 'element-ui/types/pagination'
import { VueElementProComponents } from './component'

export interface ElProPaginationCustomProps {
  /** 当前页码 */
  page: string

  /** 每页多少条 */
  pageSize: string
}

export type ElProPaginationOptions = Omit<
  ElPagination,
  'pageSize' | 'currentPage' | 'pageSizes' | 'total'
>

/** ElProPagination Component */
export declare class ElProPagination extends VueElementProComponents {
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
}
