import request from '../config/request'

export default {
  getQuotes: quotes => (state, actions) => request.getAll().then(actions.setQuotes),
  submitSearch: quotes => (state, actions) => request.getQuery(state.term).then(actions.setQuotes),
  setQuotes: res => ({ quotes: res.data.quotes.filter(quote => quote.body && quote.body.length < 150) }),
  updateSearch: ({ term }) => ({ term }),
  next: e => ({ index, quotes }) => ({ index: index + 1 }),
  prev: e => ({ index, quotes }) => ({ index: index - 1 })
}
