import { types } from 'packages/form'
import dict from './dict'
import { getArrayValue } from 'src/utils'
export function getMetaData() {
  return {
    title: {
      label: '基本信息',
      type: types.title
    },
    input: {
      label: '输入框',
      type: types.input,
      defaultValue: '输入框',
      isTag: true,
      tagOptions: 'warning',
      span: 12,
      required: true,
      showInSearch: true,
      formItemOption: {},
      showInTable: true,
      tooltip: '测试输入框',
      onChange: (item) => {
        console.log(item, 'item')
        if (item.form.input === 1) {
          this.$message.success('成功')
          item.form.num = 11
          item.form.radio = 2
          item.form.select = 1
        }
      }
    },
    select: {
      label: '下拉框',
      type: types.select,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    select2: {
      label: '下拉框2',
      type: types.select,
      span: 12,
      options: dict.selectArr,
      formColumnShow: (form) => {
        return form.select && form.select == 1
      }
    },
    switch: {
      label: '开关',
      type: types.switch,
      defaultValue: true,
      span: 12
    },
    radio: {
      label: '单选框',
      type: types.radio,
      defaultValue: 1,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    checxbox: {
      label: '多选框',
      defaultValue: [1],
      type: types.checkBox,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    date: {
      label: '日期',
      defaultValue: '2021-11-11',
      type: types.date,
      span: 12,
      showInSearch: false,
      showInTable: true
    },
    num: {
      label: '数字',
      type: types.number,
      defaultValue: 1,
      span: 12,
      showInTable: true
    },
    time: {
      label: '时间',
      type: types.time,
      span: 12,
      showInSearch: false,
      showInTable: true
    },
    slider: {
      label: '滑块',
      type: types.slider,
      span: 12,
      showInTable: true,
      showInSearch: false
    },
    rate: {
      label: '评分',
      type: types.rate,
      span: 12,
      showInTable: true,
      showInSearch: false
    },
    color: {
      label: '颜色',
      type: types.color,
      showInSearch: false,
      span: 12
    },
    cascader: {
      label: '级联',
      showInSearch: false,
      type: types.cascader,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
      ],
      span: 12
    },
    table: {
      label: '测试表格',
      defaultValue: [{ input: '1' }],
      span: 24,
      type: types.table,
      tableDataOptions: {
        input: {
          label: '输入框',
          type: types.input,
          span: 12,
          showInTable: true
        },
        select: {
          label: '下拉框',
          type: types.select,
          span: 12,
          options: dict.selectArr,
          showInTable: true,
          showFormat: (val) => {
            return getArrayValue(dict.selectArr, val)
          }
        },
        switch: {
          label: '开关',
          type: types.switch,
          span: 12
        },
        radio: {
          label: '单选框',
          type: types.radio,
          span: 12,
          options: dict.selectArr
        },
        checxbox: {
          label: '多选框',
          type: types.checkBox,
          span: 12,
          options: dict.selectArr
        },
        date: {
          label: '日期',
          type: types.date,
          span: 12
        },
        num: {
          label: '数字',
          required: true,
          type: types.number,
          span: 12,
          showInTable: true
        },
        time: {
          label: '时间',
          type: types.time,
          showInTable: true,
          span: 12
        }
      }
    },
    editor: {
      label: '富文本',
      type: types.editor,
      span: 24,
      showInSearch: false,
      tooltip: '富文本提示',
      defaultValue: '富文本'
    }
  }
}
