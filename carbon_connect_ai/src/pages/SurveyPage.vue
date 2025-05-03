<template>
  <q-page class="q-pa-md">
    <!-- Survey ID Heading -->
    <div class="text-h5 q-mb-md">Survey ID: {{ survey_id }}</div>
    <q-list>
      <!-- Expandable Meta Info Section -->

      <q-card class="q-mb-md">
        <SurveyMeta :survey_id="survey_id" :timestamp="timestamp" :lat="survey_lat" :lon="survey_lon"
          :observer="observer_name" />
      </q-card>


      <q-card>
        <q-expansion-item class="q-mb-md" expand-separator>
          <template #header>
            <div class="row">
              <q-icon :name="'circle'" :color="biochar_images_valid ? 'green' : 'red'" />
              <div>Biochar Images</div>
            </div>
          </template>

          <q-card class="row">
            <div v-for="item in biochar_images" v-bind:key="item.id">
              <SurveyImageCard :item=item />
            </div>
          </q-card>
        </q-expansion-item>
      </q-card>

      <q-card>
        <q-expansion-item class="q-mb-md" expand-separator>
          <template #header>
            <div class="row">
              <q-icon :name="'circle'" :color="biochar_images_valid ? 'green' : 'red'" />
              <div>Moisture Images</div>
            </div>
          </template>

          <q-card class="row">
            <div v-for="item in moisture_images" v-bind:key="item.id">
              <SurveyImageCard :item=item />
            </div>
          </q-card>
        </q-expansion-item>
      </q-card>

      <q-card>
        <q-expansion-item class="q-mb-md" expand-separator>
          <template #header>
            <div class="row">
              <q-icon :name="'circle'" :color="biochar_images_valid ? 'green' : 'red'" />
              <div>Bags Images</div>
            </div>
          </template>

          <q-card class="row">
            <div v-for="item in bags_images" v-bind:key="item.id">
              <SurveyImageCard :item=item />
            </div>
          </q-card>
        </q-expansion-item>
      </q-card>

    </q-list>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import SurveyMeta from 'components/SurveyMeta.vue'
import SurveyImageCard from 'components/SurveyImageCard.vue'

const survey_info = ref(null)
const survey_id = ref('')
const survey_lat = ref('')
const survey_lon = ref('')
const observer_name = ref('')
const timestamp = ref('')

const biochar_images = ref()
const moisture_images = ref()
const bags_images = ref()

const biochar_images_valid = ref(false)

const desired_values_biochar = ref()
desired_values_biochar.value = {
  valid_biochar_detected: true,
  valid_carbonisation: true,
  valid_image_quality: true,
  valid_environmental_context: true,
}

const desired_values_moisture = ref()
desired_values_moisture.value = {
  moisture: 15,
}

const fetchData = async (surveyId) => {
  const res = await api.get(`/survey/${surveyId}`)
  const data = res.data

  const survey_meta = data.survey_info.meta

  survey_id.value = survey_meta.biochar_production_survey_id
  survey_lat.value = survey_meta.survey_location.latitude
  survey_lon.value = survey_meta.survey_location.longitude
  observer_name.value = survey_meta.observer_name
  timestamp.value = survey_meta.collection_timestamp_utc

  biochar_images.value = data.biochar_images
  moisture_images.value = data.moisture_images
  bags_images.value = data.bags_images

  biochar_images_valid.value = true
}

onMounted(() => {
  const res = fetchData('70b69ccb-9fba-49b9-8d3c-5d755c6a17d7')
  survey_info.value = res.data
})
</script>

<style scoped>
.q-img {
  display: inline-block;
  margin-right: 10px;
}
</style>
