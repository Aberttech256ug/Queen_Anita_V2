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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ozSWRmWE1uYTNSd0JOWTB0b3VxSXFMQnlKWGdablFza2JNOEFRR2VIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGl4OXU5TDlWa055amMyNXEyenpSWXdXQlk5V3JaRDcvanh0UFU0cnJSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UFJYQzVESXVzOGlSNllSWDFyUnRrSjR5R09HT0ZwSDFsVTZsTUZxQm5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZ0IwRUtyQmRLNjJqQWswZXFqL05aSlM3cW83Z01IY1RrYnRnbXluUEhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHdVRRU0tXK1FKdFFTSUF5VHdlZXk3bGdvbkYyM0liVGdsRXhGSGx2R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1nZElUMUJnVEllbE5zQ2k0dzg4cFZVUnFLbTh6d3FudGpzdWRtNklCeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0wzSlhqWTdUU3BOZEtrWmR1K3dXMDdoU05KTVU1aDVLOUdicksxN2dYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEk3V3RuN05OcnhKRWhmeTk3MzE5MWdSa0RRcDE4VEhNV3JBRkJXVGFUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5tOHd2cXhLcENXM3dBK0wzUTRSM1FmeFV6SnVDUG1PUnAwYWdMUG9Zb3FFOElEWTNQSXArc2lVV3lBaHJkT1JTTnNIZWJKcHB1YVdIQnNSK1gvSGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IkFXUjJ0eWdpbjZQaDc4N0pMSU9SOVVFUkxXQmdMdXhIRDBBYk1RVzI5cDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzYwNzg1OTk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3RjIwRjI4MTA3RTk3OUUyQ0EzOEU1MEJFNDhDQzU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE4NTQ2NDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpLMThOcFZ3UkVpaTdoRUR1WDlTd3ciLCJwaG9uZUlkIjoiZWE1NjU1YjYtYTIxMC00YjZmLWE5NTctM2NhNDU2MDQ0NmU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlBdjdxdU1NdllHL0wyRjJraXBReEl0eXdhOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTGp0Mkh5WkFRcHZJck94ZVBRREtXaUN1a1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkFWTU5EVDIiLCJtZSI6eyJpZCI6IjI1Njc2MDc4NTk5NTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFCRVJUVEVDSCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFhWektvR0VLT0M2TGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0JYSnVHSnYzY3d1YjRUWEFGNjAvT3BBR2oyQTFLOFZjRndPM1I1VHFDND0iLCJhY2NvdW50U2lnbmF0dXJlIjoieEhKdDNwUlZESW9Eb0t3Q05zcVhGSHdxSmhMVThIelg2M2pIT3NYV0hLUEVSOXN0ZitkNEtpcGFabDVUK1U5N3dvSDBDTlQ1a04wQXJtSmhiUXZmQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1sejR5ZWFBVjdiYWEyZlQydW93bG5nendIK3VFWk1MaDIrc1BXNWYyd08xRmNRK29KMEhTRmtaMzNreTZ2aElwdW5RLzFsRFhrMW1HSnV4WFdhVmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzYwNzg1OTk1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkFWeWJoaWI5M01MbStFMXdCZXRQenFRQm85Z05TdkZYQmNEdDBlVTZndSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTg1NDY0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYSsifQ=="
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
