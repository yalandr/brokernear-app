<template>
    <!-- FAQ -->
    <section class="faq-section bg-darker">
        <div class="container">
            <h2 class="section-heading">
                FAQ
            </h2>
            <div class="faq-content">
                <div class="faq-item">
                    <button class="faq-question">
                        What is the best online broker near me in 2023?
                    </button>
                    <div class="faq-answer">
                        <p>
                            The best online brokers you can trade with, regardless of location, are Interactive Brokers, Robinhood, IG, CMC Markets, and eToro. These brokers are reliable and offer top instruments traded across the globe. They are also mobile-compatible, so you can easily trade on the go.
                        </p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        Are stock market brokers near me safe and legal?
                    </button>
                    <div class="faq-answer">
                        <p>
                            Many online brokers today are regulated by top-tier regulatory bodies like the Financial Conduct Authority (FCA), Swiss Financial Market Supervisory Authority (FINMA), Financial Markets Authority (FMA), and Australian Securities Investment (ASIC).
                            <br>
                            These bodies ensure online brokers offer reliable trading services and low-risk investment services. The more regulators a business broker has, the more secure its platform becomes.
                        </p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        What is the trusted investment broker near me?
                    </button>
                    <div class="faq-answer">
                        <p>
                            IG owns dozens of regulatory licenses from top-tier regulators around the world. These licenses ensure IG delivers quality and excellent stock trading services for all global traders. It is also a to-ranked forex broker in 2023.
                        </p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        Which finance broker near me offers the best spread?
                    </button>
                    <div class="faq-answer">
                        <p>
                            CMC Markets and Robinhood hit the sweet spot for global traders who want to trade without incurring additional costs. The former provides industry-leading spreads that are reasonably priced for forex and cryptocurrency. The latter offers excellent stock trading at zero fees.
                        </p>
                    </div>
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
/*==== FAQ SECTION ===========*/
.faq-section {
    padding: 4rem 0;
    background-color: #f5f5f5;
}
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
</style>