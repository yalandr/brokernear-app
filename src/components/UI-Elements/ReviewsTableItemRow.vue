<template>
    <tr class="table-item-row" :data-name="tableItemRowData.name">
        <td class="table-item-number">{{ tableItemRowData.number }}</td>
        <td class="table-item-name">
            <div class="table-item-name-content flex center">
                <img :src="`src/assets/img/${tableItemRowData.mainImg}`" width="64" height="64" :alt="tableItemRowData.name" class="table-item-img" loading="lazy"> 
                <h4 class="broker-name">{{tableItemRowData.name}}</h4>
            </div>
        </td>
        <td class="table-item-rating">
            <div class="rating-stars" :style="`--rating: ${tableItemRowData.rating}`"></div>
            <div class="rating-number">{{ tableItemRowData.rating }}</div>
        </td>
        <td class="table-item-regulation">
            {{tableItemRowData.regulation}}
        </td>
        <td class="table-item-bonus">
            Welcome bonus:
            <div class="bonus-chips-wrapper flex center wrap">
                <bonus-chip 
                    v-for="bonusChip in tableItemRowData.bonusChips"
                    :key="bonusChip.number"
                    :bonusChipData="bonusChip"
                />
            </div>
        </td>
        <td class="table-item-action">
            <div class="flex center">
                <RouterLink :to="tableItemRowData.reviewLink" class="btn">
                    Read review
                </RouterLink>
                <a :href="tableItemRowData.websiteLink" class="btn green-btn" target="_blank">
                    Visit broker
                </a>
            </div>
        </td>
    </tr>
</template>

<script>
import BonusChip from './BonusChip.vue'

export default {
    components: { BonusChip },
    name: "ReviewsTableItemRow",
    props: {
        tableItemRowData: {
            Type: Object
        }
    }
}
</script>

<style>
.table-item-row.hide {
  display: none;
}
.table-item-row td {
  padding: 24px 30px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #222222;
}
.table-item-img {
  display: block;
  border-radius: 4px;
}
.broker-name {
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #222222;
  margin-left: 1.25rem;
}
.rating-star-icon {
  margin-right: 5px;
}
.rating-number {
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #222222;
}
.table-item-action .green-btn {
  margin-left: 6px;
}
</style>