<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Carbon Connect AI </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>

        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Overview" to="/" />
          <q-breadcrumbs-el label="Surveys" to="/surveys" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
