<script setup></script>

<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style scoped>
.main {
  min-width: 100%;
  margin: 0 120px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
}
</style>
