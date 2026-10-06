/* =========================================================
   SELAMAT ULANG TAHUN — app.js
   ---------------------------------------------------------
   SEMUA KONTEN (teks, foto, lagu, warna) ada di objek
   CONFIG di bawah ini. Ubah sesukamu, tanpa menyentuh
   logika di bagian bawah.
   ========================================================= */

const CONFIG = {

  /* --- ORANG TERSAYANG --- */
  person: {
    name: "Sayangku",
    date: "Oktober 2026 · Hari yang Ditunggu",
  },

  /* --- GATE (layar pembuka) --- */
  gate: {
    kicker: "Ada sesuatu untukmu",
    title: "Hadiah Kecil, Kata-kata Besar",
    button: "Buka Hadiahnya",
    hint: "Diputar otomatis setelah kamu klik — siapkan senyummu",
  },

  /* --- HERO --- */
  hero: {
    line1: "Selamat",
    line2: "Ulang Tahun,",
    subtitle:
      "Hari ini hari kamu. Kue, lilin, dan semua hal manis di dunia boleh antri — aku duluan yang mau bilang: terima kasih sudah lahir dan mempertemukanku.",
    ctaMusic: "Putar Lagu Kita",
    ctaPhotos: "Lihat Foto",
  },

  /* --- FOTO: ganti path sesuai file-mu --- */
  photos: {
    hero1: "../20221201-ZIC09293.jpg",
    hero2: "../IMG_8193.JPG",
    heroCaption1: "Senyum favoritku",
    heroCaption2: "Hari-hari kita",
    number: "01 · Galeri",
    title: "Kumpulan Momen yang Mau Kupajang di Dinding",
    desc: "Klik salah satu foto untuk melihatnya lebih besar. Semua foto di sini bisa kamu ganti lewat objek CONFIG.",
    items: [
      { src: "../20221201-ZIC09325.jpg", caption: "Des 2022 — cerita kita dimulai" },
      { src: "../20221201-ZIC09329.jpg", caption: "Tawa yang bikin hari hangat" },
      { src: "../IMG_20221015_150012_794.jpg", caption: "Okt 2022 — pulang dengan hati ringan" },
      { src: "../IMG-20230221-WA0029.jpg", caption: "Feb 2023 — satu frame, seribu cerita" },
      { src: "../IMG_20230413_222010_707.jpg", caption: "Apr 2023 — sore yang sempurna" },
      { src: "../WhatsApp Image 2026-10-06 at 19.48.11.jpeg", caption: "Terbaru — masih sama hangatnya" },
    ],
  },

  /* --- MARQUEE --- */
  marquee: [
    "Selamat Ulang Tahun",
    "Happy Birthday",
    "Semoga Panjang Umur",
    "Tetap Sehat & Bahagia",
    "Aku Sayang Kamu",
  ],

  /* --- SURAT --- */
  letter: {
    number: "02 · Surat",
    title: "Surat Pendek dari Orang yang Paling Suka Kamu",
    desc: "Dibaca sambil lagu berjalan, ya.",
    tip: "Kartu di bawah bisa diklik untuk membaliknya",
    signature: "— Dari pacarmu yang selalu salah tingkah di depanmu",
    paragraphs: [
      "Hari ini kamu tambah satu usia, dan dunia ikut beruntung karena kamu masih di dalamnya.\n\n",
      "Aku bukan penyair, jadi maafkan kalau kata-kataku sederhana. Yang penting: setiap hari bersamamu terasa seperti kado yang belum sempat aku buka tuntas — selalu ada lapisan baru yang bikin penasaran.\n\n",
      "Semoga tahun ini semua yang kamu takutkan berlalu, semua yang kamu mau pelan-pelan datang, dan aku masih orang pertama yang kamu kabari kabar baiknya.",
    ],
    cards: [
      {
        front: "Fakta: kamu susah dimarahi",
        back: "Karena mukamu terlalu lucu, aku selalu lupa mau marah apa. Kasihan aku.",
      },
      {
        front: "Rahasia kecil",
        back: "Aku simpan chat pertama kita dan masih sesekali dibaca ulang. Jangan bilang siapa-siapa.",
      },
      {
        front: "Prediksi tahun ini",
        back: "Kamu bakal lebih sering ketawa, lebih banyak makan enak, dan tetap susah diajak diajak begadang.",
      },
      {
        front: "Janji aku",
        back: "Kalau kamu capek, aku jadi tempat bersandar. Kalau kamu lapar, aku jadi tukang antar.",
      },
    ],
  },

  /* --- ALASAN --- */
  reasons: {
    number: "03 · Daftar",
    title: "Alasan Singkat Kenapa Harimu Wajib Jadi Hari Terbaik",
    items: [
      "Karena senyummu hari ini legal untuk dibagikan ke siapa pun.",
      "Karena kue tanpa ucapan itu cuma kue — kamu butuh yang ini.",
      "Karena tahun lalu kamu janji jadi lebih baik, dan kamu menepatinya.",
      "Karena aku ingin jadi orang pertama yang ucapkan selamat setiap tahun.",
      "Karena daftar ini sebenarnya tak ada habisnya, tapi halaman web punya batas.",
    ],
  },

  /* --- FINALE --- */
  finale: {
    kicker: "Jangan lanjutkan",
    title: "Ada Satu Tombol yang Sebaiknya Tidak Kamu Tekan",
    button: "Jangan Tekan Tombol Ini",
    warn: "Serius. Tombolnya juga kabur kalau didekati.",
    modalKicker: "Kamu sudah memperingatkan dirimu sendiri",
    modalTitle: "Ups. Ledakan konfeti untukmu!",
    modalBody:
      "Selamat ulang tahun, sayang.\n\nSemoga tahun ini kita kumpul lebih banyak, ketawa lebih keras, dan makan kue lebih sering.\n\nAku sayang kamu — hari ini, besok, dan semua tanggal  Oktober setelahnya.",
    modalClose: "Tutup dengan Senyum",
  },

  /* --- MUSIK: isi "src" dengan path lagu, atau pakai tombol unggah di player --- */
  music: {
    src: "../lagu-versi-1.mp3",   // "Dreamy Flashback" (Kevin MacLeod, incompetech.com, CC BY)
    title: "Dreamy Flashback",
    artist: "Kevin MacLeod",
    autoplayOnOpen: true,
  },

  /* --- FOOTER --- */
  footer: {
    text: "Dibuat dengan kesabaran ekstra dan sedikit kopi · Semua teks di halaman ini bisa kamu edit di CONFIG",
  },

  /* --- WARNA (sinkron ke CSS variables) --- */
  theme: {
    "--c-bg": "#fff8f0",
    "--c-primary": "#ff5a3c",
    "--c-secondary": "#ffc53d",
    "--c-tertiary": "#2fbf9b",
    "--c-quartenary": "#3da5ff",
    "--c-pink": "#ff8fa3",
    "--c-ink": "#241d1a",
  },

  /* --- BALON LATAR --- */
  balloons: { count: 7 },
};

