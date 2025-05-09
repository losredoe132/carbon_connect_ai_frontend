<template>
  <q-page class="q-pa-md">
    <!-- Survey ID Heading -->
    <div class="text-h5 q-mb-md">Survey ID: {{ survey_id }}</div>
    <q-list>
      <!-- Expandable Meta Info Section -->

      <q-card class="q-mb-md">
        <SurveyMeta
          :survey_id="survey_id"
          :timestamp="timestamp"
          :lat="survey_lat"
          :lon="survey_lon"
          :observer="observer_name"
        />
      </q-card>

      <!-- Sections -->
      <q-card>
        <q-expansion-item class="q-mb-md" expand-separator>
          <template #header>
            <div class="row">
              <q-icon :name="'circle'" :color="all_biochar_images_valid ? 'green' : 'red'" />
              <div>Biochar Images</div>
            </div>
          </template>

          <q-card class="row">
            <div v-for="(item, title) in biochar_images" v-bind:key="item.id">
              <SurveyImageCard
                :title="title"
                :item="item"
                :desired_values="desired_values_biochar"
              />
            </div>
          </q-card>
        </q-expansion-item>
      </q-card>

      <q-card>
        <q-expansion-item class="q-mb-md" expand-separator>
          <template #header>
            <div class="row">
              <q-icon :name="'circle'" :color="all_moisture_images_valid ? 'green' : 'red'" />
              <div>Moisture Images</div>
            </div>
          </template>

          <q-card class="row">
            <div v-for="(item, title) in moisture_images" v-bind:key="item.id">
              <SurveyImageCard
                :title="title"
                :item="item"
                :desired_values="desired_values_moisture"
              />
            </div>
          </q-card>
        </q-expansion-item>
      </q-card>
    </q-list>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
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
const all_biochar_images_valid = ref(false)
const all_moisture_images_valid = ref(false)

const route = useRoute()

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
  const res = await api.get(`/report/${surveyId}`)
  const data = res.data
  survey_id.value = data.survey_info.biochar_production_survey_id
  survey_lat.value = data.survey_info.survey_lat
  survey_lon.value = data.survey_info.survey_lon
  observer_name.value = data.survey_info.observer_name
  timestamp.value = data.survey_info.collection_timestamp_utc
  biochar_images.value = data.biochar_images
  moisture_images.value = data.moisture_images

  const biochar_images_info = data.biochar_images
  //console.log(biochar_images_info)
  const pair = []

  for (var key in biochar_images_info) {
   // eslint-disable-next-line no-constant-condition
   if (1 >= 0) {
    console.log("---jonas---");
    const dict = biochar_images_info[key].response.classification
    pair.push(dict)
   }
   console.log(pair)
}
  
  all_biochar_images_valid.value = true
  all_moisture_images_valid.value = true
}


onMounted(() => {
  const surveyId = route.params.surveyId
  const res = fetchData(surveyId)
  survey_info.value = res.data
})
</script>

<style scoped>
.q-img {
  display: inline-block;
  margin-right: 10px;
}
</style>
