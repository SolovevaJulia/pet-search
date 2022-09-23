<template>
  <container-wrapper>
    <a-card title="Создайте аккаунт" :bordered="false">
      <a-form
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        v-bind="layout"
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

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit"
            >Зарегистрироваться</a-button
          >
          <a-button style="margin-left: 10px" @click="resetForm"
            >Очистить форму</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/Container-wrapper.vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  components: { ContainerWrapper },

  setup() {
    const formRef = ref();
    const formState = reactive({
      email: "",
      pass: "",
      checkPass: "",
    });

    let validatePass = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password");
      } else {
        if (formState.checkPass !== "") {
          formRef.value.validateFields("checkPass");
        }

        return Promise.resolve();
      }
    };

    let validatePass2 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password again");
      } else if (value !== formState.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };

    let validatePass3 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the email");
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
