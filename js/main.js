// ══════════════════════════════════════════════
//  CONFIGURACIÓN — cambiá estos valores
// ══════════════════════════════════════════════
const CONFIG = {
  whatsappNumber: '5493512345678', // código país + número sin + ni espacios
  storeName: 'Ferretería El Tornillo',
  storeUrl: 'ferreteria-eltornillo.com.ar'
};

// ══════════════════════════════════════════════
//  BASE DE DATOS DE PRODUCTOS (demo)
// ══════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1, categoria: 'Electricidad', emoji: '🔌',
    marca: 'Prysmian', sku: 'PRY-UNI-25-R',
    nombre: 'Cable unipolar 2.5mm² 750V IRAM 2183',
    descripcion: 'Cable unipolar de cobre electrolítico recocido, aislado con PVC de alta calidad. Ideal para instalaciones residenciales y comerciales. Cumple norma IRAM 2183.',
    unidades: ['Metro lineal', 'Bobina 100m', 'Bobina 200m'],
    variantes: [
      { tipo: 'Sección', opciones: ['1.5 mm²', '2.5 mm²', '4 mm²', '6 mm²'] },
      { tipo: 'Color', opciones: ['Rojo', 'Azul', 'Verde', 'Negro', 'Blanco'] }
    ],
    specs: { 'Sección nominal': '2.5 mm²', 'Tensión nominal': '750V', 'Norma': 'IRAM 2183', 'Conductor': 'Cobre electrolítico', 'Venta': 'Metro / bobina' }
  },
  {
    id: 2, categoria: 'Electricidad', emoji: '⚡',
    marca: 'Bticino', sku: 'BTI-TM-2X20',
    nombre: 'Llave termomagnética bipolar 2x20A 220V riel DIN',
    descripcion: 'Interruptor termomagnético bipolar para montaje en riel DIN. Protección contra sobrecargas y cortocircuitos. Capacidad de ruptura 6kA.',
    unidades: ['Unidad'],
    variantes: [
      { tipo: 'Amperaje', opciones: ['10A', '16A', '20A', '25A', '32A'] },
      { tipo: 'Polos', opciones: ['Monofásico 1x', 'Bipolar 2x', 'Tripolar 3x'] }
    ],
    specs: { 'Polos': 'Bipolar', 'Amperaje': '20A', 'Tensión': '220V', 'Ruptura': '6kA', 'Montaje': 'Riel DIN' }
  },
  {
    id: 3, categoria: 'Electricidad', emoji: '🔦',
    marca: '3M', sku: '3M-CINTA-20-NG',
    nombre: 'Cinta aisladora 20m vinílica alta temperatura',
    descripcion: 'Cinta aisladora vinílica de alta calidad. Resistente a altas temperaturas, humedad y aceites. Ideal para empalmes y aislaciones eléctricas.',
    unidades: ['Unidad', 'Pack x10', 'Pack x30'],
    variantes: [
      { tipo: 'Color', opciones: ['Negro', 'Rojo', 'Azul', 'Blanco', 'Verde'] },
      { tipo: 'Longitud', opciones: ['10m', '20m', '33m'] }
    ],
    specs: { 'Largo': '20 metros', 'Ancho': '19mm', 'Espesor': '0.19mm', 'Temperatura': '-18°C a +105°C', 'Norma': 'UL 510' }
  },
  {
    id: 4, categoria: 'Plomería', emoji: '🚿',
    marca: 'Awaduct', sku: 'AWA-CANO-34-PP',
    nombre: 'Caño termofusión PP-R 3/4" presión rosca',
    descripcion: 'Tubo de polipropileno random para agua fría y caliente. Apto para instalaciones de presión. Termofusión garantiza unión hermética y duradera.',
    unidades: ['Metro', 'Barra 4m', 'Barra 6m'],
    variantes: [
      { tipo: 'Diámetro', opciones: ['1/2"', '3/4"', '1"', '1 1/4"', '2"'] },
      { tipo: 'Tipo', opciones: ['Agua fría', 'Agua caliente PN20'] }
    ],
    specs: { 'Diámetro': '3/4"', 'Material': 'PP-R', 'Presión': 'PN10 / PN20', 'Temp. máx.': '95°C', 'Apto': 'Agua potable' }
  },
  {
    id: 5, categoria: 'Plomería', emoji: '🔧',
    marca: 'FV', sku: 'FV-GRI-MES-CR',
    nombre: 'Grifería monocomando para mesada FV Star cromada',
    descripcion: 'Grifería monocomando de mesada de una vía. Cartucho cerámico importado. Cuerpo y manija en zamak con terminación cromada.',
    unidades: ['Unidad'],
    variantes: [
      { tipo: 'Terminación', opciones: ['Cromado', 'Blanco', 'Negro mate'] }
    ],
    specs: { 'Tipo': 'Monocomando', 'Cuerpo': 'Zamak', 'Cartucho': 'Cerámico 35mm', 'Conexión': '1/2"', 'Garantía': '5 años' }
  },
  {
    id: 6, categoria: 'Herramientas', emoji: '🔨',
    marca: 'Stanley', sku: 'STN-MRT-800',
    nombre: 'Martillo de uña 800g mango fibra de vidrio',
    descripcion: 'Martillo de carpintero con cabeza de acero templado y mango antivibratorio de fibra de vidrio. Uña magnética para inicio de clavado.',
    unidades: ['Unidad'],
    variantes: [
      { tipo: 'Peso', opciones: ['400g', '600g', '800g', '1kg'] }
    ],
    specs: { 'Peso cabeza': '800g', 'Mango': 'Fibra de vidrio', 'Largo': '360mm', 'Cabeza': 'Acero al carbono templado', 'Uña': 'Magnética' }
  },
  {
    id: 7, categoria: 'Herramientas', emoji: '⚙️',
    marca: 'Bosch', sku: 'BSH-TDB-710W',
    nombre: 'Taladro percutor Bosch 710W 13mm velocidad variable',
    descripcion: 'Taladro percutor con mandril de 13mm y velocidad variable. Motor de 710W para trabajo continuo. Función taladro y percusión en hormigón, madera y metal.',
    unidades: ['Unidad'],
    variantes: [
      { tipo: 'Voltaje', opciones: ['220V 50Hz'] }
    ],
    specs: { 'Potencia': '710W', 'Mandril': '13mm', 'RPM': '0–3000', 'IPM': '0–48.000', 'Peso': '1.9kg' }
  },
  {
    id: 8, categoria: 'Tornillería', emoji: '🔩',
    marca: 'Würth', sku: 'WUR-TOB-4X50',
    nombre: 'Tornillo autoperforante cabeza avellanada 4x50mm zincado',
    descripcion: 'Tornillo autoperforante con cabeza avellanada Phillips. Acero zincado con tratamiento anticorrosión. Para chapa, madera y plástico.',
    unidades: ['Unidad', 'Caja x100', 'Caja x500', 'Kilo'],
    variantes: [
      { tipo: 'Medida', opciones: ['3.5x25mm', '3.9x32mm', '4x50mm', '4.2x70mm', '5x80mm'] },
      { tipo: 'Cabeza', opciones: ['Avellanada', 'Hexagonal', 'Brida'] }
    ],
    specs: { 'Diámetro': '4mm', 'Longitud': '50mm', 'Acero': 'Zincado SAE 1022', 'Cabeza': 'Avellanada Phillips', 'Punta': 'Autoperforante' }
  },
  {
    id: 9, categoria: 'Pintura', emoji: '🎨',
    marca: 'Sherwin-Williams', sku: 'SHW-LAT-BLK-20L',
    nombre: 'Látex exterior lavable color blanco 20L rendimiento ultralong',
    descripcion: 'Pintura látex acrílica exterior de alto rendimiento. Resistente a la humedad, hongos y rayos UV. Lavable y de fácil aplicación. Rendimiento 12m²/litro.',
    unidades: ['Lata 1L', 'Lata 4L', 'Lata 20L'],
    variantes: [
      { tipo: 'Color base', opciones: ['Blanco', 'Blanco hueso', 'A tinte'] },
      { tipo: 'Acabado', opciones: ['Mate', 'Satinado'] }
    ],
    specs: { 'Volumen': '20 litros', 'Rendimiento': '~240m² / lata 20L', 'Diluente': 'Agua', 'Secado al tacto': '30 minutos', 'Repintado': '2 horas' }
  },
  {
    id: 10, categoria: 'Seguridad', emoji: '🦺',
    marca: '3M', sku: '3M-CASCO-H700',
    nombre: 'Casco de seguridad 3M H-700 clase E ventilado blanco',
    descripcion: 'Casco de seguridad industrial Clase E (eléctrica hasta 20.000V). Ventilación ajustable. Suspensión tipo matraca. Resistente a impactos y penetraciones según ANSI Z89.1.',
    unidades: ['Unidad'],
    variantes: [
      { tipo: 'Color', opciones: ['Blanco', 'Amarillo', 'Naranja', 'Rojo', 'Azul'] },
      { tipo: 'Ventilación', opciones: ['Sin ventilación', 'Ventilado ajustable'] }
    ],
    specs: { 'Clase': 'E – Eléctrica', 'Norma': 'ANSI Z89.1 / IRAM 3620', 'Material': 'HDPE', 'Voltaje': 'Hasta 20.000V', 'Suspensión': 'Matraca 4 puntos' }
  }
];

