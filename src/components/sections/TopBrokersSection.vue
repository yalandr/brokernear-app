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
    props: {
        topRatedCards: {
            Type: Array
        }
    },
    data() {
        return {}
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