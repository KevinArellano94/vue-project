<template>
  <div>
    <h2>Rick & Morty</h2>
    <div><h3>Season 1</h3></div>
    <ul>
      <li><RouterLink to="/video/Rick&Morty/01/01">Episode 01</RouterLink></li>
      <li><RouterLink to="/video/Rick&Morty/01/02">Episode 02</RouterLink></li>
      <li><RouterLink to="/video/Rick&Morty/01/03">Episode 03</RouterLink></li>
      <li><RouterLink to="/video/Rick&Morty/01/04">Episode 04</RouterLink></li>
    </ul>
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
