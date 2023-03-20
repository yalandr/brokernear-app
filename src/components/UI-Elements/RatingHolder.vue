<template>
    <div class="rating-holder flex center">
        <div class="rating-stars" :style="`--rating:${ratingValue}`"></div>
        <div class="rating-number">{{ratingValue}}</div>
    </div>
</template>

<script>
export default {
    name: "RatingHolder",
    props: {
        ratingValue: {
            Type: Number
        }
    }
}
</script>

<style>
.rating-holder {
    margin-left: 1.5rem;
}
.rating-holder .rating-star-icon {
    margin-right: 3px;
}
.rating-holder .rating-number {
    font-size: 13px;
    margin-left: 6px;
}
/* RATING STARS */
.rating-stars {
    --rating-percent: calc(var(--rating) / 5 * 100%);
	 display: inline-block;
	 font-size: var(--rating-star-size);
	 font-family: Times;
	 line-height: 1;
}
.rating-stars::before {
	 content: '🟊🟊🟊🟊🟊';
	 letter-spacing: 0.5px;
	 background: linear-gradient(90deg, var(--rating-star-background) var(--rating-percent), var(--rating-star-color) var(--rating-percent));
	 -webkit-background-clip: text;
	 -webkit-text-fill-color: transparent;
}
</style>