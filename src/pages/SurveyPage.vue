<template>
  <q-page class="q-pa-md">
    <!-- Survey ID Heading -->
    <div class="text-h5 q-mb-md">
      Survey ID: {{ surveyId }}
    </div>

    <!-- Expandable Meta Info Section -->

    <q-card>
      <div class="q-pa-md">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label overline>Survey ID</q-item-label>
              <q-item-label>oidahs938hjodazu38j </q-item-label>
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
                  <q-item-label><strong>{{ key }}</strong>: {{ value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-actions>
        </q-expansion-item>
      </q-card>

    </div>
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
        "Location": "Farm A",
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
            { id: 3, src: "https://plantvillage-production-new.s3.amazonaws.com/images%2F50a504f8-9700-4492-a683-434363c4237b%2Fgeneral-production-biochar_production_finished_burn-2024-07-12T14%3A37%3A33.937Z-c8988be6-f7d6-4c9d-bc54-76f8ec5ec09a.webp", alt: "Moisture Image 1" },
            { id: 4, src: "moisture2.jpg", alt: "Moisture Image 2" },
          ],
          indicators: {
            "Is Valid Measurement": "False",
            "Is Valid Image": "False",
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