<template>
  <div>
    <h1>Hello World!</h1>
    <article v-for="article in articles" :key="article.id">
      <h2>{{article.title.rendered}}</h2>
    </article> 
  </div>
</template>

<script>
export default {
  async asyncData ({ app, store, params }) {
    return { articles: await app.$wp.posts().perPage(10) }
  }
}
</script>
