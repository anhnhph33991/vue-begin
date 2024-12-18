<template>
  <div>
    <h1>Detail Post: {{ $route.params.id }}</h1>

    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>

    <div>
      <button @click="goHome">Go Home</button>
    </div>

    <div>
      <button @click="goToFirstPost">Go To First Post</button>
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

const goHome = () => {
  router.push({ name: "home" });
};

const goToFirstPost = () => {
  router.push({
    name: "postDetail",
    params: {
      id: 1,
    },
  });
};
// console.log(route.params.id);
// console.log(router);

// if (name && price) {
//   console.log(`Name: ${name} --- Price: ${price}`);
// }
</script>

<style lang="scss" scoped></style>
