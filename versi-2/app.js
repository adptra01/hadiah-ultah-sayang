/* =========================================================
   HADIAH ULANG TAHUN (versi 2) — app.js
   ---------------------------------------------------------
   SEMUA KONTEN (teks, foto, lagu, warna, dekorasi 3D) ada
   di objek CONFIG di bawah ini. Ubah sesukamu, logika di
   bagian bawah tidak perlu disentuh.
   ========================================================= */

const CONFIG = {

  /* --- ORANG TERSAYANG --- */
  person: {
    name: "Sayangku",
  },

  /* --- GATE (layar pembuka dengan kado 3D) --- */
  gate: {
    kicker: "Ada sesuatu buat kamu",
    title: "Satu Hadiah Kecil, Banyak Kata",
    button: "Buka Hadiahnya",
    hint: "Isinya bunga, boneka, dan sedikit drama",
  },

  /* --- HERO --- */
  hero: {
    eyebrow: "Hari ini hari kamu",
    line1: "Selamat Ulang Tahun,",
    sub: "Tahun ini aku cuma mau bilang terima kasih sudah lahir, sudah sabar, dan sudah jadi alasan aku senyum tiap hari.",
    ctaMusic: "Putar Lagu Kita",
    ctaPhotos: "Lihat Foto",
  },

  /* --- FOTO: ganti path sesuai file-mu --- */
  photos: {
    title: "Foto-Foto yang Mau Kupajang di Kamar",
    desc: "Kenangan kecil yang selalu bikin aku tersenyum sendiri. Klik satu foto untuk memperbesar.",
    items: [
      { src: "../IMG_20220819_170509_573.webp", caption: "Agu 2022, hari-hari awal yang canggung" },
      { src: "../IMG-20221113-WA0018.jpg", caption: "Nov 2022, tawa yang gampang banget" },
      { src: "../IMG_8193.JPG", caption: "Foto yang gak pernah gagal bikin senyum" },
      { src: "../IMG-20230221-WA0029.jpg", caption: "Feb 2023, satu frame banyak cerita" },
      { src: "../WhatsApp Image 2026-10-06 at 19.48.12 (1).jpeg", caption: "Senyum favorit yang selalu aku tunggu" },
      { src: "../WhatsApp Image 2026-10-06 at 19.48.11 (2).jpeg", caption: "Kiriman terbaru, masih bikin deg-degan" },
    ],
  },

  /* --- MARQUEE --- */
  marquee: [
    "Selamat Ulang Tahun",
    "Happy Birthday",
    "Hari Ini Cuma Tentang Kamu",
    "Aku Sayang Kamu",
  ],

  /* --- SURAT + KARTU --- */
  letter: {
    title: "Surat Pendek Buat Orang yang Paling Aku Sayang",
    desc: "Dibaca pelan-pelan, sambil lagunya jalan.",
    tip: "Kartu di bawah bisa dibalik",
    signature: "Dari pacarmu yang selalu salah tingkah",
    paragraphs: [
      "Hari ini kamu tambah umur, dan dunia ikut beruntung karena kamu masih di dalamnya.\n\n",
      "Aku bukan penyair, jadi maaf kalau katanya sederhana. Yang penting: setiap hari bersamamu selalu terasa seperti kado yang belum selesai aku buka, selalu ada lapisan baru yang bikin penasaran.\n\n",
      "Semoga tahun ini semua yang kamu takutkan menjauh, semua yang kamu mau pelan-pelan datang, dan aku tetap orang pertama yang kamu kabari.",
    ],
    cards: [
      {
        front: "Fakta: kamu susah dimarahi",
        back: "Karena mukamu terlalu lucu, aku selalu lupa mau marah apa. Kasihan aku.",
      },
      {
        front: "Rahasia kecil",
        back: "Chat pertama kita masih aku simpan dan kadang dibaca ulang. Jangan kasih tahu siapa-siapa.",
      },
      {
        front: "Prediksi tahun ini",
        back: "Kamu akan lebih sering ketawa, lebih banyak makan enak, dan tetap susah diajak begadang.",
      },
      {
        front: "Janji aku",
        back: "Kalau kamu capek, aku jadi tempat bersandar. Kalau kamu lapar, aku jadi tukang antar.",
      },
    ],
  },

  /* --- DAFTAR ALASAN --- */
  reasons: {
    title: "Alasan Harimu Wajib Jadi Hari Terbaik",
    items: [
      "Karena senyummu hari ini layak dibagikan ke semua orang.",
      "Karena kado tanpa ucapan cuma kado biasa.",
      "Karena tahun lalu kamu janji jadi lebih baik, dan kamu menepatinya.",
      "Karena aku ingin jadi orang pertama yang ucapkan selamat setiap tahun.",
      "Karena daftar ini sebenarnya tak ada habisnya, tapi halaman web punya batas.",
    ],
  },

  /* --- FINALE --- */
  finale: {
    title: "Ada Satu Tombol yang Sebaiknya Tidak Kamu Tekan",
    button: "Jangan Tekan Tombol Ini",
    warn: "Serius. Tombolnya juga kabur kalau didekati.",
    modalKicker: "Kamu sudah diperingatkan",
    modalTitle: "Ups. Ledakan konfeti buat kamu!",
    modalBody:
      "Selamat ulang tahun, sayang.\n\nSemoga tahun ini kita kumpul lebih banyak, ketawa lebih keras, dan makan kue lebih sering.\n\nAku sayang kamu, hari ini dan semua tanggal Oktober setelahnya.",
    modalClose: "Tutup dengan Senyum",
  },

  /* --- MUSIK: isi "src" dengan path lagu, atau pakai tombol unggah di player --- */
  music: {
    src: "../lagu-versi-2.mp3",   // "Wholesome" (Filipe Fernandes, incompetech.com, CC BY)
    title: "Wholesome",
    artist: "Filipe Fernandes",
    autoplayOnOpen: true,
  },

  /* --- FOOTER --- */
  footer: {
    text: "Dibuat khusus untukmu, dengan sabar dan sedikit kopi",
  },

  /* --- WARNA (menimpa :root di style.css) --- */
  theme: {
    "--c-bg": "#fff4f2",
    "--c-primary": "#ff4d6d",
    "--c-secondary": "#ffb63e",
    "--c-mint": "#3ec9a7",
    "--c-sky": "#7cc4ff",
    "--c-petal": "#ff9db1",
    "--c-ink": "#2b1f24",
  },

  /* --- DEKORASI 3D (bunga, kelopak, mata boneka) --- */
  decor: {
    flowers: {
      count: 7,
      size: [54, 78],          // rentang px ukuran bunga
      spin: [18, 30],          // rentang durasi putar (detik)
      colors: ["#ff9db1", "#ff4d6d", "#ffb63e", "#7cc4ff", "#ffffff"],
    },
    petals: {
      count: 14,
      colors: ["#ff9db1", "#ff4d6d", "#ffffff", "#ffd9e0"],
    },
    plush: {
      eyeTracking: true,       // mata boneka mengikuti kursor
    },
  },
};

