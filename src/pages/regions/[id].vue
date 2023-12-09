<script lang="ts" setup>
import { useRoute } from 'vue-router';

interface RegionResponse {
  id: number;
  name: string;
  description: string;
  mainImage: string;
}

const route = useRoute();

const { data: region } = await useFetch<RegionResponse>(
  `http://localhost:8080/api/v1/regions/${route.params.id}`,
);
</script>

<template>
  <div class="regions-show">
    <div class="region-detail">
      <div class="image-wrapper">
        <img :src="region?.mainImage" alt="지역 사진" />
      </div>
      <div class="info">
        <h1 class="title">{{ region?.name }}</h1>
        <p class="description">
          {{ region?.description }}
        </p>
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

      .title {
        color: #222;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .description {
        color: #9e9e9e;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }
}
</style>
