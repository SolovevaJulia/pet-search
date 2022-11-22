<template>
  <container-wrapper>
    <div class="card-wrapper">
      <a-image :width="200" src="../assets/img/112.jpg" />
      <div class="description">
        <a-space>
          Дата пропажи:
          <a-date-picker :style="{ width: '100%' }"> </a-date-picker>
        </a-space>
        <a-space>
          Описание:
          <div>Пропал кот</div>
        </a-space>
        <a-space> Где потерялся </a-space>
      </div>
      <a-row>
        <a-col :span="24">
          <a-list
            v-if="comments.length"
            :data-source="comments"
            :header="`${comments.length} ${
              comments.length > 1 ? 'replies' : 'reply'
            }`"
            item-layout="horizontal"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-comment
                  :author="item.author"
                  :avatar="item.avatar"
                  :content="item.content"
                  :datetime="item.datetime"
                />
              </a-list-item>
            </template>
          </a-list>
          <a-comment>
            <template #avatar>
              <a-avatar
                src="https://joeschmoe.io/api/v1/random"
                alt="Han Solo"
              />
            </template>
            <template #content>
              <a-form-item>
                <a-textarea v-model:value="value" :rows="4" />
              </a-form-item>
              <a-form-item>
                <a-button
                  html-type="submit"
                  :loading="submitting"
                  type="primary"
                  @click="addComent"
                >
                  Add Comment
                </a-button>
              </a-form-item>
            </template>
          </a-comment>
        </a-col>
      </a-row>
    </div>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/ContainerWrapper.vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "AdCard",
  components: { ContainerWrapper },

  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
    };
  },

  methods: {
    addComent() {
      if (!this.value) {
        return;
      }

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar: "https://joeschmoe.io/api/v1/random",
            content: this.value,
            datetime: dayjs().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
  },
};
</script>

<style>
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  text-align: left;
}
</style>
