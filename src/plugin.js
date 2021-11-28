import Clock from './ClockItem';

module.exports = {
  install: function (Vue) {
    const app = Vue.createApp({});
    app.component('VueClock', Clock);
  },
};
