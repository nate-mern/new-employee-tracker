<template>
<div>
  <h2 id="header">Please fill out this information for the new employee you'd like to add:</h2>
  <form id="form" v-on:submit.prevent="saveEmployee">
      <label for="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" required v-model="employee.firstName"/>
      <label for="midInitial">Middle Initial:</label>
      <input type="text" maxlength="1" name="midInitial" id="midInitial" v-model="employee.middleInitial"/>
      <label for="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" required v-model="employee.lastName"/>
      <label for="gender">Gender</label>
      <select  name="gender" id="gender" required v-model="employee.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
      </select>
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" required v-model="employee.email"/>
      <button type="submit">Save data</button>
  </form>
</div>
</template>

<script>
export default {
    data(){
        return {
            employee: {
                firstName: '',
                middleInitial: '',
                lastName: '',
                gender: '',
                email: '',
                employeeID: 0
            }
        }
    },
    methods: {
        saveEmployee(){
            this.employee.employeeID = this.$store.state.employeeList.length;
            this.$store.commit("ADD_EMPLOYEE", this.employee);
            this.employee = {firstName: '',
                middleInitial: '',
                lastName: '',
                gender: '',
                email: '',
                employeeID: 0};
        }
    }

}
</script>

<style scoped>
form{
    display: grid;
    grid-auto-columns: 500px;
    justify-content: center;
}

#header, #email{
    margin-bottom: 20px;
}
</style>