/* =========================================================
   LOGIKA — tidak perlu diubah kecuali perlu penyesuaian
   ========================================================= */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const rand = (min, max) => min + Math.random() * (max - min);

  /* ---------- 1. Tema warna ---------- */
  const applyTheme = () => {
    const root = document.documentElement;
    Object.entries(CONFIG.theme).forEach(([key, val]) => root.style.setProperty(key, val));
  };

  /* ---------- 2. Bind CONFIG ke elemen [data-bind] ---------- */
  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

  const bindText = () => {
    $$("[data-bind]").forEach((el) => {
      const val = getByPath(CONFIG, el.dataset.bind);
      if (typeof val === "string") el.textContent = val;
    });
  };

  /* ---------- 3. Foto dengan fallback ---------- */
  const PHOTO_FALLBACK = (label) =>
    `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500">
        <rect width="400" height="500" fill="#f7e3e7"/>
        <text x="200" y="245" font-family="sans-serif" font-size="18" fill="#8d7078" text-anchor="middle">Foto belum tersedia</text>
        <text x="200" y="275" font-family="sans-serif" font-size="14" fill="#8d7078" text-anchor="middle">${label || ""}</text>
      </svg>`
    )}`;

  const setImage = (img, src, label) => {
    img.addEventListener("error", () => {
      if (!img.dataset.fallback) {
        img.dataset.fallback = "1";
        img.src = PHOTO_FALLBACK(label);
      }
    });
    img.src = src;
    img.alt = label || "Foto kenangan";
  };

  /* ---------- 4. Galeri ---------- */
  const renderGallery = () => {
    const gallery = $("#gallery");
    CONFIG.photos.items.forEach((item, i) => {
      const fig = document.createElement("figure");
      fig.className = "polaroid reveal";
      fig.style.setProperty("--i", i % 3);
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", `Buka foto: ${item.caption}`);

      const scene = document.createElement("div");
      scene.className = "polaroid__scene";
      const img = document.createElement("img");
      img.loading = "lazy";
      const cap = document.createElement("figcaption");
      cap.textContent = item.caption;

      scene.append(img, cap);
      fig.append(scene);
      gallery.append(fig);
      setImage(img, item.src, item.caption);

      fig.addEventListener("click", () => openLightbox(item.src, item.caption, img.dataset.fallback));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(item.src, item.caption, img.dataset.fallback);
        }
      });

      /* tilt 3D mengikuti kursor (hanya desktop) */
      if (finePointer && !reduceMotion) {
        fig.addEventListener("pointermove", (e) => {
          const r = fig.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          scene.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 12}deg) scale(1.03)`;
        });
        fig.addEventListener("pointerleave", () => { scene.style.transform = ""; });
      }
    });
  };

  /* ---------- 5. Kartu balik ---------- */
  const renderCards = () => {
    const wrap = $("#cards");
    CONFIG.letter.cards.forEach((c, i) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.style.setProperty("--i", i);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Kartu: ${c.front}. Klik untuk membalik.`);
      card.innerHTML = `
        <div class="card__inner">
          <div class="card__face card__front">
            <h4></h4>
            <span class="card__hint">Klik untuk membalik</span>
          </div>
          <div class="card__face card__back"></div>
        </div>`;
      $("h4", card).textContent = c.front;
      $(".card__back", card).textContent = c.back;

      const flip = () => card.classList.toggle("is-flipped");
      card.addEventListener("click", flip);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
      });
      wrap.append(card);
    });
  };

  /* ---------- 6. Daftar alasan ---------- */
  const renderReasons = () => {
    const list = $("#reasonsList");
    CONFIG.reasons.items.forEach((text, i) => {
      const li = document.createElement("li");
      li.className = "reasons__item reveal";
      li.style.setProperty("--i", i);
      li.innerHTML = `<span class="reasons__idx"></span><span class="reasons__text"></span>`;
      $(".reasons__idx", li).textContent = String(i + 1).padStart(2, "0");
      $(".reasons__text", li).textContent = text;
      list.append(li);
    });
  };

  /* ---------- 7. Marquee ---------- */
  const renderMarquee = () => {
    const sep =
      `<svg class="marquee__sep" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">` +
      `<path d="M12 3c1.4 3 3 4.6 6 6-3 1.4-4.6 3-6 6-1.4-3-3-4.6-6-6 3-1.4 4.6-3 6-6Z"/></svg>`;
    const half = CONFIG.marquee
      .map((txt) => `<span class="marquee__item">${txt}${sep}</span>`)
      .join("");
    $("#marqueeTrack").innerHTML = half + half; /* dua salinan = putaran mulus */
  };

  /* ---------- 8. Ladang bunga 3D ---------- */
  const renderFlowers = () => {
    const field = $("#flowerField");
    const { count, size, spin, colors } = CONFIG.decor.flowers;
    for (let i = 0; i < count; i++) {
      const fs = rand(size[0], size[1]);
      const flower = document.createElement("div");
      flower.className = "flower grow";
      flower.style.cssText = [
        `left:${(i / count) * 88 + rand(0, 7)}%`,
        `bottom:${rand(-4, 16)}%`,
        `--fs:${fs.toFixed(0)}px`,
        `--pc:${colors[i % colors.length]}`,
        `--spin:${rand(spin[0], spin[1]).toFixed(1)}s`,
        `--s:${(0.75 + (fs - size[0]) / (size[1] - size[0]) * 0.45).toFixed(2)}`,
        `--delay:${(0.15 + i * 0.12).toFixed(2)}s`,
        `--sd:${(-Math.random() * 4).toFixed(2)}s`,
        `z-index:${(fs | 0)}`,
      ].join(";");

      const petals = [];
      for (let p = 0; p < 6; p++) petals.push(`<span class="petal" style="--p:${p}"></span>`);
      for (let p = 0; p < 6; p++) petals.push(`<span class="petal petal--back" style="--p:${p}"></span>`);

      flower.innerHTML =
        `<span class="flower__stem"></span>` +
        `<div class="flower__sway"><div class="flower__tilt"><div class="flower__bloom">` +
        petals.join("") +
        `<span class="flower__core"></span>` +
        `</div></div></div>`;

      field.append(flower);
    }
  };

  /* ---------- 9. Kelopak jatuh (continuous) ---------- */
  const renderPetals = () => {
    if (reduceMotion) return;
    const wrap = $("#petals");
    const { count, colors } = CONFIG.decor.petals;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petalfall";
      p.style.cssText = [
        `--x:${rand(0, 98).toFixed(1)}%`,
        `--w:${rand(9, 16).toFixed(0)}px`,
        `--c:${colors[i % colors.length]}`,
        `--dur:${rand(13, 22).toFixed(1)}s`,
        `--delay:${(-rand(0, 22)).toFixed(1)}s`,
        `--sway:${rand(-50, 50).toFixed(0)}px`,
      ].join(";");
      wrap.append(p);
    }
  };

  /* ---------- 10. Reveal saat scroll ---------- */
  const observeReveals = () => {
    const els = $$(".reveal:not(.in)").filter((el) => !el.closest(".hero"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
  };

  /* ---------- 11. Konfeti (canvas, hidup hanya saat ada partikel) ---------- */
  const confetti = (() => {
    const canvas = $("#confetti");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let rafId = null;
    let onResize;

    const palette = () => [
      CONFIG.theme["--c-primary"],
      CONFIG.theme["--c-secondary"],
      CONFIG.theme["--c-mint"],
      CONFIG.theme["--c-sky"],
      CONFIG.theme["--c-petal"],
    ];

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life > 0 && p.y < window.innerHeight + 40);
      particles.forEach((p) => {
        p.life -= 1;
        p.vy += 0.12;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.fillStyle = p.color;
        if (p.shape === "rect") ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        else { ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
      });

      if (particles.length) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const burst = (x, y, amount = 80) => {
      if (reduceMotion) return;
      const colors = palette();
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 9;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          w: 6 + Math.random() * 7,
          h: 4 + Math.random() * 6,
          r: 3 + Math.random() * 4,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          color: colors[(Math.random() * colors.length) | 0],
          shape: Math.random() > 0.35 ? "rect" : "circle",
          life: 90 + Math.random() * 60,
        });
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    return { burst };
  })();

  /* ---------- 12. Toast ---------- */
  let toastTimer;
  const toast = (msg) => {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  };

  /* ---------- 13. Music player ---------- */
  const player = (() => {
    const audio = $("#audio");
    const wrap = $("#player");
    const playBtn = $("#playBtn");
    const fill = $("#progressFill");
    const bar = $("#progressBar");
    const disc = $("#playerDisc");
    const input = $("#songInput");

    $("#playerTitle").textContent = CONFIG.music.title;
    $("#playerArtist").textContent = CONFIG.music.artist;
    if (CONFIG.music.src) audio.src = CONFIG.music.src;

    const setPlayingUI = (playing) => {
      wrap.classList.toggle("playing", playing);
      disc.classList.toggle("spin", playing);
      playBtn.setAttribute("aria-label", playing ? "Jeda musik" : "Putar musik");
    };

    const toggle = async () => {
      if (!audio.src) {
        toast("Belum ada lagu. Pilih file lewat tombol unggah di player");
        input.click();
        return;
      }
      try {
        if (audio.paused) {
          await audio.play();
          setPlayingUI(true);
        } else {
          audio.pause();
          setPlayingUI(false);
        }
      } catch {
        toast("Browser menahan autoplay. Tekan tombol putar lagi");
      }
    };

    playBtn.addEventListener("click", toggle);
    audio.addEventListener("pause", () => setPlayingUI(false));
    audio.addEventListener("play", () => setPlayingUI(true));
    audio.addEventListener("ended", () => setPlayingUI(false));
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) fill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });
    audio.addEventListener("error", () => {
      if (audio.getAttribute("src")) toast("File lagu tidak ditemukan, pakai tombol unggah");
    });

    const seek = (clientX) => {
      const rect = bar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      if (audio.duration) audio.currentTime = ratio * audio.duration;
      fill.style.width = `${ratio * 100}%`;
    };
    bar.addEventListener("click", (e) => seek(e.clientX));
    bar.addEventListener("keydown", (e) => {
      if (!audio.duration) return;
      if (e.key === "ArrowRight") audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      audio.src = URL.createObjectURL(file);
      $("#playerTitle").textContent = file.name.replace(/\.[^.]+$/, "");
      $("#playerArtist").textContent = "Diputar dari perangkatmu";
      audio.play().then(() => setPlayingUI(true)).catch(() => {});
      toast("Lagu dimuat. Selamat mendengarkan");
    });

    return { toggle, isReady: () => !!audio.src };
  })();

  /* ---------- 14. Typewriter surat ---------- */
  const typewriter = (() => {
    let started = false;
    let timerId = null;

    const finish = () => {
      clearTimeout(timerId);
      $("#typedText").textContent = CONFIG.letter.paragraphs.join("");
      $("#typedCursor").classList.add("done");
      $(".letter__sign").classList.add("show");
      started = true;
    };

    const run = () => {
      if (started) return;
      if (reduceMotion) return finish();
      started = true;
      const text = CONFIG.letter.paragraphs.join("");
      const target = $("#typedText");
      let i = 0;
      const step = () => {
        target.textContent = text.slice(0, i);
        i += 1;
        if (i <= text.length) {
          const ch = text[i - 1];
          timerId = setTimeout(step, ch === "." || ch === "\n" ? 90 : 18);
        } else {
          $("#typedCursor").classList.add("done");
          $(".letter__sign").classList.add("show");
        }
      };
      step();
    };

    const observe = () => {
      const paper = $("#letterPaper");
      if (!("IntersectionObserver" in window)) return run();
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) { run(); io.disconnect(); }
        },
        { threshold: 0.4 }
      );
      io.observe(paper);
      paper.addEventListener("click", finish); /* klik = langsung selesai */
    };

    return { observe };
  })();

  /* ---------- 15. Lightbox ---------- */
  const openLightbox = (src, caption, isFallback) => {
    const box = $("#lightbox");
    const img = $("#lightboxImg");
    img.alt = caption;
    if (isFallback) {
      img.src = PHOTO_FALLBACK(caption);
    } else {
      img.src = src;
      img.onerror = () => { img.src = PHOTO_FALLBACK(caption); };
    }
    $("#lightboxCap").textContent = caption;
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#lightboxClose").focus();
  };

  const closeLightbox = () => {
    const box = $("#lightbox");
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  /* ---------- 16. Interaksi pointer: magnet, mata, tilt boneka ---------- */
  const initPointerFX = () => {
    if (!finePointer || reduceMotion) return;

    /* tombol magnetik */
    $$(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });

    /* boneka: kepala mengikuti kursor + mata melirik */
    const plush = $("#plush");
    const stage = $("#plushTilt");
    if (plush && stage) {
      let rafId = null;
      let lastEvent = null;

      const apply = () => {
        rafId = null;
        const e = lastEvent;
        if (!e) return;
        const r = plush.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
        const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
        if (CONFIG.decor.plush.eyeTracking) {
          stage.style.setProperty("--eye-x", nx.toFixed(3));
          stage.style.setProperty("--eye-y", ny.toFixed(3));
        }
        stage.style.setProperty("--tx", (nx * 12).toFixed(2) + "deg");
        stage.style.setProperty("--ty", (-ny * 9).toFixed(2) + "deg");
      };

      window.addEventListener("pointermove", (e) => {
        lastEvent = e;
        if (!rafId) rafId = requestAnimationFrame(apply);
      }, { passive: true });
    }
  };

  /* ---------- 17. Boneka diklik: squash + hati ---------- */
  const initPlushClick = () => {
    const plush = $("#plush");
    if (!plush) return;

    const boing = () => {
      plush.classList.remove("bounce");
      void plush.offsetWidth; /* restart animasi */
      plush.classList.add("bounce");
      confetti.burst(
        plush.getBoundingClientRect().left + plush.offsetWidth / 2,
        plush.getBoundingClientRect().top + plush.offsetHeight * 0.35,
        26
      );
      if (reduceMotion) return;
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement("span");
        heart.className = "plush__heart";
        heart.style.setProperty("--hx", `${rand(-70, 70).toFixed(0)}px`);
        heart.style.setProperty("--hd", `${(i * 0.12).toFixed(2)}s`);
        heart.innerHTML = "<i></i>";
        heart.addEventListener("animationend", () => heart.remove());
        plush.append(heart);
      }
    };

    plush.addEventListener("click", boing);
    plush.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); boing(); }
    });
  };

  /* ---------- 18. Tombol finale yang menghindar ---------- */
  const initDodgeButton = () => {
    const btn = $("#dangerBtn");
    let dodges = 0;
    const maxDodges = 3;

    const celebrate = (x, y) => {
      confetti.burst(x, y, 160);
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.35, 90);
      const modal = $("#modal");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    btn.addEventListener("pointermove", (e) => {
      if (dodges >= maxDodges || e.pointerType !== "mouse") return;
      const r = btn.getBoundingClientRect();
      const near =
        e.clientX > r.left - 70 && e.clientX < r.right + 70 &&
        e.clientY > r.top - 50 && e.clientY < r.bottom + 50;
      if (near) {
        dodges += 1;
        const dirX = e.clientX < window.innerWidth / 2 ? 1 : -1;
        const dirY = e.clientY < window.innerHeight / 2 ? 1 : -1;
        btn.style.transform =
          `translate(${dirX * (40 + Math.random() * 70)}px, ${dirY * (26 + Math.random() * 40)}px) rotate(${(Math.random() - 0.5) * 14}deg)`;
        if (dodges >= maxDodges) {
          btn.style.transform = "";
          toast("Baiklah, kamu menang. Sekarang tekan.");
        }
      }
    });

    btn.addEventListener("click", (e) => {
      celebrate(e.clientX, e.clientY);
      btn.style.transform = "";
    });
  };

  /* ---------- 19. Modal ---------- */
  const closeModal = () => {
    const modal = $("#modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  /* ---------- 20. Gate: buka kado ---------- */
  const initGate = () => {
    const gate = $("#gate");
    const gift = $("#gift");
    const openBtn = $("#openBtn");

    const open = async () => {
      gift.classList.add("is-open");       /* tutup kado terangkat */
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.45, 140);
      confetti.burst(window.innerWidth * 0.2, window.innerHeight * 0.6, 70);
      confetti.burst(window.innerWidth * 0.8, window.innerHeight * 0.6, 70);

      setTimeout(() => {
        gate.classList.add("is-gone");
        document.body.classList.remove("locked");
        document.body.classList.add("is-open");  /* entrance + bunga tumbuh */
        observeReveals();
        if (CONFIG.music.autoplayOnOpen && player.isReady()) {
          $("#audio").play().then(() => {
            $("#player").classList.add("playing");
            $("#playerDisc").classList.add("spin");
          }).catch(() => { /* autoplay diblokir, tombol putar tetap ada */ });
        }
      }, reduceMotion ? 0 : 650);

      window.removeEventListener("keydown", onKey);
    };

    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    };

    openBtn.addEventListener("click", open);
    window.addEventListener("keydown", onKey);
  };

  /* ---------- 21. Inisialisasi ---------- */
  const init = () => {
    applyTheme();
    bindText();

    renderGallery();
    renderCards();
    renderReasons();
    renderMarquee();
    renderFlowers();
    renderPetals();

    typewriter.observe();
    initPointerFX();
    initPlushClick();
    initDodgeButton();
    initGate();

    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });

    $("#modalClose").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", (e) => {
      if (e.target.id === "modal") closeModal();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeLightbox(); closeModal(); }
      if (e.key.toLowerCase() === "m" && !e.target.matches("input, textarea")) player.toggle();
    });

    $("#heroPlay").addEventListener("click", () => player.toggle());

    setTimeout(() => {
      if (document.body.classList.contains("is-open")) {
        toast("Tekan M untuk putar atau jeda lagu");
      }
    }, 3200);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
