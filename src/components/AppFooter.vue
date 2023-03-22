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
                            <li><RouterLink to="/reviews">Broker Reviews</RouterLink></li>
                            <li><RouterLink to="/best-brokers">Best Brokers</RouterLink></li>
                            <li><RouterLink to="/about">About</RouterLink></li>
                            <li><RouterLink to="/contact">Contacts</RouterLink></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Top Brokers</h4>
                        <ul>
                            <li><RouterLink to="brokers/exness">Exness</RouterLink></li>
                            <li><RouterLink to="brokers/capitalcom">Capital.com</RouterLink></li>
                            <li><RouterLink to="brokers/fxpro">FxPro</RouterLink></li>
                            <li><RouterLink to="brokers/naga">Naga</RouterLink></li>
                            <li><RouterLink to="brokers/primexbt">PrimeXBT</RouterLink></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Best brokers for</h4>
                        <ul>
                            <li><RouterLink to="best-brokers">Best brokers</RouterLink></li>
                            <li><RouterLink to="best-crypto-brokers">Best crypto brokers</RouterLink></li>
                            <li><RouterLink to="best-brokers-for-beginners">Best brokers for beginners</RouterLink></li>
                            <li><RouterLink to="best-stock-brokers">Best stock brokers</RouterLink></li>
                            <li><RouterLink to="best-forex-brokers">Best forex brokers</RouterLink></li>
                            <li><RouterLink to="best-trading-platform">Best trading platform</RouterLink></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Information</h4>
                        <ul>
                            <li><RouterLink to="tech/privacy">Privacy Policy</RouterLink></li>
                            <li><RouterLink to="tech/terms">Terms and conditions</RouterLink></li>
                            <li><RouterLink to="team">Our Team</RouterLink></li>
                            <li><RouterLink to="news">News</RouterLink></li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4>Additional</h4>
                        <ul>
                            <li><RouterLink to="tech/sitemap">Sitemap</RouterLink></li>
                            <li><RouterLink to="faq">FAQ</RouterLink></li>
                            <li><RouterLink to="careers">Careers</RouterLink></li>
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