<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn>Header Button</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <v-img
              src="https://picsum.photos/id/1084/500/300"
              alt="Placeholder Image"
              contain
              max-height="80vh"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="secondary" dark>
      <v-col class="text-center text-caption" cols="12">
        Footer Text Label
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
  // No script logic needed for now
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
