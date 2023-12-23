<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Display from '@/components/text/Display.vue';
import Body1 from '@/components/text/Body1.vue';
import Tabs from '~/components/tab/Tabs.vue';
import Reviews from '~/pages/regions/components/Reviews.vue';
import Body2 from '~/components/text/Body2.vue';

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
    <div class="region-review-tab">
      <Tabs :tabs="[{ label: '이용 리뷰' }]"></Tabs>
      <div class="review-rating-info">
        <Body2 class="title">총점</Body2>
        <Display>4.5</Display>
        <!-- TODO. 별점 star 구현-->
        <div>별별별별별</div>
        <span class="count">(1,100)</span>
      </div>
      <Reviews />
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

  .region-review-tab {
    .review-rating-info {
      padding: 44px 64px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: $color-gray-50;
      margin-top: 32px;
      margin-bottom: 44px;

      .title {
        color: $color-gray-500;
      }

      .count {
        color: $color-gray-500;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
