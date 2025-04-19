<template>
  <q-page class="q-pa-md">
    <!-- Survey ID Heading -->
    <div class="text-h5 q-mb-md">
      Survey ID: {{ surveyId }}
    </div>

    <!-- Expandable Meta Info Section -->

    <SurveyMeta :survey_id=survey_id />

    <!-- Sections -->
    <div v-for="section in sections" :key="section.name" class="q-mt-md">
      <q-card>

        <q-expansion-item>
          <template v-slot:header>
            <div class="q-pa-md row">
              <div> <q-badge color="red" rounded class="q-mr-sm" />Status </div>
              <div>{{ section.name }}</div>
            </div>
          </template>
          <!-- Section Header -->


          <!-- Images -->
          <q-card-section>
            <q-img v-for="image in section.images" :key="image.id" :src="image.src" :alt="image.alt" class="q-mb-md"
              style="max-width: 200px; max-height: 200px;" />
          </q-card-section>

          <!-- Footer with Indicators -->
          <q-card-actions>
            <q-list>
              <q-item v-for="(value, key) in section.indicators" :key="key">
                <q-item-section>
                  <q-item-label class="row">
                    <div> <q-badge color="red" rounded class="q-mr-sm" /> </div>
                    <strong>{{ key }}</strong>: {{ value }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-actions>
        </q-expansion-item>
      </q-card>

    </div>
  </q-page>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import SurveyMeta from 'components/SurveyMeta.vue'

const survey_info = ref(null)
const survey_id = ref("")

const fetchData = async (surveyId) => {
  const res = await api.get(`/report/${surveyId}`)
  const data = res.data
  survey_id.value = data.survey_info.biochar_production_survey_id
}

onMounted(() => {
  const res = fetchData("70b69ccb-9fba-49b9-8d3c-5d755c6a17d7")
  survey_info.value = res.data
})
</script>

<style scoped>
.q-img {
  display: inline-block;
  margin-right: 10px;
}
</style>
