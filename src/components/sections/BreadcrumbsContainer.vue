<template>
<!-- BREADCRUMBS -->
<div class="container">
    <ul class="breadcrumbs flex center wrap">
        <BreadcrumbsItem
            v-for="item in breadcrumbsItems" 
            :key="item.link"
            :breadcrumbItemData="item"
        />
    </ul>
</div>
</template>

<script>
import BreadcrumbsItem from '../UI-Elements/BreadcrumbsItem.vue'
export default {
  components: { BreadcrumbsItem },
  name: "BreadcrumbsContainer",
  props: {
    breadcrumbsItems: {
      Type: Array
    }
  }
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
.breadcrumbs-item-link::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 12px;
  background: url('../../assets/img/svg/grey-arrow-right.svg') no-repeat center / contain;
  margin: 0 1rem;
}
.breadcrumbs-item-link.current {
  color: #222222;
  font-weight: 800;
  cursor: default;
}
.breadcrumbs-item-link.current::after {
  display: none;
}
</style>