const GALLERY = [
  {"src": "fushimi-inari-taisha-2026-2", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 1.3333},
  {"src": "nanniwan-2025", "place": "Nanniwan, Yan’an", "year": "2025", "r": 1.149},
  {"src": "chongqing-2025-2", "place": "Chongqing", "year": "2025", "r": 1.3333},
  {"src": "shanghai-2025-4", "place": "Shanghai", "year": "2025", "r": 1.3333},
  {"src": "fushimi-inari-taisha-2026-4", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 1.3333},
  {"src": "musee-de-orsay-2024", "place": "Musée d’Orsay, Paris", "year": "2024", "r": 1.3333},
  {"src": "kyoto-2026-3", "place": "Kyoto", "year": "2026", "r": 0.75},
  {"src": "kiyomizu-dera-2026", "place": "Kiyomizu-dera, Kyoto", "year": "2026", "r": 0.75},
  {"src": "xian-2025", "place": "Xi’an", "year": "2025", "r": 0.5687},
  {"src": "todai-ji-2026-4", "place": "Tōdai-ji, Nara", "year": "2026", "r": 1.3333},
  {"src": "outskirts-of-beijing-2025", "place": "Outskirts of Beijing", "year": "2025", "r": 1.3333},
  {"src": "fushimi-inari-taisha-2026", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 0.75},
  {"src": "usj-2026-2", "place": "Universal Studios Japan, Osaka", "year": "2026", "r": 0.75},
  {"src": "big-ben-2024", "place": "Big Ben, London", "year": "2024", "r": 1.2549},
  {"src": "osaka-2026-8", "place": "Osaka", "year": "2026", "r": 1.3333},
  {"src": "todai-ji-2026-7", "place": "Tōdai-ji, Nara", "year": "2026", "r": 0.75},
  {"src": "osaka-2026-2", "place": "Osaka", "year": "2026", "r": 1.3333},
  {"src": "fushimi-inari-taisha-2026-3", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 0.75},
  {"src": "todai-ji-2026", "place": "Tōdai-ji, Nara", "year": "2026", "r": 1.3333},
  {"src": "kinkaku-ji-2026", "place": "Kinkaku-ji, Kyoto", "year": "2026", "r": 0.75},
  {"src": "summer-palace-2025", "place": "Summer Palace, Beijing", "year": "2025", "r": 0.75},
  {"src": "shaanxi-2025-2", "place": "Shaanxi", "year": "2025", "r": 0.75},
  {"src": "shanghai-2025-3", "place": "Shanghai", "year": "2025", "r": 0.75},
  {"src": "kix-2026", "place": "Kansai International Airport", "year": "2026", "r": 0.75},
  {"src": "london-2024", "place": "London", "year": "2024", "r": 1.3333},
  {"src": "wutaishan-2025", "place": "Mount Wutai", "year": "2025", "r": 1.3333},
  {"src": "notre-dame-2024", "place": "Notre-Dame, Paris", "year": "2024", "r": 1.0},
  {"src": "shaanxi-2025-3", "place": "Shaanxi", "year": "2025", "r": 1.8444},
  {"src": "ginkakuji-2026", "place": "Ginkaku-ji, Kyoto", "year": "2026", "r": 0.75},
  {"src": "xian-2025-3", "place": "Xi’an", "year": "2025", "r": 1.608},
  {"src": "todai-ji-2026-3", "place": "Tōdai-ji, Nara", "year": "2026", "r": 0.75},
  {"src": "hangzhou-2025", "place": "Hangzhou", "year": "2025", "r": 0.75},
  {"src": "eiffel-tower-2024", "place": "Eiffel Tower, Paris", "year": "2024", "r": 0.8797},
  {"src": "todai-ji-2026-2", "place": "Tōdai-ji, Nara", "year": "2026", "r": 0.75},
  {"src": "osaka-castle-2026-11", "place": "Osaka Castle, Osaka", "year": "2026", "r": 1.3333},
  {"src": "osaka-2026-7", "place": "Osaka", "year": "2026", "r": 0.75},
  {"src": "kyoto-2026-4", "place": "Kyoto", "year": "2026", "r": 0.75},
  {"src": "outskirts-of-suzhou-2025", "place": "Outskirts of Suzhou", "year": "2025", "r": 0.75},
  {"src": "sanjusangen-do-2026", "place": "Sanjūsangen-dō, Kyoto", "year": "2026", "r": 1.7778},
  {"src": "todai-ji-2026-6", "place": "Tōdai-ji, Nara", "year": "2026", "r": 0.75},
  {"src": "yellow-river-2025", "place": "Yellow River", "year": "2025", "r": 1.3333},
  {"src": "osaka-2026-9", "place": "Osaka", "year": "2026", "r": 0.7219},
  {"src": "fushimi-inari-taisha-2026-6", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 0.75},
  {"src": "eiffel-tower-2024-3", "place": "Eiffel Tower, Paris", "year": "2024", "r": 0.75},
  {"src": "osaka-2026-5", "place": "Osaka", "year": "2026", "r": 0.75},
  {"src": "todai-ji-2026-5", "place": "Tōdai-ji, Nara", "year": "2026", "r": 0.75},
  {"src": "usj-2026", "place": "Universal Studios Japan, Osaka", "year": "2026", "r": 0.75},
  {"src": "osaka-2026-4", "place": "Osaka", "year": "2026", "r": 0.75},
  {"src": "terracotta-army-2025", "place": "Terracotta Army, Xi’an", "year": "2025", "r": 0.75},
  {"src": "fushimi-inari-taisha-2026-7", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 0.75},
  {"src": "chongqing-2025-5", "place": "Chongqing", "year": "2025", "r": 2.2615},
  {"src": "london-2024-2", "place": "London", "year": "2024", "r": 1.3333},
  {"src": "chongqing-2025", "place": "Chongqing", "year": "2025", "r": 1.4035},
  {"src": "london-2024-4", "place": "London", "year": "2024", "r": 1.3333},
  {"src": "chongqing-2025-3", "place": "Chongqing", "year": "2025", "r": 0.4953},
  {"src": "fushimi-inari-taisha-2026-5", "place": "Fushimi Inari Taisha, Kyoto", "year": "2026", "r": 0.75},
  {"src": "osaka-2026-10", "place": "Osaka", "year": "2026", "r": 0.75},
  {"src": "chongqing-2025-4", "place": "Chongqing", "year": "2025", "r": 0.7422},
  {"src": "osaka-2026-6", "place": "Osaka", "year": "2026", "r": 1.3333},
  {"src": "kyoto-2026-2", "place": "Kyoto", "year": "2026", "r": 0.75},
  {"src": "xian-2025-2", "place": "Xi’an", "year": "2025", "r": 1.2284},
  {"src": "osaka-2026-3", "place": "Osaka", "year": "2026", "r": 1.3333},
  {"src": "swfc-2025", "place": "Shanghai World Financial Center", "year": "2025", "r": 0.75},
  {"src": "forbidden-city-2025", "place": "Forbidden City, Beijing", "year": "2025", "r": 1.3333},
  {"src": "eiffel-tower-2024-2", "place": "Eiffel Tower, Paris", "year": "2024", "r": 0.75},
  {"src": "summer-palace-2025-2", "place": "Summer Palace, Beijing", "year": "2025", "r": 1.3333},
  {"src": "huangpujiang-2025", "place": "Huangpu River, Shanghai", "year": "2025", "r": 1.3333},
  {"src": "osaka-2026", "place": "Osaka", "year": "2026", "r": 0.75}
];

