<template>
  <div style="padding: 10px">
    <div id="el-pro-wrapper">
      <el-pro-search
        v-show="isShowSearch"
        v-model="queryForm"
        :is-collapse="true"
        :show-num="2"
        :columns="columns"
        @search="dataReload"
        @reset="dataReload"
      />
      <el-pro-table
        :data="tableData"
        :loading="listLoading"
        selection
        :pagination.sync="queryForm"
        :total="tableData.length"
        is-search-icon
        :show-search.sync="isShowSearch"
        :columns="columns"
        :operation-options="{ width: 200 }"
        :update-func="handleEdit"
        :delete-func="handleDelete"
        :table-options="{ hasOperation: true }"
        @selection-change="handleSelectionChange"
        @refresh="dataReload"
        @onLoad="dataReload"
      >
        <template #toolbarLeft>
          <el-button
            type="primary"
            plain
            icon="el-icon-plus"
            @click="visible = true"
          >
            新增
          </el-button>
          <el-button
            type="success"
            plain
            icon="el-icon-edit"
          >
            修改
          </el-button>
          <el-button
            type="danger"
            plain
            icon="el-icon-delete"
          >
            删除
          </el-button>
          <el-button
            type="info"
            plain
            icon="el-icon-upload2"
          >
            导入
          </el-button>
          <el-button
            type="warning"
            plain
            icon="el-icon-upload"
          >
            导出
          </el-button>
        </template>
      </el-pro-table>
      <el-pro-dialog
        v-model="visible"
        :dialog-options="{ width: '50%' }"
        :title="form.id ? '修改' : '新增'"
        @ok="handleOk"
        @closed="handleClose"
      >
        <el-pro-form
          ref="dataForm"
          v-model="form"
          :columns="columns"
          :form-options="{ labelWidth: '100px' }"
        />
      </el-pro-dialog>
    </div>
  </div>
</template>

<script>
const types = {
  input: 'input',
  select: 'select',
  number: 'number',
  checkBox: 'checkBox',
  check: 'check',
  radio: 'radio',
  date: 'date',
  switch: 'switch',
  title: 'title',
  time: 'time',
  slider: 'slider',
  rate: 'rate',
  color: 'color',
  cascader: 'cascader',
  table: 'table',
  editor: 'editor'
}

export default {
  data() {
    return {
      visible: false,
      form: {},
      isShowSearch: true,
      queryForm: {
        page: 1,
        pageSize: 10
      },
      tableData: [],
      listLoading: false,
      columns: {},
      multipleSelection: []
    }
  },
  created() {
    this.columns = this.getMetaData()
    this.createTableData()
  },
  methods: {
    getMetaData() {
      return {
        index: {
          label: '序号',
          showInTable: true,
          formColumnShow: false,
          tableColumnOption: {
            type: 'index',
            width: 80
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
          span: 12
        },
        sex: {
          label: '性别',
          type: types.radio,
          options: [
            {
              name: '男',
              value: 1
            },
            {
              name: '女',
              value: 2
            }
          ],
          showInTable: true,
          showInSearch: true,
          required: true,
          defaultValue: 1,
          span: 12
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
        }
      }
    },
    handleClose() {
      this.form = {}
      this.$refs.dataForm.resetFields()
    },
    async handleOk() {
      const { dataForm } = this.$refs
      const { id } = this.form
      try {
        const checkResult = await dataForm.checkRule()
        if (checkResult) {
          if (id) {
            const editIndex = this.tableData.findIndex((item) => item.id === id)
            console.log(editIndex, 'editIndex')
            this.$set(this.tableData, editIndex, { ...this.form })
          } else {
            this.tableData.unshift({
              ...this.form,
              id: Date.now()
            })
          }
          this.visible = false
          this.$notify({
            title: '成功',
            message: `${id ? '编辑' : '新增'}成功`,
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    createTableData() {
      for (let index = 1; index <= 10; index++) {
        this.tableData.push({
          id: index + 1,
          description: '这是一段描述',
          name: `张三${index}`,
          sex: 1,
          age: 20,
          address: '家庭住址',
          birthday: '2000-11-11'
        })
      }
    },
    dataReload() {
      console.log(this.queryForm, 'query')
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 2000)
    },
    refresh() {
      this.$message.success('刷新')
    },
    handleEdit(row) {
      this.form = { ...row }
      this.visible = true
    },
    handleDelete(row, index) {
      console.log(row, index)
      this.tableData.splice(index, 1)
      this.dataReload()
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success'
      })
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val
    }
  }
}
</script>
