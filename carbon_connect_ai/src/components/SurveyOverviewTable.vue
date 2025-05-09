<template>
  <q-table
    title="Surveys"
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'

const router = useRouter()
const is_loading = ref(true)
const data = ref(null)
const rows = ref([])

const columns = ref([{ name: "Hash", label: "Hash", field: "id", sortable: true },
{ name: "Value", label: "Value", field: "val", sortable: true }
])

const fetchData = async () => {
  try {
    const res = await api.get(`/surveys`)
    data.value = res.data
    rows.value = data.value.items
  }
  catch (error) {
    console.error('Failed to fetch data:', error);
  }
  finally {
    is_loading.value = false
  }

}

onMounted(() => {
  fetchData()
})



function onRowClick(evnt, row) {
  console.log(row.id)
  router.push(`/survey/${row.id}`)
}


</script>
