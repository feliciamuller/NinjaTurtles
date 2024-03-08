const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
 
require('dotenv').config();
 
const { Client } = require('@notionhq/client');
 
const notion = new Client({
  auth: process.env.NOTION_API_KEY, // Rekommenderad metod för att lagra känslig information
});
 
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT
// Express route-hanterare
app.post('/api/notion', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: PROJECTS_DATABASE_ID,
       filter: req.body.filter, // eller någon annan payload du behöver skicka
       sorts: [{
        property: "Name",
        direction: "ascending"
       }] // exempel på hur du kan inkludera sortering, om det behövs
      
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});