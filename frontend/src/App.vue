<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-icon :color="backendStatus.color" class="mr-2">{{ backendStatus.icon }}</v-icon>
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
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import axios from 'axios';

const isBackendOnline = ref(false);
let intervalId = null;

const backendStatus = computed(() => {
  if (isBackendOnline.value) {
    return { icon: 'mdi-check-circle', color: 'success' };
  } else {
    return { icon: 'mdi-alert-circle', color: 'error' };
  }
});

const checkBackendStatus = async () => {
  try {
    const response = await axios.get('http://localhost:3000/health');
    isBackendOnline.value = response.status === 200;
  } catch (error) {
    isBackendOnline.value = false;
  }
};

onMounted(() => {
  checkBackendStatus(); // Initial check
  intervalId = setInterval(checkBackendStatus, 5000); // Check every 5 seconds
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
</style>