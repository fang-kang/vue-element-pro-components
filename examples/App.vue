<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        TestDialog
      </router-link>
      |
      <router-link to="/test-form">
        TestForm
      </router-link>|
      <router-link to="/test-pagination">
        TestPagination
      </router-link>|
      <router-link to="/test-search">
        TestSearch
      </router-link>|
      <router-link to="/test-table">
        TestTable
      </router-link>
    </div>
    <router-view />
  </div>
</template>
