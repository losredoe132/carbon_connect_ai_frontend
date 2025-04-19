<template>
  <q-card>
    <div class="q-pa-md">
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label overline>Survey ID</q-item-label>
            <q-item-label>{{ survey_id }} </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Location</q-item-label>
            <q-item-label>32.234234, 23.123434 </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Observer</q-item-label>
            <q-item-label>Some Body</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Created</q-item-label>
            <q-item-label>2024/05/29 23:32:23</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
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

  country: {
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
