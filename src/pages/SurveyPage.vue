<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-md">
      <!-- Survey ID Heading -->
      <div class="text-h5 text-center q-mb-md">
        Survey ID: {{ surveyId }}
      </div>

      <!-- Expandable Meta Info Section -->
      <q-expansion-item icon="info" label="Meta Information" expand-separator>
        <q-list>
          <q-item v-for="(value, key) in metaInfo" :key="key">
            <q-item-section>
              <q-item-label><strong>{{ key }}</strong>: {{ value }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <!-- Sections -->
      <div v-for="section in sections" :key="section.name" class="q-mt-md">
        <q-card flat bordered class="q-mb-md">
          <!-- Section Header -->
          <div class="text-h6 q-pa-md">{{ section.name }}</div>

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
                  <q-item-label><strong>{{ key }}</strong>: {{ value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-actions>
        </q-card>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "SurveyPage",
  data() {
    return {
      surveyId: "12345", // Example survey ID
      metaInfo: {
        "Survey Date": "2023-10-01",
        "Surveyor Name": "John Doe",
        Location: "Farm A",
      },
      sections: [
        {
          name: "Biochar",
          images: [
            { id: 1, src: "biochar1.jpg", alt: "Biochar Image 1" },
            { id: 2, src: "biochar2.jpg", alt: "Biochar Image 2" },
          ],
          indicators: {
            "Is Valid Biochar": "Yes",
            "Is Valid Image": "Yes",
          },
        },
        {
          name: "Moisture Measurement",
          images: [
            { id: 3, src: "moisture1.jpg", alt: "Moisture Image 1" },
            { id: 4, src: "moisture2.jpg", alt: "Moisture Image 2" },
          ],
          indicators: {
            "Is Valid Measurement": "Yes",
            "Is Valid Image": "Yes",
          },
        },
        {
          name: "Bags",
          images: [
            { id: 5, src: "bag1.jpg", alt: "Bag Image 1" },
            { id: 6, src: "bag2.jpg", alt: "Bag Image 2" },
          ],
          indicators: {
            "Is Valid Bag": "Yes",
            "Is Valid Image": "Yes",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.q-img {
  display: inline-block;
  margin-right: 10px;
}
</style>