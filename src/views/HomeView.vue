<template>
  <div class="home">
    <h1 :style="{ color: 'red' }">{{ counterTitle }}</h1>

    <button @click="removeCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaseCounter(5)" class="btn">+</button>

    <p>This counter is: {{ oddOrEvent }}</p>

    <div class="edit-counter">
      <span>Edit Counter:</span>
      <input type="text" v-model="counterTitle" />
    </div>

    <div v-if="flagCheck">
      <h1>Check == True</h1>
    </div>

    <h2 v-else>Check == false</h2>

    <!-- <button @click="awesome = !awesome">Toggle</button> -->

    <h1>Show Result:</h1>

    <div>
      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <div class="products">
      <ul>
        <li v-for="item in productList" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>

    <button :style="{ color: 'red' }" :disabled="flagCheck">Button</button>

    <div></div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const flagCheck = ref(true);

const awesome = ref(true);

const counter = ref(0),
  counterTitle = ref("My Counter");

const increaseCounter = (amount) => {
  console.log(amount);

  counter.value++;
};

const removeCounter = () => {
  // counter là 1 thì return k cho trừ nữa
  if (counter.value == 1) {
    return;
  }

  counter.value--;
};

// computed

const oddOrEvent = computed(() => {
  if (counter.value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

let productList = reactive([
  {
    id: 1,
    name: "San pham 1",
    price: 300000,
    quantity: 23,
    description: "mo ta acbsb fabda ahf",
  },
  {
    id: 2,
    name: "San pham 2",
    price: 300000,
    quantity: 23,
    description: "mo ta acbsb fabda ahf",
  },
  {
    id: 3,
    name: "San pham 3",
    price: 300000,
    quantity: 23,
    description: "mo ta acbsb fabda ahf",
  },
  {
    id: 4,
    name: "San pham 4",
    price: 300000,
    quantity: 23,
    description: "mo ta acbsb fabda ahf",
  },
]);
</script>

<!-- ########  -->
<!-- <script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };

    const removeCounter = () => {
      counter.value--;
    };

    return {
      counter,
      increaseCounter,
      removeCounter,
    };
  },
};
</script> -->

<!-- ########  -->
<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    removeCounter() {
      if (this.counter == 1) {
        alert("Bạn không thể trừ nữa");
        return;
      }

      this.counter--;
    },
  },
};
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
