<template>
  <div class="registration-form-wrapper">
    <a-card
      title="Создайте аккаунт"
      :bordered="false"
      class="registration-form"
    >
      <a-form
        horizontal
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        @finish="handleFinish"
        @validate="handleValidate"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item label="Email" name="email">
          <a-input v-model:value="formState.email"> </a-input>
        </a-form-item>

        <a-form-item has-feedback label="Пароль" name="pass">
          <a-input
            v-model:value="formState.pass"
            type="password"
            autocomplete="off"
          >
          </a-input>
        </a-form-item>

        <a-form-item has-feedback label="Повторите пароль" name="checkPass">
          <a-input
            v-model:value="formState.checkPass"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" html-type="submit"
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
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      email: "",
      pass: "",
      checkPass: "",
    });

    let validatePass = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Пожалуйста, введите ваш пароль");
      } else {
        if (formState.checkPass !== "") {
          formRef.value.validateFields("checkPass");
        }

        return Promise.resolve();
      }
    };

    let validatePass2 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Пожалуйста, введите ваш пароль еще раз");
      } else if (value !== formState.pass) {
        return Promise.reject("Пароли не совпадают!");
      } else {
        return Promise.resolve();
      }
    };

    let validatePass3 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Пожалуйста, введите email");
      }
      return Promise.resolve();
    };

    const rules = {
      email: [
        {
          required: true,
          validator: validatePass3,
          trigger: "change",
        },
      ],
      pass: [
        {
          required: true,
          validator: validatePass,
          trigger: "change",
        },
      ],
      checkPass: [
        {
          validator: validatePass2,
          trigger: "change",
        },
      ],
    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };

    const handleFinish = (values) => {
      console.log(values, formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    const handleValidate = (...args) => {
      console.log(args);
    };

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      handleValidate,
    };
  },
});
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
