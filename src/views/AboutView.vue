<template>
  <main class="main">
    <BreadcrumbsContainer 
        :breadcrumbsItems="breadcrumbsItems"
    />
    <!-- ABOUT -->
    <section class="about-section bg-light upper">
        <div class="container">
            <h1 class="section-heading">
                About us
            </h1>
            <p class="section-text">
                Our team of financial experts specializes in evaluating brokers, digital banks, and other financial providers so that you don't have to explore the complex financial landscape. We understand that financial decisions can be challenging, and that's why we are committed to being your reliable safari guide. Our team diligently analyzes the market to identify the most competitive offers and top performers, providing you with insightful and comprehensive information on everything from brokerage services to digital banking.
            </p>
        </div>
    </section>

    <StatsSection />
    <IntroSection />
    <SubscribeSection />
  </main>
</template>

<script>
import BreadcrumbsContainer from '../components/sections/BreadcrumbsContainer.vue';
import IntroSection from '../components/sections/IntroSection.vue';
import StatsSection from '../components/sections/StatsSection.vue';
import SubscribeSection from '../components/sections/SubscribeSection.vue';

export default {
  components: { SubscribeSection, BreadcrumbsContainer, StatsSection, IntroSection },
  data() {
    return {
      breadcrumbsItems: [
        {
          link: "/",
          linkClass: "breadcrumbs-item-link",
          name: "Home"
        },
        {
          link: "/about",
          linkClass: "breadcrumbs-item-link current",
          name: "About"
        },
      ]
    }
  }
}
</script>

<style>

</style>
