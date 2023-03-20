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
                    :cardData="card.listItems"
                />
                <!-- <div class="card best-broker-card">
                    <div class="card-header flex center">
                        Best stock brokers
                    </div>
                    <div class="card-content">
                        <ul class="card-list">
                            <li class="card-list-item">
                                <a href="brokers/exness.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">1</div>
                                        <img src="../../assets/img/brokers/exness.svg" width="48" height="48" alt="Exness" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Exness</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/capitalcom.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">2</div>
                                        <img src="../../assets/img/brokers/capital.svg" width="48" height="48" alt="Capital" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Capital</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/fxpro.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">3</div>
                                        <img src="../../assets/img/brokers/fxpro.svg" width="48" height="48" alt="FxPro" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">FxPro</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/naga.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">4</div>
                                        <img src="../../assets/img/brokers/naga.svg" width="48" height="48" alt="Naga" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Naga</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/primexbt.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">5</div>
                                        <img src="../../assets/img/brokers/primexbt.svg" width="48" height="48" alt="PrimeXBT" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">PrimeXBT</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card best-broker-card">
                    <div class="card-header flex center">
                        Best forex brokers
                    </div>
                    <div class="card-content">
                        <ul class="card-list">
                            <li class="card-list-item">
                                <a href="brokers/naga.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">1</div>
                                        <img src="../../assets/img/brokers/naga.svg" width="48" height="48" alt="Naga" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Naga</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/fxpro.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">2</div>
                                        <img src="../../assets/img/brokers/fxpro.svg" width="48" height="48" alt="FxPro" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">FxPro</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/exness.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">3</div>
                                        <img src="../../assets/img/brokers/exness.svg" width="48" height="48" alt="Exness" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Exness</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/capitalcom.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">4</div>
                                        <img src="../../assets/img/brokers/capital.svg" width="48" height="48" alt="Capital" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Capital</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/primexbt.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">5</div>
                                        <img src="../../assets/img/brokers/primexbt.svg" width="48" height="48" alt="PrimeXBT" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">PrimeXBT</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card best-broker-card">
                    <div class="card-header flex center">
                        Best crypto brokers
                    </div>
                    <div class="card-content">
                        <ul class="card-list">
                            <li class="card-list-item">
                                <a href="brokers/capitalcom.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">1</div>
                                        <img src="../../assets/img/brokers/capital.svg" width="48" height="48" alt="Capital" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Capital</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/naga.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">2</div>
                                        <img src="../../assets/img/brokers/naga.svg" width="48" height="48" alt="Naga" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Naga</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/exness.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">3</div>
                                        <img src="../../assets/img/brokers/exness.svg" width="48" height="48" alt="Exness" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">Exness</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/fxpro.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">4</div>
                                        <img src="../../assets/img/brokers/fxpro.svg" width="48" height="48" alt="FxPro" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">FxPro</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                            <li class="card-list-item">
                                <a href="brokers/primexbt.html" class="broker-link flex center just-between">
                                    <div class="flex center">
                                        <div class="circle-number flex center just-center">5</div>
                                        <img src="../../assets/img/brokers/primexbt.svg" width="48" height="48" alt="PrimeXBT" class="broker-logo" loading="lazy">
                                        <h4 class="broker-name">PrimeXBT</h4>
                                    </div>
                                    <img src="../../assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> -->
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
                            imgPath: "",
                            reviewLink: ""
                        },
                        {
                            number: 2,
                            name: "Capital",
                            imgPath: "",
                            reviewLink: ""
                        },
                    ]
                },
                {
                    title: "Best forex brokers",
                    listItems: [
                        {
                            number: 1,
                            name: "Exness",
                            imgPath: "",
                            reviewLink: ""
                        },
                        {
                            number: 2,
                            name: "Capital",
                            imgPath: "",
                            reviewLink: ""
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