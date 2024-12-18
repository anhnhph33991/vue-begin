<template>
  <div class="products">
    <div class="product-item" v-for="item in data" :key="item.id">
      <h1>
        Name: <span>{{ item.name }}</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    id: 1,
    name: "product 1",
    price: 10000,
  },
  {
    id: 2,
    name: "product 2",
    price: 10000,
  },
  {
    id: 3,
    name: "product 3",
    price: 10000,
  },
  {
    id: 4,
    name: "product 4",
    price: 10000,
  },
  {
    id: 5,
    name: "product 5",
    price: 10000,
  },
  {
    id: 6,
    name: "product 6",
    price: 10000,
  },
]);
</script>

<style></style>
