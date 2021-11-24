console.log('Wypłaty pracowników');

// Twoim zadaniem jest stworzenie skryptu, który będzie:
// - Liczył wypłatę dla każdego pracownika i wpisywał je dla każdego pracownika do pola span.wyplata
// Klient chce także, aby od razu doliczana była premia - jeżeli pracownik pracował powyżej 160 godzin, za każdą dodatkową godzinę otrzymuje podwójną stawkę.
// - Zaznaczał czerwonym tłem osoby, które przepracowały mniej niż 100 godzin

// Dodatkowo klient życzy sobie aby wyświetlała się lista trzech najlepszych pracowników - czyli takich, którzy przepracowali najwięcej godzin.

let pracownicyDane = document.querySelectorAll('.employee');
// console.log(pracownicyDane);

const policzWyplate = () => {
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


        const sortKeyValues = (key, order = 'asc') => {
            return function innerSort(a, b) {
                const varA = a[key];
                const varB = b[key];
                let comparison = 0;

                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            }
        }

    }






// function compareValues(key, order = 'asc') {
//     return function innerSort(a, b) {
//       if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
//         // property doesn't exist on either object
//         return 0;
//       }

//       const varA = (typeof a[key] === 'string')
//         ? a[key].toUpperCase() : a[key];
//       const varB = (typeof b[key] === 'string')
//         ? b[key].toUpperCase() : b[key];

//       let comparison = 0;
//       if (varA > varB) {
//         comparison = 1;
//       } else if (varA < varB) {
//         comparison = -1;
//       }
//       return (
//         (order === 'desc') ? (comparison * -1) : comparison
//       );
//     };
//   }




// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j + 1];
//           arr[j + 1] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   };

//   console.log(bubbleSort(mojaTablica));




// function compare(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const bandA = a.band.toUpperCase();
//     const bandB = b.band.toUpperCase();

//     let comparison = 0;
//     if (bandA > bandB) {
//       comparison = 1;
//     } else if (bandA < bandB) {
//       comparison = -1;
//     }
//     return comparison;
//   }

//   singers.sort(compare);




let btnObliczWyplate = document.getElementById('oblicz');
btnObliczWyplate.addEventListener('click', policzWyplate);
