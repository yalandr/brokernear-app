<template>
    <div class="card people-say-card">
        <div class="rating-stars" :style="`--rating: ${PeopleSayCardData.rating}`"></div>
        <h4 class="people-say-card-heading">
            {{ PeopleSayCardData.title }}
        </h4>
        <p class="section-text">
            <q>
                {{ PeopleSayCardData.quote }}
            </q>
        </p>
        <div class="user-info flex center">
            <img :src="`src/assets/img/${PeopleSayCardData.userImg}`" width="24" height="24" alt="User" class="user-portrait-img" loading="lazy">
            <h4 class="user-name">{{ PeopleSayCardData.userName }}</h4>
            <p class="review-time">{{ PeopleSayCardData.reviewTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PeopleSayCard",
    props: {
        PeopleSayCardData: {
            Type: Object
        }
    }
}
</script>

<style>

</style>