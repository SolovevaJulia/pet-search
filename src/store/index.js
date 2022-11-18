import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isAuth: false,
    token: "",
  },
  getters: {},
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    setToken(state, token) {
      state.token = token;
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

          // localStorage.setItem("auth-token", token);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    },
  },
  modules: {},
});
