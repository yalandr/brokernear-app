<template>
    <div class="card top-broker-card">
        <div class="card-header flex center just-center">
            <img src="src/assets/img/svg/green-cup.svg" alt="green Cup" class="top-broker-cup-icon" loading="lazy">
            Top rated broker
        </div>
        <div class="card-content flex column">
            <div class="top-broker-main-info flex center">
                <img :src="`src/assets/img/${cardData.imgPath}`" width="63" height="63" :alt="cardData.name" class="top-broker-logo" loading="lazy">
                <div class="name-and-rating">
                    <h4 class="broker-name">{{ cardData.name }}</h4>
                    <RatingHolder :ratingValue="cardData.rating" />
                </div>
            </div>
            <p class="regular-text">
                {{ cardData.text }}
            </p>
            <div class="action-panel flex center just-center">
                <a :href="cardData.websiteLink" class="btn action-btn flex center just-center" target="_blank">
                    Visit broker 
                </a>
                <RouterLink :to="cardData.reviewLink" class="card-link-light">
                    Read review
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import RatingHolder from '../UI-Elements/RatingHolder.vue';

export default {
    components: {
        RatingHolder
    },
    props: {
        cardData: {
            Type: Object
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