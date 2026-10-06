# Hadiah Ulang Tahun — Versi 2 (Boneka & Bunga 3D)

Gaya playful-romantis: gate kado 3D, boneka kelinci berlapis (mata ikut kursor),
ladang bunga berputar, kelopak jatuh, galeri polaroid, surat typewriter,
kartu balik, tombol finale yang menghindar. Vanilla HTML/CSS/JS, tanpa library.

## Struktur

```
versi-2/
  index.html   struktur halaman + gate
  style.css    semua gaya & animasi (blok :root = tema warna)
  app.js       objek CONFIG (konten) + logika
```

Foto & lagu sengaja diletakkan **satu folder di atas** (`order gift/`),
karena itu semua path di CONFIG diawali `../`.

## Cara customize (semua di `app.js`, objek `CONFIG`)

| Bagian        | Diisi apa                                        |
|---------------|--------------------------------------------------|
| `person`      | nama panggilan di hero                           |
| `gate`        | teks layar pembuka + tombol kado                 |
| `hero`        | eyebrow, judul, subteks, label tombol            |
| `photos`      | `src` foto (pakai `../namafoto.jpg`) + caption   |
| `letter`      | isi surat, signature, kartu balik                |
| `reasons`     | daftar alasan                                    |
| `finale`      | teks tombol kabur + modal pesan                  |
| `music`       | `src` lagu, judul, artis, autoplay                |
| `theme`       | warna (menimpa `:root` di `style.css`)           |
| `decor`       | jumlah/ukuran/warna bunga, jumlah kelopak, mata   |

## Foto yang terpasang (6, unik untuk versi ini)

- `../IMG_20220819_170509_573.webp`
- `../IMG-20221113-WA0018.jpg`
- `../IMG_8193.JPG`
- `../IMG-20230221-WA0029.jpg`
- `../WhatsApp Image 2026-10-06 at 19.48.12 (1).jpeg`
- `../WhatsApp Image 2026-10-06 at 19.48.11 (2).jpeg`

Ganti `src` sesuai foto yang mau dipakai; kalau file tidak ada, otomatis
muncul placeholder (tidak error).

## Lagu yang terpasang

- **Wholesome** — Filipe Fernandes (incompetech.com, lisensi CC BY 4.0)
- File: `../lagu-versi-2.mp3` (MP3 320 kbps, ±6 menit)
- Musik jalan otomatis saat kado dibuka; kalau browser menahan autoplay,
  tekan tombol putar di player bawah (atau tombol "Putar Lagu Kita").

> Lisensi CC BY: bebas dipakai, sebaiknya tetap mencantumkan kredit
> "Wholesome — Filipe Fernandes (incompetech.com)" kalau dibagikan ke publik.

## Test yang sudah dilakukan

- Desktop & mobile, 0 error konsol
- Semua foto termuat, lagu play dari file lokal
- Kado terangkat saat gate dibuka, bunga tumbuh berurutan,
  mata & kepala boneka mengikuti kursor, klik boneka = squash + hati
