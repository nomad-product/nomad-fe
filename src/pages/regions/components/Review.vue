<template>
  <div class="review">
    <div class="header">
      <div class="user-image">
        <img
          class="img-5"
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2398cb6e24a00e4324c93a7a5f36832b3a3d8614473fd38c97fa67bfa06c4075?apiKey=a77b6ddee78445a99c759d1934821238&"
        />
      </div>
      <div class="info">
        <div class="star-info">
          <img
            class="img-6"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5415ed29c26ffa147da6cf99f3954d5033ad4297b5eaf8b105e86c9cb2621da?apiKey=a77b6ddee78445a99c759d1934821238&"
          />
          <Subtitle3 class="star-count">5</Subtitle3>
        </div>
        <div class="review-info">
          <Body2 class="user-name">user1</Body2>
          <Body2 class="created-at">2022.02.04</Body2>
        </div>
      </div>
    </div>
    <Body14 class="content">
      제주도 한라산국립공원관리소는 1일부터 오는 8월 31일까지 입산 및 하산
      시간을 조정한다고 밝혔다.입산시간은 당초 오전 5시 30분에서 5시로
      앞당겨진다. 코스별 탐방시간도 연장된다. 이에 따라 하산시간은
      어리목·영실코스는 오후 3시까지, 윗세오름대피소는 오후 2시까지,
      성판악코스와 관음사코스는 오후 1시까지이다.제주도 한라산국립공원관리소는
      1일부터 오는 8월 31일까지 입산 및 하산 시간을 조정한다고 밝혔다.입산시간은
      당초 오전 5시 30분에서 5시로 앞당겨진다. 코스별 탐방시간도 연장된다. 이에
      따라 하산시간은 어리목·영실코스는 오후 3시까지, 윗세오름대피소는 오후
      2시까지, 성판악코스와 관음사코스는 오후 1시까지이다.제주도
      한라산국립공원관리소는 1일부터 오는 8월 31일까지 입산 및 하산 시간을
      조정한다고 밝혔다.입산시간은 당초 오전 5시 30분에서 5시로 앞당겨진다.
      코스별 탐방시간도 연장된다. 이에 따라 하산시간은 어리목·영실코스는 오후
      3시까지, 윗세오름대피소는 오후 2시까지, 성판악코스와 관음사코스는 오후
      1시까지이다.제주도 한라산국립공원관리소는 1일부터 오는 8월 31일까지 입산
      및 하산 시간을 조정한다고 밝혔다.입산시간은 당초 오전 5시 30분에서 5시로
      앞당겨진다. 코스별 탐방시간도 연장된다.
    </Body14>
  </div>
</template>

<script lang="ts" setup>
import Subtitle3 from '~/components/text/Subtitle3.vue';
import Body2 from '~/components/text/Body2.vue';
</script>

<style lang="scss" scoped>
.review {
  align-items: start;
  align-self: center;
  border-top: 1px solid $color-gray-200;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding-block: 28px;

  .header {
    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 16px;

      .star-info {
        align-items: center;
        display: flex;
        gap: 8px;

        .star-count {
          color: $color-gray-700;
        }
      }

      .review-info {
        align-items: center;
        display: flex;
        gap: 8px;

        .user-name {
          color: $color-gray-700;
        }

        .created-at {
          color: $color-gray-400;
        }
      }
    }
  }

  .content {
    align-self: stretch;
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: column;
    color: $color-gray-700;
  }
}

.img-5 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
  overflow: hidden;
  border-radius: 50%;
  max-width: 100%;
  margin: auto 0;
}
</style>
