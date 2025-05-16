import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue'

// 지역 컴포넌트로 이동
// import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

// 다양한 곳에서 사용하는 범용 컴포넌트의 경우 전역 컴포넌트 사용
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

// app.component('the-header', TheHeader);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
