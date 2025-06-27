const apiUrl = "https://api.green-api.com";

const idInstance = () => document.getElementById("idInstance").value.trim();
const apiTokenInstance = () =>
  document.getElementById("apiTokenInstance").value.trim();
const responseEl = document.getElementById("response");

function showResponse(data) {
  responseEl.textContent =
    typeof data === "string" ? data : JSON.stringify(data, null, 2);
}

async function callApi(method, path, body) {
  const url = `${apiUrl}/waInstance${idInstance()}/${path}/${apiTokenInstance()}`;
  try {
    const res = await fetch(url, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    showResponse(data);
  } catch (e) {
    showResponse("Ошибка запроса: " + e.message);
  }
}

document.getElementById("getSettings").onclick = () => {
  callApi("GET", "getSettings");
};
document.getElementById("getStateInstance").onclick = () => {
  callApi("GET", "getStateInstance");
};
