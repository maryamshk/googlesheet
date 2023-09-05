// const express = require('express');
// const google = require("googleapis");

// const app = express();


// // reading from spreadsheet
// app.get("/", async (req, res) => {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: "credentials.json",
//         scopes: "https://www.googleapis.com/auth/spreadsheets",

//     })


//     const spreadsheetId = "1EeZXwIXpazOwIDs-6S-1vgGtvMiML9gGAiahsVotqmk";    //from spreadsheet URL

//     // google will make a request to the auth and send the client object back
//     const client = await auth.getClient();

//     const googleSheets = google.sheets({ version: "v4", auth: client })

//     // Get metadata about spreadsheet
//     const metadata = await googleSheets.spreadsheets.get({
//         auth,                                     // original auth object
//         spreadsheetId,                             // spreadsheet id
//     })


//     // reading rows from spreadsheet
//     const getrows = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range: "Sheet1",
//     })

//     // writing into spreadsheet
//     await googleSheets.spreadsheets.values.append({
//         auth,
//         spreadsheetId,
//         range: "Sheet1!A:B",  //write in row A,B
//         valueInputOption: "USER_ENTERED",   //data will be formatted according to the spreadsheet's rules
//         resource: {
//             values: [["make a list", "test"]],
//         },
//     })


//     res.send(getrows.data);

// })

// app.listen(3001, (req, res) => console.log("listening"));

