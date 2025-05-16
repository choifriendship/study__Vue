<template>
  <div>
    <the-header></the-header>
    <!-- 대시바를 사용하지 않고 그대로 넣으면 셀프 클로징 태그 작동 가능 
     파스칼케이스로 사용하면 셀프 클로징 태그 사용 가능 케밥케이스는 불가능  -->
    <!-- <TheHeader /> -->
    <!-- <BadgeList /> -->
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!-- <course-goals #default="slotProps"> -->
    <!-- <template #default="slotProps"> -->
    <!-- <h2>{{ slotProps.item }}</h2> -->
    <!-- another-prop이 작동되지 않음 -->
    <!-- <p>{{ slotProps['another-prop'] }}</p> -->
    <!-- <p>{{ slotProps['anotherProp'] }}</p> -->
    <!-- {{ console.log(slotProps) }} -->
    <!-- </template> -->
    <!-- </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- keep-alive는 컴포넌트를 완전히 삭제하지 않고 이들의 상태를 내부에서 캐시로 저장하도록 함 -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // TheHeader: TheHeader도 사용 가능
    "the-header": TheHeader,
    // // 단일 값으로 사용 가능 BadgeList: BadgeList
    // BadgeList,
    // // 단일 값으로 사용해도 템플릿에서 카멜케이스 사용 가능
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>