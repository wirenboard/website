<template>
  <div class="table-wrapper">
    <table>
      <slot />
    </table>
  </div>
</template>

<style>
.table-wrapper {
  overflow: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1em 0;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}
</style>
