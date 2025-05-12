<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
      return {
        friends: [
            {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 45678 90',
                email: 'manuel@localhost.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '9876 5432 10',
                email: 'julie@localhost.com'
            }
        ]
      };
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>