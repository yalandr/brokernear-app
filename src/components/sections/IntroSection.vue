<template>
    <!-- INTRO -->
    <section class="intro-section">
        <div class="container">
            <div class="intro-content-part">
                <h2 class="section-heading">
                    Maximize Your Investments with Brokernear
                </h2>
                <p class="regular-text">
                    When it comes to our reviews and recommendations, you can trust that they are entirely unbiased. We firmly believe in the importance of avoiding any potential conflicts of interest, which is why we never accept any shady payments or commissions from the providers featured on our site. Our sole focus is on providing you with the best possible deals, without any consideration for personal gain.
                </p>
                <RouterLink to="/about" class="btn action-btn flex center just-center">
                    Learn more
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/*==== INTRO ==============*/
.intro-section {
  padding: 5rem 0;
  position: relative;
}
.intro-section.about {
  padding: 8rem 0 10rem 0;
}
.intro-section::after {
  content: "";
  position: absolute;
  display: block;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background: url('../../assets/img/about-section-img.png') no-repeat 0 50% / cover;
}
.intro-content-part {
  max-width: 588px;
  position: relative;
  z-index: 3;
}
.intro-content-part .section-heading {
  font-size: 2.5rem;
}
.intro-content-part .regular-text {
  margin-bottom: 1.5rem;
}
.intro-content-part .action-btn {
  max-width: 172px;
  margin-top: 3rem;
}
.about .intro-content-part .action-btn {
  max-width: 220px;
}
.about .intro-content-part .section-heading {
  font-size: 3.5rem;
  line-height: 1;
}
.about .intro-content-part {
  max-width: 710px;
}
</style>