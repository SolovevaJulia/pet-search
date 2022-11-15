import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isAuth: false,
  },
  getters: {},
  mutations: {
    login(state) {
      state.isAuth = true;
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
          const { token } = response.data.jwt;
          store.commit("login");
          localStorage.setItem("auth-token", token);
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    },
  },
  modules: {},
});
