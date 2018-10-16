var playlist= {}
playlist.MinnieRiperton = 'Feelin That Your Feelin Good'
function updatePlaylist (playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
  }
  delete playlist.artist
  function removeFromPlaylist (playlist, artist)