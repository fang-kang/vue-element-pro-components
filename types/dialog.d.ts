import { VNode } from 'vue'

import { ElDialog, DialogSlots } from 'element-ui/types/dialog'
import { ElButton } from 'element-ui/types/button'

import { VueElementProComponents } from './component'

export interface ElProDialogSlots extends DialogSlots {

  /** Dialog 标题前面的内容 */
  nameBefore: VNode[]

  /** Dialog 标题后面的内容 */
  nameAfter: VNode[]

  /** 取消按钮前面的内容 */
  beforeFooter: VNode[]

  /** 取消按钮和确定按钮中间的内容 */
  middleFooter: VNode[]

  /** 确定按钮后面的内容 */
  afterFooter: VNode[]
}

export interface ElProOtherOptions {

  /** 是否显示全屏图标 */
  showFullscreen: boolean;

  /** 是否可拖拽 */
  draggable: boolean;
}

export type ElProDialogOptions = Omit<ElDialog, 'title' | '$slots'> & ElProOtherOptions


/** ElProDialog Components */
export declare class ElProDialog extends VueElementProComponents {

  /** Dialog 的标题 */
  title: string

  /** 是否显示 Dialog */
  visible: boolean

  /** 官方支持的参数集合 除此之外，还扩展支持 showFullscreen: true, draggable: true */
  dialogOptions: ElProDialogOptions

  /** 底部 footer 取消按钮文字 默认取消 */
  cancelBtnText: string

  /** 底部 footer 确定按钮文字 默认确定 */
  confirmBtnText: string

  /** 底部 footer 确定按钮 props */
  confirmBtnProps: ElButton

  /** 底部 footer 取消按钮 props */
  cancelBtnProps: ElButton

  /** 弹窗 loading */
  loading: boolean

  /** 确定按钮 loading */
  btnLoading: boolean

  /** ElProDialog slots */
  $slots: ElProDialogSlots

}
