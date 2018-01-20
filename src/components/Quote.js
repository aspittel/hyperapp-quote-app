import { h, app } from 'hyperapp'

export default ({ quote }) =>
  <div className='quote'>
    <h1>{quote.body}</h1>
    <h4>{quote.author}</h4>
  </div>
