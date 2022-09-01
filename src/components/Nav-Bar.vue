<template>
  <nav class="border-gray-200 px-4 lg:px-6 py-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap"
          >Потерянные животные</span
        >
      </a>
      <div class="flex items-center lg:order-2">
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >Войти</a
        >
        <a
          class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          @click="showModalCard"
          >Оставить объявление</a
        >
      </div>
    </div>
  </nav>
  <modal-card v-if="modalOpen"></modal-card>
</template>

<script>
import ModalCard from "@/components/Modal-Card.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { ModalCard },

  setup() {
    const modalOpen = ref(false);

    const showModalCard = () => {
      modalOpen.value = !modalOpen.value;
    };

    return {
      modalOpen,
      showModalCard,
    };
  },
});
</script>
