<template>
  <h2>{{ title }}</h2>
  <h3>{{ uppercaseTitle }}</h3>

  <h1 :class="{ '--extend': count == 1 }">Counter: {{ count }}</h1>
  <button @click.once="add()">+1</button>

  <h4 v-if="count">Conditional rendering using v-if</h4>
  <h4 v-show="count">Conditional rendering using v-show</h4>

  <p :class="someText">{{ someText }}</p>
  <input type="text" v-model="someText" />

  <li v-for="(item, index) in array" :key="index">{{ item }}</li>

  <Suspense v-if="count">
    <template #default>
      <CompositionComponent :msg="message" @change-title="message = $event">
        <template #text>
          <h4>default value shows when there is no template</h4>
        </template>
        <template #slot>second named slot</template>
      </CompositionComponent>
    </template>
    <template #fallback>
      <div class="loader">Loading...</div>
    </template>
  </Suspense>

  <p v-colorful>Custom directives local/global</p>

  <teleport to="body">
    <p>I was teleported to body</p>
  </teleport>
</template>

<script>
import { mymixin } from "@/components/mixins/mymixin";
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onUpdated,
  defineAsyncComponent,
  provide
} from "vue";

const CompositionComponent = defineAsyncComponent(async () => {
  //Added fake delay
  await new Promise(r => setTimeout(r, 2000));
  return import(
    /* webpackChunkName: "CompositionComponent" */ "../components/CompositionComponent.vue"
  );
});

export default {
  name: "CompositionAPI",
  mixins: [mymixin],
  components: { CompositionComponent },
  setup() {
    const count = ref(0);
    count.value++;
    console.log(count.value);

    const data = reactive({
      title: "Vue 3 Crash Course",
      count: 0,
      someText: "",
      array: ["Fist item", "Second item", "Last items"],
      message: "Hello from parent component",
      uppercaseTitle: computed(() => data.title.toUpperCase())
    });

    provide("data", data);
    function add() {
      data.count++;
    }

    watch(
      () => data.count,
      (count, prevCount) => {
        count > prevCount ? console.log(`Counter value = ${count}`) : "";
      }
    );

    onUpdated(() => {
      console.log("Data updated!");
    });

    return {
      ...toRefs(data),
      add
    };
  }
};
</script>

<style scoped lang="scss">
h2 {
  color: #222;
  &:hover {
    color: blue;
  }
}
.loader {
  color: #222;
  font-size: 10px;
  margin: 60px auto;
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>
