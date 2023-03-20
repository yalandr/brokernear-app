<template>
    <div class="card best-broker-card">
        <div class="card-header flex center">
            Best Title
        </div>
        <div class="card-content">
            <ul class="card-list">
                <CardListItem 
                    v-for="cardListItem in cardListItems"
                    :key="cardListItem.name"
                    :CardListItemData="cardListItem"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import CardListItem from '../UI-Elements/CardListItem.vue'

export default {
    name: "BestBrokersCard",
    components: { CardListItem },
    props: {
        cardData: {
            Type: Array
        }
    },
    data() {
        return {
            cardListItems: []
        }
    }
}
</script>

<style>
.top-broker-card {
    width: 33%;
    max-width: 467px;
}
.top-broker-card .card-header {
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.5;
    color: #66B872;
} 
.top-broker-cup-icon {
    margin-right: 10px;
}
.top-broker-card .card-content {
    padding: 2rem;
    height: 88%;
}
.rating-holder {
    margin-left: 1.5rem;
}
.rating-holder .rating-star-icon {
    margin-right: 3px;
}
.rating-holder .rating-number {
    font-size: 13px;
    margin-left: 6px;
}
.card-content .regular-text {
    margin-top: 1.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #EDEDED;
    margin-bottom: 2rem;
    flex: 1 1 auto;
}
.card-link-light {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline;
    color: #747474;
    margin-left: 1.8rem;
}
.broker-name {
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #222222;
    margin-left: 1.25rem;
}
</style>