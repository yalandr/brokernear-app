<template>
    <div class="faq-item">
        <button class="faq-question" @click="openFaqItem" :class="{ active: isActive }">
            {{ faqItemData.question }}
        </button>
        <div class="faq-answer">
            <p>
                {{ faqItemData.answer }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FaqItem",
    props: {
        faqItemData: {
            Type: Object
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        openFaqItem() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
.faq-item {
    margin-bottom: 0.5rem;
}
.faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    color: #222222;
    font-weight: 700;
    font-family: var(--font-primary);
    font-size: 18px;
    cursor: pointer;
    padding: 10px 24px;
    width: 100%;
    text-align: left;
    border: 1px solid #EAEAEA;
    border-radius: 4px;
    outline: none;
    transition: 0.2s;
}
.faq-question.active {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
}
.faq-answer {
    padding: 0 20px;
    background-color: #FFF;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    border-radius: 0 0 4px 4px;
    border: 1px solid #EAEAEA;
    border-top: none;
}
.faq-answer p {
    padding: 1rem 2rem 1.5rem 1rem;
    color: #555555;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 2;
}
.faq-question:after {
    content: '+';
    font-size: 13px;
    float: right;
    margin-left: 5px;
    font-size: 2rem;
    font-weight: 300;
}
.faq-question.active:after {
    content: "-";
    font-size: 2rem;
    font-weight: 300;
}
.faq-question.active + .faq-answer {
    max-height: unset;
}
</style>