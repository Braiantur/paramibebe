// --- CONTADOR de tiempo juntos ---
const fechaInicio = new Date(2024, 6, 6); // <--- ajustá la fecha si querés (Año, mesIndex, día). mesIndex: 0=Ene, 1=Feb...
function actualizarContador(){
  const ahora = new Date();
  let años = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
    dias += ultimoMes.getDate();
  }
  if (meses < 0) {
    años--;
    meses += 12;
  }

  const texto = `${años} año${años!==1 ? 's':''}, ${meses} mes${meses!==1 ? 'es':''} y ${dias} día${dias!==1 ? 's':''} juntos 💕`;
  const el = document.getElementById('tiempo');
  if(el) el.textContent = texto;
}
actualizarContador();
setInterval(actualizarContador, 86400000); // actualiza cada 24h

// --- SCROLL SUAVE para botones del header que usan data-target ---
document.addEventListener('DOMContentLoaded', ()=> {
  const botones = document.querySelectorAll('.nav-btn[data-target]');
  botones.forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('data-target');
      const destino = document.getElementById(id);
      if(destino){
        destino.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else {
        // si no existe la sección, por ejemplo "recuerdos" está en otra página,
        // podríamos navegar pero acá solo manejamos lo que está en la misma página.
        console.warn('Sección no encontrada:', id);
      }
    });
  });
});