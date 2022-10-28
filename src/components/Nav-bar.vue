<template>
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
      <a-button @click="showModal" type="primary">Оставить объявление</a-button>
    </a-space>
  </a-layout-header>

  <a-modal
    class="ad-modal"
    v-model:visible="visible"
    title="Объявление"
    @ok="handleOk"
  >
    <a-form :model="formState" horizontal>
      <a-row>
        <a-col :span="24">
          <a-form-item label="Выберите тип объявления">
            <a-select
              ref="select"
              v-model:value="value1"
              @change="handleChange"
            >
              <a-select-option value="jack">Потерян</a-select-option>
              <a-select-option value="lucy">Найден</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Выберите теги">
            <a-select
              :options="tags"
              mode="multiple"
              :style="{ width: '100%' }"
              v-model:value="value"
              @change="handleChange"
            >
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Дата потери/когда был найден">
            <a-date-picker :style="{ width: '100%' }"> </a-date-picker>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item>
            <a-upload-dragger
              v-model:fileList="fileList"
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
              @drop="handleDrop"
            >
              <p class="ant-upload-drag-icon">
                <inbox-outlined></inbox-outlined>
              </p>
              <p class="ant-upload-text">
                Щелкните или перетащите сюда изображение
              </p>
              <!-- <p class="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p> -->
            </a-upload-dragger>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item> TO DO MAP </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Номер телефона">
            <a-input type="tel" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";
// import { message } from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";

export default defineComponent({
  name: "NavBar",
  components: {
    InboxOutlined,
  },
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    const formState = reactive({
      name: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    // const handleChange = (info) => {
    //   const status = info.file.status;

    //   if (status !== "uploading") {
    //     console.log(info.file, info.fileList);
    //   }

    //   if (status === "done") {
    //     message.success(`${info.file.name} file uploaded successfully.`);
    //   } else if (status === "error") {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // };

    const tags = [
      {
        value: "кот",
        label: "кот",
      },
      {
        value: "собака",
        label: "собака",
      },
    ];

    return {
      visible,
      handleOk,
      showModal,
      formState,
      // handleChange,
      fileList: ref([]),
      handleDrop: (e) => {
        console.log(e);
      },
      dayjs,
      locale,
      tags,
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

.ant-layout-header .ant-page-header-heading-left {
  margin: 0;
}
</style>
