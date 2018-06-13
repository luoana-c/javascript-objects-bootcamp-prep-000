<<<<<<< HEAD
var playlist = { metallica: 'Nothing Else Matters' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

=======
var playlist = {}
>>>>>>> 7ec130b688910a3ddd5096f82a2f471956a00e3d
