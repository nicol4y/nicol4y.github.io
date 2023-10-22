const label = document.querySelectorAll('label');
label.forEach(e =>
e.innerHTML = e.innerText
    .split('')
    .map((letter,i) => `<span style="transition-delay: ${i * 100}ms">${letter}</span>`)
    .join('')

);