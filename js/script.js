console.log('Wypłaty pracowników');

let pracownicyDane = document.querySelectorAll('.employee');

const policzWyplate = (event) => {
    let danePracownikow = [];

    pracownicyDane.forEach(element => {
        let czas = element.querySelector('.czas').value;
        let stawka = element.querySelector('.stawka').value;
        let wyplata = element.querySelector('.wyplata');
        let osoba = element.querySelector('.pracownik');

        if (czas > 160) {
            wyplata.innerHTML = ((czas - 160) * stawka * 2) + (160 * stawka);
        } else {
            wyplata.innerHTML = czas * stawka;
        }

        if (czas < 100) {
            element.classList.toggle('red');
            osoba.style.color = 'honeydew';
        }

        danePracownikow.push({ name: osoba.innerHTML, time: Number(czas) });
    });

    let sort = danePracownikow.sort((a, b) => (b.time < a.time ? -1 : 1));

    najlepsi.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let ul = document.querySelector('.lista-najlepszych');
        li.innerHTML = sort[i].name;
        ul.appendChild(li);
    }

    if (najlepsi.children.length > 0) {
        event.preventDefault();
    }
}

let btnObliczWyplate = document.getElementById('oblicz');
btnObliczWyplate.addEventListener('click', policzWyplate);