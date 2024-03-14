const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
 
require('dotenv').config();
 
const { Client } = require('@notionhq/client');
const { default: addToDatabase } = require("./create");
 
const notion = new Client({
  auth: process.env.NOTION_API_KEY, // Rekommenderad metod för att lagra känslig information
});

const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_PEOPLE; // Använd miljövariabler även här
const PROJECTS_DATABASE_ID2 = process.env.NOTION_DATABASE_PROJECT;
const PROJECTS_DATABASE_ID3 = process.env.NOTION_DATABASE_TIMEREPORTS;
// Express route-hanterare

app.post('/api/people', async (req, res) => {
  try {
    const people = await notion.databases.query({
        database_id: PROJECTS_DATABASE_ID,
        filter: req.body.filter,
        sorts: [{ property: "Name", direction: "ascending" }]
      });
    res.json(people);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/project', async (req, res) => {
  try {
    const project = await notion.databases.query({
        database_id: PROJECTS_DATABASE_ID2,
        filter: req.body.filter,
        sorts: req.body.sort
      });
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/timereports', async (req, res) => {
  try {
    const timereports = await notion.databases.query({
        database_id: PROJECTS_DATABASE_ID3,
        filter: req.body.filter,
        sorts: req.body.sort
      });
    res.json(timereports);
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