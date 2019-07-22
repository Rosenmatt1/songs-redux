export const selectSong = (song) => {
  return {
    //return an action
    type: 'SONG_SELECTED',
    payload: song
  }
}

