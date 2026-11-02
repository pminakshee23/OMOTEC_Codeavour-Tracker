// OMOTEC Codeavour Tracker – storage in Google Drive.
// 1) Change ACCESS_CODE below to your own secret code (share it only with OMOTEC staff).
// 2) Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone.
const ACCESS_CODE = "CHANGE-THIS-CODE";
const FILE_NAME = "omotec-codeavour-tracker-data.json";

function file_() {
  const it = DriveApp.getFilesByName(FILE_NAME);
  return it.hasNext() ? it.next()
    : DriveApp.createFile(FILE_NAME, JSON.stringify({ ver: 0, data: null }), "application/json");
}
function read_() { return JSON.parse(file_().getBlob().getDataAsString()); }
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doGet(e) {
  if (!e.parameter || e.parameter.code !== ACCESS_CODE) return out_({ error: "bad code" });
  const r = read_();
  return out_({ ver: r.ver, data: r.data });
}

function doPost(e) {
  let b;
  try { b = JSON.parse(e.postData.contents); } catch (x) { return out_({ error: "bad request" }); }
  if (b.code !== ACCESS_CODE) return out_({ error: "bad code" });
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const r = read_();
    if (b.ver !== r.ver) return out_({ conflict: true, ver: r.ver, data: r.data });
    const n = { ver: r.ver + 1, data: b.data };
    file_().setContent(JSON.stringify(n));
    return out_({ ok: true, ver: n.ver });
  } finally { lock.releaseLock(); }
}
