<template>
  <container-wrapper>
    <nav-bar></nav-bar>

    <h2 class="text-4xl font-bold dark:text-white">Регистрация</h2>
    <form
      class="m-auto w-1/2 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Пароль</label
        >
        <input
          type="password"
          id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div class="mb-6">
        <label
          for="repeat-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Повторите пароль</label
        >
        <input
          type="password"
          id="repeat-password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required=""
          />
        </div>
        <label
          for="terms"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Я согласен на
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >обработку персональных данных</a
          ></label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Зарегистрироваться
      </button>
    </form>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/Container-wrapper.vue";
import NavBar from "@/components/Nav-Bar.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { ContainerWrapper, NavBar },
});
</script>
