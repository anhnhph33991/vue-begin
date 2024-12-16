<template>
  <div>
    <h1>Detail Post: {{ $route.params.id }}</h1>

    <router-link to="/posts">Back Posts</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const name = route.query.name;
const price = route.query.price;

// console.log(route.params.id);
console.log(route);

// if (name && price) {
//   console.log(`Name: ${name} --- Price: ${price}`);
// }
</script>

<style lang="scss" scoped></style>
