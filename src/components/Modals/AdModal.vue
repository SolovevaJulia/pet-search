<template>
  <a-modal
    :destroy-on-close="true"
    class="ad-modal"
    title="Объявление"
    @ok="handleOk"
    @cancel="$emit('closeAdModal')"
  >
    <a-form :model="form" horizontal>
      <a-row>
        <a-col :span="24">
          <a-form-item label="Заголовок">
            <a-input type="text" />
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
          <a-form-item label="Когда потерялся">
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
              @drop="downloadFile"
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
          <a-form-item label="Где потерялся">
            <a-input type="text" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Описание">
            <a-textarea type="tel" />
          </a-form-item>
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
import { InboxOutlined } from "@ant-design/icons-vue";
// import { message } from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";

export default {
  name: "AdModal",
  components: {
    InboxOutlined,
  },
  emits: ["closeAdModal"],
  data() {
    return {
      form: {
        title: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tags: [
        {
          value: "кот",
          label: "кот",
        },
        {
          value: "собака",
          label: "собака",
        },
      ],
      fileList: [],
      dayjs,
      locale,
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
  },

  watch: {},

  computed: {},
};
</script>
