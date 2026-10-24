
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");

app.get("/health", (req, res) => {
  res.json({
    name: "Astro's Universal Web",
    status: "online"
  });
});

app.get("/", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Astro's Universal Web</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, sans-serif;
      color: #fff;
      background: #100d27;
    }
    main { width: min(90%, 600px); text-align: center; }
    h1 { color: #d7b8ff; }
    p { color: #c9c2df; }
    input, button {
      box-sizing: border-box;
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #7662a8;
      font: inherit;
    }
    input { width: 70%; background: #211b3b; color: white; }
    button { background: #b99aff; cursor: pointer; }
  </style>
</head>
<body>
  <main>
    <h1>Astro's Universal Web</h1>
    <p>Your cosmic browsing project is coming online.</p>
    <form id="address-form">
      <input id="address" type="url"
        placeholder="https://example.com" required>
      <button type="submit">Go</button>
    </form>
    <p id="message">The proxy service is not connected yet.</p>
  </main>
  <script>
    document.getElementById("address-form").addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("message").textContent =
        "The browsing backend still needs to be configured.";
    });
  </script>
</body>
</html>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Astro's Universal Web listening on port " + PORT);
});
