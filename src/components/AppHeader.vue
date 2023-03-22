<template>
    <!-- HEADER -->
    <header class="header">
        <div class="container flex center">
            <RouterLink to="/" class="header-logo-link">
                <img src="../assets/img/svg/logo.svg" alt="Logo" class="header-logo" loading="lazy">
            </RouterLink>
            <div class="header-panel">
                <div class="header-panel-upper flex center just-between">
                    <p class="header-text">
                        Read online broker reviews, view category ratings and compare brokers
                    </p>
                    <!-- <div class="header-search-bar">
                        <input type="text" placeholder="Enter broker title" class="header-search-input">
                    </div> -->
                </div>
                <div class="header-panel-lower flex just-between">
                    <nav class="navigation">
                        <ul class="nav-list flex center">
                            <li class="nav-list-item">
                                <RouterLink to="/reviews" class="nav-list-item-link">
                                    Brokers Reviews
                                </RouterLink>
                            </li>
                            <li class="nav-list-item dropdown">
                                    Best Brokers 
                                    <img src="../assets/img/svg/white-arrow-down.svg" width="12" height="7" alt="Arrow down" class="arrow-down-icon">
                                    <ul class="header-dropdown-menu">
                                        <li class="header-dropdown-menu-item">
                                            <a href="best-crypto-brokers.html" class="header-dropdown-menu-item-link">
                                                Best crypto brokers
                                            </a>
                                        </li>
                                        <li class="header-dropdown-menu-item">
                                            <a href="best-forex-brokers.html" class="header-dropdown-menu-item-link">
                                                Best Forex brokers
                                            </a>
                                        </li>
                                        <li class="header-dropdown-menu-item">
                                            <a href="best-stock-brokers.html" class="header-dropdown-menu-item-link">
                                                Best stock brokers
                                            </a>
                                        </li>
                                        <li class="header-dropdown-menu-item">
                                            <a href="best-brokers-for-beginners.html" class="header-dropdown-menu-item-link">
                                                Best brokers for beginners
                                            </a>
                                        </li>
                                        <li class="header-dropdown-menu-item">
                                            <a href="best-trading-platform.html" class="header-dropdown-menu-item-link">
                                                Best trading platform
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            <li class="nav-list-item">
                                <RouterLink to="/about" class="nav-list-item-link">
                                    About
                                </RouterLink>
                            </li>
                            <li class="nav-list-item">
                                <RouterLink to="/contact" class="nav-list-item-link">
                                    Contacts
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-auth-section flex center">
                        <!-- <a href="javascript:void(0)" class="header-auth-link log-in">
                            Log in
                        </a>
                        <a href="javascript:void(0)" class="header-auth-link sign-up">
                            Sign up
                        </a> -->
                    </div>
                </div>
            </div>
            <div class="header-menu-btn-wrapper">
                <img src="../assets/img/svg/white-menu-burger.svg" width="24" height="16" alt="Menu" class="header-menu-btn-icon" loading="lazy" aria-label="Open Menu">
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
/*==== HEADER ================*/
.header {
    background-color: var(--header-bg);
    color: var(--header-text-color);
}
.header-logo,
.footer-logo {
    max-width: 10rem;
    margin-right: 3.3rem;
    height: auto;
}
.header-panel {
    width: 100%;
    border-left: 1px solid #494949;
    height: 100%;
}
.header-panel-upper {
    padding: 1rem 0 1rem 2rem;
    border-bottom: 1px solid #494949;
    position: relative;
}
.header-panel-upper::after {
    content: "";
    position: absolute;
    z-index: 3;
    bottom: -1px;
    right: -600px;
    height: 1px;
    background-color: #494949;
    width: 600px;
}
.header-text {
    font-weight: 400;
    font-size: 14px;
    color: #858585;
}
.header-search-input {
    min-height: 32px;
    padding: 7px 16px;
    font-weight: 400;
    font-size: 12px;
    border: none;
    width: 290px;
    background-color: #777;
    background-image: url('../assets/img/svg/white-search.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 98% 50%;
    background-color: transparent;
    transition: all ease 0.15s;
}
.header-search-input::-webkit-input-placeholder {
    color: var(--header-bg);
}
.header-search-input::-moz-placeholder {
    color: var(--header-bg);
}
.header-search-input:-ms-input-placeholder {
    color: var(--header-bg);
}
.header-search-input::-ms-input-placeholder {
    color: var(--header-bg);
}
.header-search-input::placeholder {
    color: var(--header-bg);
}
.header-search-input:focus {
    background-color: #fff;
    color: #222;
    background-image: url('../assets/img/svg/grey-search.svg');
}
.nav-list {
    padding: 15px 0;
    position: relative;
}
.nav-list-item {
    margin: 0 0 0 2rem;
    font-size: 0.875rem;
    font-weight: 800;
    cursor: pointer;
    transition: all ease 0.15s;
}
.nav-list-item:hover {
    color: #94e8a1;
}
.nav-list-item.active {
    color: var(--active-link-color);
}
.nav-list-item .arrow-down-icon {
    margin-left: 7px;
    transition: all ease 0.2s;
}
.nav-list-item .arrow-down-icon.active {
    transform: rotateZ(180deg);
}
.nav-list-item.dropdown {
    position: relative;
}
.header-dropdown-menu {
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: 0;
    transform: translateY(calc(100% + 0.9rem));
    background-color: rgba(34, 34, 34, 0.95);
    padding: 1rem 1.5rem;
    min-width: 256px;
    display: none;
}
.header-dropdown-menu.active {
    display: block;
}
.header-dropdown-menu-item {
    color: #fff;
    font-weight: 400;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}
.header-dropdown-menu-item:hover {
    color: #94e8a1;
}
.header-auth-link {
    font-weight: 800;
    font-size: 0.875rem;
}
.header-auth-link.sign-up {
    font-weight: 800;
    font-size: 0.875rem;
    color: var(--active-link-color);
    margin-left: 1.25rem;
}
.header-menu-btn-wrapper {
    display: none;
}
.mobile-menu {
    display: none;
}
</style>