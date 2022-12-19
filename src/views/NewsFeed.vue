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
    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
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

const listData = [];

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
      listData,
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
});
</script>
