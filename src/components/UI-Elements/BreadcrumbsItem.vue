<template>
    <li class="breadcrumbs-item">
        <RouterLink :to="breadcrumbItemData.link" :class="breadcrumbItemData.linkClass">
            {{ breadcrumbItemData.name }}
        </RouterLink>
    </li>
</template>

<script>
export default {
    name: "BreadcrumbsItem",
    props: {
        breadcrumbItemData: {
            Type: Object
        }
    }
}
</script>

<style>

</style>