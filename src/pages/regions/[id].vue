<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Display from '~/components/text/Display.vue';
import Body1 from '~/components/text/Body1.vue';

interface RegionResponse {
  id: number;
  name: string;
  description: string;
  mainImage: string;
}

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: region } = await useFetch<RegionResponse>(
  `${runtimeConfig.public.apiBaseUrl}/api/v1/regions/${route.params.id}`,
);
</script>

<template>
  <div class="regions-show">
    <div class="region-detail">
      <div class="image-wrapper">
        <img :src="region?.mainImage" alt="지역 사진" />
      </div>
      <div class="info">
        <Display class="name">{{ region?.name }}</Display>
        <Body1 class="description">
          {{ region?.description }}
        </Body1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.regions-show {
  .region-detail {
    padding: 80px 20px;

    .image-wrapper {
      padding-bottom: 48px;

      @media screen and (max-width: 375px) {
        padding-bottom: 28px;
      }

      img {
        width: 100%;
        height: 324px;
        border-radius: 16px;

        @media screen and (max-width: 768px) {
          height: 324px;
        }

        @media screen and (max-width: 375px) {
          height: 168px;
        }
      }
    }

    .info {
      display: flex;
      gap: 20px;
      flex-direction: column;

      .description {
        color: $color-gray-500;
      }
    }
  }
}
</style>
