<template>
    <!-- HERO -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="main-heading">
                    Not sure which broker to choose?
                </h1>
                <p class="section-text">
                    Save hours of dull research by answering a few simple questions. Find the right broker in seconds!
                </p>
                <p class="section-text">
                    Let's start with selecting the country you live in!
                </p>
                <div class="hero-action-panel flex center">
                    <RouterLink to="/reviews" class="btn action-btn flex center just-center">
                        Find my broker 
                        <img src="../../assets/img/svg/white-arrow-right.svg" width="14" height="13" alt="Arrow down" class="arrow-down-icon" loading="lazy">
                    </RouterLink>
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
/*==== HERO ========================*/
.hero-section {
    padding: 6.25rem 0;
    background: #FDFDFD url('../../assets/img/hero-bg.png') no-repeat center / cover;
}
.hero-content {
    max-width: 710px;
}
.main-heading {
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 1;
    color: #222222;
    margin-bottom: 2rem;
}
.hero-content .section-text {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #777777;
    margin-bottom: 1rem;
}
.hero-action-panel {
    margin-top: 2.5rem;
}
.custom-select {
    min-width: 243px;
    border: 1px solid #C8C8C8;
    border-radius: 4px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #777777;
    padding: 12px 20px 12px 16px;
    cursor: pointer;
    margin-right: 1.5rem;
    position: relative;
}
.options-list {
    position: absolute;
    left: 0;
    bottom: -260%;
    z-index: 5;
    background-color: #FDFDFD;
    border-radius: 4px;
    overflow: hidden;
    display: none;
}
.options-list.opened {
    display: block;
}
.options-list-item {
    min-width: 243px;
    border: 1px solid #C8C8C8;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #777777;
    padding: 8px 20px 8px 16px;
    cursor: pointer;
    transition: 0.2s;
}
.options-list-item:hover {
    background-color: rgb(240, 237, 237);
}
.hero-action-panel .action-btn {
    min-width: 220px;
} 
.hero-action-panel .action-btn .arrow-down-icon {
    margin-left: 12px;
}
</style>