### Zetland-opgave

#### Overordnet struktur:
Forsiden består af 2 bestanddele: En blok med historier fra Hacker News, og en knap i bunden, med hvilken brugeren kan erstatte de 10 historier med 10 nye. Brugere kan også klikke på den bruger, som har tilføjet historien til Hacker News og dermed blive ledt til en ny side, der viser lidt information on den bruger.

#### Detaljer
Næsten alle komponenter renderes på serveren, kun nogle få knapper er client-side renderet. Animationen af story-score-baren er lavet i Framer Motion.

#### Til diskussion:
- map() vs hardcoding i StoryDetails.tsx
- Hvordan dataen hentes: Promise.all() vs. for loop.
- Tilføjelse af userscore til post objekt
- Caching vs suspense
- Udfordringer ved præsentation of brugers posts
- dangerouslySetHtml
- Error handling - lige nu bare catch-all
- Ville have renderet brugers posts, men det krævede resolve af alle brugers submissions