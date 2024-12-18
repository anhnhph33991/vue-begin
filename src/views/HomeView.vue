<template>
  <div class="home">
    <h1 :style="{ color: 'red' }">{{ counter.title }}</h1>

    <button class="btn" @click="counter.decrease(2)">--</button>
    <button class="btn" @click="counter.decrease()">-</button>
    <span class="counter">{{ counter.count }}</span>
    <button class="btn" @click="counter.increment()">+</button>
    <button class="btn" @click="counter.increment(2)">++</button>

    <p>
      This counter is:
      <span
        :style="{ color: counter.oddOrEven === 'even' ? 'green' : 'red' }"
        >{{ counter.oddOrEven }}</span
      >
    </p>

    <div class="edit-counter">
      <span>Edit Counter:</span>
      <input type="text" v-model="counter.count" />
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
// import { useCounter } from "@/use/useCounter";
import {
  computed,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
} from "vue";

import { useCounterStore } from "@/stores/counter";

const flagCheck = ref(true);
const awesome = ref(true);

/** PINIA */

const counter = useCounterStore();

/** PINIA */

// const {
//   counter,
//   increaseCounter,
//   removeCounter,
//   oddOrEvent,
//   counterTitle } = useCounter()

// lifecycle

// Hàm này sẽ được gọi trước khi component được gắn vào DOM
onBeforeMount(() => {
  console.log("onBeforeMount");
});
// Hàm này sẽ được gọi sau khi component được gắn vào DOM.
onMounted(() => {
  console.log("onMounted");
});
// Hàm này sẽ được gọi trước khi component bị gỡ bỏ khỏi DOM.
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});

/**
 *  Tại sao sử dụng onActivated và onDeactivated?
    Tối ưu hiệu năng: Tránh render lại component từ đầu mỗi khi chuyển đổi giữa các route hoặc tab, giúp tăng tốc độ ứng dụng.
    Quản lý trạng thái: Giúp bạn lưu trữ và khôi phục trạng thái của component khi nó được kích hoạt lại.
    Cải thiện trải nghiệm người dùng: Tạo hiệu ứng chuyển đổi mượt mà giữa các màn hình.
 */

// Khi một component được kích hoạt lại sau khi đã bị ẩn đi (ví dụ: khi chuyển về tab chứa component đó).
onActivated(() => {
  console.log("onActivated");
});
// Khi một component bị ẩn đi và được lưu vào bộ nhớ cache (ví dụ: khi chuyển sang tab khác).
onDeactivated(() => {
  console.log("onDeactivated");
});
// Thực hiện các tác vụ trước khi DOM được cập nhật
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
// Được gọi ngay sau khi DOM của component được cập nhật
onUpdated(() => {
  console.log("onUpdated");
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
