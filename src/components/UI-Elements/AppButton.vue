<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {

}
</script>

<style>
/* BUTTON */
.btn {
    padding: 12px 24px;
    min-width: 150px;
    min-height: 48px;
    border-radius: 4px;
    font-family: 'Nexa';
    font-weight: 700;
    font-size: 1rem;
    border: 1px solid #9A9A9A;
    color: #9A9A9A;
    background-color: transparent;
    transition: 0.2s;
}
.btn.green-btn {
    background-color: var(--btn-color);
    border: 1px solid var(--btn-color);
    color: #fff;
}
.btn:active {
    transform: scale(0.98)
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