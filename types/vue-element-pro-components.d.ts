import Vue from 'vue'

import { VueElementProComponents } from './component'

import { ElProDialog } from './dialog'
import { ElProPagination } from './pagination'
import { ElProForm } from './form'
import { ElProDrawer } from './drawer'
import { ElProSearch } from './search'
import { ElProTable } from './table'
import { ElProAdvancedSearch } from './advanced-search'

/** The version of vue-element-pro-components */
export const version: string

/** The form types of vue-element-pro-components */
export const enum types {
  input = 'input',
  select = 'select',
  number = 'number',
  checkBox = 'checkBox',
  check = 'check',
  radio = 'radio',
  date = 'date',
  switch = 'switch',
  title = 'title',
  time = 'time',
  slider = 'slider',
  rate = 'rate',
  color = 'color',
  cascader = 'cascader',
  table = 'table',
  editor = 'editor'
}

export interface utils {
  filterObject: (obj: object, filterFunc: Function) => object
  getArrayValue: (
    array: Array,
    value: any,
    valueKey: string,
    labelKey: string,
    defaultValue: string
  ) => any[]
  removeArray: (arr: Array, item: object) => any[]
  removeArrayByIndex: (arr: Array, index: number) => any[]
}

/**
 * Install all vue-element-pro-components components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(VueElementProComponents)` to install.
 */
export function install(vue: typeof Vue): void

/** VueElementProComponents component common definition */
export type Component = VueElementProComponents

/** ElProDialog Component */
export class Dialog extends ElProDialog {}

/** ElProPagination Component */
export class Pagination extends ElProPagination {}

/** ElProForm Component */
export class Form extends ElProForm {}

/** ElProDrawer Component */
export class Drawer extends ElProDrawer {}

/** ElProSearch Component */
export class Search extends ElProSearch {}

/** ElProTable Component */
export class Table extends ElProTable {}

/** ElProAdvancedSearch Component */
export class AdvancedSearch extends ElProAdvancedSearch {}
