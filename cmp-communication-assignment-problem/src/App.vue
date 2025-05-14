<template>
  <user-data @add-user="addUser"></user-data>
  <active-user
    v-for="friend in friends"
    :key="friend.id"
    :id="friend.id"
    :username="friend.username"
    :age="friend.age"
  ></active-user>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: new Date().toISOString,
          username: "test1",
          age: "11",
        },
        {
          id: new Date().toISOString,
          username: "test2",
          age: "22",
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
        const newUser = {
            id: new Date().toISOString,
            username: name,
            age: age
        };
        this.friends.push(newUser);
    }
  }
};
</script>