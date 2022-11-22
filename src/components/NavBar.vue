<template>
  <a-layout-header
    class="layout"
    style="background: #fff"
    :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
  >
    <div class="logo">
      <p style="margin-bottom: 0">Потеряшки</p>
    </div>
    <a-space>
      <router-link v-if="!hasToken" to="/auth">
        <a-button>Войти</a-button>
      </router-link>
      <a-button
        v-if="hasToken"
        class="ad-button"
        @click="showModal"
        type="primary"
        >Оставить объявление</a-button
      >
      <a-button class="ad-button-mobile" @click="showModal">
        <template #icon>
          <PlusOutlined />
        </template>
      </a-button>

      <a-dropdown v-if="hasToken">
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              <router-link to="/dashboard">В личный кабинет</router-link>
            </a-menu-item>
            <a-menu-item @click="logOut" key="2">
              <router-link to="/auth"></router-link>
              Выйти</a-menu-item
            >
          </a-menu>
        </template>
        <a-badge dot>
          <a-button>
            <template #icon>
              <UserOutlined />
            </template>
          </a-button>
        </a-badge>
      </a-dropdown>
    </a-space>
  </a-layout-header>

  <ad-modal
    @close-ad-modal="closeAdModal"
    :visible="isAdModalVisible"
  ></ad-modal>
</template>

<script>
import { UserOutlined, PlusOutlined } from "@ant-design/icons-vue";
import AdModal from "@/components/Modals/AdModal.vue";

export default {
  name: "NavBar",
  components: {
    UserOutlined,
    PlusOutlined,
    AdModal,
  },

  data() {
    return {
      isAdModalVisible: false,
    };
  },

  methods: {
    showModal() {
      this.isAdModalVisible = true;
    },
    closeAdModal() {
      this.isAdModalVisible = false;
    },
    logOut() {
      this.$store.dispatch("logOut");
    },
  },
  computed: {
    hasToken() {
      return this.$store.state.token;
    },
  },
};
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
@media (max-width: 768px) {
  .logo {
    font-size: 18px;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}

.layout {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 576px) {
  .layout {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}

.ad-button-mobile {
  display: none !important;
}

@media (max-width: 576px) {
  .ad-button {
    display: none !important;
  }
  .ad-button-mobile {
    display: block !important;
  }
}

.ant-layout-header .ant-page-header-heading-left {
  margin: 0;
}

#components-avatar-demo-badge .ant-avatar {
  margin-top: 0;
  margin-right: 0;
}
</style>
