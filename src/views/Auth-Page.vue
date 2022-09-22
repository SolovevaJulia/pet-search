<template>
  <container-wrapper>
    <a-card title="Войдите в ваш аккаунт" :bordered="false">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 8 }"
        autocomplete="off"
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
          <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
          label="Пароль"
          name="password"
          :rules="[
            { required: true, message: 'Пожалуйста, введите ваш пароль!' },
          ]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-space size="large">
            <a-checkbox v-model:checked="formState.remember"
              >Запомнить меня</a-checkbox
            >
            <router-link to="/change-password">
              <a href="#">Забыли пароль?</a>
            </router-link>
          </a-space>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">Войти</a-button>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <p>
            Еще нет аккаунта?
            <router-link to="/reg"> Зарегистрироваться </router-link>
          </p>
        </a-form-item>
      </a-form>
    </a-card>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/Container-wrapper.vue";
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  components: { ContainerWrapper },

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

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
