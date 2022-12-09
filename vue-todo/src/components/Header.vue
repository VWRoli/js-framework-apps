<script lang="ts">
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  props: ["open"],
};
</script>

<template>
  <header>
    <h5 class="title">Vue todo app</h5>
    <Button
      :label="open ? 'Close' : 'Open'"
      :open="open"
      @btn-click="$emit('toggleOpen')"
    />
  </header>
</template>
