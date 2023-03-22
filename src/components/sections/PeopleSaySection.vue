<template>
    <!-- PEOPLE SAY -->
    <section class="people-say-section">
        <div class="container">
            <h2 class="section-heading">
                See what people are saying about BrokerNear
            </h2>
            <p class="regular-text">
                We aim to continuously improve, and every review helps us provide better experiences for everyone.
            </p>
            <div class="people-say-cards-wrapper flex just-between">
                <PeopleSayCard 
                    v-for="card in peopleSayData"
                    :key="card.title"
                    :PeopleSayCardData="card"
                />
            </div>
        </div>
    </section>
</template>

<script>
import PeopleSayCard from "../cards/PeopleSayCard.vue"

export default {
    name: "PeopleSaySection",
    components: { PeopleSayCard },
    data() {
        return {
            peopleSayData: [
                {
                    rating: 4.9,
                    title: "Fits my style perfectly",
                    quote: "Yo, Brokernear is the bomb. I was hella lost trying to choose an online broker, but this site made it easy. They got all the deets on fees, features, and user reviews that are straight-up fire. The broker I found through Brokernear is legit and fits my style perfectly. Thanks for making it, dudes",
                    userImg: "user-001.png",
                    userName: "Ashton Muse",
                    reviewTime: "16 minutes ago"
                },
                {
                    rating: 4.5,
                    title: "Incredibly helpful",
                    quote: "I found Brokernear to be an incredibly helpful resource in my search for an online broker. The site is well-organized and easy to navigate, with clear comparisons of fees and features. The user reviews provided additional insight into the brokers I was considering, and I ultimately found a broker that met my needs.",
                    userImg: "user-002.png",
                    userName: "Olivia Banks",
                    reviewTime: "22 minutes ago"
                },
                {
                    rating: 4.2,
                    title: "Brokernear is legit",
                    quote: "Brokernear is legit, man. I was so confused by all the online brokers out there, but this site made it a breeze. The interface is super user-friendly, and I appreciated being able to filter brokers by different criteria. And the reviews from other traders were clutch. The broker I found through Brokernear is great for my trading and makes the best strategy.",
                    userImg: "user-003.png",
                    userName: "Martin Greenwater",
                    reviewTime: "34 minutes ago"
                },
                {
                    rating: 4.8,
                    title: "Pleasantly surprised",
                    quote: "I must say, I was pleasantly surprised by Brokernear. My grandson recommended the site to me, and I found it to be well-organized and easy to understand. The ability to compare different brokers side by side was particularly helpful, as was the ability to read reviews from other users. The Brokernear concealer  is trustworthy and fits my needs perfectly.",
                    userImg: "user-004.png",
                    userName: "Lotty McDouglas",
                    reviewTime: "48 minutes ago"
                },
            ]
        }
    }

}
</script>

<style>
/*==== PEOPLE SAY ================*/
.people-say-section {
  padding: 4rem 0;
  background: url('../../assets/img/people-say-bg.png') no-repeat center / cover;
}
.people-say-card {
  padding: 20px;
  width: 24%;
  max-width: 345px;
}
.people-say-cards-wrapper {
  margin-top: 2.5rem;
}
.people-say-card .rating-stars {
  margin-bottom: 1rem;
}
.user-info {
  margin-top: 14px;
}
.user-portrait-img {
  border-radius: 100px;
}
.user-name {
  font-size: 14px;
  color: #7D7D7D;
  margin: 0 12px 0 8px;
}
.review-time {
  font-size: 14px;
  color: #B9B9B9;
}
</style>