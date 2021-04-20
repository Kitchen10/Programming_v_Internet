<template>
  <div>
    <label for="">
      Ім'я:
      <input type="text" v-on:input="setFirstName"/>
    </label>
    <label for="">
      Прізвище:
      <input type="text" v-on:input="setLastName"/>
    </label>
    <label for="">
      Вік:
      <input type="text" v-on:input="setAge"/>
    </label>
    <label for="">
      Місто:
      <input type="text" v-on:input="setCity"/>
    </label>
    <table>
      <caption>Поточні дані користувача</caption>
      <tr>
        <td>Ім'я:</td>
        <td>{{firstName}}</td>
      </tr>
      <tr>
        <td>Прізвище:</td>
        <td>{{lastName}}</td>
      </tr>
      <tr>
        <td>Вік:</td>
        <td>{{age}}</td>
      </tr>
      <tr>
        <td>Місто:</td>
        <td>{{city}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    };
  },
  methods: {
    setFirstName(event) {
      this.firstName = event.target.value;
    },
    setLastName(event) {
      this.lastName = event.target.value;
    }, 
    setAge(event) {
      this.age = event.target.value;
    }, 
    setCity(event) {
      this.city = event.target.value;
    }     
  },
};
</script>

<style scoped>
  div{
    margin-top: 100px;
  }

  table{
    border-collapse: collapse;
    margin: 20px auto;
    width: 500px;
    
  }

  tr, td{
    border: 1px solid black;
  } 

  td{
    width: 50%;
  }  
</style>