<template>
  <div class="comments">
    <textarea v-model="newComment"></textarea>
    <button v-on:click=addComment()>Опублікувати</button>
    <ul>
      <li v-for="comment in comments " :key="comment"><p class="comment">{{comment.text}}</p><p class="time">{{comment.time}}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      comments: [],
      newComment: '',
      time: '',
    }
  },  
  methods: {
    addComment(){
      if (this.newComment.length === 0) {
        return;
      }  
      this.comments.push({
        text: this.newComment,
        time: new Date().toLocaleTimeString(),
      });
      this.newComment = '';
    } 
  }  
}
</script>

<style scoped>
  .comments{
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }  

  textarea{
    width: 400px;
    height: 150px;
    padding: 15px;
    border-radius: 20px;
    resize: none;
    outline: none;
    margin-bottom: 20px;
  }

  button{
    width: 200px;
    height: 30px;
    cursor: pointer;
    background-color: rgb(45, 218, 131);
  }  

  li{
    list-style: none;
    width: 500px;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0 10px;
    background-color: rgb(202, 202, 202);
    margin: 15px 0;
  }  


  .time{
    font-size: 10px;
    color: rgb(75, 75, 75);
  }
</style>