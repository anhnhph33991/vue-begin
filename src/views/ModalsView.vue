<template>
    <div class="modals">
        <h1>ModalsView</h1>

        <button @click="showModal = !showModal">Toggle modal</button>

        <Modal v-if="showModal" title="My modal title (vie props)">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione consequatur porro veritatis
                eligendi odio assumenda nemo iusto quam, ea possimus excepturi accusamus temporibus suscipit
                impedit,
                qui perferendis accusantium. Doloremque?</p>

            <h1>Hello</h1>
        </Modal>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false)
</script>