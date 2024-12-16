<template>
    <div class="modals">
        <h1>ModalsView</h1>

        <button @click="showModal = !showModal">Toggle modal</button>

        <!-- to theo selector body là tag / # -> id / . -> class 
            dịch chuyển 1 div lên 1 div khác 
        -->
        <Teleport to="body">
            <div class="modal" v-if="showModal">
                <h1>This is modal</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione consequatur porro veritatis
                    eligendi odio assumenda nemo iusto quam, ea possimus excepturi accusamus temporibus suscipit
                    impedit,
                    qui perferendis accusantium. Doloremque?</p>

                <button @click="showModal = false">Hide Modal</button>
            </div>
        </Teleport>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false)
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