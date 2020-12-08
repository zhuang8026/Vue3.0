<template>
  <div id="app">
    <h3>Counter</h3>
    <div>
      {{ count }}
    </div>
    <button type="button" @click="increEvent">+1</button>
    <button type="button" @click="decreEvent">-1</button>
  </div>
</template>

<script>

import { useStore } from "vuex";
// import store from '@/store';

import { reactive, computed } from "vue";
import { INCREMENT, INDECMENT } from "@/store/mutations_type";

export default {
  name: "App",
  setup() {
    const store = useStore();
    console.log("setup -> store", store);

    const increEvent = () => {
      store.commit(INCREMENT);
    };
    const decreEvent = () => {
      store.commit(INDECMENT);
    };

    return reactive({
      count: computed(() => store.state.count),
      increEvent,
      decreEvent,
    });
  },
};
</script>

<style></style>
