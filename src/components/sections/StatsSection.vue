<template>
    <!-- STATS -->
    <section class="stats-section">
        <div class="container flex">
            <div class="stats-card">
                <div class="stats-card-upper flex center">
                    <img src="../../assets/img/svg/chat.svg" alt="Chat" class="stats-card-icon" loading="lazy">
                    <h4 class="stats-card-heading">
                        <span class="stats-value">
                            <span class="counter" data-to="16" data-stop="0">16</span>+
                        </span> million
                    </h4>
                </div>
                <div class="stats-card-lower">
                    Reviews on BrokerNear
                </div>
            </div>
            <div class="stats-card">
                <div class="stats-card-upper flex center">
                    <img src="../../assets/img/svg/desktop.svg" alt="Desktop" class="stats-card-icon" loading="lazy">
                    <h4 class="stats-card-heading">
                        <span class="stats-value">
                            <span class="counter" data-to="200" data-stop="0">200</span>+
                        </span>
                    </h4>
                </div>
                <div class="stats-card-lower">
                    Websites reviewed
                </div>
            </div>
            <div class="stats-card">
                <div class="stats-card-upper flex center">
                    <img src="../../assets/img/svg/people.svg" alt="people" class="stats-card-icon" loading="lazy">
                    <h4 class="stats-card-heading">
                        <span class="stats-value">
                            <span class="counter" data-to="7" data-stop="0">7</span>.8
                        </span> billion
                    </h4>
                </div>
                <div class="stats-card-lower">
                    Monthly impressions
                </div>
            </div>
            <div class="stats-card no-border">
                <div class="stats-card-upper flex center">
                    <img src="../../assets/img/svg/globe.svg" alt="globe" class="stats-card-icon" loading="lazy">
                    <h4 class="stats-card-heading">
                        <span class="stats-value">
                            <span class="counter" data-to="50" data-stop="0">50</span>+
                        </span>
                    </h4>
                </div>
                <div class="stats-card-lower">
                    Nationalities
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/*==== STATS =====================*/
.stats-section {
  padding: 3.6rem 0;
  background-color: #fff;
}
.stats-card {
  width: 24%;
  max-width: 300px;
  border-right: 1px solid #DCDCDC;
  margin-right: 4rem;
}
.stats-card-heading {
  font-size: 1.5rem;
  color: #222;
  margin-left: 20px;
}
.stats-value {
  font-size: 2.5rem;
}
.stats-card-lower {
  font-size: 1rem;
  color: #777777;
}
</style>