<template>
  <form @submit.prevent="submitUserData">
    <div>
      <label>name</label>
      <input type="name" v-model="enteredName" />
    </div>
    <div>
      <label>age</label>
      <input type="age" v-model="enteredAge" />
    </div>
    <div>
      <button>add User</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUserData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>