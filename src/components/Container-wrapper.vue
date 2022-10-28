<template>
  <a-layout-content :style="{ padding: '50px', marginTop: '64px' }">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
      <slot></slot>
    </div>
  </a-layout-content>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerWrapper",
});
</script>

<style>
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