(function () {
  const mural = document.getElementById('gallery-mural');
  if (!mural) return;

  const label = (item) => `${item.place} · ${item.year}`;

  // Build tiles once; layout() only resizes them.
  const tiles = GALLERY.map((item, i) => {
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'gallery-tile';
    tile.setAttribute('aria-label', label(item));
    tile.innerHTML =
      `<img src="gallery/thumbs/${item.src}.jpg" alt="${item.place}, ${item.year}" loading="lazy" decoding="async" />` +
      `<span class="gallery-tile-caption">${label(item)}</span>`;
    tile.addEventListener('click', () => openLightbox(i));
    mural.appendChild(tile);
    return tile;
  });

  // Split the images into rows whose aspect-ratio sums are as even as possible
  // (linear partition), then give each row the height that makes it exactly
  // fill the mural's width. Every row is full, so the whole mural is a rectangle.
  function partition(ratios, k) {
    const n = ratios.length;
    const pre = [0];
    ratios.forEach((r) => pre.push(pre[pre.length - 1] + r));
    const cost = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(Infinity));
    const cut = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    cost[0][0] = 0;
    for (let j = 1; j <= k; j++) {
      for (let i = j; i <= n; i++) {
        for (let p = j - 1; p < i; p++) {
          const c = Math.max(cost[j - 1][p], pre[i] - pre[p]);
          if (c < cost[j][i]) { cost[j][i] = c; cut[j][i] = p; }
        }
      }
    }
    const rows = [];
    for (let j = k, i = n; j > 0; j--) {
      const p = cut[j][i];
      rows.unshift([p, i]);
      i = p;
    }
    return rows;
  }

  const GAP = 4;
  let lastWidth = 0;

  function layout() {
    const width = mural.clientWidth;
    if (!width || width === lastWidth) return;
    lastWidth = width;
    const ratios = GALLERY.map((item) => item.r);
    const total = ratios.reduce((a, b) => a + b, 0);
    const target = width < 600 ? 110 : 190;
    const k = Math.max(1, Math.min(ratios.length, Math.round((total * target) / width)));
    partition(ratios, k).forEach(([start, end]) => {
      const sum = ratios.slice(start, end).reduce((a, b) => a + b, 0);
      const inner = width - GAP * (end - start - 1);
      const height = inner / sum;
      let used = 0;
      for (let i = start; i < end; i++) {
        // Last tile absorbs rounding so each row ends flush with the edge.
        const w = i === end - 1 ? inner - used : Math.floor(height * ratios[i]);
        used += w;
        tiles[i].style.width = `${w}px`;
        tiles[i].style.height = `${Math.round(height)}px`;
      }
    });
  }

  layout();
  new ResizeObserver(layout).observe(mural);

  // ── Lightbox ──
  const box = document.getElementById('lightbox');
  const boxImg = box.querySelector('.lightbox-img');
  const boxCaption = box.querySelector('.lightbox-caption');
  let current = 0;
  let lastFocus = null;

  function show(i) {
    current = (i + GALLERY.length) % GALLERY.length;
    const item = GALLERY[current];
    // Show the thumbnail instantly, then swap in the full-resolution file.
    boxImg.src = `gallery/thumbs/${item.src}.jpg`;
    boxImg.alt = `${item.place}, ${item.year}`;
    boxCaption.textContent = label(item);
    const full = new Image();
    full.onload = () => { if (GALLERY[current] === item) boxImg.src = full.src; };
    full.src = `gallery/${item.src}.jpg`;
    // Warm the cache for the neighbours.
    [current - 1, current + 1].forEach((j) => {
      new Image().src = `gallery/${GALLERY[(j + GALLERY.length) % GALLERY.length].src}.jpg`;
    });
  }

  function openLightbox(i) {
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.classList.add('lightbox-open');
    box.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    box.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastFocus) lastFocus.focus();
  }

  box.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  box.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', (e) => { if (e.target === box) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();
