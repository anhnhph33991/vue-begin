<script setup>
import { provide, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useOnline, useTitle } from "@vueuse/core";

const userData = reactive({
  name: "Luxchill",
  username: "hoang anh",
});

provide("userData", userData);

/** online status */

const online = useOnline();
const title = useTitle();
title.value = "Home Vue";
</script>

<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }} | Network Status:
    <span :style="{ color: online ? 'green' : 'red' }">
      {{ online ? "online" : "offline" }}
    </span>
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink :to="{ name: 'products' }">Products</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background: beige;
  top: 0;
  right: 0;
  font-size: 20px;
  padding: 5px;
}
</style>
