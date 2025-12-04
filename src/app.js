export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');
  const input = document.getElementById('texto');

  if (btn && input) {
    btn.addEventListener('click', () => {
      const val = input.value.trim();
      if (val) {
        agregarItem(val);
        input.value = '';
      }
    });
  }
});
