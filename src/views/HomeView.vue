<template>
  <div class="home">
    <MdEditor :value="mdValue" :handle-change="onMdChange" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const mdValue = ref();
const onMdChange = (v: string) => {
  mdValue.value = v;
};
</script>
