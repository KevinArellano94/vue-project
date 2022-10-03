<template>
  <div>
    <h1>{{ $route.name.artist }}</h1>
    <h2>{{ $route.name.album }}</h2>
    <h3>{{ $route.name.song }}</h3>
    <audio controls>
      <source
        src="https://raw.githubusercontent.com/Alcest-Albums/Alcest/main/1. Souvenirs d'un autre monde/1. Alcest - Printemps Emeraude.mp3"
        type="audio/mpeg"
      >
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>