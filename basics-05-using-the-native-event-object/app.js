const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      console.log('Running again');
      if ( this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Hello';
    }
  },
  computed: {
    // 연산 프로퍼티 이름은 메서드가 아니라 데이터 프로퍼티처럼 사용하기 때문에
    // 데이터 프로퍼티처럼 이름을 정해야 함
    fullname() {
      console.log('Running again');
      if ( this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    // name(value) {
    //   if (value === '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
  }
});

app.mount('#events');
