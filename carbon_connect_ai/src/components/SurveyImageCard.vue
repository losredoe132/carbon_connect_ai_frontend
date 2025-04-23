<template>
  <q-card bordered class="q-pa-xs">
    <q-card-section class="h6-text">
      <q-badge round :color="check_if_all_answer_are_valid(item, desired_values) ? 'green' : 'red'" />
      {{ title }}
    </q-card-section>
    <q-card-section>
      <q-img :src="item.image_path" height="200px" ratio="1" fit="none" :alt="title"> </q-img>
    </q-card-section>

    <q-card-section>
      <div v-for="(value, name) in item.response.classification" v-bind:key="name">
        {{ name }}:
        <q-badge :color="value === desired_values[name] ? 'green' : 'red'" centered>
          {{ value }}
          <q-if>
            <span v-if="typeof desired_values[name] !== 'boolean'">
              (Human: {{ desired_values[name] }})
            </span>
          </q-if>
        </q-badge>
      </div>
    </q-card-section>
  </q-card>
</template>


<script setup>
defineProps({
  title: { type: String },
  item: {},
  desired_values: { type: Object },
})

function check_if_all_answer_are_valid(item, desired_values) {
  for (const [key, value] of Object.entries(item.response.classification)) {
    if (value !== desired_values[key]) {
      return false
    }
  }
  return true
}


</script>
