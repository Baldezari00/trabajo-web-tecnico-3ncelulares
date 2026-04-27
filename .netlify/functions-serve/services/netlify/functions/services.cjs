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

// netlify/functions/services.js
var services_exports = {};
__export(services_exports, {
  default: () => services_default
});
module.exports = __toCommonJS(services_exports);
var import_client = require("@libsql/client");
var services_default = async (request) => {
  const db = (0, import_client.createClient)({
    url: process.env.TURSO_DB_URL,
    authToken: process.env.TURSO_DB_TOKEN
  });
  const method = request.method;
  try {
    if (method === "GET") {
      const rows = await db.execute("SELECT * FROM services");
      return new Response(JSON.stringify(rows.rows), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "POST") {
      const body = await request.json();
      await db.execute({
        sql: "INSERT INTO services (name, icon, items, price) VALUES (?, ?, ?, ?)",
        args: [body.name, body.icon, body.items, body.price]
      });
      return new Response(JSON.stringify({ message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "PUT") {
      const body = await request.json();
      await db.execute({
        sql: "UPDATE services SET name=?, icon=?, items=?, price=? WHERE id=?",
        args: [body.name, body.icon, body.items, body.price, body.id]
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
        sql: "DELETE FROM services WHERE id=?",
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
    console.error("Error en services.js:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc2VydmljZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAbGlic3FsL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3QpID0+IHtcclxuICBjb25zdCBkYiA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlRVUlNPX0RCX1VSTCxcclxuICAgIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuVFVSU09fREJfVE9LRU4sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR0VUIFx1MjE5MiBvYnRlbmVyIHRvZG9zIGxvcyBzZXJ2aWNpb3NcclxuICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgY29uc3Qgcm93cyA9IGF3YWl0IGRiLmV4ZWN1dGUoXCJTRUxFQ1QgKiBGUk9NIHNlcnZpY2VzXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShyb3dzLnJvd3MpLCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBPU1QgXHUyMTkyIGNyZWFyIHNlcnZpY2lvXHJcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICBhd2FpdCBkYi5leGVjdXRlKHtcclxuICAgICAgICBzcWw6IFwiSU5TRVJUIElOVE8gc2VydmljZXMgKG5hbWUsIGljb24sIGl0ZW1zLCBwcmljZSkgVkFMVUVTICg/LCA/LCA/LCA/KVwiLFxyXG4gICAgICAgIGFyZ3M6IFtib2R5Lm5hbWUsIGJvZHkuaWNvbiwgYm9keS5pdGVtcywgYm9keS5wcmljZV1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJPS1wiIH0pLCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBVVCBcdTIxOTIgZWRpdGFyIHNlcnZpY2lvXHJcbiAgICBpZiAobWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGF3YWl0IGRiLmV4ZWN1dGUoe1xyXG4gICAgICAgIHNxbDogXCJVUERBVEUgc2VydmljZXMgU0VUIG5hbWU9PywgaWNvbj0/LCBpdGVtcz0/LCBwcmljZT0/IFdIRVJFIGlkPT9cIixcclxuICAgICAgICBhcmdzOiBbYm9keS5uYW1lLCBib2R5Lmljb24sIGJvZHkuaXRlbXMsIGJvZHkucHJpY2UsIGJvZHkuaWRdXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiT0tcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBERUxFVEUgXHUyMTkyIGVsaW1pbmFyIHNlcnZpY2lvXHJcbiAgICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gICAgICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICBhd2FpdCBkYi5leGVjdXRlKHtcclxuICAgICAgICBzcWw6IFwiREVMRVRFIEZST00gc2VydmljZXMgV0hFUkUgaWQ9P1wiLFxyXG4gICAgICAgIGFyZ3M6IFtpZF1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJPS1wiIH0pLCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1cdTAwRTl0b2RvIG5vIHBlcm1pdGlkb1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNDA1LFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBlbiBzZXJ2aWNlcy5qczpcIiwgZXJyKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTZCO0FBRTdCLElBQU8sbUJBQVEsT0FBTyxZQUFZO0FBQ2hDLFFBQU0sU0FBSyw0QkFBYTtBQUFBLElBQ3RCLEtBQUssUUFBUSxJQUFJO0FBQUEsSUFDakIsV0FBVyxRQUFRLElBQUk7QUFBQSxFQUN6QixDQUFDO0FBRUQsUUFBTSxTQUFTLFFBQVE7QUFFdkIsTUFBSTtBQUVGLFFBQUksV0FBVyxPQUFPO0FBQ3BCLFlBQU0sT0FBTyxNQUFNLEdBQUcsUUFBUSx3QkFBd0I7QUFFdEQsYUFBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEtBQUssSUFBSSxHQUFHO0FBQUEsUUFDN0MsUUFBUTtBQUFBLFFBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxNQUNoRCxDQUFDO0FBQUEsSUFDSDtBQUdBLFFBQUksV0FBVyxRQUFRO0FBQ3JCLFlBQU0sT0FBTyxNQUFNLFFBQVEsS0FBSztBQUVoQyxZQUFNLEdBQUcsUUFBUTtBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsTUFBTSxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSztBQUFBLE1BQ3JELENBQUM7QUFFRCxhQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFHO0FBQUEsUUFDckQsUUFBUTtBQUFBLFFBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxNQUNoRCxDQUFDO0FBQUEsSUFDSDtBQUdBLFFBQUksV0FBVyxPQUFPO0FBQ3BCLFlBQU0sT0FBTyxNQUFNLFFBQVEsS0FBSztBQUVoQyxZQUFNLEdBQUcsUUFBUTtBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsTUFBTSxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLEVBQUU7QUFBQSxNQUM5RCxDQUFDO0FBRUQsYUFBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEVBQUUsU0FBUyxLQUFLLENBQUMsR0FBRztBQUFBLFFBQ3JELFFBQVE7QUFBQSxRQUNSLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsTUFDaEQsQ0FBQztBQUFBLElBQ0g7QUFHQSxRQUFJLFdBQVcsVUFBVTtBQUN2QixZQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUMvQixZQUFNLEtBQUssSUFBSSxhQUFhLElBQUksSUFBSTtBQUVwQyxZQUFNLEdBQUcsUUFBUTtBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsTUFBTSxDQUFDLEVBQUU7QUFBQSxNQUNYLENBQUM7QUFFRCxhQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFHO0FBQUEsUUFDckQsUUFBUTtBQUFBLFFBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxNQUNoRCxDQUFDO0FBQUEsSUFDSDtBQUdBLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8scUJBQXFCLENBQUMsR0FBRztBQUFBLE1BQ25FLFFBQVE7QUFBQSxNQUNSLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsSUFDaEQsQ0FBQztBQUFBLEVBRUgsU0FBUyxLQUFLO0FBQ1osWUFBUSxNQUFNLHlCQUF5QixHQUFHO0FBQzFDLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRztBQUFBLE1BQzFELFFBQVE7QUFBQSxNQUNSLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsSUFDaEQsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
