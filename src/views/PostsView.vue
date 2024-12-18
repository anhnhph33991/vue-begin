<template>
  <div>
    <h1 ref="viewPostRef">{{ viewPost }}</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: 'postDetail', params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>

    <textarea v-autofocus></textarea>

    <div>
      <button
        class="counter-button"
        @click="counter.increment(1)"
        :class="{ yellow: counter.oddOrEven === 'odd' }"
      >
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
// import { useCounter } from "@/use/useCounter";

// pinia
import { useCounterStore } from "@/stores/counter";
// pinia

const counter = useCounterStore();

const posts = ref([
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
  {
    id: 4,
    title: "Post 4",
  },
  {
    id: 5,
    title: "Post 5",
  },
  {
    id: 6,
    title: "Post 6",
  },
]);

const viewPost = "Post Detail";
const viewPostRef = ref(null);

// const { counter, increaseCounter, oddOrEvent } = useCounter();

onMounted(() => {
  console.log(`The app title is ${viewPostRef.value.offsetWidth} px wide`);
});
</script>

<style scoped>
.counter-button {
  font-size: 20px;
  width: 100%;
  background-color: pink;
}

.yellow {
  background-color: yellow;
}
</style>
