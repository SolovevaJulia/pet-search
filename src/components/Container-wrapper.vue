<template>
  <a-layout>
    <a-layout-header
      class="layout"
      style="background: #fff"
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
    >
      <div class="logo">
        <!-- <p>Потерянные животные</p> -->
      </div>
      <a-space>
        <router-link to="/auth">
          <a-button>Войти</a-button>
        </router-link>
        <a-button @click="showModal" type="primary"
          >Оставить объявление</a-button
        >
      </a-space>
    </a-layout-header>

    <a-layout-content :style="{ padding: '50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <slot></slot>
      </div>
    </a-layout-content>

    <a-layout-footer :style="{ textAlign: 'center' }"></a-layout-footer>
  </a-layout>

  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      handleOk,
      showModal,
    };
  },
});
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.logo {
  color: black;
  font-size: 24px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.layout {
  display: flex;
  justify-content: space-between;
}
</style>
