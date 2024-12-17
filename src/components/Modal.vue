<template>
    <!-- to theo selector body là tag / # -> id / . -> class 
            dịch chuyển 1 div lên 1 div khác 
        -->
    <Teleport to="body">
        <div class="modal">
            <h1>
                <slot name="title" />
            </h1>

            <slot />

            <button>Hide Modal</button>
        </div>
    </Teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

console.log(slots.title());


</script>

<style scoped>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>