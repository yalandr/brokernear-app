<template>
    <div class="card top-news-card">
        <div class="card-header">
            <h4 class="news-card-heading">
                Top news
            </h4>
        </div>
        <div class="card-content">
            <ul class="news-list">
                <NewsListItem 
                    v-for="item in topNewsList"
                    :key="item.title"
                    :NewsListItemData="item"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import NewsListItem from '../UI-Elements/NewsListItem.vue';

export default {
    components: { NewsListItem },
    name: "TopNewsCard",
    props: {
        topNewsList: {
            Type: Array
        }
    }
}
</script>

<style>
.top-news-card,
.news-categories-card {
  width: 24%;
  max-width: 345px;
}
.widget-card .card-header {
  border-bottom: 0;
}
.top-news-card .card-content {
  padding: 28px 30px;
}
</style>