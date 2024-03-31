## Introduktion
Ett projekt som handlar om en webbtjänst som låter anställda i ett bolag visa sina projekt, tidrapportera och kommentera beroende på den rollen genom bolaget
man har så dyker det olika alternativ när man loggar in. 
Applikationen byggdes med en React Frontend, verktyget Notion för att hantera databasen och Node.js för att sköta Backend.


## Installation
Först och främst så ska man installera package.json-fil på både frontend delen och backend delen genom att köra commandot npm install, sedan ska man även ha node.js installerat. 
När man är klar med detta steg då kan man köra commandot node server.js på backend delen för och få igång servern sedan npm start på frontend delen för att få fram projektet.

## Strukturen
Notion Api har vi valt som metod för och kommunicera med databasen, React som en frontend och Express som en backend för för att hantera routing och HTTP-förfrågningar då
Express gör det enkelt att definiera routings för olika URL-sökvägar. Detta är användbart när man ska hämta eller skicka data från eller till databasen via HTTP-förfrågningar t.ex. GET, POST.

### Backend: 
i server.js använder man Express som tar emot en POST-förfrågan, den skapar en ny sida i en Notion-databas med data från den inkommande förfrågan. Om något går fel, loggas felmeddelandet.
Där skickar vi en speciellt API query till databasen berör på vad man vill göra, till exempel uppdatera timereportering eller hämta projekt. 

### Frontend:
i app.js använder vi BrowserRouter från react-routerdom, där varje Route-komponent har en sökväg och en komponent som ska renderas när sökvägen matchar, som t.ex inloggning. 
i login.js så dubbelkollar vi om användaren har skrivit rätt mail och lösenord samt om den ska inloggas som en vanlig medarbetare, chef eller projektledare berör på informationen som hen har angett.
Det dyker också olika alternativ berör på vem som är inloggad, en medarbetare kan enbart rapportera tid och kommentera medan en projektledare har mer administrativa alternativ
som handlar om att uppdatera projekt tid, och chefen kan hämta tidrapportering.
När det kommer till design så har vi använt oss utav styled-components och react-icons för och skapa en fin hamburger meny som bakar in allt när man kör i mobilt läge, vi har också använt oss utav @mui/material
så att användaren ska få bekräftelse när hen trycker på submit när man tidrapporterar så man vet att all information som hen har skrivit har gått iväg och sist men inte minst så har vi använt CSS övriga koder. 

## Demo

Anvädare som man kan logga in med och testa hur det ser ut för var och en beroende på rollen: 
Mail: penny@live.com , lösenord: 1234567 (medarbetare)
Mail: fig@live.se, lösenord: 12345678 (projektledare)
Mail: john@live.se, lösenord: 12345678 (chef)


#### Så här ser sidan ut innan man har loggat in 



![Skärmbild 2024-03-29 203731](https://github.com/feliciamuller/NinjaTurtles/assets/144246594/ef3f19d0-7274-4cae-bae9-61a43cea8c24)


#### Mobilt-läge



![Skärmbild 2024-03-29 204002](https://github.com/feliciamuller/NinjaTurtles/assets/144246594/9aa230f4-ef29-4966-acec-9c67d6a282ef)



#### logga in som projektledare



![Skärmbild 2024-03-29 204103](https://github.com/feliciamuller/NinjaTurtles/assets/144246594/795723f3-8424-4f63-846c-4f32ec52eda0)



#### Logga in som chef




![chef](https://github.com/feliciamuller/NinjaTurtles/assets/144246594/e042aaf6-e389-4dba-a07f-e278bd257bce)



#### Logga in som medarbtare




![Skärmbild 2024-03-29 203859](https://github.com/feliciamuller/NinjaTurtles/assets/144246594/38bae039-238b-4d6e-a128-e492a38f4373)


#### Länk till vår planering i Notion för projektet:
https://www.notion.so/Teamspace-Home-b47e893647994e1190a5e20f942af335
