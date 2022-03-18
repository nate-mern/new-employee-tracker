<template>
  <div>
    <h1></h1>
    <div>
      <h2 id="title">Are you adding a new employee?</h2>
      <label for="yes">Yes</label>
      <input type="radio" name="newEmployee" id="yes" value="yes" v-model="selection"/>
      <label for="no">No</label>
      <input type="radio" name="newEmployee" id="no" value="no" v-model="selection"/>
    </div>
    <div v-if="selection == 'yes'">
      <new-employee-form />
    </div>
    <div v-else>
      <current-employee-table />
    </div>
  </div>
</template>

<script>
import NewEmployeeForm from '@/components/NewEmployeeForm.vue'
import CurrentEmployeeTable from './CurrentEmployeeTable.vue'
export default {
  components: { NewEmployeeForm, CurrentEmployeeTable },
  name: 'HomeScreen',
  data() {
    return {
      selection: "yes"
    }
  }

}
</script>

<style scoped>
#title{
  margin-bottom: 20px;
}
input{
  margin: 20px;
}
</style>
