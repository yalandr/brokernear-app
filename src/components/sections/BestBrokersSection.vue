<template>
    <!-- BEST BROKERS -->
    <section class="best-brokers-section">
        <div class="container">
            <h2 class="section-heading">
                Best Brokers
            </h2>
            <div class="cards-wrapper flex just-between">
                <BestBrokersCard 
                    v-for="card in bestBrokersCards"
                    :key="card.title"
                    :cardData="card"
                />
            </div>
        </div>
    </section>
</template>

<script>
import BestBrokersCard from '../cards/BestBrokersCard.vue';

export default {
    name: 'BestBrokerSection',
    components: {
        BestBrokersCard
    },
    data() {
        return {
            bestBrokersCards: [
                {
                    title: "Best stock brokers",
                    listItems: [
                        {
                            number: 1,
                            name: "Exness",
                            imgPath: "brokers/exness.svg",
                            reviewLink: "brokers/exness"
                        },
                        {
                            number: 2,
                            name: "Capital",
                            imgPath: "brokers/capital.svg",
                            reviewLink: "brokers/capital"
                        },
                        {
                            number: 3,
                            name: "FxPro",
                            imgPath: "brokers/fxpro.svg",
                            reviewLink: "brokers/fxpro"
                        },
                        {
                            number: 4,
                            name: "Naga",
                            imgPath: "brokers/naga.svg",
                            reviewLink: "brokers/naga"
                        },
                        {
                            number: 5,
                            name: "PrimeXBT",
                            imgPath: "brokers/primexbt.svg",
                            reviewLink: "brokers/primexbt"
                        },
                    ]
                },
                {
                    title: "Best forex brokers",
                    listItems: [
                        {
                            number: 1,
                            name: "Naga",
                            imgPath: "brokers/naga.svg",
                            reviewLink: "brokers/naga"
                        },
                        {
                            number: 2,
                            name: "FxPro",
                            imgPath: "brokers/fxpro.svg",
                            reviewLink: "brokers/fxpro"
                        },
                        {
                            number: 3,
                            name: "Exness",
                            imgPath: "brokers/exness.svg",
                            reviewLink: "brokers/exness"
                        },
                        {
                            number: 4,
                            name: "Capital",
                            imgPath: "brokers/capital.svg",
                            reviewLink: "brokers/capital"
                        },
                        {
                            number: 5,
                            name: "PrimeXBT",
                            imgPath: "brokers/primexbt.svg",
                            reviewLink: "brokers/primexbt"
                        },
                    ]
                },
                {
                    title: "Best crypto brokers",
                    listItems: [
                        {
                            number: 1,
                            name: "Capital",
                            imgPath: "brokers/capital.svg",
                            reviewLink: "brokers/capital"
                        },
                        {
                            number: 2,
                            name: "Naga",
                            imgPath: "brokers/naga.svg",
                            reviewLink: "brokers/naga"
                        },
                        {
                            number: 3,
                            name: "Exness",
                            imgPath: "brokers/exness.svg",
                            reviewLink: "brokers/exness"
                        },
                        {
                            number: 4,
                            name: "FxPro",
                            imgPath: "brokers/fxpro.svg",
                            reviewLink: "brokers/fxpro"
                        },
                        {
                            number: 5,
                            name: "PrimeXBT",
                            imgPath: "brokers/primexbt.svg",
                            reviewLink: "brokers/primexbt"
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
/*==== BEST BROKERS =================*/
.best-brokers-section {
  padding: 4rem 0;
}
.best-broker-card {
  width: 33%;
  max-width: 467px;
}
.best-broker-card .card-header {
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 800;
  font-size: 1.375rem;
  color: #222222;
}
</style>