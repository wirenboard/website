<script setup lang="ts">
const props = defineProps<{ counterId?: string }>();

useHead({
  script: [
    {
      key: `yandex-metrika-script-${props.counterId}`,
      type: 'text/javascript',
      innerHTML: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(${JSON.stringify(props.counterId)}, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`
    }
  ]
});
</script>

<template>
  <noscript>
    <div><img :src="`https://mc.yandex.ru/watch/${counterId}`" style="position:absolute; left:-9999px;" alt="" /></div>
  </noscript>
</template>
