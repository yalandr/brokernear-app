<template>
    <!-- SUBSCRIBE -->
    <section class="subscribe-section">
        <div class="container flex center just-between">
            <h3 class="subscribe-heading">
                Subscribe to our email newsletter
            </h3>
            <form class="subscribe-form">
                <input type="text" placeholder="Enter your email" class="subscribe-form-input">
                <button class="action-btn">
                    Subscribe
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/*==== SUBSCRIBE SECTION =====================*/
.subscribe-section {
    background-color: #3F3F3F;
    padding: 2.5rem 0;
    position: absolute;
    width: 100%;
    bottom: 0;
}
.subscribe-heading {
    color: #FFFFFF;
    margin-bottom: 0; 
    font-size: 2rem;
}
.subscribe-form-input {
    background-color: #3F3F3F;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #E7E7E7;
    min-width: 380px;
    min-height: 48px;
    border: 1px solid #E7E7E7;
    padding: 2px 20px;
    border-radius: 4px;
    margin-right: 5px;
    margin-top: 4px;
    margin-bottom: 4px;
}
.subscribe-form-input::-webkit-input-placeholder {
    color: #E7E7E7;
}
.subscribe-form-input::-moz-placeholder {
    color: #E7E7E7;
}
.subscribe-form-input:-ms-input-placeholder {
    color: #E7E7E7;
}
.subscribe-form-input::-ms-input-placeholder {
    color: #E7E7E7;
}
.subscribe-form-input::placeholder {
    color: #E7E7E7;
}
.action-btn {
    padding: 12px 24px;
    min-width: 150px;
    min-height: 48px;
    background: #66B872;
    border-radius: 4px;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
}
.action-btn:active {
    transform: scale(0.98)
}
</style>