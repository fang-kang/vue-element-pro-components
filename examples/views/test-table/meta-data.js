import { types } from "/packages/CustomForm";
import dict from "../test-form/dict";
import { getArrayValue } from "/src/utils";
export function getMetaData() {
  return [
    {
      key: "title",
      label: "基本信息",
      type: types.title,
    },
    {
      key: "input",
      label: "输入框",
      defaultValue: "测试",
      type: types.input,
      span: 12,
      showInSearch: true,
      formItemOption: {},
      showInTable: true,
      tooltip: "测试测试是处生成",
      // children: [
      //   {
      //     label: "下拉框",
      //     key: "select",
      //     defaultValue: 1,
      //     type: types.select,
      //     span: 12,
      //     options: dict.selectArr,
      //     showInSearch: true,
      //     showInTable: true,
      //     showFormat: (val) => {
      //       return getArrayValue(dict.selectArr, val);
      //     },
      //   },
      //   {
      //     label: "开关",
      //     key: "switch",
      //     type: types.switch,
      //     span: 12,
      //   },
      //   {
      //     label: "单选框",
      //     defaultValue: 1,
      //     key: "radio",
      //     type: types.radio,
      //     span: 12,
      //     options: dict.selectArr,
      //     showInSearch: true,
      //     showInTable: true,
      //     showFormat: (val) => {
      //       return getArrayValue(dict.selectArr, val);
      //     },
      //   },
      // ],
    },
    {
      label: "多选框",
      defaultValue: [1],
      key: "checxbox",
      type: types.checkBox,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val);
      },
      children: [
        {
          label: "日期",
          type: types.date,
          key: "date",
          defaultValue: "2021-12-21",
          span: 10,
          showInSearch: true,
          showInTable: true,
        },
        {
          label: "数字",
          key: "num",
          type: types.number,
          defaultValue: 11,
          span: 10,
          showInTable: true,
        },
        {
          label: "时间",
          key: "time",
          type: types.time,
          defaultValue: "12:23:00",
          span: 12,
          showInSearch: true,
          showInTable: true,
        },
      ],
    },

    {
      label: "滑块",
      key: "slider",
      type: types.slider,
      defaultValue: 10,
      span: 12,
      showInTable: true,
    },
    {
      label: "评分",
      key: "rate",
      type: types.rate,
      defaultValue: 1,
      span: 12,
      showInTable: true,
    },
    {
      label: "颜色",
      key: "color",
      type: types.color,
      span: 12,
    },
    {
      label: "级联",
      key: "cascader",
      type: types.cascader,
      options: [
        {
          value: "zhinan",
          label: "指南",
          disabled: true,
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      span: 12,
    },
    {
      label: "区域",
      key: "area",
      type: types.area,
      showInSearch: true,
      span: 12,
    },
    {
      label: "测试表格",
      key: "table",
      span: 24,
      type: types.table,
    },
  ];
}
