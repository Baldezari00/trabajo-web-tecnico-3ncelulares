var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/prices.js
var prices_exports = {};
__export(prices_exports, {
  default: () => prices_default
});
module.exports = __toCommonJS(prices_exports);
var import_client = require("@libsql/client");
var prices_default = async (request) => {
  const db = (0, import_client.createClient)({
    url: process.env.TURSO_DB_URL,
    authToken: process.env.TURSO_DB_TOKEN
  });
  const method = request.method;
  try {
    if (method === "GET") {
      const rows = await db.execute("SELECT * FROM prices");
      return new Response(JSON.stringify(rows.rows), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "POST") {
      const body = await request.json();
      await db.execute({
        sql: "INSERT INTO prices (service, price, time) VALUES (?, ?, ?)",
        args: [body.service, body.price, body.time]
      });
      return new Response(JSON.stringify({ message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "PUT") {
      const body = await request.json();
      await db.execute({
        sql: "UPDATE prices SET service=?, price=?, time=? WHERE id=?",
        args: [body.service, body.price, body.time, body.id]
      });
      return new Response(JSON.stringify({ message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "DELETE") {
      const url = new URL(request.url);
      const id = url.searchParams.get("id");
      await db.execute({
        sql: "DELETE FROM prices WHERE id=?",
        args: [id]
      });
      return new Response(JSON.stringify({ message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error en prices.js:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvcHJpY2VzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQGxpYnNxbC9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0KSA9PiB7XHJcbiAgY29uc3QgZGIgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5UVVJTT19EQl9VUkwsXHJcbiAgICBhdXRoVG9rZW46IHByb2Nlc3MuZW52LlRVUlNPX0RCX1RPS0VOLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEdFVCBcdTIxOTIgb2J0ZW5lciB0b2RvcyBsb3MgcHJlY2lvc1xyXG4gICAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBjb25zdCByb3dzID0gYXdhaXQgZGIuZXhlY3V0ZShcIlNFTEVDVCAqIEZST00gcHJpY2VzXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShyb3dzLnJvd3MpLCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1QgXHUyMTkyIGNyZWFyIG51ZXZvIHByZWNpb1xyXG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgYXdhaXQgZGIuZXhlY3V0ZSh7XHJcbiAgICAgICAgc3FsOiBcIklOU0VSVCBJTlRPIHByaWNlcyAoc2VydmljZSwgcHJpY2UsIHRpbWUpIFZBTFVFUyAoPywgPywgPylcIixcclxuICAgICAgICBhcmdzOiBbYm9keS5zZXJ2aWNlLCBib2R5LnByaWNlLCBib2R5LnRpbWVdXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiT0tcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQVVQgXHUyMTkyIGFjdHVhbGl6YXIgcHJlY2lvIGV4aXN0ZW50ZVxyXG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICBhd2FpdCBkYi5leGVjdXRlKHtcclxuICAgICAgICBzcWw6IFwiVVBEQVRFIHByaWNlcyBTRVQgc2VydmljZT0/LCBwcmljZT0/LCB0aW1lPT8gV0hFUkUgaWQ9P1wiLFxyXG4gICAgICAgIGFyZ3M6IFtib2R5LnNlcnZpY2UsIGJvZHkucHJpY2UsIGJvZHkudGltZSwgYm9keS5pZF1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJPS1wiIH0pLCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERFTEVURSBcdTIxOTIgZWxpbWluYXIgcHJlY2lvXHJcbiAgICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gICAgICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICBhd2FpdCBkYi5leGVjdXRlKHtcclxuICAgICAgICBzcWw6IFwiREVMRVRFIEZST00gcHJpY2VzIFdIRVJFIGlkPT9cIixcclxuICAgICAgICBhcmdzOiBbaWRdXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiT0tcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNXHUwMEU5dG9kbyBubyBwZXJtaXRpZG9cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KSwge1xyXG4gICAgICBzdGF0dXM6IDQwNSxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZW4gcHJpY2VzLmpzOlwiLCBlcnIpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnIubWVzc2FnZSB9KSwge1xyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBNkI7QUFFN0IsSUFBTyxpQkFBUSxPQUFPLFlBQVk7QUFDaEMs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
