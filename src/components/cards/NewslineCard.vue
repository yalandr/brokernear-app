<template>
    <div class="card newsline-card">
        <div class="card-header">
            <h4 class="news-card-heading flex center just-between">
                Newsline 
                <button class="update-btn flex center">
                    <img src="../../assets/img/svg/grey-update-icon.svg" width="15" height="15" alt="Update" class="update-icon" loading="lazy"> 
                    Update
                </button>
            </h4>
        </div>
        <div class="card-content">
            <ul class="news-list">
                <NewsListItem 
                    v-for="item in newslineList"
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
    name: "NewslineCard",
    components: { NewsListItem },
    props: {
        newslineList: {
            Type: Array
        }
    }
}
</script>

<style>
.newsline-card {
  width: 49%;
  max-width: 710px;
}
.update-btn {
  background: transparent;
  border: none;
  font-size: 14px;
  color: #8B8B8B;
}
.update-icon {
  margin-right: 8px;
}
.newsline-card .card-content,
.news-categories-card .card-content {
  padding: 24px 30px;
}
</style>