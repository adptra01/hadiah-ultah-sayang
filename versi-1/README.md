# Hadiah Ulang Tahun

Website ucapan ulang tahun — vanilla HTML/CSS/JS, tanpa framework atau library.

## Cara menjalankan

Buka `index.html` langsung di browser (double-click), atau jalankan server lokal:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Struktur

| File | Isi |
|---|---|
| `index.html` | Struktur halaman (gate → hero → marquee → galeri → surat → alasan → finale) |
| `style.css` | Semua styling & animasi. **Ubah warna di blok `:root` (bagian 1)** |
| `app.js` | Objek `CONFIG` (bagian 1) untuk konten + logika animasi/interaksi |

## Kustomisasi cepat (semua di `app.js` → `CONFIG`)

- **Nama, tanggal** → `person`
- **Teks gate, hero, surat, kartu, alasan, pesan finale** → `gate`, `hero`, `letter`, `reasons`, `finale`
- **Foto** → `photos.hero1`, `photos.hero2`, `photos.items[]` (isi path file atau URL)
- **Lagu** → `music.src`. Versi ini sudah terpasang `../lagu-versi-1.mp3`
  = **Dreamy Flashback** — Kevin MacLeod (incompetech.com, CC BY 4.0).
  Ganti dengan `"lagu.mp3"` atau URL milikmu. Kosongkan = pemutar menampilkan tombol unggah file dari perangkat.
- **Warna** → `theme` di `app.js` (menimpa `:root` di `style.css`)

## Interaksi

- Klik **Buka Hadiahnya** → curtain hilang + ledakan konfeti + musik mulai (autoplay)
- Hover foto → efek tilt 3D; klik → lightbox (Esc untuk tutup)
- Klik kartu di section surat → membalik, menunjukkan punchline
- Tekan **M** → putar/jeda lagu
- Tombol **"Jangan Tekan Tombol Ini"** → menghindar 3 kali sebelum menyerah

## Catatan

- Semua animasi memakai `transform`/`opacity` saja (aman 60fps), dan menghormati `prefers-reduced-motion`.
- Jika foto tidak ditemukan, otomatis tampil placeholder yang rapi (bukan icon rusak).
