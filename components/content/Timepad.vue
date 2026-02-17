<script setup lang="ts">
import Button from '~/components/Button.vue';

const props = withDefaults(defineProps<{ id: string; label?: string; withoutScript?: boolean; }>(), {
  withoutScript: false,
  label: 'Зарегистрироваться'
});

onMounted(() => {
  if (!props.withoutScript) {
    useHead({
      script: [{
        src: 'https://timepad.ru/js/tpwf/loader/min/loader.js',
        defer: true,
        async: true,
        'data-timepad-customized': 166726,
        'data-timepad-widget-v2': 'event_register',
        innerHTML: `(function(){return {"event" : {"id" : ${props.id} }, "hidePreloading" : true, "display" : "popup", "popup" : {"triggerSelector" : "#timepad_twf_register_${props.id}"}}})();`
      }]
    });
  }
});
</script>

<template>
  <div class="timepad">
    <Button :id="`timepad_twf_register_${id}`" size="large" :label="label" />
  </div>
</template>

<style scoped>
.timepad {
  margin: 36px 0;
  text-align: center;
}

.timepad button {
  text-transform: uppercase;
}
</style>
