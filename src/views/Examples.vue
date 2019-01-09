<template>
  <div class="examples">
    <Example1 />
    <Example2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Example1 from "@/components/examples/Example1.vue";
import Example2 from "@/components/examples/Example2.vue";

export default {
  name: "examples",
  components: {
    Example1,
    Example2

  }
};
</script>