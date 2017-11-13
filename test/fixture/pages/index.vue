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
    let articles = await app.$axios.get(`${store.state.wp.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&_embed`)
    store.commit('wp/setArticles', articles.data)
    return { articles: articles.data }
  }
}
</script>
