<template>
    <!-- LATEST NEWS -->
    <section class="latest-news-section">
        <div class="container">
            <h2 class="section-heading">
                Latest news
            </h2>
            <div class="news-wrapper flex just-between">
                <TopNewsCard 
                    :topNewsList="topNewsList"
                />
                <NewslineCard 
                    :newslineList="newslineList"
                />
                <NewsCategoriesCard 
                    :newsCategoriesList="newsCategoriesList"
                />
            </div>
        </div>
    </section>
</template>

<script>
import NewslineCard from '../cards/NewslineCard.vue';
import TopNewsCard from '../cards/TopNewsCard.vue';
import NewsCategoriesCard from '../cards/NewsCategoriesCard.vue';

export default {
    name: "LatestNewsSection",
    components: { 
        TopNewsCard, 
        NewslineCard, 
        NewsCategoriesCard 
    },
    data() {
        return {
            topNewsList: [
                {
                    title: "The Biotech Sector Is Hot, But These 3 Stocks Are Worth The Investment",
                    date: "Today, 08:21",
                    imgPath: "news/The-Biotech-Sector-Is-Hot-But-These-3-Stocks-Are-Worth-The-Investment-001.jpg",
                    imgWidth: "68",
                    imgHeight: "68",
                    linkPath: "news/The-Biotech-Sector-Is-Hot-But-These-3-Stocks-Are-Worth-The-Investment",
                },
                {
                    title: " The Best Forex Trading Strategies That Work ",
                    date: "Yesterday, 16:05",
                    imgPath: "news/The-Best-Forex-Trading-Strategies-That-Work-001.jpg",
                    imgWidth: "68",
                    imgHeight: "68",
                    linkPath: "news/The-Best-Forex-Trading-Strategies-That-Work",
                },
                {
                    title: "3 Blue-Chip Stocks To Buy For A Diversified Portfolio",
                    date: "Yesterday, 11:18",
                    imgPath: "news/3-Blue-Chip-Stocks-To-Buy-For-A-Diversified-Portfolio-001.jpg",
                    imgWidth: "68",
                    imgHeight: "68",
                    linkPath: "news/3-Blue-Chip-Stocks-To-Buy-For-A-Diversified-Portfolio"
                },
            ],
            newslineList: [
                {
                    title: "The Biotech Sector Is Hot, But These 3 Stocks Are Worth The Investment",
                    date: "Today, 08:21",
                    previewText: "The biotech sector has been one of the hottest areas of the stock market in recent years. According to a report by Grand View Research, the global biotechnology market size was valued at USD 729.5 billion in 2020 and is expected to grow at a compound annual growth rate (CAGR) of 15.5% from 2021 to 2028.",
                    imgPath: "news/The-Biotech-Sector-Is-Hot-But-These-3-Stocks-Are-Worth-The-Investment-001.jpg",
                    imgWidth: "193",
                    imgHeight: "120",
                    linkPath: "news/The-Biotech-Sector-Is-Hot-But-These-3-Stocks-Are-Worth-The-Investment",
                },
                {
                    title: "3 Blue-Chip Stocks To Buy For A Diversified Portfolio",
                    date: "Yesterday, 11:16",
                    previewText: "As an investor, it's crucial to have a diversified portfolio to minimize risk and maximize returns. One way to achieve this is by including blue-chip stocks in your investment mix. Blue-chip stocks are shares of well-established companies with a long track record of steady growth, consistent dividends, and a strong balance sheet. Here are three blue-chip stocks to buy for a diversified portfolio.",
                    imgPath: "news/3-Blue-Chip-Stocks-To-Buy-For-A-Diversified-Portfolio-001.jpg",
                    imgWidth: "193",
                    imgHeight: "120",
                    linkPath: "news/3-Blue-Chip-Stocks-To-Buy-For-A-Diversified-Portfolio",
                },
            ],
            newsCategoriesList: [
                {
                    number: 1,
                    name: "Cryptocurrency",
                },
                {
                    number: 2,
                    name: "Regulation",
                },
                {
                    number: 3,
                    name: "Forex",
                },
                {
                    number: 4,
                    name: "Mining",
                },
                {
                    number: 5,
                    name: "Stock market",
                },
                {
                    number: 6,
                    name: "Economy",
                },
            ]
        }
    }
}
</script>

<style>
/*==== LATEST NEWS ================*/
.latest-news-section {
  padding: 4rem 0;
}
.latest-news-section.news-page {
  padding: 0 0 4rem 0;
}
</style>