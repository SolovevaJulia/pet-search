<template>
  <a-layout>
    <nav-bar></nav-bar>
    <router-view />
  </a-layout>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  background-color: rgba(243, 244, 246, 1) !important;
}

svg {
  vertical-align: baseline;
}

img {
  display: inline-block;
}

*,
*:before,
*:after {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(249 250 251);
}

.app-content {
  width: 100%;
  flex: 1 1 auto;
  overflow: hidden;
}

.ant-table-wrapper .ant-pagination.ant-table-pagination {
  padding: 0 16px;
}

#app .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  align-items: center;
}
</style>