const CATEGORIES = ['Todos', ...new Set(PRODUCTS.map(p => p.categoria))];

// ══════════════════════════════════════════════
//  ESTADO DE LA APP
// ══════════════════════════════════════════════
let cart = [];
let currentProduct = null;
let selectedVariants = {};
let activeCategory = 'Todos';
let searchQuery = '';

// ══════════════════════════════════════════════
//  NAVEGACIÓN
// ══════════════════════════════════════════════
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'catalog') renderCatalog();
  if (name === 'cart') renderCart();
}

// ══════════════════════════════════════════════
//  CATÁLOGO
// ══════════════════════════════════════════════
function filterByCategory(cat) {
  activeCategory = cat;
  searchQuery = '';
  document.getElementById('search-input').value = '';
  showView('catalog');
}

function filterProducts(q) {
  searchQuery = q.toLowerCase();
  activeCategory = 'Todos';
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.cat-pill')?.classList.add('active');
  renderCatalog();
}

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.categoria === activeCategory;
    const matchQ = !searchQuery || p.nombre.toLowerCase().includes(searchQuery)
      || p.marca.toLowerCase().includes(searchQuery)
      || p.sku.toLowerCase().includes(searchQuery);
    return matchCat && matchQ;
  });
}

function renderCatalog() {
  // Category bar
  const bar = document.getElementById('cat-bar-inner');
  bar.innerHTML = CATEGORIES.map(c =>
    `<button class="cat-pill${activeCategory===c?' active':''}" onclick="setCat('${c}')">${c}</button>`
  ).join('');

  const filtered = getFilteredProducts();
  document.getElementById('cat-title').textContent =
    activeCategory === 'Todos' ? 'Todos los productos' : activeCategory;
  document.getElementById('cat-count').textContent =
    `${filtered.length} producto${filtered.length!==1?'s':''} encontrado${filtered.length!==1?'s':''}`;

  const grid = document.getElementById('product-grid');
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-cat" style="grid-column:1/-1"><div style="font-size:40px;margin-bottom:12px">🔍</div><p>No se encontraron productos para "${searchQuery || activeCategory}".</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-card-img">
        <span>${p.emoji}</span>
        <div class="badge">${p.categoria}</div>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${p.marca}</div>
        <div class="product-card-name">${p.nombre}</div>
        <div class="product-card-sku">SKU: ${p.sku}</div>
      </div>
      <div class="product-card-footer">
        <div class="no-price">💬 A cotizar</div>
        <button class="add-quick" onclick="event.stopPropagation();quickAdd(${p.id})" title="Agregar a cotización">+</button>
      </div>
    </div>
  `).join('');
}

function setCat(cat) {
  activeCategory = cat;
  searchQuery = '';
  document.getElementById('search-input').value = '';
  renderCatalog();
}

// ══════════════════════════════════════════════
//  DETALLE DE PRODUCTO
// ══════════════════════════════════════════════
function openProduct(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  if (!currentProduct) return;
  selectedVariants = {};
  currentProduct.variantes?.forEach(v => { selectedVariants[v.tipo] = v.opciones[0]; });

  // Breadcrumb
  document.getElementById('detail-breadcrumb').innerHTML =
    `<a href="#" onclick="showView('home');return false;">Inicio</a> <span>›</span>
     <a href="#" onclick="showView('catalog');return false;">Catálogo</a> <span>›</span>
     <a href="#" onclick="filterByCategory('${currentProduct.categoria}');return false;">${currentProduct.categoria}</a> <span>›</span>
     ${currentProduct.nombre}`;

  document.getElementById('detail-emoji').textContent = currentProduct.emoji;
  document.getElementById('detail-cat-label').textContent = currentProduct.categoria;

  // Thumbs
  document.getElementById('detail-thumbs').innerHTML =
    [currentProduct.emoji, '📦', '📋'].map((e,i) =>
      `<div class="thumb${i===0?' active':''}">${e}</div>`
    ).join('');

  // Specs
  document.getElementById('detail-specs').innerHTML =
    Object.entries(currentProduct.specs).map(([k,v]) =>
      `<div class="spec-row"><dt>${k}</dt><dd>${v}</dd></div>`
    ).join('');

  document.getElementById('detail-desc').textContent = currentProduct.descripcion;
  document.getElementById('ab-brand').textContent = currentProduct.marca;
  document.getElementById('ab-sku').textContent = 'SKU: ' + currentProduct.sku;
  document.getElementById('ab-title').textContent = currentProduct.nombre;

  // Variantes
  renderDetailVariants();

  // Unidades
  const sel = document.getElementById('ab-unit');
  sel.innerHTML = currentProduct.unidades.map(u => `<option>${u}</option>`).join('');

  document.getElementById('ab-qty').value = 1;
  showView('detail');
}

function renderDetailVariants() {
  const sec = document.getElementById('ab-variants-section');
  if (!currentProduct.variantes?.length) { sec.innerHTML = ''; return; }
  sec.innerHTML = currentProduct.variantes.map(v => `
    <div style="margin-bottom:14px;">
      <div class="ab-label">${v.tipo}</div>
      <div class="ab-variants">
        ${v.opciones.map(o =>
          `<button class="var-btn${selectedVariants[v.tipo]===o?' active':''}"
            onclick="selectVariant('${v.tipo}','${o}')">${o}</button>`
        ).join('')}
      </div>
    </div>
  `).join('');
}

function selectVariant(tipo, valor) {
  selectedVariants[tipo] = valor;
  renderDetailVariants();
}

function changeDetailQty(delta) {
  const inp = document.getElementById('ab-qty');
  inp.value = Math.max(1, parseInt(inp.value || 1) + delta);
}

function addCurrentToCart() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('ab-qty').value) || 1;
  const unit = document.getElementById('ab-unit').value;
  addToCart(currentProduct, qty, unit, { ...selectedVariants });
}

function sendSingleToWA() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('ab-qty').value) || 1;
  const unit = document.getElementById('ab-unit').value;
  const varTxt = Object.entries(selectedVariants).map(([k,v]) => `${k}: ${v}`).join(' | ');
  const msg =
    `🔩 *CONSULTA RÁPIDA — ${CONFIG.storeName}*\n` +
    `──────────────────────\n` +
    `📦 *${currentProduct.nombre}*\n` +
    `   • SKU: ${currentProduct.sku}\n` +
    `   • Marca: ${currentProduct.marca}\n` +
    (varTxt ? `   • Variante: ${varTxt}\n` : '') +
    `   • Unidad: ${unit}\n` +
    `   • Cantidad: *${qty}*\n\n` +
    `──────────────────────\n` +
    `¿Tienen disponibilidad y cuál es el precio?`;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`);
}

