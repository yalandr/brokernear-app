<template>
    <li class="card-list-item">
        <RouterLink :to="CardListItemData.reviewLink" class="broker-link flex center just-between">
            <div class="flex center">
                <div class="circle-number flex center just-center">{{CardListItemData.number}}</div>
                <img :src="`src/assets/img/${CardListItemData.imgPath}`" width="48" height="48" :alt="CardListItemData.name" class="broker-logo" loading="lazy">
                <h4 class="broker-name">{{CardListItemData.name}}</h4>
            </div>
            <img src="src/assets/img/svg/grey-arrow-right-ext.svg" width="16" height="15" alt="Arrow right" class="arrow-right-icon" loading="lazy">
        </RouterLink>
    </li>
</template>

<script>
export default {
    name: "CardListItem",
    props: {
        CardListItemData: {
            Type: Object
        }
    }
}
</script>

<style>
.broker-link {
  padding: 1.25rem 2rem;
  transition: all ease 0.15s;
}
.broker-link:hover {
  background-color: #F5F5F5;
}
.card-list-item {
  border-bottom: 1px solid #EDEDED;
}
.card-list-item:last-child {
  border-bottom: 0;
}
.circle-number {
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border: 1px solid #999999;
  font-weight: 700;
  font-size: 14px;
  color: #999999;
  border-radius: 100px;
  margin-right: 2rem;
}
</style>