<template>
<div class="bonus-chip">
    {{bonusChipData.text}}
</div>
</template>

<script>
export default {
    name: "BonusChip",
    props: {
        bonusChipData: {
            Type: Object
        }
    }
}
</script>

<style>
.bonus-chip {
  display: inline-block;
  padding: 8px 12px;
  gap: 10px;
  background: #FFFFFF;
  border: 1px solid #769CFF;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  color: #769CFF;
  margin: 11px 8px 0 0;
  text-align: center;
  white-space: nowrap;
}
</style>