export default {
  namespaced: true,

  actions: {
    async nuxtServerInit({ commit, state }) {
      const meta = await this.$axios.get(state.wordpressAPI)
      // console.log('called')
      commit('setMeta', meta.data)
    }
  },

  state: {
    article: null,
    articles: [],
    page: [],
    authorArticles: [],
    authors: null,
    featuredArticles: [],
    featuredColor: {},
    featuredID: 194,
    meta: {
      description: '',
      name: ''
    },
    topicArticles: [],
    topics: null,
    wordpressAPI: 'https://wp.kmr.io/wp-json'
  },

  mutations: {
    setArticle(state, data) {
      state.article = data
    },
    setArticles(state, data) {
      state.articles = state.articles.concat(data)
    },
    setPage(state, data) {
      state.page = data
    },
    setAuthorArticles(state, data) {
      state.authorArticles.push(data)
    },
    setAuthors(state, data) {
      state.authors = data
    },
    setIndexInfiniteLoading(state, data) {
      state.indexInfiniteLoading = data
    },
    setFeaturedColor(state, data) {
      state.featuredColor = data
    },
    setFeaturedArticles(state, data) {
      state.featuredArticles = state.featuredArticles.concat(data)
    },
    setMeta(state, data) {
      state.meta = data
    },
    setTopicArticles(state, data) {
      state.topicArticles.push(data)
    },
    setTopics(state, data) {
      state.topics = data
    }
  }
}
