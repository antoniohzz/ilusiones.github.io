

  /* ─────────────────────────────────────────
     DIMENSIONES GLOBALES DE CADA CANVAS
  ───────────────────────────────────────── */
  const W = 200;
  const H = 200;

  /* ─────────────────────────────────────────
     UTILIDADES
  ───────────────────────────────────────── */

  // Crea un canvas 200×200, lo agrega al contenedor y devuelve su contexto 2D
  function crearCanvas() {
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    document.getElementById("contenedor").appendChild(c);
    const ctx = c.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.6;
    return ctx;
  }

  // Limpia todos los canvas del contenedor
  function limpiar() {
    document.getElementById("contenedor").innerHTML = "";
  }

  // Cambia el set activo: limpia, actualiza título y botones, y dibuja el set
  function mostrarSet(num) {
    limpiar();
    document.getElementById("tituloSet").innerText = "Set " + num;
    [1, 2, 3].forEach(i => {
      document.getElementById("b" + i).classList.toggle("active", i === num);
    });
    if (num === 1) set1();
    if (num === 2) set2();
    if (num === 3) set3();
  }


  /* ══════════════════════════════════════════
     SET 1
  ══════════════════════════════════════════ */
  function set1() {

    /* --- Figura 1 --- */
    let ctx = crearCanvas();
    ctx.beginPath();
    for (let x = 0; x <= W; x += 6) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
    }
    ctx.stroke();

    /* --- Figura 2 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let y = 0; y <= H; y += 6) {
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
    }
    ctx.stroke();

    /* --- Figura 3 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 8) {
      ctx.moveTo(i, 0); ctx.lineTo(i, H); // vertical
      ctx.moveTo(0, i); ctx.lineTo(W, i); // horizontal
    }
    ctx.stroke();

    /* --- Figura 4 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(0,  0); ctx.lineTo(i, H / 2); // esquina sup-izq
      ctx.moveTo(W,  0); ctx.lineTo(i, H / 2); // esquina sup-der
      ctx.moveTo(0,  H); ctx.lineTo(i, H / 2); // esquina inf-izq
      ctx.moveTo(W,  H); ctx.lineTo(i, H / 2); // esquina inf-der
    }
    ctx.stroke();

    /* --- Figura 5 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = -H; i <= W + H; i += 6) {
      ctx.moveTo(i,     0);
      ctx.lineTo(i + H, H);
    }
    ctx.stroke();

    /* --- Figura 6 ---*/
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(0,   H - i); // eje izquierdo, sube
      ctx.lineTo(i,   0);     // eje superior, avanza
    }
    ctx.stroke();

    /* --- Figura 7 ---*/
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(0,     i);   // izquierda, baja
      ctx.lineTo(W,     H-i); // derecha, sube  → diagonal \
      ctx.moveTo(i,     0);   // arriba, avanza
      ctx.lineTo(W - i, H);   // abajo, retrocede → diagonal /
    }
    ctx.stroke();

    /* --- Figura 8 ---*/
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= H; i += 5) {
      ctx.moveTo(0, i);       ctx.lineTo(W / 2, H / 2); // desde lado izquierdo
      ctx.moveTo(W, i);       ctx.lineTo(W / 2, H / 2); // desde lado derecho
    }
    ctx.stroke();
  }


  /* ══════════════════════════════════════════
     SET 2
  ══════════════════════════════════════════ */
  function set2() {

    /* --- Figura 1 ---*/
    let ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(i,     0); ctx.lineTo(W,     i);     // lado superior → lado derecho
      ctx.moveTo(W,     i); ctx.lineTo(W - i, H);     // lado derecho → lado inferior
      ctx.moveTo(W - i, H); ctx.lineTo(0,     H - i); // lado inferior → lado izquierdo
      ctx.moveTo(0,     H - i); ctx.lineTo(i,  0);    // lado izquierdo → lado superior
    }
    ctx.stroke();

    /* --- Figura 2 --- */
    ctx = crearCanvas();
    for (let i = 0; i <= 90; i += 7) {
      ctx.beginPath();
      ctx.moveTo(W / 2, i);       // punta superior
      ctx.lineTo(W - i, H / 2);   // punta derecha
      ctx.lineTo(W / 2, H - i);   // punta inferior
      ctx.lineTo(i,     H / 2);   // punta izquierda
      ctx.closePath();
      ctx.stroke();
    }

    /* --- Figura 3 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 100; i <= W; i += 5) {
      ctx.moveTo(0,     i);     ctx.lineTo(W - i, 0);     // izq → arriba
      ctx.moveTo(W,     i);     ctx.lineTo(i,     0);     // der → arriba
      ctx.moveTo(0,     H - i); ctx.lineTo(W - i, H);     // izq → abajo
      ctx.moveTo(W,     H - i); ctx.lineTo(i,     H);     // der → abajo
    }
    ctx.stroke();

    /* --- Figura 4 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(i,     0); ctx.lineTo(0,     i);     // pétalo esquina sup-izq
      ctx.moveTo(W - i, 0); ctx.lineTo(W,     i);     // pétalo esquina sup-der
      ctx.moveTo(i,     H); ctx.lineTo(0,     H - i); // pétalo esquina inf-izq
      ctx.moveTo(W - i, H); ctx.lineTo(W,     H - i); // pétalo esquina inf-der
    }
    ctx.stroke();

    /* --- Figura 5 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i <= W; i += 5) {
      ctx.moveTo(0, H); ctx.lineTo(i,     0); // base izq → vértice superior, avanza
      ctx.moveTo(W, H); ctx.lineTo(W - i, 0); // base der → vértice superior, retrocede
      ctx.moveTo(0, H); ctx.lineTo(W,     H - i); // base izq → lado derecho, sube
    }
    ctx.stroke();

    /* --- Figura 6 --- */
    ctx = crearCanvas();
    for (let i = 2; i <= 95; i += 7) {
      ctx.strokeRect(i, i, W - 2 * i, H - 2 * i);
    }

    /* --- Figura 7 --- */
    ctx = crearCanvas();
    for (let i = 0; i <= 80; i += 7) {
      ctx.beginPath();
      ctx.moveTo(W / 2,   i + 5);      // vértice superior (centrado)
      ctx.lineTo(W - i - 5, H - i - 5); // vértice inferior-derecho
      ctx.lineTo(i + 5,   H - i - 5);   // vértice inferior-izquierdo
      ctx.closePath();
      ctx.stroke();
    }

    /* --- Figura 8 --- */
    ctx = crearCanvas();
    for (let r = 4; r <= 100; r += 5) {
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }


  /* ══════════════════════════════════════════
     SET 3 
  ══════════════════════════════════════════ */
  function set3() {

    /* --- Figura 1 --- */
    let ctx = crearCanvas();
    ctx.beginPath();
    for (let a = 0; a < Math.PI * 20; a += 0.08) {
      const r = a * 2.8;
      const x = W / 2 + r * Math.cos(a);
      const y = H / 2 + r * Math.sin(a);
      if (a === 0) ctx.moveTo(x, y);
      else         ctx.lineTo(x, y);
    }
    ctx.stroke();

    /* --- Figura 2 --- */
    ctx = crearCanvas();
    // Primera cuadrícula (recta)
    ctx.beginPath();
    for (let i = 0; i <= W; i += 8) {
      ctx.moveTo(i, 0); ctx.lineTo(i, H);
      ctx.moveTo(0, i); ctx.lineTo(W, i);
    }
    ctx.stroke();
    // Segunda cuadrícula (rotada ~7°)
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.rotate(0.12);
    ctx.beginPath();
    ctx.lineWidth = 0.4;
    for (let i = -150; i <= 150; i += 8) {
      ctx.moveTo(i, -150); ctx.lineTo(i,  150);
      ctx.moveTo(-150, i); ctx.lineTo(150, i);
    }
    ctx.stroke();
    ctx.restore();

    /* --- Figura 3 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    const hex = [];
    for (let a = 0; a < 6; a++) {
      hex.push([
        W / 2 + 90 * Math.cos(a * Math.PI / 3 - Math.PI / 6),
        H / 2 + 90 * Math.sin(a * Math.PI / 3 - Math.PI / 6)
      ]);
    }
    for (let s = 0; s < 6; s++) {
      const [x1, y1] = hex[s];
      const [x2, y2] = hex[(s + 1) % 6];
      const [x3, y3] = hex[(s + 3) % 6]; // lado opuesto
      for (let t = 0; t <= 1; t += 0.05) {
        ctx.moveTo(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t);
        ctx.lineTo(x3, y3);
      }
    }
    ctx.stroke();

    /* --- Figura 4 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let row = 0; row < 20; row++) {
      const amp   = 3 + row * 1.2;
      const freq  = 0.06 + row * 0.002;
      const yBase = row * 10 + 5;
      ctx.moveTo(0, yBase);
      for (let x = 0; x <= W; x += 2) {
        ctx.lineTo(x, yBase + Math.sin(x * freq) * amp);
      }
    }
    ctx.stroke();

    /* --- Figura 5 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    const pent = [];
    for (let a = 0; a < 5; a++) {
      pent.push([
        W / 2 + 85 * Math.cos(a * 2 * Math.PI / 5 - Math.PI / 2),
        H / 2 + 85 * Math.sin(a * 2 * Math.PI / 5 - Math.PI / 2)
      ]);
    }
    for (let s = 0; s < 5; s++) {
      const [ax, ay] = pent[s];
      const [bx, by] = pent[(s + 1) % 5];
      const [cx, cy] = pent[(s + 2) % 5];
      for (let t = 0; t <= 1; t += 0.05) {
        ctx.moveTo(ax + (bx - ax) * t, ay + (by - ay) * t);
        ctx.lineTo(ax + (cx - ax) * t, ay + (cy - ay) * t);
      }
    }
    ctx.stroke();

    /* --- Figura 6 --- */
    ctx = crearCanvas();
    for (let r = 10; r <= 100; r += 7) {
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.05) {
        const x = W / 2 + r * Math.cos(a);
        const y = H / 2 + r * 0.45 * Math.sin(a); // aplanado en Y
        if (a === 0) ctx.moveTo(x, y);
        else         ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    /* --- Figura 7 --- */
    ctx = crearCanvas();
    ctx.beginPath();
    for (let i = 0; i < 60; i++) {
      const a  = i * Math.PI / 30;         // ángulo base
      const r1 = 15 + i * 0.5;             // radio interior (crece)
      const r2 = r1 + 45;                  // radio exterior
      const desfase = 0.35;               // cuánto se tuerce la línea
      ctx.moveTo(W / 2 + r1 * Math.cos(a),            H / 2 + r1 * Math.sin(a));
      ctx.lineTo(W / 2 + r2 * Math.cos(a + desfase),  H / 2 + r2 * Math.sin(a + desfase));
    }
    ctx.stroke();

    /* --- Figura 8 --- */
    ctx = crearCanvas();
    for (let k = 0; k <= 1; k += 0.05) {
      const m = k * W / 2;
      ctx.beginPath();
      ctx.moveTo(m,     0);      // punto en borde superior
      ctx.lineTo(W,     m);      // punto en borde derecho
      ctx.lineTo(W - m, H);      // punto en borde inferior
      ctx.lineTo(0,     H - m);  // punto en borde izquierdo
      ctx.closePath();
      ctx.stroke();
    }
  }


  /* ─────────────────────────────────────────
     INICIO: mostrar Set 1 por defecto
  ───────────────────────────────────────── */
  mostrarSet(1);
