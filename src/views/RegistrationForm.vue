<template>
  <div class="registration-form-wrapper">
    <a-card
      title="Создайте аккаунт"
      :bordered="false"
      class="registration-form"
    >
      <a-form
        horizontal
        :model="form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
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

        <a-form-item
          label="Повторите пароль"
          name="checkPassword"
          :rules="[
            { required: true, message: 'Пожалуйста, повторите ваш пароль!' },
          ]"
        >
          <a-input-password v-model:value="form.checkPassword">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            type="primary"
            html-type="submit"
            @click="reg"
            :disabled="disabled"
            >Зарегистрироваться</a-button
          >
          Уже есть аккаунт?
          <router-link to="/auth">Войти</router-link>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        checkPassword: "",
      },
    };
  },

  methods: {
    reg() {
      if (this.form.password !== this.form.checkPassword) {
        alert("Пароли не совпадают");
      } else {
        alert("Ok");
      }
    },
    onFinish(values) {
      console.log("Success:", values);
    },

    onFinishFailed(errorInfo) {
      console.log("Failed:", errorInfo);
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
      return !(
        this.form.email &&
        this.form.password &&
        this.form.checkPassword
      );
    },
  },
};
</script>

<style>
.registration-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 128px);
  height: 100%;
}

.registration-form {
  width: 448px;
  background-color: #ffffff;
  padding: 16px 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media screen and (max-width: 448px), screen and (max-height: 450px) {
  .registration-form {
    width: 100%;
    box-shadow: none;
  }
}
</style>
