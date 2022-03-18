<template>
  <div id="form" v-if="employee.firstName != undefined" >
      <form  v-on:submit.prevent="handleSubmit">
      <label for="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" required :value="employee.firstName" @input="updateEdit"/>
      <label for="middleInitial">Middle Initial:</label>
      <input type="text" maxlength="1" name="middleInitial" id="middleInitial" :value="employee.middleInitial" @input="updateEdit"/>
      <label for="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" required :value="employee.lastName" @input="updateEdit"/>
      <label for="gender">Gender</label>
      <select  name="gender" id="gender" required :value="employee.gender" @input="updateEdit">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
      </select>
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" required :value="employee.email" @input="updateEdit"/>
      <button type="submit" id="submit">Update</button>
      </form>
      <button @click="handleClose" id="cancel">Cancel</button>
    </div>
</template>

<script>
export default {
props: ['employee'],
data(){
    return {
        editedInfo: {},
    }
},
methods: {
     updateEdit(e){
         //I came across a bug involving v-model that was causing data to update outside of what was modeled, the props and store were both updating even 
         //when they weren't connected to the data that was modeled in any way. After some research, I saw this was known bug involving v-model, I just hadn't encountered it
         //before. This was my way to get around that problem:
            let type = e['target'].name;
            this.editedInfo[type] = e.target.value
        },
    handleSubmit(){
        let edit = {
                ...this.employee,
                ...this.editedInfo
            }
            this.$store.commit("EDIT_EMPLOYEE", edit);
            this.$emit('submit');
            //tells the parent component to set selectedEmployee back to {} which in turn hides the form.
            this.editedInfo = {};
            
    },
    handleClose(){
        //since the parent isn't concerned with actually putting the data in the store, I can use the submit click handler in the parent to hide the form regardless of changes being saved
            this.$emit('submit');
            this.editedInfo = {};
        },

}
}
</script>

<style scoped>
#form{
    background-color: rgba(0, 0, 0, 0.062);
    margin-left: 21%;
    margin-right: 21%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
   
}
form{
    display: grid;
    grid-auto-columns: 500px;
    justify-content: center;
  
}
#submit{
    margin-top: 20px
}
#cancel{
    margin-top: 20px;
    width: 500px;
}
</style>