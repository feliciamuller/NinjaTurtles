const express = require("express");
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

app.post('/api/create_people', async (req, res) => {
  try {
    const create_people = await notion.pages.create({
      parent: {
        database_id: PROJECTS_DATABASE_ID,
      },
      properties: req.body
    });
    console.log(create_people);
  } catch (error) {
    console.error(error.body);
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

app.post('/api/create_projects', async (req, res) => {
  try {
    const create_projects = await notion.pages.create({
      parent: {
        database_id: PROJECTS_DATABASE_ID2,
      },
      properties: req.body
    });
    console.log(create_projects);
  } catch (error) {
    console.error(error.body);
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

app.post('/api/updatePeople', async (req, res) => {
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

app.post('/api/create_timereports', async (req, res) => {
  try {
    const create_timereports = await notion.pages.create({
      parent: {
        database_id: PROJECTS_DATABASE_ID3,
      },
      properties: req.body
    });
    console.log(create_timereports);
  } catch (error) {
    console.error(error.body);
  }
});

app.post('/api/update_timereports_comment', async (req, res) => {
  try {
    const pageid = "39a9deaf1874439496d343a064a20a9b"
    /* const pageid2 = "ef297e1b6d8b4e93805306eab8bc92ee"
    const pageid3 = "7b9215962d5041f085c7aeac11228b70"
    const pageid4 = "6878066aed714b43b94dbf06f6da05d3"
    const pageid5 = "c65505f5984e412cba7aca1df6d9c980" */
    const update_timereports_comment = await notion.pages.update({
      page_id: pageid,
      properties: req.body
    });
    console.log(update_timereports_comment);
  } catch (error) {
    console.error(error.body);
  }
});
//////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});