//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "tumusiimeabert29@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVnWk1xVGdIb3AzSEQ5RTFxd21JOEgrVXFQUG84dU1KbFRSWkZISzVscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJrNVM2b1ZNUXdhaE9BcVB6OTFpMXdoVVBkbXZabkVtSC9PYkJOcjBYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRHgxZlIyWjdSTThRbTJGOUtkZlRIU0RuOFczandPR2NZd3JTVk56bzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4dGQwREduUm5RalFTUTRGdEgrY0YxUFJDYjBkcDBqMytFVXkyYVZhc3pNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLQlc3bDQ4MjZpMG92WjZGS0ZiMHEyZ1k1SENoOTczejBsYUlGaWRyWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI3bWFUR053M2FyN2RCRXVOa3hONmsrZVNaQld0OTVpbUVRcVMzQnZwUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFET3p2dm8vVmJlRm9mNXpZOWE4ZEpaQmRhcUlNU29BS3p5eE93VGRYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3pDWkxnNkxUblRDclFaa0xKczRsa3A5RzloUjBjOENzakdaZ0VZZEczVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im91V2F2NmYwUjFqZ1YrYUxUTTNOSTd5Ty8rZnI1blRXbmlPaUpoNWh4N2loOEp1NmhKUlA2ZGgvbXNObStGTmdkcDRHemF5T3dwa09NekFLTGhkbkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IlNjeGM1TlhxRnRIcEcyeHU1UWlPdUhtZkhzaktwamh2aXFHUllBWksrTms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzYwNzg1OTk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVERTIxNEM1MDBEMDA4OTY1RDlEQkE3MjVENENDMDA1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE3NDYzNjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhIT0x2U2F0Uzh1SGxWVGdJRGZKQ2ciLCJwaG9uZUlkIjoiM2EwMjFkOTQtOWNhMS00M2M4LThlN2MtZGRlYzI0ZjFhMTBiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJyTmxGRDFMbjBGNExndE1vNWkyYlIrUFpsbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5cGxrVWF4M2tPVytWK3FMZmozRnFPRG41cXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUENRQjNWMksiLCJtZSI6eyJpZCI6IjI1Njc2MDc4NTk5NTozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFCRVJUVEVDSCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFRWektvR0VLaTA0YmtHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0JYSnVHSnYzY3d1YjRUWEFGNjAvT3BBR2oyQTFLOFZjRndPM1I1VHFDND0iLCJhY2NvdW50U2lnbmF0dXJlIjoibSt1bUZxVU5mWS84U3pRMzF2NEFFNDBuSi9vQW5abHRTVUhwcGZkMXBhUU0rc3RYbThyTzVKWlB1ZHNLRjFMenU1R1QxWGM5eGV4UmhtWHhGY2FmQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZqcGNWcWZ5YjBrQjhkSU9Mbm9Cc3dabHNkRUd6SDBJMnkzRzJQRlpJdzRuTzJwd2tGVXF6SEg2VUFESjkwU2J3eDkydm1lQjFpT3ZnRFZLUEVMUUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzYwNzg1OTk1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkFWeWJoaWI5M01MbStFMXdCZXRQenFRQm85Z05TdkZYQmNEdDBlVTZndSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTc0NjM1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYSsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ABERTTECHBOT™`",
  author: process.env.PACK_AUTHER || "ABERT_TECH-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "ABERT_TECH-V2",
  ownername: process.env.OWNER_NAME || "ABERT TECH1",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
