# Komendy w drzewie DOM

## wyszukiwanie elementów drzewa DOM

> document.querySelector(‘#mainMenu’);  
> document.querySelectorAll(‘.menuLinks’);

Korzystamy z takich samych selektorów jak w przypadku css np. [atrybut], .klasa,
#identyfikator

## Tworzenie elementów DOM

> const element = document.createElement("div");

> element.style.color = ‘red’;

> element.innerText = ‘Test’;

## Umieszczanie elementów w drzewie DOM

> const parentElement = document.querySelector(‘parent’);

> parent.append(element);

### Dodawanie atrybutu

> element.setAttribute(‘atrybut’, ‘wartość);

### Pobieranie wartości atrybutu

> element.getAttribute(‘atrybut’);

### Usuwanie wartości atrybutu

> element.removeAttribute(‘atrybut’);

## ClassList - zarządzanie klasami elementów drzewa DOM

### Dodawanie klasy

> element.classList.add(‘klasa’);

### Usuwanie klasy

> element.classList.remove(‘klasa’);

### Dodawanie lub usuwanie klasy w zależności czy już istnieje

> element.classList.toggle(‘klasa’);

## Sprawdzanie czy dana klasa istnieje

> element.classList.contains(‘klasa’);

## Przenoszenie elementów DOM

### Wyszukujemy dany element drzewa DOM, oraz miejsce gdzie chcemy przenieść dany element i możemy korzystać z metod np. after, before, append, prepend

## Wyszukujemy element który chcemy przenieść

> const moveElement = document.querySelector(‘.moveElement’);

## Wyszukujemy element w okolice którego chcemy przenieść

> const element = document.querySelector(‘.element);

## I wykorzystujemy jedną z podanych wyżej metod

> element.after(moveElement)

## Praca z konsolą

### Jest wiele możliwości korzystania z konsoli my skupimy się przede wszystkim na console.log oraz na console.dir

### Ważne! W przypadku typów złożonych w konsoli mamy dostęp do referencji danego elementu (czyli jego aktualnego stanu a nie stanu na moment wywołania console.log)

## Wywołanie console.log

> console.log(element | obiekt | tablica | itd.);

## Wywołanie console.dir przydatne np. w przypadku badania elementu drzewa DOM

> console.dir(element);

---

# EVENTS

## Reakcja na kliknięcie

> click

> np. addEventListener('click', ...)

## Reakcja na klikniecie przyciskut z atrybutem `submit`

> submit

> np. addEventListener('submit', ...)

## Reakcja na poruszanie kursorem myszki

> mousemove

> np. addEventListener('mousemove', ...)

### Zdarzenia w przeglądarce

Event - zdarzenie, po wystąpieniu, którego ma wykonać się odpowiednia
czynność funkcja.
Zdarzeń w przeglądarce jest bardzo dużo, jednak część z nim będziemy
stosować najczęściej. Są nimi na przykład:

- onClick
- onChange
- onMouseOver
- onMouseLeave
- onKeyUp / onKeyDown
- onLoad




# Asynchroniczność

### przykład

> Funkcja wczytująca skrypt po załadowaniu strony

```const init = () => {
const button = document.querySelector(“#button”);
const handleClick = (event) => {
console.log(event);
};
button.addEventListener(“click”, handleClick);
}
window.onload = init;
```

## setTimeout i setInterval

### SetTimeout - używany do wykonania jakiejś części kodu po określonym czasie

```
setTimeout(function() {
  console.log('test');
}, 1000);
```

> clearTimeout - czyszczenie timeout żeby się nie wykonał

### SetInterval - używany do wykonania jakiejś części kodu w pętli każda pętla po określonym czasie

```
const interval = setInterval(function() {
  console.log('test interval');
}, 1000);
```

# komunikacja po HTTP

## promise

> Jak sama nazwa mówi jest to obietnica, czyli umawiamy się z funkcją promise, że jak skończy to poinformuje nas o tym fakcie

```
const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve('foo');
}, 300);
});
promise1.then((value) => {
console.log(value);
// expected output: "foo"
});
console.log(promise1);
// expected output: [object Promise]
```

Jeżeli promise zwróci resolve to dane uzyskamy w metodzie then a jeżeli zwróci reject
to w metodzie catch z założenia:

> Resolve - wszystko poszło poprawnie

> Reject - coś nie wyszło

## fetch

```
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data));
```

Pobieranie sekwencyjne

```
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => {
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data));
});
```

> Polega na pobraniu danych w konkretnej kolejności dopiero po skończeniu pierwszego pobierania zaczyna się kolejne

Pobieranie równoległe

```
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data));
fetch('http://example.com/cars.json')
.then(response => response.json())
.then(data => console.log(data));
```

> Polega na pobraniu danych w tym samym momencie niezależnie od siebie

```
Promise.all([
fetch('http://example.com/movies.json'),
fetch('http://example.com/car.json')
])
.then(responses => /*obsługa responses*/)
```

> Polega na pobraniu danych w tym samym momencie niezależnie od siebie ale daje nam możliwość wykonania jakiejś akcji po pobraniu wszystkich danych

---

# Operacje nastrukturach danych

## Praca z tablicą

> map - służy do modyfikacji każdego elementu tablicy z osobna

> filter - służy do ograniczenia wartości w tablicy

> reduce - służy do zredukowania tablicy np. Dodanie wszystkich liczb w tablicy w taki sposób aby otrzymać wynik

Możemy wydobywać wartość właściwości obiektów lub je modyfikować, mamy też
metody jak entries dzięki czemu możemy “zamienić” obiekt w tablicę i użyć tych samych metod to co tablicy

## Praca z mapą

> get - służy do pobierania

> set - służy do ustawiania
> has - służy do sprawdzania czy istnieje

> delete - służy do usuwania

[Dokumentacja MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Pętle

- Pętla for
- Pętla for in
- Pętla for on
- Pętla while

## Destrukturyzacja

W przypadku tablicy:

```
let [nasza_nazwa, inna_nasza_nazwa] = [1,2]
```

Dzięki temu zapisowi pod zmienną “nasza_nazwa” mamy cyfrę 1 a pod zmienną
“inna_nasza_nazwa” mamy cyfrę 2

W przypadku obiektu:

```
let { name, surname } = { name: “Marek”, surname: “Kowalski” }
```

Zwróćmy uwagę, że w przypadku obiektu nazwy z lewej strony muszą odpowiadać
nazwą z prawej strony

## Chaining

```
[1,2].map(/*Jakaś funkcja do mapowania*/).filter(/*Jakaś funkcja do
filtrowania*/).map(/*Inna funkcja do mapowania*/)
```

Chaining polega na możliwości łączenia różnych funkcji ze sobą tutaj bardzo ważne jest
słowo kluczowe this

## Kompozycja funkcji

```
double(add(2,5))
```

Kompozycja funkcji polega na napisaniu funkcji w taki sposób aby można było z nich komponować większą całość i wykorzystywać wielokrotnie
