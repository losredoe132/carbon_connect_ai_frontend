<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">Survey ID: {{ survey_id }}</div>
    <div v-if="is_loading" class="row justify-center q-my-md">
      <q-spinner-dots size="40px" color="primary" />
    </div>
    <div v-else>
      <q-list>

        <q-card class="q-mb-md">
          <SurveyMeta :survey_id="survey_id" :timestamp="timestamp" :lat="survey_lat" :lon="survey_lon"
            :observer="observer_name" />
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
              <q-icon :name="'circle'" :color="all_moisture_images_valid ? 'green' : 'red'" />
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
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'
import SurveyMeta from 'components/SurveyMeta.vue'
import SurveyImageCard from 'components/SurveyImageCard.vue'

const route = useRoute()
const survey_id = route.params.surveyId

const is_loading = ref(true)
const data = ref(null)

const survey_info = ref(null)
const survey_lat = ref('')
const survey_lon = ref('')
const observer_name = ref('')
const timestamp = ref('')

const biochar_images = ref()
const moisture_images = ref()
const bags_images = ref()

const all_biochar_images_valid = ref(false)
const all_moisture_images_valid = ref(false)


const fetchData = async (surveyId) => {
  try {
    const res = await api.get(`/survey/${surveyId}`)
    data.value = res.data
  }
  catch (error) {
    console.error('Failed to fetch data:', error);
  }
  finally {
    is_loading.value = false
  }

  const survey_meta = data.value.survey_info.meta

  survey_lat.value = survey_meta.survey_location.latitude
  survey_lon.value = survey_meta.survey_location.longitude
  observer_name.value = survey_meta.observer_name
  timestamp.value = survey_meta.collection_timestamp_utc

  biochar_images.value = data.value.biochar_images
  moisture_images.value = data.value.moisture_images
  bags_images.value = data.value.bags_images

  const biochar_images_info = data.value.biochar_images
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
