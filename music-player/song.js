class Song extends Album {
	constructor() {
		this.title = title;
		this.length = length;
		this.album = album;
		this.artist = artist;
		this.track_no = track_no
	}
	play() {
		is.playing = true;
	}
	pause() {
		is.playing = false;
	}
}
