
import { VNode } from 'vue'

import { ElDrawer } from 'element-ui/types/drawer';

import { VueElementProComponents } from './component'

declare enum Direction {
  LTR = 'ltr', // left to right
  RTL = 'rtl', // right to left
  TTB = 'ttb', // top to bottom
  BTT = 'btt' // bottom to top
}

interface ElProDrawerSlots {
  /** Main Content Slots */
  default: VNode[];

  /** Title Slots */
  title: VNode[];

  [key: string]: VNode[]
}

export type ElProDrawerOptions = Omit<ElDrawer, 'title' | 'appendToBody' | 'size' | 'title' | 'visible' | '$slots'>

/** ElProDrawer Component */
export declare class ElProDrawer extends VueElementProComponents {

  /** 抽屉的宽度 */
  size: number | string

  /** 抽屉标题 */
  title: string

  /** 弹出方向 */
  direction: Direction

  /** 官方支持的抽屉的 options */
  drawerOptions: ElProDrawerOptions

  /** 是否显示抽屉 */
  visible: boolean

  /** ElProDrawer slots */
  $slots: ElProDrawerSlots
}
