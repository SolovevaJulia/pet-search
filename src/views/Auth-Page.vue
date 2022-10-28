<template>
  <div class="auth-page-wrapper">
    <a-card title="Войдите в ваш аккаунт" :bordered="false" class="auth-form">
      <a-form
        horizontal
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Пожалуйста, введите ваш email!' },
          ]"
        >
          <a-input v-model:value="formState.email">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Пароль"
          name="password"
          :rules="[
            { required: true, message: 'Пожалуйста, введите ваш пароль!' },
          ]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Запомнить меня</a-checkbox
            >
          </a-form-item>
          <router-link class="login-form-forgot" to="/change-password">
            <a href="#">Забыли пароль?</a>
          </router-link>
        </a-form-item>

        <a-form-item>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            Войти
          </a-button>
          Или
          <router-link to="/reg">зарегистрируйтесь сейчас! </router-link>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    auth() {
      alert("Ok");
    },
  },

  setup() {
    const formState = reactive({
      email: "",
      password: "",
      remember: true,
    });

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const disabled = computed(() => {
      return !(formState.email && formState.password);
    });

    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.auth-page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 128px);
  height: 100%;
}

.auth-form {
  width: 448px;
  background-color: #ffffff;
  padding: 16px 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media screen and (max-width: 448px), screen and (max-height: 450px) {
  .auth-form {
    width: 100%;
    box-shadow: none;
  }
}
</style>
