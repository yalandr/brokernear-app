<template>
    <!-- MAIN -->
    <main class="main">
        <HeroSection />
        <TopBrokersSection 
            :topRatedCards="topBrokersList"
        />
        <BestBrokersSection />
        <IntroSection />
        <StatsSection />
        <LatestNewsSection />
        <PeopleSaySection />
        <!-- ABOUT -->
        <section class="about-section bg-light">
            <div class="container">
                <div class="vacancy-section">
                    <h2 class="section-heading">
                        The Five (5) Best Finance Online Brokers Near Me
                    </h2>
                    <p class="section-text">
                        There are thousands of global online investment brokers providing investment and trading services to their respective users. However, having an investment broker nearest your location is often exciting. How so? Nearby business brokers can adapt to economic conditions affecting your location, thus enabling you to make wise investment decisions without breaking the bank.
                    </p>
                    <p class="section-text">
                        Also, having a stock broker near you ensures trading known company stocks in your jurisdiction. While the benefits of having a forex broker closest to you are limitless, finding a suitable one can be challenging.
                    </p>
                    <p class="section-text">
                        Interestingly, this article reviews the five best finance brokers you can choose in 2023. Also, it discusses factors to consider when selecting an online business broker. Do have an insightful read.
                    </p>
                </div>

                <div class="vacancy-section">
                    <h2 class="section-heading">
                        Five Best Financial Brokers in 2023
                    </h2>
                    <p class="section-text">
                        Getting the best investment services from a trusted and reputable stock broker ensures you do not lose your funds and enjoy maximum earnings on its platform. Here are the top five investment brokers you can find near you.
                    </p>
                    <ol class="section-list ordered-list">
                        <li class="section-list-item">
                            <a href="javascript:void(0)" class="outer-link">
                                Interactive Brokers
                            </a>
                        </li>
                        <li class="section-list-item">
                            <a href="javascript:void(0)" class="outer-link">
                                Robinhood
                            </a>
                        </li>
                        <li class="section-list-item">
                            <RouterLink to="brokers/etoro" class="outer-link">
                                eToro
                            </RouterLink>
                        </li>
                        <li class="section-list-item">
                            <a href="javascript:void(0)" class="outer-link">
                                IG Markets
                            </a>
                        </li>
                        <li class="section-list-item">
                            <a href="javascript:void(0)" class="outer-link">
                                CMC Markets
                            </a>
                        </li>
                    </ol>
                </div>
                
                <div class="vacancy-section">
                    <h2 class="section-heading">
                        Interactive Brokers
                    </h2>
                    <p class="section-text">
                        This stock market broker is quite reputable and regulated to serve the trading needs of professional traders worldwide. With access to an extensive range of tradeable instruments, users get competitive spreads and low commissions on forex pairs and stocks.
                    </p>
                    <p class="section-text">
                        For professional traders, <a href="javascript:void(0)" class="outer-link">Interactive Brokers</a> is an excellent Environmental, Social, and Governance (ESG) investing platform, which can be accessed via its Trader Workstation (TWS). You can also access this broker through MetaTrader platforms and its mobile apps. 
                    </p>
                </div>

                <div class="hidden-text-to-show" :class="{'shown': isHiddenTextShown}">
                    <div class="vacancy-section">
                        <h2 class="section-heading">
                            Robinhood
                        </h2>
                        <p class="section-text">
                            <a href="javascript:void(0)" class="outer-link">Robinhood</a> is great for institutional and casual investors who want to trade the stock market without additional costs. This broker allows users to trade options, stocks, ETFs, and cryptocurrency at zero extra charges, which makes it stand out from other brokerage platforms. 
                        </p>
                        <p class="section-text">
                            This stock market broker offers no minimum deposits, and newbie traders can applaud its mobile platform for its simplicity. Also, Robinhood is best for mobile users who want to invest in stocks on the go without breaking the bank.
                        </p>
                        <p class="section-text">
                            A significant downside to this stock broker is its high fees ($100) when transferring your investment to another broker. Also, deposits over $1,000 take four to five business days to process, making it challenging to create an account on the platform and start investing.
                        </p>
                    </div>
                    
                    <div class="vacancy-section">
                        <h2 class="section-heading">
                            eToro
                        </h2>
                        <p class="section-text">
                            <RouterLink to="brokers/etoro" class="outer-link">eToro</RouterLink> is a worthy low-risk stock market broker for trading forex pairs and CFDs. This broker allows cryptocurrency trading and offers copy trading services for users who want to trade alongside professionals on its platform.
                        </p>
                        <p class="section-text">
                            eToro is fully regulated by the Australian Securities and Investment Commission (ASIC) and Financial Conduct Authority (FCA). These regulators help provide safe and secure investment services to its users. The broker is also mobile-compatible for trading on the go.
                        </p>
                        <p class="section-text">
                            However, a downside to this broker is its spreads and trading fees, which are significantly higher than the financial industry average (the spread on EUR/USD on eToro is 1 pip). However, the platform is a solid cryptocurrency and social copy trading option.
                        </p>
                    </div>
                    
                    <div class="vacancy-section">
                        <h2 class="section-heading">
                            IG Markets
                        </h2>
                        <p class="section-text">
                            <a href="javascript:void(0)" class="outer-link">IG markets</a> is a reputable and overall forex broker to consider in 2023. Thanks to its excellent research and trading tools, industry-standard education, and wide range of instruments, IG is accessible to global traders. 
                        </p>
                        <p class="section-text">
                            Several tier-1 regulators regulate this online broker, including Australian Securities and Investment Commission (ASIC), the Japanese Financial Services Authority (JFSA), the Swiss Financial Market Supervisory Authority (FINMA), and Financial Market Authority (FMA).
                        </p>
                        <p class="section-text">
                            Traders have access to close to 20,000 tradeable symbols around the world, including cryptocurrency. Its spreads are closer to the industry average, but its minimum initial deposit is £250. You can also access the broker through its mobile app and MetaTrader platforms.
                        </p>
                    </div>
                    
                    <div class="vacancy-section">
                        <h2 class="section-heading">
                            CMC Markets
                        </h2>
                        <p class="section-text">
                            <a href="javascript:void(0)" class="outer-link">CMC Markets</a> is a publicly traded investment broker regulated by top-tier regulators in providing low-risk trading and investment services across the globe. This online business broker boasts 12,000+ tradeable instruments, including forex and cryptocurrency. 
                        </p>
                        <p class="section-text">
                            CMC offers competitive pricing than other brokers, with EUR/USD offering a spread of 0.73 pips. It also delivers an excellent mobile app experience where global traders are equipped with several research tools, watchlists, news sections, and educational content. Traders can also utilize the MetaTrader platform to access this business broker.
                        </p>
                        <p class="section-text">
                            On this broker platform, traders can access industry-leading research on the global market to make intelligent trading decisions. 
                        </p>
                    </div>
                    
                    <div class="vacancy-section">
                        <h2 class="section-heading">
                            Final Thoughts
                        </h2>
                        <p class="section-text">
                            Perhaps you’re asking yourself, "what is the best forex broker near me?” Well, this article has reviewed the top online brokers you can invest in 2023. These financial brokers appeal to traders across the globe, thanks to their extensive range of instruments traded and competitive pricing and fees. They also provide quality research and education to guide traders in navigating the financial market.
                        </p>
                        <p class="section-text">
                            Ensure to check out their home pages and determine which works for your investment needs. In case of any help, you can reach out to the brokers’ customer support.
                        </p>
                    </div>
                </div>
                <button class="show-more-btn" @click="showMoreText">
                    Show <span v-if="!isHiddenTextShown">more</span> <span v-else>less</span>
                </button>
            </div>
        </section>
        <FaqSection 
            :faqItems="faqItems"
        />
        <SubscribeSection />
    </main>
