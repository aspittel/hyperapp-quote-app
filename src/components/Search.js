import { h, app } from 'hyperapp'

export default ({ updateSearch, submitSearch }) =>
  <div className='search'>
    <input
      onkeyup={
        e => {
          e.keyCode === 13 ? submitSearch() : updateSearch({ term: e.target.value })
        }
      }
      placeholder='Search quote tags...'
    />
  </div>
