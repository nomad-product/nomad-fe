<script lang="ts" setup></script>

<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin: 0 120px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
}
</style>
