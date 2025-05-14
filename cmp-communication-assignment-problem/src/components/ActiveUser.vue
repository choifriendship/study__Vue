<template>
  <h2>username: {{ username }}</h2>
  <h3>age: {{ age }}</h3>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>