<template>
  <div>
    <div>
      <h1>Title: {{ show_title }}</h1>
      <h2>Season: {{ show_season }}</h2>
      <h3>Episode: {{ show_episode }}</h3>
      <h4>Episode name: <b>{{ episode_title }}</b></h4>
    </div>
    
    <iframe
      id="odysee-iframe"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="NO"
      width="100%"
      height="100%"
      :src = "video_src + url_title + '.' + show_season + '.' + show_episode"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show_title: this.$route.name.title,
        show_season: this.$route.name.season,
        show_episode: this.$route.name.episode,
        episode_title: this.$route.name.episode_title,
        url_title: this.$route.name.url_title,
        video_src: this.$route.name.url,
      }
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
