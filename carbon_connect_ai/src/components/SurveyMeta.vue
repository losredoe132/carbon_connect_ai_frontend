<template>
  <q-card>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label overline>Survey ID</q-item-label>
          <q-item-label>{{ survey_id }} </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>Location</q-item-label>
          <q-item-label>{{ lat }}, {{ lon }} </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>Observer</q-item-label>
          <q-item-label>{{ observer }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>Created</q-item-label>
          <q-item-label>{{ timestamp }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
defineProps({
  survey_id: {
    type: String,
    default: ''
  },

  timestamp: {
    type: String,
    required: true
  },

  observer: {
    type: String,
    required: true
  },

  lat: {
    type: String,
    required: true
  },
  lon: {
    type: String,
    required: true
  }
})
</script>
