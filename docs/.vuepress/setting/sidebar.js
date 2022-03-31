module.exports = {
  '/guide/': [
    {
      title: '简介',
      collapsable: false,
      children: genGuideSidebar()
    }
  ],
  '/components/': [
    {
      title: '组件',
      collapsable: false,
      children: genComponentSidebar()
    }
  ]
}

function genGuideSidebar(type = '') {
  const mapArr = ['/guide/introduction.md', '/guide/installation.md', '/guide/quickstart.md']
  return mapArr.map((i) => {
    return type + i
  })
}

function genComponentSidebar(type = '') {
  const mapArr = [
    '/components/dialog.md',
    '/components/form.md',
    '/components/search.md',
    '/components/table.md',
    '/components/advanced-search.md',
    '/components/pagination.md',
    '/components/drawer.md'
  ]
  return mapArr.map((i) => {
    return type + i
  })
}
