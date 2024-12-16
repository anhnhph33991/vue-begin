<template>
  <div>
    <h1>View Posts</h1>

    <ul>
      <li>
        <RouterLink :to="{ name: 'postDetail', params: { id: 1 } }">
          Post 1
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/3">Post 3</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/4">Post 4</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/5">Post 5</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
