<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // provide와 inject는 부모 자식 관계에서만 사용 가능
  // 이웃 관계에서 사용 불가능
  // 여러 컴포넌트에서 사용되어야 하는 데이터인 경우 사용
  inject: ['selectTopic'],
  // props는 프로퍼티를 사용해서 데이터를 부모 -> 자식으로 단방향 전송
  props: ['id', 'topicName', 'description'],
  // emits은 자식 => 부모로 전송하는 커스텀 이벤트
  emits: ['select-topic'],
};
</script>