import { h, app } from 'hyperapp'
import Search from './Search'
import Quote from './Quote'
import { COLORS, FONT_COLORS } from '../config/constants'

const quote = (quotes, index) => quotes[index]
const color = index => COLORS[index % COLORS.length]
const fontColor = index => FONT_COLORS[index % FONT_COLORS.length]

export default ({ quotes, index }, { getQuotes, updateSearch, submitSearch, next, prev }) =>
  <div
    oncreate={getQuotes}
    className={quotes ? 'body' : 'body hidden'}
    style={{ 'backgroundColor': color(index), 'color': fontColor(index) }}
  >
    <div className='centered-content'>
      <div className='container'>
        { index > 0 &&
        <div
          onclick={prev}
          className='direction left'
          style={{ 'color': fontColor(index) }}>
            &lt;
        </div> }
        { quotes.length > 0 && <Quote quote={quote(quotes, index)} />}
        { index < quotes.length - 1 &&
        <div
          onclick={next}
          className='direction right'
          style={{ 'color': fontColor(index) }}>
            &gt;
        </div> }
        <Search
          updateSearch={updateSearch}
          submitSearch={submitSearch}
        />
      </div>
    </div>
  </div>
