# Design

Otwarty, lekko techniczny szkicownik: grafit, kobalt i oszczędne ciepłe światło na jasnym papierze. Ludzki, abstrakcyjny, pełen nadziei. Bez ramek, kart, miniatur przy artykule i tekstu w rastrze.

Romie Regular tworzy tytuły, Roobert Regular/Bold tekst i nawigację. Lokalne licencjonowane webfonty. Kolumna tekstu zachowuje czytelną długość wiersza; na najmniejszym slajdzie tekst ma minimum 16 px.

## Dwanaście slajdów

Każdy ma osobny motyw oraz obrazy 1672×941 i 941×1672, przygotowane przez generatywny outpainting wcześniejszych scen. Obraz pokrywa cały viewport (`cover`), również pod nagłówkiem i kontrolkami. Na szerokim ekranie główny motyw jest po lewej, tekst po prawej. Na telefonie motyw zajmuje górną część, a proza dolną. Przezroczysta papierowa warstwa przebiega przez całe tło i podnosi kontrast; nie tworzy prostokąta pod artykułem.

Trzy krótkie akapity są od razu widoczne wraz z tytułem, bez przewijania, odliczania i odsłaniania. „Czytaj całość” zachowuje wszystkie 36 oryginalnych akapitów adaptacji. Bez JS dostępna jest ta sama długa wersja. Obrazy wczytywane są dla bieżącego i następnego slajdu, z wariantem dopasowanym do ekranu.

## Artykuły i transkrypty

Psyho i Bagiński, Dragan oraz Rosiak mają po dwie szerokie ilustracje: otwarcie i jedno przeplecenie w środku. Otwarcia panoramiczne mają 1860×846 (Rosiak: 1859×846), przeplecenia 1672×941. Na telefonie otwarcia korzystają również z wcześniejszych pionowo wygodniejszych scen 4:3. Q&A ma jeden obraz 1672×941. Szerokie obrazy dochodzą do krawędzi strony, tekst pozostaje w spokojnej kolumnie.

Siedem nowych opracowań również ma obraz na pełną szerokość na początku i jedno przeplecenie w środku. Każda ma dwie nowe, dedykowane sceny 16:9. Zachowano ich natywne wymiary i pełną szerokość; nie kadrowano rysunków. Mapa nagrania jest otwartą listą czasów i wątków w kolumnie tekstu.

Dziewiętnaście stron HTML ma wspólny indeks dwunastu sesji oraz Słowniczek. Native details działa bez JS. Na telefonie nawigacja pokazuje bieżącą sesję i indeks; od 1200 px także pięć skrótów dawnych wykładów. Otwarty indeks jest pełną szerokością papieru, bez ramki i cienia. Ma własne przewijanie i nie zmienia wysokości nagłówka slajdu. Escape zamyka indeks i oddaje fokus; klawisze i swipe nie zmieniają slajdu za otwartym menu.

Adnotacje przy transkryptach i nowych opracowaniach prowadzą do objaśnień; słowniczek odsyła do konkretnych fragmentów. Lokalny znacznik transkryptu ma osobny link z czasem pełnego wideo. Niepewności są częścią zapisu.

## Sterowanie i dostępność

Strzałki i Spacja przechodzą między slajdami, działa swipe, TOC i bezpośredni hash. Brak automatycznych przejść i regulatorów tempa. Semantyczne nagłówki, widoczny fokus, skip links, reduced motion i tryb druku. Testy slajdów: 320×568, 375×667, 390×844, 1024×768, 1366×768, 1440×900. Artykuły i transkrypty: szerokości 320, 390, 768 i 1440.

## Skrypt wykładów

Zbiorczy czytnik zachowuje otwartą kolumnę tekstu i dwanaście rozdziałów w kolejności konferencji. Wyszukiwarka prowadzi do pasujących akapitów, a TXT i Markdown pozwalają czytać offline. Pełny tekst pozostaje dostępny bez JavaScript. Skrypt jest dostępny ze wspólnego indeksu na każdej stronie.
