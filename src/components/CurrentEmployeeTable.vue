<template>
<div id="body">
    <div id="table">
  <table>
      <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Email</th>
      </tr>
      <tr v-for="employee in employees" v-bind:key="employee.employeeID">
          <a href="#" v-on:click="handleModal(employee)" >
          <td>{{employee.employeeID}}</td></a>
          <td>{{employee.firstName + " " + employee.middleInitial + " " + employee.lastName}}</td>
          <td>{{employee.email}}</td>
      </tr>
  </table>
  </div>
  <div id="updateForm">
  <update-form  :employee="selectedEmployee" @submit="selectedEmployee = {}"/>
  </div>
</div>
</template>

<script>
import UpdateForm from './UpdateForm.vue';

export default {
  components: { UpdateForm },

    data() {
        return {
            employees: [],
            selectedEmployee: {},
        }
    },
    created() {
        this.employees = this.$store.state.employeeList
    },
    methods: {
        handleModal(employee){
            this.selectedEmployee = employee;
        },
    }
}
</script>

<style scoped>

#table {
    font-stretch: expanded;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    
}
#updateForm{
    margin-top: 20px
}
table {
    margin: auto;
    border-spacing: 0 20px; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
th, td {
    width:20%;
    text-align:center;
    border:1px solid rgba(0, 0, 0, 0.048);
    padding:5px
              }

tr:nth-child(even) {
  background-color: rgb(24, 49, 78, .2);
  }
tr:nth-child(odd) {background: rgb(255, 255, 255 , .4)}
</style>