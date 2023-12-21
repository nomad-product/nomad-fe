<template>
  <ul class="tabs">
    <Tab
      v-for="(tab, index) in tabs"
      :key="tab.label"
      :is-active="activeTabIndex == index"
      :label="tab.label"
      @click="setActiveTabIndex(index)"
    >
    </Tab>
  </ul>
</template>

<script lang="ts" setup>
interface TabProps {
  label: string;
}

interface Props {
  tabs: TabProps[];
}

defineProps<Props>();

const activeTabIndex = ref(0);

const setActiveTabIndex = (index: number) => {
  activeTabIndex.value = index;
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid $color-gray-200;
  list-style: none;
  gap: 4px;
}
</style>
