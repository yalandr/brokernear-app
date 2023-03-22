<template>
<!-- BROKER INTRODUCTION -->
<section class="broker-introduction-section">
    <div class="container flex center just-between">
        <div class="broker-introduction-content flex center just-between">
            <img :src="`src/assets/img/${brokerIntroductionData.img}`" width="150" height="150" alt="Logo" class="broker-logo-large" loading="lazy">
            <div class="broker-introduction-text-part">
                <img :src="`src/assets/img/${brokerIntroductionData.img}`" width="98" height="98" alt="Logo" class="broker-logo-large-mob" loading="lazy">
                <div class="name-and-rating flex center">
                    <h1 class="broker-name">{{brokerIntroductionData.name}}</h1>
                    <div class="rating-holder flex center">
                        <div class="rating-stars" :style="`--rating: ${brokerIntroductionData.rating}`"></div>
                        <div class="rating-number">{{brokerIntroductionData.rating}}</div>
                    </div>
                </div>
                <p class="section-text">
                    {{brokerIntroductionData.text}}
                </p>
            </div>
        </div>
        <div class="broker-introduction-action flex column center just-center">
            <RouterLink to="/reviews" class="btn action-btn flex center just-center">
                Find my broker 
                <img src="assets/img/svg/white-arrow-right.svg" style="margin-left:12px" width="14" height="13" alt="Arrow down" class="arrow-down-icon" loading="lazy">
            </RouterLink>
            <p class="disclaimer">
                New users only
            </p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "BrokerIntroductionSection",
    props: {
        brokerIntroductionData: {
            Type: Object
        }
    }
}
</script>

<style>

</style>