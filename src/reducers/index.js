import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration:'4:05'},
    { title: 'Macarena', duration: '3:05' },
    { title: 'All Star', duration: '5:01' },
    { title: 'I want it that way', duration: '3:49' }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})