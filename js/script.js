console.log('Wypłaty pracowników');

// Twoim zadaniem jest stworzenie skryptu, który będzie:
// - Liczył wypłatę dla każdego pracownika i wpisywał je dla każdego pracownika do pola span.wyplata
// Klient chce także, aby od razu doliczana była premia - jeżeli pracownik pracował powyżej 160 godzin, za każdą dodatkową godzinę otrzymuje podwójną stawkę.
// - Zaznaczał czerwonym tłem osoby, które przepracowały mniej niż 100 godzin

// Dodatkowo klient życzy sobie aby wyświetlała się lista trzech najlepszych pracowników - czyli takich, którzy przepracowali najwięcej godzin.

let pracownicyDane = document.querySelectorAll('.employee');
// console.log(pracownicyDane);

const policzWyplate = () => {
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
    });
}

let btnObliczWyplate = document.getElementById('oblicz');
btnObliczWyplate.addEventListener('click', policzWyplate);
