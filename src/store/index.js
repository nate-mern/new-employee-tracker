import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    employeeList: [],
  },
  mutations: {
    ADD_EMPLOYEE(state, employee){
      state.employeeList.push(employee);
    },
    EDIT_EMPLOYEE(state, employee){
      state.employeeList[employee.employeeID] = {};
      state.employeeList[employee.employeeID] = employee;
    }
  },
  actions: {
  },
  modules: {
  }
})
