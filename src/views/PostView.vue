<template>
  <div>
    <h1>Lista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [] 
    };
  }
};
</script>

<style scoped>
</style>
