var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    image: "https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg",
  },

  methods: {
    addImage: function () {
      this.image = `https://unsplash.it/800/800?image=${randomNumber(1, 100)}`;
    },
  },
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
