const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT;
const PROJECTS_PAGE_ID = process.env.NOTION_PAGE_ID;

async function addToDatabase() {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: PROJECTS_DATABASE_ID,
            },
             properties: {
                "Name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Fredrik",
                                "link": null
                            }
                        }
                    ]
                }
             }    
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    }
}
 addToDatabase();

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