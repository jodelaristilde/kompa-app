export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topic, beat } = req.body;

  // Fake AI (we upgrade next)
  const lyrics = `
  (Verse)
  Mwen sonje ${topic}
  Nan kè mwen li toujou la
  ${beat} ap jwe dousman
  Lanmou pa janm fini

  (Chorus)
  Ayiti nan kè mwen
  Mwen pap janm bliye
  Nou ansanm pou lavi
  Lanmou pap janm fini
  `;

  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  res.status(200).json({
    lyrics,
    musicUrl,
    videoUrl
  });
}
