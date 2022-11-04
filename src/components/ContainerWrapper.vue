<template>
  <a-layout-content class="container-wrapper">
    <div
      :style="{
        background: '#fff',
        padding: '24px',
        height: '100vh',
      }"
    >
      <slot></slot>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "ContainerWrapper",
};
</script>

<style>
.container-wrapper {
  padding: 50px;
  margin-top: 64px;
}
@media (max-width: 576px) {
  .container-wrapper {
    padding: 0;
  }
}

.container-wrapper-content {
  padding: 1.5rem;
}

.container-wrapper-content .container-wrapper-content-card {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 991px) {
  .container-wrapper-content {
    padding: 1rem;
  }
}

.ant-page-header-heading-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: unset;
}

.wrapper--transparent .ant-layout-content.bg-white {
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
}
</style>
