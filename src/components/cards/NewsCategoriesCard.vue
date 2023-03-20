<template>
    <div class="card news-categories-card">
        <div class="card-header">
            <h4 class="news-card-heading">
                News categories
            </h4>
        </div>
        <div class="card-content">
            <ul class="news-categories-list">
                <NewsCategoriesListItem 
                    v-for="item in newsCategoriesList"
                    :key="item.number"
                    :NewsCategoriesListItemData="item"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import NewsCategoriesListItem from '../UI-Elements/NewsCategoriesListItem.vue';

export default {
    name: "NewsCategoriesCard",
    components: {NewsCategoriesListItem},
    props: {
        newsCategoriesList: {
            Type: Array
        }
    }
}
</script>

<style>

</style>