/* =========================================================
   LOGIKA — tidak perlu diubah kecuali perlu penyesuaian
   ========================================================= */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Terapkan tema warna ---------- */
  const applyTheme = () => {
    const root = document.documentElement;
    Object.entries(CONFIG.theme).forEach(([key, val]) => root.style.setProperty(key, val));
  };

  /* ---------- 2. Bind data-config ke elemen [data-bind] ---------- */
  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

  const bindText = () => {
    $$("[data-bind]").forEach((el) => {
      const val = getByPath(CONFIG, el.dataset.bind);
      if (typeof val === "string") el.textContent = val;
    });
  };

  /* ---------- 3. Foto (dengan fallback bila file tidak ada) ---------- */
  const PHOTO_FALLBACK = (label) =>
    `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500">
        <rect width="400" height="500" fill="#f2e6da"/>
        <text x="200" y="245" font-family="sans-serif" font-size="18" fill="#8a7a6c" text-anchor="middle">Foto belum tersedia</text>
        <text x="200" y="275" font-family="sans-serif" font-size="14" fill="#8a7a6c" text-anchor="middle">${label}</text>
      </svg>`
    )}`;

  const setImage = (img, src, label) => {
    img.addEventListener("error", () => {
      if (!img.dataset.fallback) {
        img.dataset.fallback = "1";
        img.src = PHOTO_FALLBACK(label || "");
      }
    });
    img.src = src;
    img.alt = label || "Foto kenangan";
  };

  /* ---------- 4. Render galeri ---------- */
  const renderGallery = () => {
    const gallery = $("#gallery");
    CONFIG.photos.items.forEach((item, i) => {
      const fig = document.createElement("figure");
      fig.className = "polaroid reveal";
      fig.style.setProperty("--i", i % 3);
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", `Buka foto: ${item.caption}`);

      const img = document.createElement("img");
      img.loading = "lazy";
      const cap = document.createElement("figcaption");
      cap.textContent = item.caption;

      fig.append(img, cap);
      gallery.append(fig);
      setImage(img, item.src, item.caption);

      fig.addEventListener("click", () => openLightbox(item.src, item.caption, img.dataset.fallback));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(item.src, item.caption, img.dataset.fallback);
        }
      });
    });
  };

  /* ---------- 5. Render kartu balik ---------- */
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

  /* ---------- 6. Render daftar alasan ---------- */
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
    const track = $("#marqueeTrack");
    const half = CONFIG.marquee.map((txt) =>
      `<span class="marquee__item">${txt}<span class="marquee__star">✳</span></span>`
    ).join("");
    // dua salinan identik → animasi translateX(-50%) terasa mulus
    track.innerHTML = half + half;
  };

  /* ---------- 8. Balon continuous ---------- */
  const renderBalloons = () => {
    const wrap = $("#balloons");
    const palette = [
      "var(--c-primary)", "var(--c-secondary)", "var(--c-tertiary)",
      "var(--c-quartenary)", "var(--c-pink)",
    ];
    const n = CONFIG.balloons.count;
    for (let i = 0; i < n; i++) {
      const div = document.createElement("div");
      div.className = "balloon";
      const color = palette[i % palette.length];
      const size = 34 + Math.round(Math.random() * 30);
      div.style.setProperty("--size", `${size}px`);
      div.style.setProperty("--dur", `${14 + Math.random() * 10}s`);
      div.style.setProperty("--delay", `${-(Math.random() * 18).toFixed(1)}s`);
      div.style.left = `${(i / n) * 92 + Math.random() * 6}%`;
      div.innerHTML = `
        <svg viewBox="0 0 60 90" fill="none">
          <ellipse cx="30" cy="28" rx="24" ry="27" fill="${color}"/>
          <path d="M30 55l-5 8h10l-5-8Z" fill="${color}"/>
          <path d="M30 63c8 8-8 12 0 27" stroke="#241d1a" stroke-opacity=".35" stroke-width="2" fill="none"/>
          <ellipse cx="22" cy="18" rx="6" ry="9" fill="#fff" fill-opacity=".45" transform="rotate(-20 22 18)"/>
        </svg>`;
      wrap.append(div);
    }
  };

  /* ---------- 9. Reveal saat scroll (IntersectionObserver) ---------- */
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

  /* ---------- 10. Konfeti (canvas, hanya aktif saat ada partikel) ---------- */
  const confetti = (() => {
    const canvas = $("#confetti");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let rafId = null;
    const colors = () => [
      CONFIG.theme["--c-primary"],
      CONFIG.theme["--c-secondary"],
      CONFIG.theme["--c-tertiary"],
      CONFIG.theme["--c-quartenary"],
      CONFIG.theme["--c-pink"],
    ];

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life > 0 && p.y < window.innerHeight + 40);
      particles.forEach((p) => {
        p.life -= 1;
        p.vy += 0.12;            // gravitasi
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.fillStyle = p.color;
        if (p.shape === "rect") {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
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
      const palette = colors();
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
          color: palette[(Math.random() * palette.length) | 0],
          shape: Math.random() > 0.35 ? "rect" : "circle",
          life: 90 + Math.random() * 60,
        });
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    return { burst };
  })();

  /* ---------- 11. Toast ---------- */
  let toastTimer;
  const toast = (msg) => {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  };

  /* ---------- 12. Music player ---------- */
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
        toast("Belum ada lagu — pilih file lewat tombol unggah di player");
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
        toast("Browser menahan autoplay — tekan tombol putar lagi");
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
      if (audio.getAttribute("src")) toast("File lagu tidak ditemukan — pakai tombol unggah");
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
      toast("Lagu dimuat — selamat mendengarkan");
    });

    return { toggle, isReady: () => !!audio.src };
  })();

  /* ---------- 13. Typewriter surat ---------- */
  const typewriter = (() => {
    let started = false;
    let timerId = null;

    const run = () => {
      if (started) return;
      started = true;
      const text = CONFIG.letter.paragraphs.join("");
      const target = $("#typedText");
      const cursor = $("#typedCursor");
      const sign = $(".letter__sign");

      if (reduceMotion) {
        target.textContent = text;
        cursor.classList.add("done");
        sign.classList.add("show");
        return;
      }

      let i = 0;
      const step = () => {
        target.textContent = text.slice(0, i);
        i += 1;
        if (i <= text.length) {
          const ch = text[i - 1];
          const delay = ch === "." || ch === "\n" ? 90 : 18;
          timerId = setTimeout(step, delay);
        } else {
          cursor.classList.add("done");
          sign.classList.add("show");
        }
      };
      step();
    };

    const skip = () => {
      if (!started) return;
      clearTimeout(timerId);
      const text = CONFIG.letter.paragraphs.join("");
      $("#typedText").textContent = text;
      $("#typedCursor").classList.add("done");
      $(".letter__sign").classList.add("show");
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
      paper.addEventListener("click", skip);
    };

    return { observe };
  })();

  /* ---------- 14. Lightbox ---------- */
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

  /* ---------- 15. Tombol magnetik + tilt polaroid (pointer, non-touch) ---------- */
  const initPointerFX = () => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || reduceMotion) return;

    $$(".magnetic").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });

    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          `${card.dataset.baseTransform || ""} perspective(700px) rotateY(${px * 12}deg) rotateX(${-py * 10}deg) scale(1.03)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = card.dataset.baseTransform || "";
      });
    });
  };

  /* ---------- 16. Tombol finale yang menghindar ---------- */
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
        btn.style.transform = `translate(${dirX * (40 + Math.random() * 70)}px, ${dirY * (26 + Math.random() * 40)}px) rotate(${(Math.random() - 0.5) * 14}deg)`;
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

  /* ---------- 17. Modal ---------- */
  const closeModal = () => {
    const modal = $("#modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  /* ---------- 18. Gate: buka hadiah ---------- */
  const initGate = () => {
    const gate = $("#gate");
    const openBtn = $("#openBtn");

    const open = async () => {
      gate.classList.add("is-gone");
      document.body.classList.remove("locked");
      document.body.classList.add("is-open");
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.45, 140);
      confetti.burst(window.innerWidth * 0.2, window.innerHeight * 0.6, 70);
      confetti.burst(window.innerWidth * 0.8, window.innerHeight * 0.6, 70);
      if (CONFIG.music.autoplayOnOpen && player.isReady()) {
        try {
          const audio = $("#audio");
          await audio.play();
          $("#player").classList.add("playing");
          $("#playerDisc").classList.add("spin");
        } catch {
          /* autoplay diblokir — tombol putar tetap tersedia */
        }
      }
      window.removeEventListener("keydown", onKey);
      observeReveals();
    };

    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    };

    openBtn.addEventListener("click", open);
    window.addEventListener("keydown", onKey);
  };

  /* ---------- 19. Inisialisasi ---------- */
  const init = () => {
    applyTheme();
    bindText();

    setImage($("#heroPhoto1"), CONFIG.photos.hero1, CONFIG.photos.heroCaption1);
    setImage($("#heroPhoto2"), CONFIG.photos.hero2, CONFIG.photos.heroCaption2);

    renderGallery();
    renderCards();
    renderReasons();
    renderMarquee();
    renderBalloons();

    typewriter.observe();
    initPointerFX();
    initDodgeButton();
    initGate();

    /* Lightbox */
    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });

    /* Modal */
    $("#modalClose").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", (e) => {
      if (e.target.id === "modal") closeModal();
    });

    /* Shortcut keyboard */
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeLightbox(); closeModal(); }
      if (e.key.toLowerCase() === "m" && !e.target.matches("input, textarea")) player.toggle();
    });

    /* Tombol play di hero */
    $("#heroPlay").addEventListener("click", () => player.toggle());

    /* Toast sambutan setelah dibuka */
    setTimeout(() => {
      if (document.body.classList.contains("is-open")) {
        toast("Tekan M untuk putar/jeda lagu");
      }
    }, 3200);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
