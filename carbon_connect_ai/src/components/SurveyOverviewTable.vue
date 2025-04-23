<template>
  <q-table
    title="User List"
    :rows="rows"
    :columns="columns"
    row-key="id"
    :pagination="pagination"
    @request="onRequest"
    @row-click="onRowClick"
    class="cursor-pointer"
  >
  </q-table>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const rows = ref([
  { id: 'a098sf0ah093', valid_image: true, valid_biochar: true },
  { id: 'aohfa83hiahww', valid_image: true, valid_biochar: false },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
  { id: 'a09s8f093hf09', valid_image: true, valid_biochar: true },
])

const columns = [
  { name: 'id', label: 'ID', field: 'id', sortable: true },
  { name: 'valid_image', label: 'valid_image', field: 'valid_image', sortable: true },
  { name: 'valid_biochar', label: 'valid_biochar', field: 'valid_biochar', sortable: true },
]

const pagination = ref({
  sortBy: 'name',
  descending: false,
  page: 1,
  rowsPerPage: 5,
})

function onRequest(props) {
  pagination.value = props.pagination
}

function onRowClick(row) {
  router.push(`/survey/${row.id}`)
}
</script>
