
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_SZ9u34GnDDzYfZaESBhfK9F8GifUIzp10ZbzQUY8qVM' });
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT;
const PROJECTS_DATABASE_ID3 = process.env.NOTION_DATABASE_TIMEREPORTS;
const PROJECTS_PAGE_ID = process.env.NOTION_PAGE_ID;

async function addToDatabase() {
    
        try {
            const response = await notion.pages.create({
                parent: {
                    database_id: '2ab2899fad81438fae7bdeb4f0318092',
                },
                properties: {
                    "Hours": {
                        "number": 10,
                    }
                  
                },    
            });
            console.log(response);
        } catch (error) {
            console.error(error.body);
        }
    }

    export default addToDatabase;