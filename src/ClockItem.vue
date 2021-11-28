<template>
  <div>{{ display }}</div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'ClockItem',
  setup() {
    const time = ref(Date.now());

    function prefixNum(num, strLen) {
      return (Array(strLen).join(0) + num).slice(-strLen);
    }

    const display = computed(() => {
      let hour = time.value.getHours();
      let minute = time.value.getMinutes();
      let second = time.value.getSeconds();

      return `${prefixNum(hour)}${prefixNum(minute)}${prefixNum(second)}`;
    });

    setInterval(() => {
      this.time = Date.now();
    }, 1000);

    return {
      display,
    };
  },
});
</script>
