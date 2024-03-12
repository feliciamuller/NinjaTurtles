const {Client} = require("@notionhq/client");
const cors = require("cors");
const dotnev = require("dotenv");
const axios = require("axios")
const express = require("express");
dotnev.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json())

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseProject = process.env.NOTION_DATABASE_ID1;
const databasePeople = process.env.NOTION_DATABASE_ID2;
const databaseTimestamp = process.env.NOTION_DATABASE_ID3;

app.post ("/api/notion" ,async (req, res) => {
  try { 
  const response = await notion.databases.retrieve({ database_id: databaseProject});

  res.json(response)
  console.log(response);
}
  catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
console.log("server listen on port 3001")

});

// app.post('/api/notion', async(req, res) => {
//   try { 
//       const response = await notion.databases.query({
//           database_id: databaseProject,
//           database_id2: databasePeople,
//           database_id3: databaseTimestamp
//       });

//       res.send(response);
//       const {results} = response;
//       console.log("success");
//   } catch (error) {
//       console.log(error);
//   }


// app.listen(port, () => {
//   console.log('server listening on port 3001!');
// });
// app.use(cors());
// app.use(express.json());

// app.post("/api/notion", async(req, res) => {
//     try {
//         const response = await axios.post(`${NOTION_API_BASE_URL}/databases/e0d8d74791a44b2793062b65ad108615/query`, req.body, {
//             headers: {
//                 "Authorization": `Bearer ${NOTION_API_KEY}`,
//                 "Notion-Version": `2022-06-28`
//             },
//             parent: {
//               type: "page_id",
//               page_id: "b38912d69edb41dbb464a215dd6fbb50"
              
//             }
//     });
//     res.json(response.data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Server Error"});
//     }
// });

// app.post("/api/notion", async(req, res) => {
//   try {
//       const response = await axios.post(`${NOTION_API_BASE_URL}/databases/e0d8d74791a44b2793062b65ad108615/query`, req.body, {
//           headers: {
//               "Authorization": `Bearer ${NOTION_API_KEY}`,
//               "Notion-Version": `2022-06-28`
//           }
//   });
//   res.json(response.data);
//   } catch (error) {
//       console.log(error);
//       res.status(500).json({message: "Server Error"});
//   }
// });


// app.post(async function (request, response) {
//     const pageId = process.env.NOTION_API_BASE_URL;
//     const title = request.body.dbName;
  
//     try {
//   // Notion API request!
//       const newDb = await notion.databases.patch({
//         parent: {
//           type: "page_id",
//           page_id: pageId,
//         },
//         title: [
//           {
//             type: "text",
//             text: {
//               content: title,
//             },
//           },
//         ],
//         properties: {
//           Name: {
//             title: {},
//           },
//         },
//       });
//       response.json({ message: "success!", data: newDb });
//     } catch (error) {
//       response.json({ message: "error", error });
//     }
//   });
  
  