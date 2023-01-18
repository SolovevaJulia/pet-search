<template>
  <a-modal :destroy-on-close="true" class="ad-modal" title="Объявление">
    <a-form :model="form" horizontal>
      <a-row>
        <a-col :span="24">
          <a-form-item label="Заголовок" name="title">
            <a-input v-model:value="form.title" type="text" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Когда потерялся" name="date">
            <a-date-picker v-model:value="form.date" :style="{ width: '100%' }">
            </a-date-picker>
          </a-form-item>
        </a-col>

        <!-- <a-col :span="24">
          <a-form-item name="img">
            <a-upload-dragger
              v-model:value="form.img"
              v-model:fileList="fileList"
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
              @drop="downloadFile"
            >
              <p class="ant-upload-drag-icon">
                <inbox-outlined></inbox-outlined>
              </p>
              <p class="ant-upload-text">
                Щелкните или перетащите сюда изображение
              </p>
            </a-upload-dragger>
          </a-form-item>
        </a-col> -->

        <a-col :span="24">
          <a-form-item label="Где потерялся" name="place">
            <a-input v-model:value="form.place" type="text" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Описание" name="description">
            <a-textarea v-model:value="form.description" type="text" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Номер телефона" name="telephone">
            <a-input v-model:value="form.telephone" type="tel" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #footer>
      <a-button key="back" @click="$emit('closeAdModal')">Закрыть</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="setPost"
        >Отправить</a-button
      >
    </template>
  </a-modal>
</template>

<script>
// import { InboxOutlined } from "@ant-design/icons-vue";
// import { message } from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import axios from "axios";

export default {
  name: "AdModal",
  components: {
    // InboxOutlined,
  },
  emits: ["closeAdModal"],
  data() {
    return {
      form: {
        title: "",
        date: "",
        // img: {},
        place: "",
        description: "",
        telephone: "",
      },
      fileList: [],
      dayjs,
      locale,
      loading: false,
    };
  },

  methods: {
    closeModal(emit) {
      emit("closeAdModal");
    },
    handleOk(e) {
      console.log(e);
      this.$emit("closeAdModal");
    },
    downloadFile(e) {
      console.log(e);
    },
    setPost() {
      axios
        .post("http://localhost:1337/api/posts", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
          data: {
            title: this.form.title,
            date: this.form.date,
            // img: this.form.img,
            place: this.form.place,
            description: this.form.description,
            telephone: this.form.telephone,
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },

  watch: {},

  computed: {},
};
</script>
