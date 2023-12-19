<script lang="ts" setup>
import Headline1 from '~/components/text/Headline1.vue';
import Headline2 from '~/components/text/Headline2.vue';

interface RegionResponse {
  id: number;
  name: string;
  thumbnailImage: string;
}
const { data: regions } = await useFetch<RegionResponse[]>(
  'http://localhost:8080/api/v1/regions',
);
</script>

<template>
  <div class="index-wrapper">
    <Headline1>✨ 이런 곳에서 일해보면 어때요?</Headline1>
    <div class="region-cards">
      <NuxtLink
        v-for="region in regions"
        :key="region.id"
        :style="{ backgroundImage: `url(${region.thumbnailImage})` }"
        :to="`/regions/${region.id}`"
        class="region-card"
      >
        <Headline2 class="name">{{ region.name }}</Headline2>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-wrapper {
  padding: 80px 20px;

  @media screen and (max-width: 768px) {
    padding: 52px 20px;
  }

  .region-cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 28px;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
      gap: 16px;
    }

    @media screen and (max-width: 375px) {
      margin-top: 24px;
    }

    .region-card {
      height: 245px;
      border-radius: 16px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      flex: 0 1 calc(25% - 84px);

      @media screen and (max-width: 768px) {
        gap: 16px;
        flex: 1 1 calc(25% - 48px);
      }

      @media screen and (max-width: 375px) {
        flex: 1 1 calc(50% - 16px);
      }
    }

    .name {
      color: $white;
      padding: 16px;
      margin: 0;
    }
  }
}
</style>
