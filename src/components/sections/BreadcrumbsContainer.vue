<template>
<!-- BREADCRUMBS -->
<div class="container">
    <ul class="breadcrumbs flex center wrap">
        <li class="breadcrumbs-item">
            <RouterLink to="/" class="breadcrumbs-item-link">
                Home
            </RouterLink>
        </li>
        <img src="../../assets/img/svg/grey-arrow-right.svg" alt="Arrow right" class="arrow-divider-icon" loading="lazy">
        <li class="breadcrumbs-item">
            <a href="javascript:void(0)" class="breadcrumbs-item-link current">
                404
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style>
/*==== BREADCRUMBS =================*/
.breadcrumbs {
  margin: 2.5rem 0;
}
.breadcrumbs-item-link {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: #7E7E7E;
}
.breadcrumbs-item-link.current {
  color: #222222;
  font-weight: 800;
  cursor: default;
}
.arrow-divider-icon {
  margin: 0 1rem;
}
</style>