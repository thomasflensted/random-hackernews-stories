### Zetland-opgave

#### Overordnet struktur:
Forsiden består af 2 bestanddele: En blok med historier fra Hacker News, og en knap i bunden, med hvilken brugeren kan erstatte de 10 historier med 10 nye. Brugere kan også klikke på den bruger, som har tilføjet historien til Hacker News og dermed blive ledt til en ny side, der viser lidt information on den bruger.

#### Detaljer
Næsten alle komponenter renderes på serveren, kun nogle få knapper er client-side renderet. 

#### Vis:
- High score bar
- Medalje ved bedste bruger
- Skeletons (indsæt forsinkelse)
- Hvordan user score tilføjes hver historie
- Mobilvisning

#### Til diskussion:
- map() vs hardcoding i StoryDetails.tsx
- Hvordan dataen hentes: Promise.all() vs. for loop.
- Caching - samme historier vises ved refresh.
- Udfordringer ved præsentation of brugers posts
- dangerouslySetHtml
- Error handling - lige nu bare catch-all