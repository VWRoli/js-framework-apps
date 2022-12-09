<script lang="ts">
export default {
  props: ["label", "open"],
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<template>
  <button
    :class="{ error: open, primary: !open }"
    id="toggle-button"
    @click="onClick()"
  >
    {{ label }}
  </button>
</template>
