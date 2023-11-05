const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const button = document.getElementById('button');
const results = document.getElementById('results');

button.addEventListener('click', function(){
    const aValue = parseInt(a.value);
    const bValue = parseInt(b.value);
    const cValue = parseInt(c.value);
    const dValue = parseInt(d.value);

    if (aValue <= cValue || bValue <= dValue) {
        results.innerHTML = `Вмещается!`
    }
    else if ((bValue <= cValue || aValue <= dValue)){
        results.innerHTML = `Вмещается!`
    }
    else {
        results.innerHTML = `Не вмещается!`
    }
});
