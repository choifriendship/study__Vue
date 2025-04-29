const app = Vue.createApp({
    data() {
        return {
            styleTxt: '',
            visibleTxt: true,
            backgroundColor: ''
        }

    },
    methods: {
        toggleClick() {
            this.visibleTxt = !this.visibleTxt;
        }
    },
    computed: {
        toggleClasses() {
            return { 
                user1: this.styleTxt === 'user1',
                user2: this.styleTxt === 'user2',
                visible: this.visibleTxt,
                hidden: !this.visibleTxt
            };
        }
    }

});

app.mount('#assignment')