<template>
    <!-- FAQ -->
    <section class="faq-section bg-darker">
        <div class="container">
            <h2 class="section-heading">
                Frequently Asked Questions
            </h2>
            <div class="faq-content">
                <faqItem 
                    v-for="item in faqItems"
                    :key="item.question"
                    :faqItemData="item"
                />
            </div>
        </div>
    </section>
</template>

<script>
import FaqItem from '../UI-Elements/FaqItem.vue';

export default {
    components: { FaqItem },
    name: "FaqSection",
    props: {
        faqItems: {
            Type: Array
        }
    }
}
</script>

<style>
/*==== FAQ SECTION ===========*/
.faq-section {
    padding: 4rem 0;
    background-color: #f5f5f5;
}
</style>