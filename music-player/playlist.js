class Playlist {
	constructor({
		playListName,
		songs = []
	}) {
		this.playListName = playListName;
		this.songs = songs;
		this.currentSongIndex = 0;
		this.currentSong = songs[currentSongIndex]
	}

	addSong() {
		this.songs.push(song)
	}
	removeSong() {
		const index = this.songs.indexOf(song)
		if (index > -1) {
			this.songs.splice(index, 1)
		}
	}
	play() {
		this.currentSong.play()
	}

	pause() {
		this.currentSong.pause()
	}

	next() {
		if (this.currentSongIndex < this.songs.length) {
			this.currentSongIndex++;
		} else {
			this.currentSongIndex = 0
		}
	}
}
