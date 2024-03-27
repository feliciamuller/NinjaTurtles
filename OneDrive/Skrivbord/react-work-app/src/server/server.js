const {Client} = require("@notionhq/client");
const cors = require("cors");
const dotnev = require("dotenv");
const port = process.env.PORT || 3001;
const express = require("express");
dotnev.config();

const app = express();
app.use(cors());

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseProject = process.env.NOTION_DATABASE_ID1;
const databasePeople = process.env.NOTION_DATABASE_ID2;
const databaseTimestamp = process.env.NOTION_DATABASE_ID3;


 (async () => {
  try { 
  const databaseId = databaseProject;
  const response = await notion.databases.query({ database_id: databaseId });
  console.log(response);

  const {results} = response;}
  catch (error) {
    console.log(error)
  }
})();
app.listen(port, () => {
    console.log('server listening on port 3001!');
  });
