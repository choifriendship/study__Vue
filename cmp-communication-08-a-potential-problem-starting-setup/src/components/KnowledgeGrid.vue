<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  // 상위 레벨에서 제공된 것만 참조할 수 있다. provide - inject 부모 자식 관계
  // 부모 컴포넌트나 조상 컴포넌트 (현재는 App.vue)
  inject: ['topics'],
};
</script>