import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      username: "未登录",
    },
  }),
  actions: {
    // async 异步处理
    async getLoginUser({ commit, state }, payload) {
      // 从远程请求获取登录信息
      const res = await UserControllerService.getCurrentUser();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
    async logout({ commit, state }) {
      const res = await UserControllerService.userLogout();
      if (res.code === 0) {
        commit("updateUser", {
          username: "未登录",
        });
      }
    },
  },

  // actions: {
  //   getLoginUser({ commit, state }, payload) {
  //     commit("updateUser", payload);
  //   },
  // },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
