<template>
<!-- FOOTER -->
<footer class="footer">
            <div class="container flex just-between">
                <div class="logo-part">
                    <RouterLink to="/" class="footer-logo-link">
                        <img src="../assets/img/svg/logo.svg" alt="Logo" class="footer-logo" loading="lazy">
                    </RouterLink>
                    <p class="footer-copyright">
                        © <span class="year">2023</span> BrokersNear Group LLC. <br>
                        All rights reserved.
                    </p>
                </div>
                <div class="footer-links-part flex">
                    <div class="footer-links-group">
                        <h4>Main menu</h4>
                        <ul>
                            <li><a href="reviews.html">Broker Reviews</a></li>
                            <li><a href="best-brokers.html">Best Brokers</a></li>
                            <li><RouterLink to="/about">About</RouterLink></li>
                            <li><a href="contact.html">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Top Brokers</h4>
                        <ul>
                            <li><a href="brokers/exness.html">Exness</a></li>
                            <li><a href="brokers/capitalcom.html">Capital.com</a></li>
                            <li><a href="brokers/fxpro.html">FxPro</a></li>
                            <li><a href="brokers/naga.html">Naga</a></li>
                            <li><a href="brokers/primexbt.html">PrimeXBT</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Best brokers for</h4>
                        <ul>
                            <li><a href="best-brokers.html">Best brokers</a></li>
                            <li><a href="best-crypto-brokers.html">Best crypto brokers</a></li>
                            <li><a href="best-brokers-for-beginners.html">Best brokers for beginners</a></li>
                            <li><a href="best-stock-brokers.html">Best stock brokers</a></li>
                            <li><a href="best-forex-brokers.html">Best forex brokers</a></li>
                            <li><a href="best-trading-platform.html">Best trading platform</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="tech/privacy.html">Privacy Policy</a></li>
                            <li><a href="tech/terms.html">Terms and conditions</a></li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="news.html">News</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Additional</h4>
                        <ul>
                            <li><a href="tech/sitemap.html">Sitemap</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="careers.html">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style>
/*==== FOOTER =================================*/
.footer {
    padding: 40px 0 45px 0;
    background-color: #222222;
    color: #fff;
}
.footer-copyright {
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    color: #858585;
    margin: 0.5rem 0 2.25rem 0;
}
.footer-social-links-list li {
    margin-right: 1rem;
}
.footer-links-group {
    margin-left: 4.6rem;
}
.footer-links-group h4 {
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}
.footer-links-group ul li a {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #9F9F9F;
    margin-bottom: 12px;
    transition: all ease 0.15s;
}
.footer-links-group ul li a:hover {
    color: #dddcdc;
}
</style>