import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isAuth: false,
    token: localStorage.getItem("auth-token") || "",
    posts: [],
  },
  getters: {},
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.isAuth = false;
      state.token = null;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    login(store, { identifier, password }) {
      axios
        .post("http://localhost:1337/api/auth/local", {
          identifier: identifier,
          password: password,
        })
        .then((response) => {
          const token = response.data.jwt;
          store.commit("setToken", token);
          store.commit("login");

          localStorage.setItem("auth-token", token);
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    },
    logOut(store) {
      localStorage.removeItem("auth-token");
      store.commit("logout");
    },
  },
  modules: {},
});
