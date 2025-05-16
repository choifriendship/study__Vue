<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- TheHeader.vue 등록된 style은 영역을 따로 지정(scoped)해주지 않으면
 앱 전체에 영향을 미친다. -->
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>