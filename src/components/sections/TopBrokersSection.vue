<template>
    <!-- TOP BROKERS -->
    <section class="top-brokers-section">
        <div class="container">
            <h2 class="section-heading">
                Top Brokers 
            </h2>
            <div class="cards-wrapper flex just-between">
                <TopRatedCard 
                    v-for="topCard in topRatedCards" 
                    :key="topCard.name"
                    :cardData="topCard"
                />
            </div>
        </div>
    </section>
</template>

<script>
import TopRatedCard from '../cards/TopRatedCard.vue';

export default {
    components: { TopRatedCard },
    data() {
        return {
            topRatedCards: [
                {
                    name: "Exness",
                    text: "Recommended for traders looking for broad market access and a professional trading environment",
                    imgPath: "brokers/exness.svg",
                    rating: 4.9,
                    websiteLink: "https://www.exness.com/",
                    reviewLink: "brokers/exness"
                },
                {
                    name: "FxPro",
                    text: "Recommended for forex and CFD traders looking for low fees and great deposit/withdrawal service",
                    imgPath: "brokers/fxpro.svg",
                    rating: 5.0,
                    websiteLink: "https://www.fxpro.com/",
                    reviewLink: "brokers/fxpro"
                },
                {
                    name: "PrimeXBT",
                    text: "Recommended for investors and traders looking for a great trading platform and solid research",
                    imgPath: "brokers/primexbt.svg",
                    rating: 4.8,
                    websiteLink: "https://primexbt.com/",
                    reviewLink: "brokers/primexbt"
                },
            ]
        }
    }
}
</script>

<style>
/*==== TOP BROKERS =================*/
.top-brokers-section {
    padding: 4rem 0;
    background-color: #F5F5F5;
}
.section-heading .selected-country {
    color: #8B8B8B;
    text-decoration: underline;
}
.selected-country {
    white-space: nowrap;
}
</style>