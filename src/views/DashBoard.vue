<template>
  <container-wrapper>
    <a-typography-title :level="3">Мои объявления</a-typography-title>
    <div style="display: flex">
      <a-list :style="{ width: '25%' }" :split="false">
        <a-list-item
          ><a-button type="text">Добавить объявление</a-button></a-list-item
        >
        <a-list-item
          ><a-button type="text">Избранные объявления</a-button></a-list-item
        >
        <a-list-item><a-button type="text">Настройки</a-button></a-list-item>
      </a-list>
      <a-list
        item-layout="vertical"
        size="small"
        :pagination="pagination"
        :data-source="listData"
        :style="{ width: '75%' }"
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
              <template #avatar>
                <a-avatar :src="item.avatar" />
              </template>
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </template>
      </a-list>
    </div>
  </container-wrapper>
</template>

<script>
import { defineComponent } from "vue";
import ContainerWrapper from "@/components/Container-wrapper.vue";
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";
const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export default defineComponent({
  name: "DashBoard",
  components: {
    ContainerWrapper,
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  setup() {
    const pagination = {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    };
    const actions = [
      {
        type: "StarOutlined",
        text: "156",
      },
      {
        type: "LikeOutlined",
        text: "156",
      },
      {
        type: "MessageOutlined",
        text: "2",
      },
    ];
    return {
      listData,
      pagination,
      actions,
    };
  },
});
</script>

<style>
.ant-list-item-main {
  text-align: left;
}
</style>
