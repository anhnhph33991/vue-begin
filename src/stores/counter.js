import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0),
    title = ref("My counter title with pinia");

  // getters
  const doubleCount = computed(() => count.value * 2);

  const oddOrEven = computed(() => {
    // if (count.value % 2 === 0) {
    //   return "even";
    // }
    // return "odd";

    return count.value % 2 === 0 ? "even" : "odd";
  });

  // actions
  function increment(amount = 1) {
    count.value += amount;
  }

  const decrease = (amount = 1) => {
    if (count.value == 0) {
      alert("Trừ lồn trừ lắm ?");
      return;
    }
    count.value -= amount;
  };

  return { count, title, doubleCount, increment, decrease, oddOrEven };
});