</template>

<script>
    import HeroSection from '../components/sections/HeroSection.vue';
    import SubscribeSection from '../components/sections/SubscribeSection.vue';
    import FaqSection from '../components/sections/FaqSection.vue';
    import TopBrokersSection from '../components/sections/TopBrokersSection.vue';
    import BestBrokersSection from '../components/sections/BestBrokersSection.vue';
    import IntroSection from '../components/sections/IntroSection.vue';
    import StatsSection from '../components/sections/StatsSection.vue';
    import LatestNewsSection from '../components/sections/LatestNewsSection.vue';
    import PeopleSaySection from '../components/sections/PeopleSaySection.vue';

    export default {
        name: "HomeView",
        components: {
            HeroSection,
            SubscribeSection,
            FaqSection,
            TopBrokersSection,
            BestBrokersSection,
            IntroSection,
            StatsSection,
            LatestNewsSection,
            PeopleSaySection
        },
        data() {
            return {
                isHiddenTextShown: false,
                topBrokersList: [
                    {
                        name: "Exness",
                        text: "Recommended for traders looking for broad market access and a professional trading environment",
                        imgPath: "brokers/exness.svg",
                        rating: 4.9,
                        websiteLink: "https://www.exness.com/",
                        reviewLink: "brokers/exness"
                    },
                    {
                        name: "FxPro",
                        text: "Recommended for forex and CFD traders looking for low fees and great deposit/withdrawal service",
                        imgPath: "brokers/fxpro.svg",
                        rating: 5.0,
                        websiteLink: "https://www.fxpro.com/",
                        reviewLink: "brokers/fxpro"
                    },
                    {
                        name: "PrimeXBT",
                        text: "Recommended for investors and traders looking for a great trading platform and solid research",
                        imgPath: "brokers/primexbt.svg",
                        rating: 4.8,
                        websiteLink: "https://primexbt.com/",
                        reviewLink: "brokers/primexbt"
                    },
                ],
                faqItems: [
                    {
                        question: "What is the best online broker near me in 2023?",
                        answer: "The best online brokers you can trade with, regardless of location, are Interactive Brokers, Robinhood, IG, CMC Markets, and eToro. These brokers are reliable and offer top instruments traded across the globe. They are also mobile-compatible, so you can easily trade on the go."
                    },
                    {
                        question: "Are stock market brokers near me safe and legal?",
                        answer: "Many online brokers today are regulated by top-tier regulatory bodies like the Financial Conduct Authority (FCA), Swiss Financial Market Supervisory Authority (FINMA), Financial Markets Authority (FMA), and Australian Securities Investment (ASIC). These bodies ensure online brokers offer reliable trading services and low-risk investment services. The more regulators a business broker has, the more secure its platform becomes."
                    },
                    {
                        question: "What is the trusted investment broker near me?",
                        answer: "IG owns dozens of regulatory licenses from top-tier regulators around the world. These licenses ensure IG delivers quality and excellent stock trading services for all global traders. It is also a to-ranked forex broker in 2023."
                    },
                    {
                        question: "Which finance broker near me offers the best spread?",
                        answer: "CMC Markets and Robinhood hit the sweet spot for global traders who want to trade without incurring additional costs. The former provides industry-leading spreads that are reasonably priced for forex and cryptocurrency. The latter offers excellent stock trading at zero fees."
                    },
                ]
            }
        },
        methods: {
            showMoreText() {
                this.isHiddenTextShown = !this.isHiddenTextShown;
            }
        }
    }
</script>

