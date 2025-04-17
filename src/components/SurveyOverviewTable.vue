<template>
    <q-table title="User List" :rows="rows" :columns="columns" row-key="id" :pagination="pagination"
        @request="onRequest" @row-click="onRowClick" class="cursor-pointer">

    </q-table>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const rows = ref([
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' }
])

const columns = [
    { name: 'id', label: 'ID', field: 'id', sortable: true },
    { name: 'name', label: 'Name', field: 'name', sortable: true },
    { name: 'age', label: 'Age', field: 'age', sortable: true },
]

const pagination = ref({
    sortBy: 'name',
    descending: false,
    page: 1,
    rowsPerPage: 5
})

function onRequest(props) {
    pagination.value = props.pagination
}

function onRowClick(row) {
    router.push(`/survey/${row.id}`)
}
</script>