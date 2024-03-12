const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT;
const PROJECTS_DATABASE_ID3 = process.env.NOTION_DATABASE_TIMEREPORTS;
const PROJECTS_PAGE_ID = process.env.NOTION_PAGE_ID;

async function addToDatabase() {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: PROJECTS_DATABASE_ID,
            },
            properties: {
            //     "Name": {
            //         "id": "title",
            //         "type": "title",
            //         "title": [
            //             {
            //                 "type": "text",
            //                 "text": {
            //                     "content": "Fredrik",
            //                     "link": null
            //                 }
            //             }
            //         ]
            //     }
            },    
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    }

    try {
        const response = await notion.pages.create({
            parent: {
                database_id: PROJECTS_DATABASE_ID3,
            },
            properties: {
            //     "Name": {
            //         "id": "title",
            //         "type": "title",
            //         "title": [
            //             {
            //                 "type": "text",
            //                 "text": {
            //                     "content": "Fredrik",
            //                     "link": null
            //                 }
            //             }
            //         ]
            //     }
            },    
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    }
}
addToDatabase()
async function addToDatabase1() {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: PROJECTS_DATABASE_ID3,
            },
            properties: {
            //     "Name": {
            //         "id": "title",
            //         "type": "title",
            //         "title": [
            //             {
            //                 "type": "text",
            //                 "text": {
            //                     "content": "Fredrik",
            //                     "link": null
            //                 }
            //             }
            //         ]
            //     }
            },    
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    }
}
// addToDatabase1();
async function getAllDatabases(){
    try {
      const response = await notion.databases.retrieve({
        database_id: "2128c33745e94b2b8134b5c6a959bba9",
        database_id: "737222ca2e6c4a6997013c6a04f261d9" // exempel på hur du kan inkludera sortering, om det behövs
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
// getAllDatabases()
// async function updateDatabase () {
//     try {
//     const update = await notion.pages.update({
//         page_id: PROJECTS_PAGE_ID,
//         properties: {
//                             "Name": {
//                                 "id": "title",
//                                 "type": "title",
//                                 "title": [
//                                     {
//                                         "type": "text",
//                                         "text": {
//                                             "content": "Arne",
//                                             "link": null
//                                         }
//                                     }
//                                 ]
//                             }
//                         }    
//     });
//     console.log(update);
// } catch (error) {
//     console.error(error);
// }}
//     ;
//     updateDatabase()