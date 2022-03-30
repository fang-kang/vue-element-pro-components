import { types } from 'packages/form'
import dict from '../test-form/dict'
export function getMetaData() {
  return {
    index: {
      label: '序号',
      showInTable: true,
      formColumnShow: false,
      tableColumnOption: {
        type: 'index',
        width: 80,
        sortable: true
      },
      showFormat: (val, row, scope) => {
        return scope.$index + 1
      }
    },
    name: {
      label: '姓名',
      showInTable: true,
      showInSearch: true,
      required: true,
      tableColumnOption: {
        sortable: true
      },
      span: 12,
      children: [
        {
          key: 'a',
          label: '测试',
          showInTable: true
        }
      ]
    },
    sex: {
      label: '性别',
      type: types.radio,
      options: dict.selectArr,
      showInTable: true,
      showInSearch: true,
      required: true,
      defaultValue: 1,
      span: 12,
      tableColumnOption: {
        sortable: true
      }
    },
    age: {
      label: '年龄',
      showInTable: true,
      showInSearch: true,
      required: true,
      span: 12
    },
    birthday: {
      label: '生日',
      showInTable: true,
      type: types.date,
      showInSearch: true,
      span: 12
    },
    address: {
      label: '家庭住址',
      showInTable: true,
      required: true,
      showInSearch: true,
      columnOption: {},
      span: 12,
      tableColumnOption: {
        showOverflowTooltip: true
      }
    },
    description: {
      label: '描述',
      showInTable: true,
      showInSearch: true,
      span: 12,
      tableHeadTooltip: '这是一段很长的描述',
      tableColumnOption: {
        showOverflowTooltip: true
      }
    },
    a: {
      label: '测试',
      span: 12
    }
  }
}
