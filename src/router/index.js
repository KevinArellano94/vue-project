import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/music",
      name: "music",
      component: () => import("../views/MusicView.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/ShowView.vue"),
    },
    {
      path: "/video/Rick&Morty/01/01",
      name:
        {
          title: "Rick & Morty",
          url_title: "RickAndMorty",
          season: "01",
          episode: "01",
          episode_title: "Pilot",
          url: "https://odysee.com/$/embed/@リックアンドモーティ:6/",
        },
      component: () => import("../views/VideoView.vue"),
    },
    {
      path: "/video/Rick&Morty/01/02",
      name:
        {
          title: "Rick & Morty",
          url_title: "RickAndMorty",
          season: "01",
          episode: "02",
          episode_title: "Lawnmower Dog",
          url: "https://odysee.com/$/embed/@リックアンドモーティ:6/",
        },
      component: () => import("../views/VideoView.vue"),
    },
    {
      path: "/video/Rick&Morty/01/03",
      name:
        {
          title: "Rick & Morty",
          url_title: "RickAndMorty",
          season: "01",
          episode: "03",
          episode_title: "Anatomy Park",
          url: "https://odysee.com/$/embed/@リックアンドモーティ:6/",
        },
      component: () => import("../views/VideoView.vue"),
    },
    {
      path: "/video/Rick&Morty/01/04",
      name:
        {
          title: "Rick & Morty",
          url_title: "RickAndMorty",
          season: "01",
          episode: "04",
          episode_title: "M. Night Shaym-Aliens!",
          url: "https://odysee.com/$/embed/@リックアンドモーティ:6/",
        },
      component: () => import("../views/VideoView.vue"),
    },
    {
      path: "/music/Alcest/Souvenirs_d'un_autre_monde/Printemps_Emeraude",
      name:
        {
          artist: "Alcest",
          album: "Souvenirs d'un autre monde",
          song: "Printemps Emeraude",
        },
      component: () => import("../views/ArtistView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
