<template>
  <div class="authentification-form-wrapper">
    <a-card title="Войдите в ваш аккаунт" :bordered="false" class="auth-form">
      <a-form horizontal :model="form" class="login-form">
        <a-form-item
          label="E-mail"
          name="email"
          :rules="[
            { required: true, message: 'Пожалуйста, введите ваш e-mail!' },
          ]"
        >
          <a-input v-model:value="form.email">
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
          <a-input-password v-model:value="form.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="form.remember"
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
            @click="auth"
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
import { message } from "ant-design-vue";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: true,
      },
    };
  },

  methods: {
    auth() {
      let identifier = this.form.email;
      let password = this.form.password;

      this.$store.dispatch("login", { identifier, password }).then(() => {
        message.success("Вы вошли в свой аккаунт!");
        this.$router.push({ name: "home" });
      });
    },
  },

  watch: {
    form: {
      handler(aaa) {
        console.log(aaa);
      },
      deep: true,
    },
  },

  computed: {
    disabled() {
      return !(this.form.email && this.form.password);
    },
  },
};
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

.authentification-form-wrapper {
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
