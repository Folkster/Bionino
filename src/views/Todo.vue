<template>
  <div class="todo">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>