// ══════════════════════════════════════════════
//  CARRITO
// ══════════════════════════════════════════════
function addToCart(product, qty, unit, variants) {
  const varKey = JSON.stringify(variants);
  const existing = cart.find(i => i.productId === product.id && JSON.stringify(i.variants) === varKey && i.unit === unit);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: Date.now(),
      productId: product.id,
      nombre: product.nombre,
      marca: product.marca,
      sku: product.sku,
      emoji: product.emoji,
      qty, unit, variants,
      nota: ''
    });
  }
  updateCartCount();
  showToast();
}

function quickAdd(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const defaultVariants = {};
  p.variantes?.forEach(v => { defaultVariants[v.tipo] = v.opciones[0]; });
  addToCart(p, 1, p.unidades[0], defaultVariants);
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
  document.getElementById('sum-items').textContent = cart.length + ' ítem' + (cart.length!==1?'s':'');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartCount();
  renderCart();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
  updateCartCount();
}

function updateNota(id, val) {
  const item = cart.find(i => i.id === id);
  if (item) item.nota = val;
}

function renderCart() {
  updateCartCount();
  const container = document.getElementById('cart-items');
  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Tu lista de cotización está vacía.<br>Agregá productos desde el catálogo.</p>
        <button class="btn-add" style="width:auto;padding:12px 28px;" onclick="showView('catalog')">Ir al catálogo</button>
      </div>`;
    return;
  }
  container.innerHTML = cart.map((item, idx) => {
    const varTxt = Object.entries(item.variants || {}).map(([k,v]) => `${k}: <strong>${v}</strong>`).join(' · ');
    return `
    <div class="cart-item">
      <div class="ci-img">${item.emoji}</div>
      <div>
        <div class="ci-name">${item.nombre}</div>
        <div class="ci-meta">${item.marca} · SKU: ${item.sku}</div>
        ${varTxt ? `<div class="ci-variant">${varTxt}</div>` : ''}
        <div class="ci-qty-row">
          <div class="ci-qty-ctrl">
            <button onclick="changeCartQty(${item.id},-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${item.id},1)">+</button>
          </div>
          <span class="ci-unit">${item.unit}</span>
        </div>
        <div class="ci-note">
          <input type="text" placeholder="Nota para este producto (opcional)"
            value="${item.nota}" oninput="updateNota(${item.id},this.value)">
        </div>
      </div>
      <button class="btn-remove" onclick="removeFromCart(${item.id})" title="Eliminar">✕</button>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════
//  ENVÍO A WHATSAPP
// ══════════════════════════════════════════════
function sendToWhatsApp() {
  if (!cart.length) {
    alert('Tu carrito está vacío. Agregá productos antes de enviar.');
    return;
  }
  const name = document.getElementById('cl-name').value.trim();
  const loc  = document.getElementById('cl-loc').value.trim();
  if (!name || !loc) {
    alert('Completá tu nombre y localidad para enviar el pedido.');
    return;
  }
  const phone = document.getElementById('cl-phone').value.trim();
  const note  = document.getElementById('cl-note').value.trim();

  const numberEmojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
  const itemsText = cart.map((item, i) => {
    const n = i < 10 ? numberEmojis[i] : `${i+1}.`;
    const varTxt = Object.entries(item.variants || {}).map(([k,v]) => `     ▸ ${k}: ${v}`).join('\n');
    const notaLine = item.nota ? `     📝 "${item.nota}"` : '';
    return [
      `${n} *${item.nombre}*`,
      `     • Marca: ${item.marca} | SKU: \`${item.sku}\``,
      varTxt,
      `     • Unidad: ${item.unit}`,
      `     • Cantidad: *${item.qty}*`,
      notaLine
    ].filter(Boolean).join('\n');
  }).join('\n\n');

  const msg = [
    `🏗️ *NUEVA CONSULTA DE COTIZACIÓN*`,
    `${CONFIG.storeName}`,
    `──────────────────────────`,
    `👤 *Cliente:* ${name}`,
    `📍 *Localidad:* ${loc}`,
    phone ? `📞 *Teléfono:* ${phone}` : '',
    `──────────────────────────`,
    `🛒 *DETALLE DEL PEDIDO*`,
    `──────────────────────────`,
    ``,
    itemsText,
    ``,
    `──────────────────────────`,
    note ? `📝 *NOTA GENERAL:*\n"${note}"\n──────────────────────────` : '',
    `✅ _Pedido enviado desde ${CONFIG.storeUrl}_`
  ].filter(l => l !== null && l !== undefined).join('\n');

  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`);
}

// ══════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════
let toastTimer;
function showToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ── Init ──
updateCartCount();