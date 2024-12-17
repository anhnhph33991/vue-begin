import { computed, nextTick, ref, watch } from "vue";

/**
 * data global sẽ giữ nguyên giá trị khi gọi
 */

const counter = ref(0),
  counterTitle = ref("My Counter");

export function useCounter() {
  /**
   * data sẽ load lại mỗi khi gọi
   */

  //   const counter = ref(0),
  //     counterTitle = ref("My Counter");

  const increaseCounter = (amount) => {
    console.log(amount);

    nextTick(() => {
      console.log("do something");
    });

    counter.value += amount;
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

  // watch

  watch(
    () => counter.value,
    (newCount, oldCount) => {
      // console.log(`new Count: ${newCount}`);
      // console.log(`old Count: ${oldCount}`);

      if (newCount === 20) {
        alert("count 20");
      }
    }
  );

  return {
    counter,
    increaseCounter,
    removeCounter,
    oddOrEvent,
    counterTitle,
  };
}
