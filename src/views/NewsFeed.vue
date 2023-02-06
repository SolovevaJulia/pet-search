<template>
  <container-wrapper>
    <div :style="{ width: '100%', margin: '0 0 2rem 0' }">
      <a-input-search
        :style="{ width: '100%' }"
        v-model:value="value"
        placeholder="Найти объявление"
        enter-button
        @search="onSearch"
      />
    </div>
    {{ posts.data }}
    <a-list
      :grid="{ gutter: 16, column: 2 }"
      item-layout="horizontal"
      :data-source="posts.data"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-space direction="vertical" :style="{ margin: '.25rem 0' }">
            <a-card style="width: 400px; text-align: left">
              <a-typography-title :level="4">{{
                item.attributes.title
              }}</a-typography-title>
              {{ item.attributes.photo }}
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>

              <a-space direction="vertical">
                <a-space align="baseline">
                  Дата пропажи:
                  <p>{{ item.attributes.date }}</p>
                </a-space>
                <a-space align="baseline">
                  Место пропажи:
                  <p>{{ item.attributes.place }}</p>
                </a-space>
                <a-space align="baseline">
                  Описание:
                  <p>{{ item.attributes.description }}</p>
                </a-space>
                <a-space align="baseline">
                  Номер телефона:
                  <p>{{ item.attributes.telephone }}</p>
                </a-space>
              </a-space>

              <template #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
            </a-card>
          </a-space>
        </a-list-item>
      </template>
    </a-list>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/ContainerWrapper.vue";
import { defineComponent } from "@vue/runtime-core";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import axios from "axios";

const posts = [];
export default defineComponent({
  components: {
    ContainerWrapper,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },

  data() {
    return {
      value: "",
      posts,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" },
      ],
    };
  },

  methods: {
    onSearch(searchValue) {
      console.log("use value", searchValue);
      console.log("or use this.value", this.value);
    },
  },
  mounted() {
    axios
      .get("http://localhost:1337/api/posts", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((response) => {
        this.posts = response.data;
      });
  },
});
</script>
