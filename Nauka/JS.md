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
