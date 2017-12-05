new Vue({
  el: '#vue-app',
  data: {
    name: 'Edu'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
