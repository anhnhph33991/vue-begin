<template>
    <div class="modals">
        <h1>ModalsView</h1>

        <div>
            <label>Show dark modals</label>
            <input type="checkbox" v-model="showDarkModals">
        </div>

        <pre>{{ showDarkModals }}</pre>

        <button @click="showModal = !showModal">Toggle modal</button>

        <component :is="showDarkModals ? ModalDark : Modal" v-model="showModal" title="My modal title (vie props)">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione consequatur porro veritatis
                eligendi odio assumenda nemo iusto quam, ea possimus excepturi accusamus temporibus suscipit
                impedit,
                qui perferendis accusantium. Doloremque?</p>

            <h1>Hello</h1>
        </component>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const showDarkModals = ref(false)
const showModal = ref(false)
</script>