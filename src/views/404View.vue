<template>
<!-- MAIN -->
<main class="main">

<BreadcrumbsContainer />

<!-- PAGE 404 -->
<div class="page-404">
    <div class="container flex column center just-center">
        <h1 class="main-heading">
            404
        </h1>
        <h3 class="subheading">
            Page not found
        </h3>
        <div class="grey-line-divider"></div>
        <p class="section-text">
            Something's not right here. We can't find the page you are looking for! <br>
            But don't worry!
        </p>
        <div class="btns-wrapper flex center just-center">
            <RouterLink to="/" class="btn">
                Home page
            </RouterLink>
            <RouterLink to="/reviews" class="btn action-btn">
                Find broker
            </RouterLink>
        </div>
    </div>
</div>

<SubscribeSection />
</main>
</template>

<script>
import BreadcrumbsContainer from '../components/sections/BreadcrumbsContainer.vue';
import SubscribeSection from '../components/sections/SubscribeSection.vue'

export default {
  components: { SubscribeSection, BreadcrumbsContainer },

}
</script>

<style>
/*==== PAGE 404 ===============================*/
.page-404 {
  padding: 5rem 0 10rem 0;
}
.page-404 .main-heading {
  font-weight: 900;
  font-size: 7.5rem;
  color: #222222;
}
.page-404 .subheading {
  font-size: 1.5rem;
  color: #222222;
}
.grey-line-divider {
  margin: 2.5rem 0;
  width: 100%;
  height: 1px;
  background-color: #DCDCDC;
}
.page-404 .section-text {
  text-align: center;
  margin-bottom: 2.5rem;
}
.page-404 .btns-wrapper {
  gap: 10px;
}

</style>