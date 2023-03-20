<template>
    <li class="news-categories-list-item flex center">
        <div class="circle-number flex center just-center">{{NewsCategoriesListItemData.number}}</div>
        <h4 class="category-name">{{NewsCategoriesListItemData.name}}</h4>
    </li>
</template>

<script>
export default {
    name: "NewsCategoriesListItem",
    props: {
        NewsCategoriesListItemData: {
            Type: Object
        }
    }
}
</script>

<style>
.news-categories-list-item {
  margin-bottom: 1.5rem;
  border-radius: 100px;
  cursor: pointer;
}
.news-categories-list-item:hover {
  background-color: #F5F5F5;
}
.news-categories-list-item .circle-number {
  margin-right: 12px;
}
.category-name {
  font-size: 14px;
  line-height: 1.5;
  color: #222222;
}
</style>