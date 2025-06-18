<script setup lang="ts">
import ScrollTopArrow from '~/assets/icons/scroll-top-arrow.svg';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <button v-show="isVisible" class="scrollTopButton" @click="scrollToElementBySelector('body')">
    <ScrollTopArrow />
  </button>
</template>

<style>
.scrollTopButton {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(92, 179, 0);
  border: 4px solid #fff;
  border-radius: 50%;
  z-index: 1000;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transition: background 0.4s ease;

  @media (max-width: 450px) {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}

.scrollTopButton:hover {
  background: rgb(0,183,243);
}
</style>
