<template>
  <div>
    <h1>Detail Post: {{ $route.params.id }}</h1>

    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>

    <router-link to="/posts">Back Posts</router-link>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const name = route.query.name;
const price = route.query.price;

const showPostId = () => {
  alert(`The id of this post is: ${route.params.id}`);
};

// console.log(route.params.id);
// console.log(router);

// if (name && price) {
//   console.log(`Name: ${name} --- Price: ${price}`);
// }
</script>

<style lang="scss" scoped></style>
