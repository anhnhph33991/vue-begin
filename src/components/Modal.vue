<template>
    <!-- to theo selector body là tag / # -> id / . -> class 
            dịch chuyển 1 div lên 1 div khác 
        -->
    <Teleport to="body">
        <div class="modal" v-if="modelValue">
            <h1>
                {{ title }}
            </h1>

            <slot />

            <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
            <button @click="handleButtonClick">Hide Modal</button>
        </div>
    </Teleport>
</template>

<script setup>
// import { useSlots } from 'vue';

// const slots = useSlots();

// console.log(slots.title());

const props = defineProps({
    title: {
        type: String,
        default: "No title huhu"
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

// const props = defineProps(['title'])


// console.log(props.title);

/**  Emits */

const emit = defineEmits(['update:modelValue'])

const handleButtonClick = () => {
    // emit('hideModal')

    emit('update:modelValue', false)
}

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