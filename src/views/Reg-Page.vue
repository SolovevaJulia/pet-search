<template>
  <container-wrapper>
    <nav-bar class="bg-gray-50"></nav-bar>

    <section class="bg-gray-50">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
            >
              Создайте аккаунт
            </h2>
            <!-- <form-component @submit.prevent="register"></form-component> -->
            <form @submit.prevent="register" class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Пароль</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirmPassword"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Повторите пароль</label
                >

                <input
                  v-if="!this.password || !this.confirmPassword"
                  v-model="confirmPassword"
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
                <div v-else-if="this.password !== this.confirmPassword">
                  <input
                    v-model="confirmPassword"
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                    required=""
                  />

                  <span class="text-red-900">Пароли не совпадают</span>
                </div>
                <input
                  v-else
                  v-model="confirmPassword"
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                  required=""
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                    >Я согласен с
                    <a
                      class="font-medium text-primary-600 hover:underline"
                      href="#"
                      >Политикой конфиденциальности</a
                    ></label
                  >
                </div>
              </div>

              <button
                v-if="
                  this.password !== this.confirmPassword ||
                  !this.password ||
                  !this.email
                "
                disabled
                type="submit"
                class="w-full text-white bg-gray-400 dark:bg-primary-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Создать аккаунт
              </button>
              <button
                v-else
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Создать аккаунт
              </button>
              <p class="text-sm font-light text-gray-500">
                Уже есть аккаунт?
                <router-link
                  class="font-medium text-primary-600 hover:underline"
                  to="/auth"
                  >Войти</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </container-wrapper>
</template>

<script>
import ContainerWrapper from "@/components/Container-wrapper.vue";
import NavBar from "@/components/Nav-Bar.vue";
// import FormComponent from "@/components/Form-Component.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { ContainerWrapper, NavBar },

  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    register() {
      alert("Регистрация прошла успешно");
    },
  },
});
</script>
