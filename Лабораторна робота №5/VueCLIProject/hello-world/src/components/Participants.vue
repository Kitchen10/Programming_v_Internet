<template>
  <div>
    <div v-for="name in names" :key="name">
      <label for="">
        {{name}}
        <input type="checkbox" v-bind:value="name" v-model="selectedNames">
      </label>
    </div>
    <span>Обрані учасники: {{selectedNames}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      names: ["Коля", "Петро", "Оксана", "Степан", "Мирослав"],
      selectedNames: []
    }
  }
}
</script>

<style scoped>
  span{
    display: block;
    margin: 10px 0;
  }  
</style>