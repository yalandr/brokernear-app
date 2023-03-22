<template>
<li class="news-list-item">
    <RouterLink :to="NewsListItemData.linkPath" class="news-list-item-link flex center">
        <img :src="`src/assets/img/${NewsListItemData.imgPath}`" :width="NewsListItemData.imgWidth" :height="NewsListItemData.imgHeight" alt="News" class="news-list-item-img" loading="lazy">
        <div class="news-list-item-content">
            <h4 class="news-list-item-title">
                {{NewsListItemData.title}}
            </h4>
            <p class="news-list-item-date">
                {{NewsListItemData.date}}
            </p>
            <p class="news-list-item-description">
                {{NewsListItemData.previewText}}
            </p>
        </div>
    </RouterLink>
</li>
</template>

<script>
export default {
    name: "NewsListItem",
    props: {
        NewsListItemData: {
            Type: Object
        }
    }
}
</script>

<style>
.news-list-item {
  padding-bottom: 28px;
  border-bottom: 1px solid #EDEDED;
  margin-bottom: 28px;
}
.news-list-item:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
.news-list-item-content {
  margin-left: 1rem;
}
.news-list-item-title {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #222222;
  margin-bottom: 0.5rem;
}
.news-list-item-date {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #999999;
}
.news-list-item-description {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #555555;
  margin-top: 12px;
}
</style>