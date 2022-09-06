<template>
  <container-wrapper>
    <nav-bar class="bg-gray-50"></nav-bar>

    <section class="bg-gray-50">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
            >
              Войдите в ваш аккаунт
            </h1>
            <form @submit.prevent="auth" class="space-y-4 md:space-y-6">
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
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500"
                      >Запомнить меня</label
                    >
                  </div>
                </div>
                <router-link to="/change-password">
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline"
                    >Забыли пароль?</a
                  >
                </router-link>
              </div>

              <button
                v-if="!this.email || !this.password"
                type="submit"
                class="w-full text-white bg-gray-400 dark:bg-primary-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled
              >
                Войти
              </button>
              <button
                v-else
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Войти
              </button>
              <p class="text-sm font-light text-gray-500">
                Еще нет аккаунта?
                <router-link
                  to="/reg"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Зарегистрироваться
                </router-link>
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
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { ContainerWrapper, NavBar },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    auth() {
      alert("Ok");
    },
  },
});
</script>
