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
        <a-button @click="showModalCard" type="primary"
          >Оставить объявление</a-button
        >
      </a-space>
    </a-layout-header>

    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>

      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <slot></slot>
      </div>
    </a-layout-content>

    <a-layout-footer :style="{ textAlign: 'center' }"></a-layout-footer>
  </a-layout>

  <modal-card v-if="modalOpen" @close="modalOpen = false"></modal-card>
</template>

<script>
import ModalCard from "@/components/Modal-Card.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { ModalCard },

  emits: ["close"],
  setup() {
    const modalOpen = ref(false);

    const showModalCard = () => {
      modalOpen.value = !modalOpen.value;
    };
    return {
      selectedKeys: ref(["2"]),
      modalOpen,
      showModalCard,
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
