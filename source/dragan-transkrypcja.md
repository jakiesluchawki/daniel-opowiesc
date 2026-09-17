# Dziury koloru białego

Wykład — AI Summit PJAIT, 16 września 2026.

Prelegent: **Andrzej Dragan**.

Czas dostarczonego nagrania: **42 minuty 22 sekundy**.

## O zapisie

Transkrypt obejmuje zapowiedź i wykład z dostarczonego nagrania. Pierwotny zapis powstał przez automatyczne rozpoznawanie mowy, porównanie dwóch wersji i dodatkowe próby odczytu trudnych fragmentów. Następnie porównano go z niezależną automatyczną transkrypcją dźwięku pełnej konferencji oraz napisami tego nagrania. Uzupełniono zgodnie rozpoznane fragmenty. Dodano interpunkcję i usunięto część powtórzeń oraz wtrąceń; pominięcia komunikatów organizacyjnych i pobocznych dygresji oznaczono w tekście.

Jakość dźwięku jest nierówna. **[nieczytelne]** oznacza słowo lub fragment, którego nie udało się wiarygodnie odczytać; **[niepewne: …]** — możliwy, lecz niepotwierdzony odczyt. Rozbieżności między automatycznymi zapisami pozostawiono oznaczone. Luk nie uzupełniano z innych wykładów ani z wiedzy o fizyce. Znaczniki czasu zachowują lokalny zegar dostarczonego nagrania. Jego początek odpowiada w przybliżeniu 07:47:55 [pełnego nagrania konferencji](https://www.youtube.com/watch?v=SurotppGtyA&t=28075s). Dopasowanie czasu nie jest pomiarem klatka po klatce.

Wypowiedzi odnoszące się do rysunków i slajdów zachowano w rozpoznanej postaci. Treści i podpisów rysunków nie rekonstruowano z samego dźwięku; zapis nie zastępuje oglądania prezentacji w pełnym nagraniu. Odwołanie do czterech poziomów analogii jest parafrazą myśli przypisywanej Banachowi przez prelegenta, nie zweryfikowanym dosłownym cytatem Banacha. Opinie, hipotezy i przewidywania pozostają wypowiedziami prelegenta. Ten zapis jest opracowaniem nagrania, a nie jego oficjalną publikacją.

[Oficjalny program wykładu](https://aisummit.pja.edu.pl/program-konferencji-ai-summit-pjait/).

## Transkrypt

**[00:00]**

[Pominięto organizacyjny komunikat prowadzącego o nadsyłaniu pytań i nagrodach.]

No to już teraz tylko jedna rzecz przede mną: zapowiedzenie profesora Andrzeja Dragana. Zapraszam, Panie Profesorze, na scenę. Andrzej Dragan.

**Andrzej Dragan:** Dziękuję bardzo.

**[00:26]**

[fragment nierozpoznany]

**[00:36]**

Grawitacja mi pomogła. Mam taką prośbę. Czy mogę prosić wszystkich, którzy posiadają prawą rękę, o podniesienie jej do góry? Dziękuję. A teraz mogę prosić… Nie, ale trzymamy, trzymamy. Teraz te osoby, które nie potrafiłyby narysować funkcji y = 1/x, proszę o opuszczenie w dół tej ręki.

**[00:56]**

Duża część została. Bardzo dobrze. To te osoby, którym ręka została w górze — zapewniam, że zaraz będą wiedzieć, jak działają czarne dziury i białe dziury. A pozostałym nie obiecuję, ale jest być może jakaś szansa również, że nie jesteście przypadkiem beznadziejnym. [niepewne: Być może zaraz się okaże]. Przepraszam. Dobra.

**[01:15]**

Trochę będzie zmiana tematu, bo ja będę mówił o fizyce, ale trochę nie bez powodu. Dlatego że jednym z takich standardowych benchmarków w erze, kiedy wszystkie benchmarki się kończą, jest taki benchmark: „No dobrze, ale gdybyśmy wytrenowali AI do roku 1900… Są dwa warianty: albo 1904 i zapytali, czy wyprowadzi teorię względności szczególną, albo 1905 i zapytali, czy wyprowadzi teorię względności ogólną…”.

To przecież żaden model sobie z tym nie poradzi, bo modele nie są kreatywne, co dzisiaj zresztą też padało. Chociaż tak się składa, że wszystkie modele językowe przechodzą standardowe psychometryczne testy kreatywności dużo lepiej niż jakikolwiek człowiek, ale to nie przeszkadza ludziom mówić, że nie są kreatywne.

**[01:57]**

Właśnie pytanie: czy w odkryciach naukowych, tych największych genialnych odkryciach ludzkich, jest jakiś pierwiastek prawdziwego geniuszu, czy to jest tylko i wyłącznie pattern recognition?

Jest moja ulubiona praca Apple sprzed tam chyba roku czy dwóch. Apple, jak wiadomo, próbowało skonstruować swój model sztucznej inteligencji, im się nie udało, więc zamiast tego postanowiło wszystkim udowodnić, że [nieczytelne] nie istnieje.

Napisali pracę, w której udowodniają, że jej nie ma. Napisaną zresztą przez jakichś tam internów bez żadnego doświadczenia. I ta praca była kompletnie [nieczytelne]. Tytuł pracy „Illusion of Thinking”, o ile pamiętam, był taki dosyć głośny. Praca była strasznie zjechana za błędy metodologiczne i zasadniczo stawianie bezsensownych pytań. Nawet pojawiła się praca „Illusion of Illusion of Thinking” jako komentarz do tego.

**[02:44]**

Natomiast w tej pracy jest takie ciekawe zdanie. Stawiają takie głębokie filozoficzne pytanie: czy modele językowe to prawdziwa inteligencja, czy tylko i wyłącznie pattern recognition, czyli dostrzeganie wzorców, łączenie kropek? Jak to zwał, jak zwał.

No więc ja nie rozumiem tego pytania. Dla mnie definicją inteligencji jest dostrzeganie analogii, łączenie kropek, dostrzeganie patternów. To właśnie bym zdefiniował jako inteligencję, więc to rozróżnienie, które oni stawiają, jest bez sensu.

**[03:11]**

I trochę chciałem z tej okazji ten wykład o białych i czarnych dziurach zrobić, dlatego że to jest przykład tego, jak dojście do tego, co ludzie uważają za wielki geniusz, jest ciągiem małych kroczków opartych na łączeniu kropek i niczym więcej zupełnie.

W ogóle w odkryciu ogólnej teorii względności miały miejsce dwa ważne momenty. To trwało dziesięć lat i ten akt geniuszu sprowadzał się do tego, że Einstein zauważył dwie ważne rzeczy. I te dwie ważne rzeczy to były dwie analogie.

**[03:44]**

Pierwsza analogia, którą zauważył, była taka, że grawitacja, którą chciał zrozumieć, której nikt wtedy dobrze nie rozumiał, zasadniczo jest nieodróżnialna od przyspieszenia.

Jak się jedzie windą, winda przyspiesza, to czujemy taką dodatkową siłę, która nas wbija w podłogę. Jak samochód hamuje albo skręca, czujemy jakąś dziwną siłę, która nas rzuca na boki. I ta siła bardzo [niepewne: przypomina] grawitację.

I to była pierwsza obserwacja Einsteina: że grawitacja jest analogiczna do przyspieszenia. I to było bardzo ważne, bo grawitacji nikt nie rozumiał, ale ruch, na przykład z przyspieszeniem, to już łatwiej jest zrozumieć. Bo można sobie przeanalizować kinematykę ruchu i zobaczyć, jakie są konsekwencje poruszania się z przyspieszeniem, i wyciągnąć stąd wnioski do grawitacji.

**[04:20]**

Więc ta pierwsza analogia była niezwykle ważna, bo dzięki temu nie musiał odgadywać teorii, której nikt nie zna, tylko badał teorię, którą znał, czyli szczególną teorię względności zastosowaną do ruchu z przyspieszeniem. I to była pierwsza obserwacja.

Tak swoją drogą można zadać pytanie, dlaczego akurat przyspieszenie miałoby być analogiczne do grawitacji, a nie do jakiejś innej siły. No bo w końcu jak włączę pole elektryczne i jestem naładowany elektrycznie, też na mnie działa jakaś siła podobna do grawitacji.

Zresztą nawet ci, co pamiętają ze szkoły wzór Coulomba na oddziaływanie dwóch ładunków elektrycznych — jest w zasadzie taki sam jak wzór na oddziaływanie grawitacyjne dwóch mas, newtonowski. Więc dlaczego akurat grawitacja miała być tutaj wyróżniona?

**[05:01]**

No powód jest taki, że grawitacja jest uniwersalna: działa na wszystko. Na przykład jakbym teraz wyłączył grawitację w tym pokoju i umieścił w stanie nieważkości różne przedmioty, to mogę wziąć zbiór przedmiotów bardzo różnych, od elektronów, materii, antymaterii, cokolwiek. [niepewne: Powietrze w powietrzu będzie wisiało]. I jak włączę grawitację, zacznie wszystko spadać tak samo, z tym samym przyspieszeniem. Pod warunkiem, że nie ma powietrza w tym pomieszczeniu. Jak jest powietrze, to ono też będzie spadało.

Natomiast jest jeszcze druga sytuacja w fizyce, kiedy z tym samym mam do czynienia: że nagle coś włączam i wszystko zaczyna spadać tak samo. I tym czymś jest przyspieszenie podłogi.

**[05:39]**

Jak jestem w pustej przestrzeni kosmicznej, gdzie jest wszystko w stanie nieważkości, i nagle ktoś zacznie przesuwać podłogę do góry z przyspieszeniem, no to do tej podłogi wszystko się zaczyna zbliżać z takim samym przyspieszeniem. Dokładnie tak jak w przypadku grawitacji.

I to pokazuje, że ta analogia jest możliwa do przeprowadzenia. Gdyby chociaż jedno ciało spadało w polu grawitacyjnym inaczej niż cała reszta, jakaś osobliwa cząstka, którą właśnie odkryliśmy, która zachowuje się inaczej w polu grawitacyjnym niż wszystko inne, co znamy, to idea równoważności grawitacji i przyspieszenia przestaje mieć sens. Niczego takiego nie odkryto póki co. Więc to była pierwsza analogia.

**[06:13]**

Druga analogia, którą Einstein zauważył, to było to, że jak już jesteśmy w układach, które przyspieszają… Takim przykładem nieinercjalnego układu, czyli takiego, który coś dziwnego robi ze swoim ruchem, to jest układ, który się obraca.

Jak sobie wyobrazimy gościa, który stoi sobie na Ziemi i narysował sobie kółko kredą na Ziemi wokół siebie i chciałby zmierzyć obwód tego kółka i długość średnicy, no to można wziąć do ręki linijkę, zmierzyć sobie długość obwodu, przykładając tę linijkę ileś tam razy. Jeżeli przyłoży ją x razy, to tę liczbę sobie zapisuje.

Jeżeli w ten sam sposób zmierzy teraz średnicę, też przykładając linijkę y razy, to może tę liczbę [nieczytelne], podzielić jedno przez drugie i dostanie co? I dostanie [nieczytelne]. Dokładnie tak.

**[06:59]**

Natomiast co się stanie z tym gościem, jak on się kręci? Jeżeli on jest obserwatorem, który jest nieinercjalny i kręci się w kółko wokół swojej własnej osi? Okazuje się, że ten wynik jest inny.

Dlaczego? Dlatego że jak on kręci się na takiej obrotowej platformie i próbuje zmierzyć to kółko, to jego linijka, którą przykłada, względem inercjalnego obserwatora, który na to patrzy z boku, ta linijka się skraca, bo się porusza. To jest efekt szczególnej teorii względności.

Coś, co Einstein odkrył — nie Einstein, to Lorentz odkrył przed Einsteinem, dlatego to się nazywa skrócenie Lorentza.

**[07:33]**

To się skróci, w związku z tym liczba przyłożeń takiej skróconej linijki do obwodu będzie większa. Więc ta nowa liczba, nazwijmy ją x prim, jest większa niż x.

Z kolei y się w ogóle nie zmieni, dlatego że linijka przykładana w ten sposób porusza się prostopadle do swojej długości i to nie wpływa na jej długość. W związku z tym y się nie zmieni, a to oznacza, że stosunek obwodu do średnicy już nie jest pi, tylko to jest coś większego niż pi.

**[08:01]**

No i Einstein zauważył: okej, jak jesteśmy w układach nieinercjalnych, to prawa geometrii się zmieniają. No i [nieczytelne]: świetnie, to przecież… Ktoś zwrócił uwagę, no to przecież już jest cała teoria innych niż euklidesowa geometrii. To jest coś, co zrobił Riemann kilkadziesiąt lat wcześniej: teoria zakrzywionych przestrzeni.

I w związku z tym jak Einstein tylko połączył kropki, że efekty ruchu prowadzą do efektów zmiany geometrii, tak jak to Riemann opisywał kilkadziesiąt lat wcześniej w swoim doktoracie, to zasadniczo trzeba tylko zastosować teorię Riemanna do grawitacji i mamy problem rozwiązany.

**[08:32]**

Czyli de facto on założył dwie analogie: analogię między przyspieszeniem i grawitacją oraz analogię między efektami szczególnej teorii względności a opisem zakrzywionych przestrzeni. Jak tylko te dwie kropki połączył, zauważył te dwa patterny, to spowodowało, że cała praca została błyskawicznie skończona.

Więc nawet w tym najgenialniejszym osiągnięciu ludzkiego umysłu zasadniczo można to sprowadzić do dostrzegania analogii. A jak wiadomo, sieci neuronowe, ja zresztą w zeszłym roku o tym mówiłem, nie robią nic innego niż tylko dostrzegają analogie.

**[09:06]**

Takie perceptrony wielowarstwowe, jak się zobaczy, co taki perceptron robi, to on liczy, mówiąc brzydko, iloczyny skalarne, a mówiąc ludzkim głosem: sprawdza, czy dane na jakiejś warstwie są podobne do wag synaptycznych łączących tę warstwę z następną. I w ten sposób wyznacza analogię między jednym i drugim. Kolejna warstwa sieci neuronowej to byłaby analogia między analogiami.

I tak dalej, to się tworzy taka hierarchia analogii. Potem jest analogia między analogiami [nieczytelne]. Każda kolejna warstwa to jest wyższy poziom analogii.

**[09:36]**

I tak jak mówił Stefan Banach, wybitny matematyk, o matematykach: że matematyk dobry to jest taki, który dostrzega analogie między twierdzeniami. Lepszy matematyk to jest taki, który dostrzega analogie między dowodami twierdzeń. Jeszcze lepszy, gdy zauważa analogie między teoriami. A taki w ogóle wybitny matematyk, którego można sobie wyobrazić, to jest taki, który dostrzega analogie między analogiami. [Uwaga redakcyjna: prelegent parafrazuje myśl przypisywaną Banachowi. To nie jest zweryfikowany dosłowny cytat Banacha.]

No więc dokładnie to robią sieci neuronowe. Więc spełniają definicję Banacha wybitnego matematyka. Nic dziwnego, że jedna z nich właśnie udowodniła… Dobrze, nie chcę używać takiego podmiotowego trybu, ale we współpracy z ludźmi udowodniono hipotezę, której sami ludzie nie potrafili udowodnić przez kilkadziesiąt lat. I brudnymi metodami — [niepewne: inna dyskusja].

**[10:19]**

[niepewne: Ale miałem mówić] o ogólnej teorii względności i obiecałem, że da się zrozumieć — jak już to wiemy, co powiedziałem — to da się zrozumieć, czym są czarne dziury i białe dziury, o których chciałem powiedzieć, jeżeli się tylko wie, jak wygląda wykres funkcji y = 1/x. Ten wykres zasadniczo wygląda tak. Dla tych, co opuścili rękę, to jest coś takiego. Im większe x, tym mniejsze y. O to pytałem.

**[10:43]**

Więc tak, przede wszystkim jakbym chciał sobie wyobrazić kogoś, kto jest blisko czarnej dziury, to bym musiał sobie wyobrazić gościa, który odczuwa jakąś siłę, która go wbija na przykład w platformę, na której stoi. Na przykład teraz ja taką siłę odczuwam, bo mnie siła grawitacji wbija w podłogę. Pode mną jest Ziemia, która mnie przyciąga, i mojemu spadaniu zapobiega Ziemia, która stawia opór mojemu spadaniu.

I mogę sobie wyobrazić, że nad czarną dziurą sobie wisi na jakiejś platformie gość i nie wpada w nią, bo na przykład ta platforma przyspiesza. Tam są jakieś silniki rakietowe, które zapobiegają wpadnięciu.

**[11:17]**

I zgodnie z tym, co Einstein zauważył, zgodnie z [nieczytelne], ta sytuacja, kiedy ja jestem w polu grawitacyjnym, jest w pewnym przybliżeniu nieodróżnialna od sytuacji, kiedy nie ma żadnej grawitacji, tylko ja jestem na platformie, która przyspiesza w pustej przestrzeni.

Czyli jestem w przyspieszającym układzie odniesienia i to, co odczuwam — ta siła, która mnie wbija w podłogę w takiej przyspieszającej windzie czy rakiecie — jest nieodróżnialne od siły grawitacji. W związku z tym zamiast myśleć o czarnych dziurach, będziemy myśleć o windach, które przyspieszają, albo rakietach. I to w zasadzie powinno prowadzić do zbieżnych wniosków.

**[11:48]**

No to zastanówmy się, jak w szczególnej teorii względności może wyglądać ruch z przyspieszeniem. Ja będę robił takie wykresy tego typu, gdzie na jednej osi jest coś, na drugiej osi jest coś innego. Tylko te wykresy będą tak skonstruowane, że na tej osi będzie czas, a na tej osi będzie przestrzeń. Na przykład odległość w jakimś kierunku.

I na przykład jak mam nieruchome ciało, to trajektoria takiego ciała to jest po prostu linia prosta. Takie ciało się nie rusza. To znaczy, że w każdej chwili, w każdym momencie położenie jest takie samo.

**[12:20]**

Jak mam ciało, które się porusza z jakąś prędkością, to jak ta trajektoria wygląda wtedy? Właśnie. [niepewne: A co to jest korba?] To jest takie coś. Jak się zapytać, każdy to samo pokaże. To jest taka pochylona krzywa i im bardziej pochylona, tym większa prędkość. Czyli upłynęło trochę czasu i moje położenie się przesunęło z tego w jakieś inne.

Jak się coś porusza jeszcze szybciej, to jest jeszcze bardziej pochylone. No ale w szczególnej teorii względności wiadomo, że za szybko to się nie można poruszać, bo są kłopoty. I taką graniczną prędkością, powyżej której się zaczynają poważne kłopoty, jest prędkość światła.

**[12:58]**

Jak dokładnie ta krzywa jest pochylona, zależy od wyboru jednostek na osiach. Więc przyjmijmy taką umowę, że światło w tej konwencji porusza się pod kątem czterdziestu pięciu stopni. Czyli taka nieosiągalna prędkość dla żadnej rakiety jest prędkością [niepewne: odpowiadającą] nachyleniu czterdziestu pięciu stopni. Więc każda legalna winda, rakieta zawsze musi być nachylona pod kątem mniejszym niż ten kąt czterdziestu pięciu stopni.

No dobrze, jak już to wiemy, to się zastanówmy, jak wyglądałaby trajektoria rakiety, która przyspiesza. Jeżeli zaczynała od zupełnego spoczynku, to najpierw sobie leciała prawie bez prędkości. Potem ta trajektoria musi się coraz bardziej pochylać, pochylać, pochylać, i jakoś tak.

**[13:42]**

I to jest taki śmieszny szczegół techniczny. Tę trajektorię też można cofnąć w czasie i zastanowić się, co byłoby, gdyby tę trajektorię przedłużyć. Ta trajektoria będzie symetryczna wówczas w ten sposób. I to jest taka trajektoria rakiety, która się zbliża, wyhamowuje, wyhamowuje, zatrzymuje się i zaczyna przyspieszać w drugą stronę.

Teraz szczegół techniczny, który [niepewne: musiałbym] pominąć, bo nie jest jakiś specjalnie ważny, jest taki, że ten wykres, który tu mamy, to jest ten sam wykres, który rysowałem wcześniej: y, x, funkcji y = 1/x. Tylko że obrócony o czterdzieści pięć stopni. To jest dokładnie ten wykres.

**[14:24]**

Okazuje się, że jakbym był w rakiecie, która przyspiesza w sposób jednostajny, w taki sposób, że ja czuję cały czas taką samą siłę pozorną, która mnie wbija w podłogę, i narysowałbym sobie moją trajektorię, i na nią by ktoś patrzył, stojąc z boku, to ten gość, który na to patrzy, będzie widział trajektorię, która jest po prostu funkcją 1/x obróconą o czterdzieści pięć stopni. To się nazywa hiperbola. To jest mądra nazwa, ale zasadniczo to jest taka krzywa 1/x.

Tak swoją drogą mogę też wyobrazić sobie funkcję nie 1/x, tylko 2/x, albo 5/x, albo 10/x, albo pół przez x. I to mi zdefiniuje trochę inną krzywą. I tych krzywych jest cała rodzina, które się różnią tą stałą, przez którą je mnożę.

**[15:02]**

One wszystkie wyglądają tak, że żadna się z drugą nie dotyka, ale też one dobiegają do osi y, do osi x, ale jej nie przecinają. I to znaczy, że ta oś y i x też tutaj jest nieprzecięta. Tu jest ta obrócona oś y, a tu ta obrócona oś x.

Ciekawe w tym jest to, że ta trajektoria rakiety tej krzywej nie przecina. Ponieważ wszystko jest obrócone o czterdzieści pięć stopni, to bardzo dobrze, że nie przecina tej krzywej, bo to znaczy, że prędkość rakiety nigdy nie przekracza prędkości światła.

**[15:35]**

Więc to jest dosyć zabawne, że z jednej strony gość w rakiecie czuje, że cały czas odczuwa przeciążenie i cały czas coraz bardziej przyspiesza i przyspiesza, a z drugiej strony jak ktoś na to patrzy z boku, to mimo że przyspieszenie odczuwane w rakiecie jest stałe, to prędkość się stabilizuje i nie przekracza prędkości światła.

Jak to możliwe? [nieczytelne] jest bardzo prosty. Otóż zegary, które są w tej rakiecie, chodzą coraz wolniej. Dlatego że rakieta się porusza coraz szybciej. I jest drugi efekt szczególnej teorii względności: dylatacja czasu, który mówi, że im szybciej coś się porusza, tym wolniej czas płynie w tym czymś.

**[16:10]**

Jak ja na przykład teraz idę, to moje włosy rosną trochę wolniej niż jak się zatrzymam. Albo moje serce bije trochę wolniej. I wszystkie zegary spowalniają o ten sam czynnik, jak się poruszam z jakąś prędkością.

I ponieważ gość w rakiecie, jego zegar chodzi coraz, coraz wolniej, to temu gościowi wydaje się, że w jednostce czasu się rozpędza o ileś tam metrów na sekundę więcej. Ale z naszego punktu widzenia ten czas jest o wiele bardziej wydłużony.

Więc jemu się wydaje, że w sekundę się rozpędził o dziesięć kilometrów na godzinę, a nam się wydaje, że on w godzinę się rozpędził o dziesięć kilometrów na godzinę. I ten czas się coraz bardziej wydłuża. Dlatego z naszej perspektywy zmiana prędkości coraz bardziej wyhamowuje i prędkość się stabilizuje.

**[16:51]**

Ale to jest też… Nie chcę wchodzić w technikalia. Zasadniczo tak wygląda trajektoria ruchu jednostajnie przyspieszonego.

I on ma w sobie coś bardzo ciekawego. Mianowicie ta asymptota, czyli ta krzywa przerywana — ta prosta przerywana, do której nasza trajektoria dąży — ma bardzo ciekawą własność.

Cokolwiek się wydarzy tutaj, w tym miejscu, czyli w tej chwili i w tym miejscu, nie będzie miało żadnego wpływu na to, co jest w rakiecie. Jeżeli w tym miejscu wybuchnie bomba atomowa i wszystkich zamorduje albo pojawi się superinteligencja i wszystkich zje, i nikt nie zostanie…

**[17:33]**

To konsekwencje tego zdarzenia będą miały miejsce wyłącznie w przyszłości. Cokolwiek się wydarzyło w tym miejscu, będzie rzutować tylko na przyszłość tego wydarzenia, dlatego że żadna informacja nie może się poruszać szybciej od światła. Najszybciej informacja o tym zdarzeniu będzie poruszać się w prawo wzdłuż tej trajektorii i w lewo wzdłuż tej trajektorii, ale nic nie może wyjść poza nią, bo wymagałoby to prędkości większej niż prędkość światła.

To oznacza, że konsekwencje tego wybuchu bomby będą tylko w tym obszarze tego diagramu. Ale w żadnym z tych punktów trajektoria rakiety się nie przecina. I to fizycznie oznacza, że gość w rakiecie o tym się nigdy nie dowie. Cokolwiek się wydarzyło, nigdy nie wpłynie w żaden sposób na to, co jest w tej rakiecie.

**[18:20]**

I to jest bardzo śmieszna sytuacja. Jest wiele innych konsekwencji tego dziwnego zdarzenia. Na przykład wyobraźmy sobie, że z tej rakiety nagle wypadło jabłko. Powiedzmy, że w chwili początkowej jabłko wypadło i się dalej poruszało swobodnym ruchem, czyli [nieczytelne] spoczywało. No to prędzej czy później tę asymptotę to jabłko przecina w tym miejscu.

I od tego momentu jabłko może mi wysyłać jakieś sygnały, ale one do mnie nie dotrą, jeżeli jestem w rakiecie.

**[18:54]**

Z kolei ja mogę do jabłka jak najbardziej się komunikować, mogę do jabłka mówić. I ono będzie odbierać moje sygnały, będzie mnie widzieć i słyszeć, ale w drugą stronę to nie działa. Więc komunikacja z jabłkiem będzie tylko jednokierunkowa od momentu, kiedy ono przekroczyło tę śmieszną asymptotę.

I właśnie z tego powodu tę asymptotę się nazywa horyzontem zdarzeń. To jest taka graniczna powierzchnia, poza którą jak się przekroczy, to nie ma żadnego kontaktu z tym obiektem, który tam wpadł.

**[19:22]**

I to jest nieprzypadkowa zbieżność z czarnymi dziurami, bo to jest dokładnie ten sam horyzont zdarzeń w czarnych dziurach. Dlaczego? No właśnie dlatego, że jak jestem w rakiecie i z mojej perspektywy jest coś na kształt horyzontu zdarzeń, to ponieważ bycie w rakiecie jest równoważne byciu w pobliżu ciała, które jest źródłem grawitacji, to również horyzontu zdarzeń [niepewne: muszę się spodziewać] w przypadku grawitacji.

No i to tyle w zasadzie. Istnienie czarnych dziur w sposób tak prosty wynika z własności krzywej y = 1/x.

**[19:59]**

I tu nie ma naprawdę nic o wiele bardziej skomplikowanego. I zasadniczo można bardzo wiele zrozumieć o czarnych dziurach, analizując własności funkcji 1/x i wiedząc, że jest ta śmieszna asymptota, która ogranicza rozwój tej [nieczytelne] krzywej.

Z tym się wiąże cała masa różnych interesujących paradoksów. Przede wszystkim mówiłem o tym, że mam funkcję 1/x, ale też są funkcje typu 2/x, 5/x i to są krzywe, które mają mniej więcej taki kształt. Jest cała rodzina takich krzywych.

**[20:32]**

Jest cała rodzina takich krzywych. Jedne z nich są bliżej tych asymptot, inne są dalej. I te krzywe różnią się od siebie fizycznie tylko jedną rzeczą. Mianowicie te bliżej asymptoty odpowiadają ruchom z przyspieszeniem o wiele większym.

I gość, który jest w tej rakiecie, odczuwa bardzo silną siłę wbijającą go w podłogę. A ten, który jest w tamtej rakiecie, której prędkość się prawie nie zmienia, odczuwa bardzo słabą siłę przyspieszającą. Czyli w zależności od tego, jak mocno przyspieszam, jestem albo blisko tego horyzontu zdarzeń, albo daleko.

**[21:05]**

I to znowu się zgadza. Jak jestem nad prawdziwą czarną dziurą i nie chcę do niej wpaść, to muszę zapobiegać temu, włączając jakąś bardzo silną rakietę, która przeciwdziała mojemu wpadaniu.

**[21:16]**

I im bliżej czarnej dziury, tym mocniej muszę włączyć silniki rakietowe, żeby nie wpaść. Czyli muszę odczuwać coraz większe przeciążenia. Ktoś, kto jest blisko czarnej dziury, musi po prostu bardzo mocno [nieczytelne], żeby nie wpaść do środka. Ktoś, kto jest daleko, może sobie pozwolić na silniki ustawione na niewielką moc.

I teraz zabawne w tym wszystkim jest to, że jak patrzymy na te wszystkie rakiety, one wydają się do siebie wszystkie zbliżać. Jak na to patrzy ktoś, kto jest [niepewne: swobodnie spadający], czy jakiś obserwator, który jest obserwatorem inercjalnym, patrzy na te rakiety, on widzi, że te rakiety się zbliżają. Ale zabawne jest to, że jakbym był na jednej z tych rakiet, to te wszystkie pozostałe wcale się nie będą do mnie zbliżać, tylko będą w stałej odległości ode mnie.

**[22:01]**

To jest bardzo nieintuicyjne, no bo na rysunku ewidentnie widać, że te krzywe się zbliżają, a z perspektywy kogoś, kto jest w układzie nieinercjalnym, tak nie jest. Dlaczego? Otóż znowu [nieczytelne] jest bardzo prosty. Jeżeli jestem nad czarną dziurą, do której nie chcę wpaść, i w związku z tym zapobiegam temu, włączając silniki rakietowe w taki sposób, że jestem w stałej odległości od horyzontu zdarzeń, i w związku z tym odczuwam stałe przeciążenie, to można to odwrócić i powiedzieć, że jeżeli odczuwam stałe przeciążenie, to znaczy, że odległość od horyzontu zdarzeń się nie zmienia.

Innymi słowy nam się na przykład wydaje, że ta rakieta jest coraz bliżej horyzontu zdarzeń, ale z perspektywy tej rakiety nic się nie zmienia, odległość od horyzontu zdarzeń jest cały czas taka sama. I to jest pewna deformacja percepcji wynikająca z tego, że jeden układ jest inercjalny, a drugi nie.

**[22:55]**

Czyli każda z tych rakiet, według swojego własnego kosmonauty, uważa, że jest w stałej odległości od horyzontu zdarzeń. A ponieważ odległość tej rakiety numer jeden jest ustalona od horyzontu, dla niej się nie zmienia, i tej numer dwa również, to różnica tych odległości też musi być stała i w związku z tym odległości między tymi rakietami też się nie mogą zmieniać.

No dobra, trochę dziwności ogólnej teorii względności. Zrobię taki mały przerywnik, żeby powiedzieć, że zasadniczo to jest taki materiał, który ze studentami omawiamy dosyć długo i to mielimy przez pewnie parę godzin, żeby to gruntownie przeorać. A z wami sobie robię taki trochę przejazd przez to w przyspieszonym tempie.

**[23:38]**

Ale moim celem nie jest to, żebyście jakoś fundamentalnie mieli to przemyślane w ciągu dwudziestu minut, tylko żeby pokazać wam, że rozumowania, które prowadzą do tych wniosków, nie są bardzo skomplikowane. Każde z nich wymaga refleksji, namysłu i tak dalej, ale to nie są jakieś gigantyczne przeskoki. To są drobne argumenty, które można zasadniczo sformułować w kilku zdaniach, na kopercie pisząc. Nie trzeba do tego jakichś bardzo skomplikowanych traktatów filozoficzno-matematycznych.

No i zasadniczo to jest wniosek prowadzący do tego, że jeżeli się poruszam z przyspieszeniem, to pojawia się coś na kształt horyzontu zdarzeń, czyli taka dziwna powierzchnia w czasoprzestrzeni, poza którą zdarzenia, które się dzieją, nie mają na mnie wpływu.

**[24:21]**

No dobrze, ale jest tu jeszcze jedna część tej historii, którą trochę ukryłem, bo narysowałem ten rysunek tak, że nie widać, co jest na dole. I to jest coś — to, co dotąd mówiłem, to jest coś, co fizycy i studenci raczej dobrze rozumieją, bo się tego nauczyli, bo o tym mówią podręczniki. Ale jest druga część tej historii, o której chciałem dzisiaj powiedzieć, której w podręcznikach najczęściej nie ma i dlatego studenci się bardzo dziwią, jak o tym słyszą. I nie tylko studenci.

Otóż jak sobie tę krzywą narysuję do końca, to rysunek jest taki. Moje trajektorie się rozciągają w ujemnych chwilach.

**[25:03]**

I jak wszyscy, którzy czytali „Lód” Jacka Dukaja, wiedzą, że jeżeli procesy chodzą do przodu w czasie i prowadzą do wzrostu entropii, to też można wyobrazić sobie sytuację, kiedy odwracamy kierunek upływu czasu i dzieją się różne dziwne rzeczy, w których być może termodynamika jest odwrócona.

W tym przypadku zwróćcie uwagę, że ten horyzont zdarzeń to jest taka powierzchnia, że jak za nią wpadnę, to nie jestem w stanie wrócić. Ale jest też ta druga asymptota, która ma dokładnie odwrócone właściwości. Jak jest coś po tej stronie asymptoty, to ono musi się wydostać na drugą stronę, ale nie może zawrócić.

**[25:47]**

Czyli na tym diagramie jest jeszcze druga asymptota. I ta pierwsza oddziela zdarzenia, które nie mogą zawrócić do rakiety, a ta druga oddziela zdarzenia, które muszą wpaść do rakiety i nie ma wyjścia, żeby zawróciły.

I te dwa horyzonty mają dwie różne nazwy. To jest horyzont zdarzeń czarnej dziury. A to jest horyzont zdarzeń białej dziury.

**[26:20]**

I jak widać, jak się rozważa taki ruch z przyspieszeniem, to nie da się narysować takiego ruchu, który miałby tylko jeden horyzont, a drugiego nie. Te horyzonty zawsze występują wspólnie.

I dokładnie z tego samego powodu, gdyby czarna dziura rzeczywiście istniała, taka prawdziwa czarna dziura, która odwiecznie istnieje i jest wariantem, jest jakby analogią tego ruchu, to ta czarna dziura nie mogłaby istnieć bez białej dziury. Byłaby to jedna i druga naraz.

**[26:48]**

I teraz jest to dosyć dziwne, dlatego że my często wyobrażamy sobie czarną dziurę jak taki obiekt — jak na niego patrzymy, gdybyśmy byli blisko, to byłaby czarna, bo tam nic ze środka się nie może wydostać. Światło jest tam więzione, nie może uciec na drugą stronę, więc jakbyśmy byli obok, to byśmy widzieli czarny obiekt.

No tak, ale zastanówmy się, czy jeżeli jestem w takiej rakiecie i patrzę w stronę tego horyzontu zdarzeń, to rzeczywiście widzę mrok, czy niekoniecznie? No przecież powiedziałem, że ten horyzont zdarzeń jest w stałej odległości od… Zostawię sobie tylko jedną rakietę, żeby nie komplikować. Powiedzmy, że mam tę rakietę.

**[27:26]**

I ten horyzont zdarzeń jest w stałej odległości od rakiety według kosmonauty, ale również ten drugi jest w stałej odległości od tego kosmonauty. I co więcej, z perspektywy tego kosmonauty, jeden i drugi horyzont są dokładnie w tym samym miejscu. One się pokrywają.

Jakbym spojrzał w lewo, czy rzeczywiście bym zobaczył ciemność? No nie. [niepewne: Najłatwiej] to zobaczyć w następny sposób. Wyobraźmy sobie, że tu jest motylek albo kwiatek. Albo latarka i ktoś nią świeci, ktoś w moją stronę świeci.

**[28:03]**

To światło tej latarki porusza się z prędkością światła i prędzej czy później wpada do mojego oka. Więc ja ewidentnie, patrząc w stronę horyzontu zdarzeń, widzę światło, które zza niego do mnie dociera. Tylko nie zza tego horyzontu, tylko zza tego horyzontu, aczkolwiek jeden i drugi są w tym samym miejscu.

To jest bardzo nieintuicyjne, bo na tym diagramie wygląda, jakby były w różnych miejscach. A jednak z perspektywy kogoś, kto jest w rakiecie, on widzi jeden i drugi dokładnie w tym samym miejscu przestrzeni, ale gdyby patrzył w stronę tego horyzontu zdarzeń, to on coś tam zobaczy, co zza tego horyzontu dociera. No cokolwiek, co się w tym miejscu znajduje, będzie świeciło i będzie informacja o tym do mnie docierała.

**[28:46]**

Więc pojawia się ciekawe pytanie: czy gdybym miał prawdziwą czarną dziurę w przestrzeni kosmicznej, to rzeczywiście, patrząc na nią, stwierdziłbym, że jest czarna, czy też docierałoby ze środka jakieś dziwne światło? Światło niosące informacje. O czym? No o tym, co jest w środku, ale nie w środku czarnej dziury, tylko w środku białej dziury, która jest w tym samym miejscu.

I to rzeczywiście prowadzi do różnych poważnych kłopotów interpretacyjnych. Można się zastanawiać, co to wszystko w ogóle znaczy. I fizycy [niepewne: zwyczajnie] nie do końca wiedzą, bo to jest tak, że jak się patrzy na matematykę czarnych dziur, to się okazuje, że ta matematyka jest nieoderwalna od matematyki białych dziur i nie da się mieć czarnej dziury, która nie ma w sobie białej dziury.

**[29:30]**

I z perspektywy Jacka to zasadniczo można też powiedzieć, że ta czarna dziura to jest taka biała dziura, która się porusza do tyłu w czasie. Gdyby odwrócić kierunek strzałki czasu na tym wykresie na przeciwny, to rola tych dwóch diagramów, tych asymptot, się zamieni miejscami i czarna dziura się zamieni w białą, a biała się zamieni w czarną. Innymi słowy, często się tak mówi skrótowo, że biała dziura to jest taka czarna dziura, która się porusza do tyłu w czasie.

Czyli jeżeli do jednej wszystko musi wpaść, to z drugiej wszystko musi wylecieć na zewnątrz. Tylko że błąd tego typu narracji jest taki, że mówi się albo myśli się często o tych obiektach jako o zupełnie różnych obiektach. Mogę mieć czarną dziurę, mogę mieć białą dziurę, podczas gdy ogólna teoria względności nie pozwala w ogóle, żeby jedna istniała bez drugiej. To jest jeden wspólny, łączny obiekt.

**[30:19]**

Jak ktoś ma jakieś wątpliwości, z ludzi, którzy są trochę lepiej zorientowani w fizyce, to można sobie odpowiedzieć na pytanie dla tych, co znają ogólną teorię względności. Jaka jest metryka czasoprzestrzeni czarnej dziury? To jest tak zwana metryka Schwarzschilda. Taki matematyczny obiekt, który opisuje geometrię i wszystkie prawa geometryczne wokół czarnej dziury. I to jest znany dobrze obiekt, który się pokazuje studentom na wykładach z ogólnej teorii względności. Ale jak się zapytać, jaka jest metryka białej dziury, to jest dokładnie taka sama. Więc się pojawia pytanie: jak mi ktoś daje metrykę, to co ona opisuje? Czarną czy białą dziurę? I odpowiedź jest: tak. Jedną i drugą.

**[30:57]**

Więc to jest jedna ważna uwaga. Teraz pytanie: czy to, co mamy w środku galaktyki, to jest czarna dziura, czy nie? To jest dobre pytanie. To, co jest w środku galaktyki, to jest zapadająca się materia, która jeszcze nie jest czarną dziurą, a przynajmniej takie jest konwencjonalne spojrzenie, w które też nie do końca wierzę. Ale to jest taka zapadająca się materia, która prawie jest czarną dziurą, ale jeszcze się nie uformowała i dopiero za nieskończenie długo, jak będziemy bardzo cierpliwi, ona się zamieni w prawdziwą czarną dziurę.

A póki co to jest taka zapadająca się materia, która jest coraz gęstsza. Z perspektywy kogoś, kto jest daleko, to jest wszystko jedno, bo nieważne, czy czarna dziura, czy duża masa [nieczytelne], w dużych rozmiarach, ale tej samej wartości — efekt obserwacyjny jest taki sam.

**[31:38]**

Czyli niezależnie od tego, czy mam punkt, który waży kilogram, czy kulkę, która waży kilogram o dużym promieniu, to z perspektywy kogoś, kto jest daleko, efekt grawitacyjny jest dokładnie taki sam. Więc my nie widzimy różnicy obserwacyjnej, czy tam jest w tej galaktyce prawdziwa czarna dziura, czy tylko zapadająca się materia. To jest prawie to samo.

Natomiast są różne hipotezy, jak się włącza efekty kwantowe, co się z tym wszystkim dzieje w przyszłości. Jedna z hipotez jest taka, że taka zapadająca się materia po pewnym skończonym, ale bardzo długim czasie zamieni się w białą dziurę. I ten kolaps materii zamieni się w wielki wybuch i to wszystko się wystrzeli we wszystkich kierunkach i zamieni się poprzez zjawiska kwantowe w białą dziurę. Są różne hipotezy tego typu.

**[32:20]**

Natomiast prawda jest taka, że nikt tego nie wie. Że my nie wiemy, jak to jest. Natomiast to, przy czym chciałbym zostać, i nie męcząc nas bardziej tą tematyką [niepewne: przyciężką], to fakt, że mówiłem przez pół godziny i pewnie gęstość informacji była trochę większa niż w podobnych wystąpieniach na takich konferencjach.

Natomiast to nie jest coś, co jest jakoś bardzo pojemne. Dużo [niepewne: zdążyłem] powiedzieć przez te pół godziny, ale de facto to, co mówiłem, to jest podsumowanie kilkunastu lat badań najwybitniejszych ludzi, jacy kiedykolwiek chodzili po Ziemi. Czyli mamy Einsteina, mamy Schwarzschilda i jeszcze paru innych, którzy tę fizykę badali. I jak to wszystko się przetrawi, przemyśli i przemieli, to zasadniczo to się sprowadza do bardzo prostych rzeczy.

**[33:11]**

I można by pracę Einsteina, która trwała dziesięć lat, skrócić drastycznie, gdyby tylko podpowiedzieć mu te dwie analogie, których zauważenie zajęło mu dziesięć lat.

Natomiast morał z tej historii jest taki, że te największe odkrycia, które uważamy za geniusz ludzki, za nasze największe osiągnięcia niewyobrażalne i tak dalej, sprowadzają się do dostrzegania analogii bardzo często.

To samo z Newtonem, któremu jabłko spadło i go olśniło. Ta historia z jabłkiem to jest też bardzo interesująca historia, bo ona pokazuje, że Newton [nieczytelne] zauważył analogię, której nikt nie zauważył przez parę tysięcy lat. Mianowicie analogię między prawami fizyki spadających jabłek i prawami fizyki, które opisują ruchy planet na niebie.

**[33:58]**

Nikt przez parę tysięcy lat nie pomyślał, że jabłka i planety mają coś wspólnego ze sobą. On powiedział: nie, nie. Jedno i drugie obowiązuje ta sama reguła, prawo powszechnego ciążenia. To była nic innego jak analogia między dwoma zupełnie różnymi zjawiskami.

I wydaje się, że w tych największych, najważniejszych osiągnięciach naukowych w fizyce, też często w matematyce, rola analogii jest bardzo ważna. Też w matematyce Bartosz mógłby to pewnie potwierdzić. Najpiękniejsze teorie matematyczne są takie… [Pominięto krótką dygresję o wiadomości wyświetlonej podczas prezentacji.]

**[34:38]**

Że najpiękniejsze teorie w matematyce są takie, w których nagle okazuje się, że jeden dział matematyki jest analogiczny do jakiegoś zupełnie innego działu. Geometria algebraiczna na przykład. Jest z jednej strony geometria, czyli opis zjawisk, które wyobrażamy sobie rysunkami. Z drugiej strony mamy algebrę, w której obiektami pierwotnie były liczby, ale potem to się zamieniło w jakieś uogólnienia. I nagle ktoś zauważa, że prawa jednej i drugiej teorii są analogiczne i powstaje geometria algebraiczna.

I takie pomosty między dwoma różnymi działami matematyki to jest coś, co matematycy uważają za coś najpiękniejszego. To są właśnie te analogie między teoriami, o których mówił Stefan Banach.

**[35:16]**

No i wracając do tematu tej konferencji trochę bardziej, schodząc na ziemię. Właśnie, dziękuję bardzo. To pytanie jest: czy sztuczna inteligencja jest kreatywna, czy ona jest tylko i wyłącznie matematyką i tylko i wyłącznie dostrzeganiem patternów, tak jak pisali ludzie, ci interni z firmy Apple?

No, ja bym się wahał przed [niepewne: używaniem] słowa „tylko”. Dlatego że jak najbardziej taka jednokierunkowa sieć neuronowa robi tylko jedną rzecz. Ona dostrzega patterny i [niepewne: nic więcej nie robi]. Ale ja bym się głęboko zastanowił, czy my, ludzie, robimy coś więcej. Czy w naszej kreatywności jest naprawdę coś więcej niż tylko dostrzeganie patternów?

**[36:06]**

Też warto zwrócić uwagę, że te największe odkrycia, takie jak ogólna teoria względności, [niepewne: szczególna teoria względności], teoria kwantowa, to nie jest coś, na co ludzie wpadli po prostu, mając genialny pomysł. Jak uczę studentów teorii względności, to im pokazuję, że całą tę teorię względności to mógł odkryć Galileusz, bo wszystko, co trzeba było wiedzieć, wiedział już czterysta lat temu, tylko nie był na tyle przenikliwy, żeby pociągnąć konsekwencje tego. [Pominięto krótki komentarz do sali.]

**[36:39]**

Zasadniczo teorię względności mógł odkryć Galileusz, ale tego nie zrobił, bo nie był wystarczająco przenikliwy. Ludzie odkryli teorię względności dopiero w momencie, jak już nie było innego wyjścia, bo eksperymenty nas zmusiły do głębszego zastanowienia się nad fizyką prostych rzeczy, takich jak ruch, energia, masa. Dopiero eksperymenty [nieczytelne]. Na przykład eksperyment Michelsona, z tym, że prędkość światła jest taka sama w każdym układzie inercjalnym, zmusił ludzi do myślenia nad zagadnieniami czasu i przestrzeni. Dopiero nagle grupowo wszyscy zaczęli wpadać na pomysły.

Przypominam, że [niepewne: równania] szczególnej teorii względności i transformacje Lorentza zostały odkryte przed Einsteinem, jakieś dwadzieścia lat przed nim, przez Lorentza, Poincarégo, Larmora i jeszcze wielu innych. Dopiero Einstein zrobił syntezę tego wszystkiego.

**[37:23]**

I tak samo z teorią kwantową, która jest uznawana za wielkie odkrycie ludzkiego geniuszu. Ludzie nie wymyślili teorii kwantowej, tylko zostali do niej zmuszeni przez eksperymenty. Nikt przy zdrowych zmysłach by takiej teorii nie wymyślił. Zresztą filozofowie próbowali robić mądre miny przez parę tysięcy lat i nikt się nie zbliżył nawet do wniosków, które znamy z teorii kwantowej. Dlatego że ludzki umysł sam w sobie jest niewiele wart. On nie potrafi zbyt daleko wykraczać poza to, co ma na czubku nosa.

Dopiero eksperymenty z elektronami i z [nieczytelne] obiektami były tak dziwne, że zmusiły fizyków do myślenia nad szukaniem opisu, który pasuje do tych eksperymentów. I teoria kwantowa urodziła się w ciężkich bólach, żeby dopasować jakąś teorię do tego, co widzimy w eksperymentach.

**[38:11]**

I z tego powstała ta dziwna teoria kwantowa. Tak swoją drogą była ona bardzo długo niezrozumiała i zaczęła być dopiero zrozumiała w momencie, kiedy Paul Dirac i inni zauważyli pewne analogie między tymi dziwnymi prawami kwantowymi, które były czysto matematyczne i bardzo abstrakcyjne, a innymi prawami znanymi w mechanice klasycznej, które odkryto jakiś tam czas wcześniej. I dopiero analogie między prawami kwantowymi i mechaniką klasyczną pozwoliły ludziom dzięki tym analogiom budować jakiś obraz rzeczywistości na poziomie kwantowym.

Więc ja bym powiedział, że nasze rozumienie jest mocno ograniczone tym, jakie analogie jesteśmy w stanie dostrzegać.

**[38:46]**

I dlatego niektórzy mnie się czepiają, że ja jestem jakoś nadmiernie entuzjastycznie nastawiony do sztucznej inteligencji. Nie wiem, skąd to słowo „entuzjazm” ma się brać niby. Ja zauważam tylko, że sieci neuronowe są zdolne do umiejętności, która gwarantuje nauce postęp w tych najbardziej spektakularnych miejscach. I ja nie jestem wcale przekonany, czy do robienia postępów w nauce potrzeba czegokolwiek więcej niż tylko umiejętności dostrzegania analogii.

W przypadku matematyki w zasadzie nie potrzeba nic więcej. W przypadku fizyki trzeba nieco więcej, bo trzeba zauważać analogię między teoriami, które konstruujemy, a eksperymentami, które robimy. I mimo wszystko musi być jakaś korespondencja między nimi, więc tutaj rozwój umiejętności matematycznych jest o wiele bardziej nieograniczony.

**[39:36]**

A w rozwoju fizyki za pośrednictwem sztucznej inteligencji pewnie trzeba będzie mimo wszystko jeszcze trochę poczekać, bo wąskim gardłem nie jest brak pomysłów, tylko brak eksperymentów. I my dopasowujemy opis rzeczywistości do tej rzeczywistości. [niepewne: Musimy] najpierw zrobić eksperyment, który przeczy temu, co dotąd mieliśmy w opisie, żeby w ogóle myśleć o jakimś nowym opisie, i tego nam brakuje. I to jest w tym momencie bolączka fizyki współczesnej, że nie mamy eksperymentów, które przeczą znanym teoriom. I dopóki nie będziemy mieli takich eksperymentów, dopóty myślenie nad konstrukcją nowych teorii jest po prostu — wydaje się — mrzonką.

**[40:13]**

Dlatego że ani ludzie, co doświadczenie pokazuje historyczne, nie są w stanie wymyślać nowych rzeczy, dopóki ich eksperyment nie zainspiruje i już nie ma innego wyjścia, i trzeba zacząć myśleć. Tak jak było w przypadku teorii względności: już nie było innego wyjścia, trzeba było coś wymyślić, bo fizyka się waliła. I obawiam się, że modele sztucznej inteligencji oparte na dostrzeganiu analogii mają to samo ograniczenie.

Natomiast można pewnie wyobrażać sobie, że w przyszłości ich ważną rolą w fizyce będzie proponowanie nowych eksperymentów, które będą inspirować nowe teorie. I to będzie ten moment, kiedy w fizyce zacznie się dziać to samo, co się dzieje obecnie w matematyce.

**[40:51]**

Więc ja się często śmieję z kolegami, że cokolwiek się stanie, nie wiem, co się stanie w przyszłości z fizykami, ale najpierw to się stanie z matematykami. I taka uwaga na koniec jeszcze co do tych matematyków, bo [nieczytelne] Bartosz [niepewne: wyzłośliwiał], to ja mu trochę się odgryzę. Ale w zasadzie to będzie pochwała nawet świata matematyków.

Jesteśmy świadkami — ja się zgadzam tutaj z kilkoma osobami, które to powiedziały — że jesteśmy świadkami czegoś, co się nazywało od lat osobliwością. To moim zdaniem jest proces, który się zaczął i właśnie teraz w tym się znajdujemy. Widzimy ten moment przeobrażenia. I bardzo szczęśliwie się dobrze składa, i to nie jest przypadek, że pierwszą ofiarą tej technologii będą matematycy.

**[41:30]**

Otóż patrzę na to z optymizmem, dlatego że matematycy to często bardzo mądrzy ludzie, jedni z najinteligentniejszych, jakich mamy. I to bardzo dobrze, że to właśnie ich spotka ta przykra okoliczność, bo oni będą musieli sobie ułożyć życie na nowo. Nikt nie wie, jak to życie będzie wyglądało. Natomiast jak oni to zrobią i jakoś się umeblują na nowo, to być może dadzą przykład innym, których to też w jakiejś kolejności spotka, jak sobie radzić z tą nową sytuacją, w której nie jesteśmy już najmądrzejsi na świecie. I musimy się liczyć z tym, że nasze kompetencje są przekazywane dalej jakimś [niepewne: tworom], które tylko dostrzegają analogie, tylko łączą kropki i nic więcej.

**[42:18]**

Dziękuję bardzo.
