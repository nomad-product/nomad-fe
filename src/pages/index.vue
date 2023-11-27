<script lang="ts" setup></script>

<template>
  <div class="index-wrapper">
    <h1>✨ 이런 곳에서 일해보면 어때요?</h1>
    <div class="region-cards">
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
      <div class="region-card">
        <h2 class="title">서울</h2>
      </div>
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
      background-image: url('https://media.istockphoto.com/id/1257892405/ko/%EC%82%AC%EC%A7%84/%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%9D%98-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B8%EA%B3%BC-%EC%8B%9C%EB%82%B4-%EB%A7%88%EC%B2%9C%EB%A3%A8%EB%8A%94-%EB%82%A8%ED%95%9C%EC%82%B0%EC%82%B0%EC%97%90%EC%84%9C-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EA%B2%BD%EC%B9%98%EC%99%80-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%B2%BD%EA%B4%80%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=FkJTDCjvNOUDStG9_YotvlgHmxd2Ga7y8WY3O6BblfI=');
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

    .title {
      padding: 16px;
      margin: 0;
    }
  }
}
</style>
