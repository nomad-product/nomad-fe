<template>
  <div class="reviews">
    <div class="header">
      <Subtitle2>이용 리뷰</Subtitle2>
      <!-- TODO. 리뷰 쓰기 구현 -->
      <button class="review-create-button">
        <Subtitle2 class="title"> 리뷰 쓰기</Subtitle2>
      </button>
    </div>
    <Review
      v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      :key="index"
    ></Review>

    <!-- TODO. PageNation 구현 -->
  </div>
</template>

<script lang="ts" setup>
import Review from '~/pages/regions/components/Review.vue';
import Subtitle2 from '~/components/text/Subtitle2.vue';
</script>

<style lang="scss" scoped>
.reviews {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    gap: 16px;
    margin-bottom: 16px;

    .review-create-button {
      display: flex;
      padding: 8px 20px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 8px;
      background: $color-primary;

      .title {
        color: $color-white;
      }
    }
  }
}
</style>
