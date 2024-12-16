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
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

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

onMounted(() => {
    console.log(`The app title is ${viewPostRef.value.offsetWidth} px wide`);
})


</script>

<style lang="scss" scoped></style>
