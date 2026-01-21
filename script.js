const $ = id => document.getElementById(id);
const input  = $('texto');
const boton  = $('btn');
const canvas = $('qr');
const link   = $('descargar');

boton.addEventListener('click', () => {
  const texto = input.value.trim();
  if (!texto) return alert('Escribe algo primero');

  QRCode.toCanvas(canvas, texto, { width: 220, margin: 2 }, err => {
    if (err) return console.error(err);
    link.classList.remove('hidden');
    link.download = 'codigo-qr.png';
    link.href = canvas.toDataURL('image/png');
  });
});
