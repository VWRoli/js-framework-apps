<script>
export default {
  data() {
    return {
      title: "",
      completed: false,
    };
  },
  methods: {
    handleClick() {
      const newTodo = {
        userId: 1,
        id: 32,
        title: this.title,
        completed: this.completed,
      };
      this.$emit("createTodo", newTodo);
      this.title = "";
      this.completed = false;
    },
  },
  emits: ["createTodo"],
};
</script>

<template>
  <form action="/" class="form">
    <div class="form-control">
      <div class="input-base">
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Task"
          v-model="title"
        />
        <fieldset>
          <legend><span class="notranslate">&ZeroWidthSpace;</span></legend>
        </fieldset>
      </div>
    </div>
    <div class="form-group">
      <label for="completed"
        ><span class="completed-label">Completed</span
        ><span
          ><input
            type="checkbox"
            id="completed"
            name="completed"
            value="completed"
            v-model="completed" /></span
      ></label>
    </div>
    <button class="submit-btn" id="submit-btn" @click.prevent="handleClick">
      Save task
    </button>
  </form>
</template>
