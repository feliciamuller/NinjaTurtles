import React from 'react';
const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT;
const PROJECTS_DATABASE_ID3 = process.env.NOTION_DATABASE_TIMEREPORTS;
const PROJECTS_PAGE_ID = process.env.NOTION_PAGE_ID;

async function updateDatabase () {
    try {
    const update = await notion.pages.update({
        page_id: PROJECTS_PAGE_ID,
        properties: {
                            "Name": {
                                "id": "title",
                                "type": "title",
                                "title": [
                                    {
                                        "type": "text",
                                        "text": {
                                            "content": "Arne",
                                            "link": null
                                        }
                                    }
                                ]
                            }
                        }    
    });
    console.log(update);
} catch (error) {
    console.error(error);
}}
    ;
export default updateDatabase