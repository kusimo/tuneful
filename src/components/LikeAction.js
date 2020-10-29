

  const active = (item) => {
    let likes = JSON.parse(localStorage.getItem('musicLikes')) || []
    return isLiked(likes, item.id);
} 

const addLikedSong = (song) => {
   let likes = JSON.parse(localStorage.getItem('musicLikes')) || [];
    likes.push(song)
    localStorage.setItem('musicLikes', JSON.stringify(likes))
}

const removeLikedSong = (song) => {
    let likes = JSON.parse(localStorage.getItem('musicLikes')) || []
    let unlike = likes.filter(music => music.id !== song.id)
    localStorage.setItem('musicLikes', JSON.stringify(unlike))
}


  const isLiked = (likes, id) => {
    likes = JSON.parse(localStorage.getItem('musicLikes')) || [];
    let song = likes.filter(song => song.id === id)
    if (song.length === 1) return true
    return false
  }

  const likeSong = (song, ref) => {
    let likes = JSON.parse(localStorage.getItem('musicLikes')) || [];
    if (isLiked(likes.value, song.id)) {
      removeLikedSong(song)
    } else {
      addLikedSong(song)
    }
    ref.current.classList.toggle("active")
  }

  export  {likeSong, active}

