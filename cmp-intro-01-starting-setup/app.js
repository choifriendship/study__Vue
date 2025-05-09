const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 99',
                    email: 'manuel@localhost.com'
                },
                { 
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }

});

// 컴포넌트는 미니앱 (자체 템플릿을 생성해야함)
// 두가지 인수를 받음
// 코드가 캡슐화되고 분리됨
// Vue 앱은 독립적이라 서로 통신할 수 없지만, 컴포넌트는 컴포넌트 간에 데이터를 교환할 수 있는 특정 통신 메커니즘을 제공
app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: { 
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 99',
                email: 'manuel@localhost.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');