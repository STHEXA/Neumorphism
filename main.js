const units = document.querySelectorAll('.unit');
console.log('units');
console.log(units);
for (let unit of units) {
  unit.onclick = () => unit.classList.contains('active');
}