<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
import List from "../components/List.vue";
import Footer from "../components/Footer.vue";
import { API_URL } from "../constants/index";
import type { TodoType } from "../types/index";

export default defineComponent({
  components: {
    Header,
    Form,
    List,
    Footer,
  },
  data() {
    const state: {
      open: Boolean;
      items: TodoType[];
    } = {
      open: true,
      items: [],
    };
    return state;
  },
  methods: {
    async toggleOpen() {
      this.open = !this.open;
    },
    async fetchTodos() {
      try {
        const res = await fetch(`${API_URL}?_limit=5`);
        const data = await res.json();
        this.items = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo(id: number) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        this.items = this.items.filter((t) => t.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    async editTodo(id: number, todo: TodoType) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          body: JSON.stringify(todo),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        this.items = this.items.map((p) => (p.id === id ? todo : p));
      } catch (error) {
        console.log(error);
      }
    },
    async createTodo(todo: TodoType) {
      try {
        const res = await fetch(`${API_URL}`, {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data: TodoType = await res.json();
        this.items = [...this.items, data];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchTodos();
  },
});
</script>

<template>
  <main>
    <div class="container">
      <Header :open="open" @toggleOpen="toggleOpen" />
      <Form v-if="open" @createTodo="createTodo" />
      <List :items="items" @deleteTodo="deleteTodo" @editTodo="editTodo" />
      <Footer />
    </div>
  </main>
</template>
