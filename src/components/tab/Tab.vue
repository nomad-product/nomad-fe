<template>
  <li :class="{ active: isActive }" class="tab">
    <Subtitle2 class="label">{{ label }}</Subtitle2>
  </li>
</template>

<script lang="ts" setup>
import Subtitle2 from '~/components/text/Subtitle2.vue';

interface Props {
  label: string;
  isActive: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 2px solid $color-primary;
}

.tab {
  width: 160px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  .label {
    color: $color-primary;
  }
}
</style>
