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
    <a-row :gutter="[32, 16]">
      <a-col :span="24" :md="12">
        <a-card hoverable style="width: 100%">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="24" :md="12">
        <a-card hoverable style="width: 100%">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
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
