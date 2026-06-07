const lyrics = [
  { time: 2, text: "Cinta menyatukan kita yang tak sama" },
  { time: 8, text: "Aku yang mengadah dan tangan yang kau genggam" },
  { time: 15, text: "Berjalan salah, berhenti pun mudah" },
  { time: 21, text: "Apakah kita salah?" }
];

const song = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");

song.addEventListener("timeupdate", () => {
  const current = song.currentTime;

  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (current >= lyrics[i].time) {
      lyricsDiv.innerHTML = lyrics[i].text;
      break;
    }
  }
});
