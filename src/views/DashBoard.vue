<template>
  <container-wrapper>
    <a-typography-title :level="3">Мой профиль</a-typography-title>
    <div class="dashboard-wrapper" style="display: flex">
      <a-list class="btns-wrapper" :split="false">
        <a-list-item
          ><a-button @click="showModal" type="text"
            >Добавить объявление</a-button
          ></a-list-item
        >
        <a-list-item
          ><a-button type="text">Избранные объявления</a-button></a-list-item
        >
        <a-list-item><a-button type="text">Настройки</a-button></a-list-item>
      </a-list>
      <a-list
        class="ads-wrapper"
        item-layout="vertical"
        size="small"
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

  <ad-modal
    @close-ad-modal="closeAdModal"
    :visible="isAdModalVisible"
  ></ad-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import ContainerWrapper from "@/components/Container-wrapper.vue";
import AdModal from "@/components/Modals/AdModal.vue";
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
    AdModal,
  },
  setup() {
    const isAdModalVisible = ref(false);

    const showModal = () => {
      isAdModalVisible.value = true;
    };

    const closeAdModal = () => (isAdModalVisible.value = false);

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
      showModal,
      isAdModalVisible,
      closeAdModal,
    };
  },
});
</script>

<style>
.ant-list-item-main {
  text-align: left;
}
.ads-wrapper {
  width: 75%;
}

.btns-wrapper {
  width: 25%;
}

@media (max-width: 992px) {
  .dashboard-wrapper {
    flex-direction: column;
  }
  .ads-wrapper {
    width: 100%;
  }
  .ant-spin-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .ant-spin-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
