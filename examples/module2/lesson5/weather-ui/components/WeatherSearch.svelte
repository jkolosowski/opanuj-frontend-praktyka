<script lang="ts">
  import { fetchWeather } from '../lib/LocationFetcher';
  import type { LocationWeather } from '../models/LocationWeather';
  import WeatherPreview from './WeatherPreview.svelte';

  let weather: LocationWeather | null = null;
  let errorMessage: string = '';

  async function onLocationChange(event: KeyboardEvent) {
    const locationQuery = (event.target as HTMLInputElement).value;
    try {
      const result = await fetchWeather(locationQuery);
      if (result) {
        weather = result;
        errorMessage = '';
      } else {
        weather = null;
        errorMessage = 'Weather data not found for the provided location.';
      }
    } catch {
      weather = null;
      errorMessage = 'Failed to fetch weather data. Please try again.';
    }
  }
</script>

<main>
  <div class="bg-white rounded-xl p-4 shadow-lg">
    <div class="text-center">
      <h1 class="text-2xl py-4 text-center">🌞 Hello, Weather! 🌦️</h1>
      <p>
        <span class="text-xs bg-blue-400 p-2 rounded-md text-white"
          >Weather in EU!</span
        >
        <span class="text-xs bg-red-400 p-2 rounded-md text-white"
          >NEW: Weather in US!</span
        >
      </p>
    </div>
    <input
      type="text"
      class="mt-4 p-4 border border-gray-200 w-full rounded-xl"
      placeholder="Location"
      on:keyup={onLocationChange}
    />
  </div>
  <div>
    {#if errorMessage}
      <p class="text-red-500 mt-4">{errorMessage}</p>
    {/if}
    {#if weather}
      <WeatherPreview {weather} />
    {/if}
  </div>
</main>
