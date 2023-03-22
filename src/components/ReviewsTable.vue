<template>
    <!-- TABLE -->
    <table class="table reviews-table">
        <tr class="table-headers">
            <th>#</th>
            <th>Broker</th>
            <th>Rating</th>
            <th>Regulation</th>
            <th>Bonus</th>
            <th>Action</th>
        </tr>
        <ReviewsTableItemRow
            v-for="item in reviewsTableData" 
            :key="item.number"
            :tableItemRowData="item"
        />
    </table>
</template>

<script>
import ReviewsTableItemRow from './UI-Elements/ReviewsTableItemRow.vue'
export default {
  components: { ReviewsTableItemRow },
    name: "ReviewsTable",
    props: {
        reviewsTableData: {
            Type: Array
        }
    }
}
</script>

<style>
/*==== TABLE REVIEWS ==========*/
.table {
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: unset;
}
.table-item-action .green-btn {
    margin-left: 6px;
}
.table tr:hover {
  background: #E7FFE3;
}
.table th, .table td {
  border: 1px solid #D3D3D3;
}
.table-search-wrapper {
  border: 1px solid #D3D3D3;
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: #fff;
}
.table-search-input {
  width: 100%;
  min-height: 32px;
  border: 1px solid #D3D3D3;
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding: 7px 16px;
  outline: none;
}
.table-search-input:focus {
  border: 1px solid rgb(14, 83, 244);
}
.table-headers th {
  font-weight: 400;
  font-size: 0.75rem;
  color: #555555;
  padding: 24px 30px;
}
.btn.green-btn {
    background-color: var(--btn-color);
    border: 1px solid var(--btn-color);
    color: #fff;
}
</style>