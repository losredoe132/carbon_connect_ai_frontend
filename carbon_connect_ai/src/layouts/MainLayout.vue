<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Carbon Connect AI
        </q-toolbar-title>
        <q-toolbar class="">
          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>

      <q-list>

        <q-item>
          <q-item-section>
            <q-btn flat @click="$router.push('/survey')">
              Survey Overview
            </q-btn>
          </q-item-section>
        </q-item>

        <q-item>
          
        </q-item>



      </q-list>

      <!-- drawer content -->

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
