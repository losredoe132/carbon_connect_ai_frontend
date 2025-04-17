<template>
  <q-page class="q-pa-md">
    <!-- Survey ID Heading -->
    <h1 class="text-h5 q-mb-md">Survey Overview</h1>

    <q-card>
      <SurveyOverviewTable />
    </q-card>
    <!-- Expandable Meta Info Section -->
  </q-page>
</template>


<script setup>
import SurveyOverviewTable from 'components/SurveyOverviewTable.vue'
</script>
<style scoped>
.q-img {
  display: inline-block;
  margin-right: 10px;
}
</style>