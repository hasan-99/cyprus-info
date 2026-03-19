document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  // ── Hero Typing Effect ──
  function typeHeroTitle() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    if (reducedMotion) {
      heroTitle.style.opacity = '1';
      return;
    }
    const fullText = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    heroTitle.style.transition = 'none';
    heroTitle.classList.add('typing-active');
    let i = 0;
    const speed = Math.max(20, Math.min(50, 1200 / fullText.length));
    function type() {
      if (i < fullText.length) {
        heroTitle.textContent += fullText[i];
        i++;
        setTimeout(type, speed);
      } else {
        heroTitle.classList.remove('typing-active');
        heroTitle.classList.add('typing-done');
      }
    }
    type();
  }

  // ── Hero Animation Entry Point ──
  function initHeroAnimation() {
    if (hasGSAP && !reducedMotion) {
      const tl = gsap.timeline();
      tl.to('.hero-badge', { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' })
        .to('.hero-title', { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .to('.hero-subtitle', { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, '-=0.3')
        .to('.hero-actions', { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        .call(typeHeroTitle, null, '-=0.3');
    } else {
      // No GSAP fallback
      document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-actions').forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
      });
      typeHeroTitle();
    }
  }

  // ── Page Loader — Interactive Earth to Cyprus ──
  const loader = document.getElementById('pageLoader');
  const loaderCanvas = document.getElementById('loaderCanvas');
  if (loader && loaderCanvas && !reducedMotion) {
    document.body.classList.add('loading');
    const lctx = loaderCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(420, window.innerWidth * 0.9);
    loaderCanvas.width = size * dpr;
    loaderCanvas.height = size * dpr;
    loaderCanvas.style.width = size + 'px';
    loaderCanvas.style.height = size + 'px';
    lctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2, R = size * 0.32;
    const gold = '#D4AF37', goldLight = '#E8C97A';
    const PI = Math.PI, TAU = PI * 2;
    const toRad = d => d * PI / 180;

    const CYPRUS = { lat: toRad(35.1), lon: toRad(33.4) };

    const CITIES = [
      { name: 'Dubai',    lat: toRad(25.2), lon: toRad(55.3),  delay: 0.8 },
      { name: 'London',   lat: toRad(51.5), lon: toRad(-0.1),  delay: 1.2 },
      { name: 'Riyadh',   lat: toRad(24.7), lon: toRad(46.7),  delay: 1.0 },
      { name: 'Moscow',   lat: toRad(55.8), lon: toRad(37.6),  delay: 1.4 },
      { name: 'Mumbai',   lat: toRad(19.1), lon: toRad(72.9),  delay: 1.6 },
    ];

    const LAND_POINTS = [];
    [[48,2],[50,14],[52,21],[55,12],[57,10],[60,25],[65,25],[70,30],[55,37],[45,40],[40,28],[38,24],[36,28],[35,33],[37,15],[39,9],[41,2],[43,-9],[48,-5],[51,-3]].forEach(p => LAND_POINTS.push({lat:toRad(p[0]),lon:toRad(p[1])}));
    [[35,0],[30,10],[25,33],[15,40],[10,45],[0,42],[-5,38],[-15,35],[-25,30],[-34,18],[-34,26],[-20,44],[-12,49],[5,10],[15,0],[30,-5],[35,-1]].forEach(p => LAND_POINTS.push({lat:toRad(p[0]),lon:toRad(p[1])}));
    [[30,48],[25,55],[20,58],[15,50],[30,70],[35,75],[40,70],[45,60],[50,55],[55,70],[60,80],[45,90],[30,80],[25,90],[20,100],[10,105],[0,110],[-8,115],[35,105],[40,115],[50,110],[55,130],[60,150],[50,140],[40,140],[35,130],[30,120]].forEach(p => LAND_POINTS.push({lat:toRad(p[0]),lon:toRad(p[1])}));
    [[60,-70],[50,-60],[45,-65],[40,-75],[35,-80],[30,-85],[25,-80],[20,-100],[15,-90],[10,-75],[5,-75],[0,-80],[-5,-80],[-15,-50],[-23,-43],[-30,-52],[-35,-58],[-45,-65],[-55,-68],[55,-130],[50,-125],[40,-120],[35,-118],[30,-115],[25,-110]].forEach(p => LAND_POINTS.push({lat:toRad(p[0]),lon:toRad(p[1])}));

    const orbitParticles = Array.from({length: 30}, () => ({
      angle: Math.random() * TAU,
      speed: 0.3 + Math.random() * 0.4,
      r: R + 15 + Math.random() * 25,
      size: 0.5 + Math.random() * 1.5,
      alpha: 0.1 + Math.random() * 0.3,
    }));

    const stars = Array.from({length: 80}, () => ({
      x: Math.random() * size, y: Math.random() * size,
      size: Math.random() * 1.2 + 0.3, alpha: Math.random() * 0.5 + 0.1,
      blink: Math.random() * TAU,
    }));

    let loaderDone = false;
    const startTime = performance.now();
    const loaderLabel = document.getElementById('loaderLabel');
    const loaderTagline = document.querySelector('.loader-tagline');

    function project(lat, lon, rot) {
      const x3d = Math.cos(lat) * Math.sin(lon + rot);
      const y3d = -Math.sin(lat);
      const z3d = Math.cos(lat) * Math.cos(lon + rot);
      return { x: cx + x3d * R, y: cy + y3d * R, z: z3d };
    }

    function drawArc(p1, p2, progress, t, color, width) {
      if (p1.z < -0.2 && p2.z < -0.2) return;
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      const dist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
      const lift = -dist * 0.4;
      const cpX = midX;
      const cpY = midY + lift;

      const steps = Math.floor(progress * 30);
      if (steps < 1) return;

      lctx.lineWidth = width;
      lctx.setLineDash([3, 3]);
      lctx.lineDashOffset = -t * 40;
      for (let s = 0; s < steps; s++) {
        const t1 = s / 30, t2 = (s + 1) / 30;
        const ax = (1-t1)*(1-t1)*p1.x + 2*(1-t1)*t1*cpX + t1*t1*p2.x;
        const ay = (1-t1)*(1-t1)*p1.y + 2*(1-t1)*t1*cpY + t1*t1*p2.y;
        const bx = (1-t2)*(1-t2)*p1.x + 2*(1-t2)*t2*cpX + t2*t2*p2.x;
        const by = (1-t2)*(1-t2)*p1.y + 2*(1-t2)*t2*cpY + t2*t2*p2.y;
        const alpha = Math.min(1, progress) * (0.3 + 0.7 * (s / steps));
        lctx.strokeStyle = color.replace('1)', alpha + ')');
        lctx.beginPath(); lctx.moveTo(ax, ay); lctx.lineTo(bx, by); lctx.stroke();
      }
      lctx.setLineDash([]);

      if (progress < 1) {
        const u = 1 - progress;
        const dotX = u*u*p1.x + 2*u*progress*cpX + progress*progress*p2.x;
        const dotY = u*u*p1.y + 2*u*progress*cpY + progress*progress*p2.y;
        lctx.fillStyle = goldLight;
        lctx.shadowColor = goldLight; lctx.shadowBlur = 15;
        lctx.beginPath(); lctx.arc(dotX, dotY, 3, 0, TAU); lctx.fill();
        lctx.shadowBlur = 0;
      }
    }

    function drawFrame(now) {
      if (loaderDone) return;
      const t = (now - startTime) / 1000;
      const rot = toRad(33) * -1 + Math.sin(t * 0.3) * 0.15;
      lctx.clearRect(0, 0, size, size);

      for (const s of stars) {
        const flicker = 0.5 + Math.sin(t * 2 + s.blink) * 0.5;
        lctx.fillStyle = `rgba(212,175,55,${s.alpha * flicker * 0.4})`;
        lctx.beginPath(); lctx.arc(s.x, s.y, s.size, 0, TAU); lctx.fill();
      }

      const glow1 = lctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.8);
      glow1.addColorStop(0, 'rgba(212,175,55,0.04)');
      glow1.addColorStop(0.5, 'rgba(212,175,55,0.02)');
      glow1.addColorStop(1, 'transparent');
      lctx.fillStyle = glow1;
      lctx.beginPath(); lctx.arc(cx, cy, R * 1.8, 0, TAU); lctx.fill();

      lctx.strokeStyle = 'rgba(212,175,55,0.06)';
      lctx.lineWidth = 8;
      lctx.beginPath(); lctx.arc(cx, cy, R + 4, 0, TAU); lctx.stroke();

      const globeGrad = lctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
      globeGrad.addColorStop(0, 'rgba(25,25,20,1)');
      globeGrad.addColorStop(0.8, 'rgba(10,10,8,1)');
      globeGrad.addColorStop(1, 'rgba(5,5,3,1)');
      lctx.fillStyle = globeGrad;
      lctx.beginPath(); lctx.arc(cx, cy, R, 0, TAU); lctx.fill();

      lctx.strokeStyle = 'rgba(212,175,55,0.2)';
      lctx.lineWidth = 1.5;
      lctx.beginPath(); lctx.arc(cx, cy, R, 0, TAU); lctx.stroke();

      lctx.save();
      lctx.beginPath(); lctx.arc(cx, cy, R - 1, 0, TAU); lctx.clip();

      lctx.strokeStyle = 'rgba(212,175,55,0.05)';
      lctx.lineWidth = 0.5;
      for (let lat = -75; lat <= 75; lat += 15) {
        const latRad = toRad(lat);
        const y = cy - Math.sin(latRad) * R;
        const rr = Math.cos(latRad) * R;
        lctx.beginPath(); lctx.ellipse(cx, y, rr, rr * 0.25, 0, 0, TAU); lctx.stroke();
      }

      for (let lon = 0; lon < 360; lon += 15) {
        const lonRad = toRad(lon) + rot;
        lctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 3) {
          const latRad = toRad(lat);
          const p = project(latRad, lonRad - rot, rot);
          if (p.z < 0) { lctx.moveTo(p.x, p.y); continue; }
          if (lat === -90) lctx.moveTo(p.x, p.y); else lctx.lineTo(p.x, p.y);
        }
        lctx.stroke();
      }

      for (const lp of LAND_POINTS) {
        const p = project(lp.lat, lp.lon, rot);
        if (p.z < 0.05) continue;
        const brightness = p.z * 0.5 + 0.1;
        lctx.fillStyle = `rgba(212,175,55,${brightness})`;
        lctx.beginPath();
        lctx.arc(p.x, p.y, 1.5 + p.z * 1.5, 0, TAU);
        lctx.fill();
      }

      for (const city of CITIES) {
        const p = project(city.lat, city.lon, rot);
        if (p.z < 0) continue;
        lctx.fillStyle = `rgba(232,201,122,${p.z * 0.5})`;
        lctx.beginPath(); lctx.arc(p.x, p.y, 2, 0, TAU); lctx.fill();
      }

      const cypProj = project(CYPRUS.lat, CYPRUS.lon, rot);
      if (cypProj.z > 0) {
        const pingCount = 3;
        for (let i = 0; i < pingCount; i++) {
          const phase = ((t * 1.5 + i / pingCount) % 1);
          const radius = 4 + phase * 18;
          const alpha = (1 - phase) * 0.5;
          lctx.strokeStyle = `rgba(212,175,55,${alpha})`;
          lctx.lineWidth = 1;
          lctx.beginPath(); lctx.arc(cypProj.x, cypProj.y, radius, 0, TAU); lctx.stroke();
        }

        lctx.fillStyle = gold;
        lctx.shadowColor = gold; lctx.shadowBlur = 20;
        lctx.beginPath(); lctx.arc(cypProj.x, cypProj.y, 5, 0, TAU); lctx.fill();
        lctx.shadowBlur = 0;

        lctx.fillStyle = '#FFF8E1';
        lctx.beginPath(); lctx.arc(cypProj.x, cypProj.y, 2, 0, TAU); lctx.fill();
      }

      lctx.restore();

      if (t > 0.6) {
        for (const city of CITIES) {
          const cityProj = project(city.lat, city.lon, rot);
          const cypP = project(CYPRUS.lat, CYPRUS.lon, rot);
          if (cityProj.z < -0.1 || cypP.z < -0.1) continue;
          const elapsed = t - city.delay;
          if (elapsed < 0) continue;
          const progress = Math.min(elapsed / 0.8, 1);
          drawArc(cityProj, cypP, progress, t, 'rgba(232,201,122,1)', 1);
        }
      }

      lctx.save();
      for (const op of orbitParticles) {
        op.angle += op.speed * 0.016;
        const px = cx + Math.cos(op.angle) * op.r;
        const py = cy + Math.sin(op.angle) * op.r * 0.35;
        lctx.fillStyle = `rgba(212,175,55,${op.alpha})`;
        lctx.beginPath(); lctx.arc(px, py, op.size, 0, TAU); lctx.fill();
      }
      lctx.restore();

      if (t > 2 && cypProj.z > 0) {
        const labelAlpha = Math.min((t - 2) / 0.5, 1);
        lctx.fillStyle = `rgba(232,201,122,${labelAlpha})`;
        lctx.font = `600 ${size * 0.03}px Poppins, sans-serif`;
        lctx.textAlign = 'center';
        lctx.letterSpacing = '2px';
        lctx.fillText('CYPRUS', cypProj.x, cypProj.y + R * 0.18);
      }

      if (loaderLabel) {
        if (t < 0.6) loaderLabel.textContent = 'Locating Cyprus';
        else if (t < 1.8) loaderLabel.textContent = 'Establishing Connections';
        else loaderLabel.textContent = 'Connected';
      }
      if (loaderTagline && t > 2.2) loaderTagline.classList.add('visible');

      requestAnimationFrame(drawFrame);
    }
    requestAnimationFrame(drawFrame);

    const dismiss = () => {
      if (loaderDone) return;
      loaderDone = true;
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
      loader.addEventListener('transitionend', () => {
        loader.remove();
        initHeroAnimation();
      }, { once: true });
    };

    const minTime = 3200;
    if (document.readyState === 'complete') {
      setTimeout(dismiss, minTime);
    } else {
      window.addEventListener('load', () => {
        const elapsed = performance.now() - startTime;
        setTimeout(dismiss, Math.max(0, minTime - elapsed));
      });
    }
    setTimeout(dismiss, 5000);
  } else {
    if (loader) { loader.remove(); }
    initHeroAnimation();
  }

  // ── Scroll Progress Bar ──
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress && !reducedMotion) {
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    }, { passive: true });
  }

  // ── Custom Cursor ──
  if (!isTouchDevice && !reducedMotion) {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot && ring) {
      let mouseX = -100, mouseY = -100;
      let ringX = -100, ringY = -100;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      });

      function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
      }
      animateRing();
    }
  }

  // ── Hero Particle Background ──
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas && !reducedMotion) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let w, h;
    let canvasMouseX = -1000, canvasMouseY = -1000;
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 40 : 80;
    const CONNECTION_DIST = 150;
    const MOUSE_RADIUS = 200;

    function resize() {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      heroCanvas.width = w * dpr;
      heroCanvas.height = h * dpr;
      heroCanvas.style.width = w + 'px';
      heroCanvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    }

    function createParticle() {
      const variant = Math.random();
      let r, g, b;
      if (variant > 0.6) {
        r = 212; g = 175; b = 55;
      } else if (variant > 0.3) {
        r = 232; g = 201; b = 122;
      } else {
        r = 255; g = 240; b = 200;
      }
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2.5 + 0.8,
        baseRadius: 0,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        r: r, g: g, b: b
      };
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = createParticle();
        p.baseRadius = p.radius;
        particles.push(p);
      }
    }

    function animate(time) {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      const t = time * 0.001;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - canvasMouseX;
        const dy = p.y - canvasMouseY;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < MOUSE_RADIUS && mouseDist > 0) {
          const force = (1 - mouseDist / MOUSE_RADIUS) * 2;
          p.x += (dx / mouseDist) * force;
          p.y += (dy / mouseDist) * force;
        }

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const pulse = Math.sin(t * p.pulseSpeed * 60 + p.pulseOffset);
        p.radius = p.baseRadius + pulse * 0.6;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    init();
    requestAnimationFrame(animate);

    heroCanvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      canvasMouseX = e.clientX - rect.left;
      canvasMouseY = e.clientY - rect.top;
    }, { passive: true });

    heroCanvas.parentElement.addEventListener('mouseleave', () => {
      canvasMouseX = -1000;
      canvasMouseY = -1000;
    }, { passive: true });

    window.addEventListener('resize', resize, { passive: true });
  }

  // ── Language Toggle ──
  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    const current = getCurrentLang();
    setLanguage(current === 'ar' ? 'en' : 'ar');
  });
  setLanguage(getCurrentLang());

  // ── Mobile Menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ── Sticky Header ──
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // ── Smooth Scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── FAQ Accordion (GSAP-powered) ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all other open items
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem === item) return;
        const openAnswer = openItem.querySelector('.faq-answer');
        openItem.classList.remove('active');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        if (hasGSAP && !reducedMotion) {
          gsap.to(openAnswer, { height: 0, duration: 0.35, ease: 'power2.inOut' });
        } else {
          openAnswer.style.height = '0';
        }
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        if (hasGSAP && !reducedMotion) {
          gsap.set(answer, { height: 'auto' });
          gsap.from(answer, { height: 0, duration: 0.4, ease: 'power2.out' });
        } else {
          answer.style.height = 'auto';
        }
      } else {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        if (hasGSAP && !reducedMotion) {
          gsap.to(answer, { height: 0, duration: 0.35, ease: 'power2.inOut' });
        } else {
          answer.style.height = '0';
        }
      }
    });
  });

  // ── Price Counter Animation ──
  const priceTag = document.querySelector('.price-tag');
  if (priceTag) {
    const priceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatePrice(priceTag);
          priceObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    priceObserver.observe(priceTag);
  }

  function animatePrice(el) {
    const target = 999;
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = '\u20AC' + current + ' + VAT';
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ── Contact Form ──
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      const required = form.querySelectorAll('[required]');
      required.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      const email = form.querySelector('#email');
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      if (valid) {
        form.hidden = true;
        formSuccess.hidden = false;
      }
    });

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
      });
    });
  }

  // ══════════════════════════════════════
  // ── GSAP Animation System (Phase 8) ──
  // ══════════════════════════════════════
  if (hasGSAP) {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial hidden state for hero elements (GSAP controls visibility)
    gsap.set('.hero-badge, .hero-title, .hero-subtitle, .hero-actions', {
      autoAlpha: 0, y: 40
    });

    // Reduced motion: show everything immediately, skip all scroll animations
    if (reducedMotion) {
      gsap.set('.hero-badge, .hero-title, .hero-subtitle, .hero-actions', {
        autoAlpha: 1, y: 0
      });
      return;
    }

    // ── ScrollTrigger Section Entrances ──
    const sectionEls = '.section-title, .section-intro, .callout, .disclaimer, .highlight-text, .section-note, .package-price, .contact-form, .form-trust, .timeline-bar';

    document.querySelectorAll(sectionEls).forEach(el => {
      // Skip hero section elements (handled by hero cascade)
      if (el.closest('.hero-section')) return;

      gsap.from(el, {
        y: 35,
        autoAlpha: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      });
    });

    // ── Staggered Grid Reveals ──
    const grids = '.features-grid, .audience-grid, .package-list, .trust-grid, .stepper, .faq-list';

    document.querySelectorAll(grids).forEach(grid => {
      const children = grid.children;
      if (!children.length) return;

      gsap.from(children, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 88%',
          once: true
        }
      });
    });

    // ── CTA Section Buttons/Actions ──
    document.querySelectorAll('.cta-section').forEach(cta => {
      const els = cta.querySelectorAll('.btn, .hero-actions');
      if (!els.length) return;

      gsap.from(els, {
        y: 25,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cta,
          start: 'top 85%',
          once: true
        }
      });
    });

    // ── Parallax Effects ──
    const heroGoldGlow = document.querySelector('.hero-glow--gold');
    const heroGreenGlow = document.querySelector('.hero-glow--green');

    if (heroGoldGlow) {
      gsap.to(heroGoldGlow, {
        y: -80,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    }

    if (heroGreenGlow) {
      gsap.to(heroGreenGlow, {
        y: -50,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    }

    // Parallax on tax watermark
    const taxWatermark = document.querySelector('.tax-watermark');
    if (taxWatermark) {
      gsap.to(taxWatermark, {
        y: -40,
        scrollTrigger: {
          trigger: '#tax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // ── Button Gold Ripple Effect ──
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        btn.appendChild(ripple);

        gsap.fromTo(ripple,
          { scale: 0, autoAlpha: 0.5 },
          {
            scale: 4, autoAlpha: 0, duration: 0.6, ease: 'power2.out',
            onComplete: () => ripple.remove()
          }
        );
      });
    });
  }
});
