const app = Vue.createApp({
  data() {
    return {
      isOpen: false,
      links: [
        {
          name: 'google',
          url: 'https://www.google.com',
          top: true,
        },
        {
          name: 'yahoo',
          url: 'https://www.yahoo.co.jp',
          top: false,
        },
        {
          name: 'Amazon',
          url: 'https://www.amazon.co.jp',
          top: false,
        },
      ],
    }
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    },
  },
})

app.mount('#nav')
