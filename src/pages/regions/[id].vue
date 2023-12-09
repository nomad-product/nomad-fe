<template>
  <div class="regions-show">
    <div class="region-detail">
      <div class="image-wrapper">
        <img
          alt="지역 사진"
          src="https://media.istockphoto.com/id/1257892405/ko/%EC%82%AC%EC%A7%84/%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%9D%98-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B8%EA%B3%BC-%EC%8B%9C%EB%82%B4-%EB%A7%88%EC%B2%9C%EB%A3%A8%EB%8A%94-%EB%82%A8%ED%95%9C%EC%82%B0%EC%82%B0%EC%97%90%EC%84%9C-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EA%B2%BD%EC%B9%98%EC%99%80-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%B2%BD%EA%B4%80%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=FkJTDCjvNOUDStG9_YotvlgHmxd2Ga7y8WY3O6BblfI="
        />
      </div>
      <div class="info">
        <h1 class="title">서울특별시</h1>
        <p class="description">
          북쪽으로 한라산 정상부인 백록담을 경계로 제주시, 동쪽과 서쪽 및
          남쪽으로 동중국해에 면한다. 12동, 3읍, 2면으로 이루어져 있고 서귀포시
          중앙로 308번지(서홍동 440-1)에 제1청사가, 서귀포시 시청로
          73번지(법환동 731)에 제2청사가 있다.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
