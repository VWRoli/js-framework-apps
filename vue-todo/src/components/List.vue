<script>
export default {
  props: ["items"],
  emits: ["deleteTodo", "editTodo"],
};
</script>

<template>
  <div class="todo" v-for="item in items" :key="item.id">
    <div id="todo-wrapper">
      <div class="todo-title">
        <label for="completed"
          ><span
            ><input
              type="checkbox"
              class="checkbox"
              name="completed"
              :checked="item.completed"
              @change="
                $emit('editTodo', item.id, {
                  ...item,
                  completed: !item.completed,
                })
              " /></span
        ></label>
        <p class="empty-list">{{ item.title }}</p>
      </div>
      <div class="todo-actions">
        <button
          type="button"
          class="remove-btn"
          @click="$emit('deleteTodo', item.id)"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>
