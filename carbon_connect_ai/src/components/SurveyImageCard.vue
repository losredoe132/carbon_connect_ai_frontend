<template>
  <q-card bordered class="q-pa-xs">
    <q-card-section class="h6-text">
      <q-badge round :color="all_measurements_valid ? 'green' : 'red'" />
      {{ item.meta.image_id }}
    </q-card-section>
    <q-card-section>
      <q-img :src="item.meta.image_url" height="200px" ratio="1" fit="none" :alt="title"> </q-img>
    </q-card-section>

    <q-card-section>
      <div v-for="image_indicator in item.image_indicators" v-bind:key="image_indicator.name">
        {{ image_indicator.name }}:


        <q-if>
          <span>
            {{ image_indicator.predicted_value }}
          </span>
          <span v-if="typeof image_indicator.predicted_value !== 'boolean'">
            (Reference: {{ image_indicator.reference_value }})
          </span>
        </q-if>


        <q-badge :color="image_indicator.predicted_value === image_indicator.reference_value ? 'green' : 'red'"
          centered>


        </q-badge>
      </div>
    </q-card-section>
  </q-card>
</template>


<script setup>

const props = defineProps({
  item: {},
})


function check_if_all_answer_are_valid(item) {
  for (const image_indidcator of item.image_indicators) {
    if (image_indidcator.predicted_value !== image_indidcator.reference_value) {
      return false
    }
  }
  return true
}

const all_measurements_valid = check_if_all_answer_are_valid(props.item)


</script>
