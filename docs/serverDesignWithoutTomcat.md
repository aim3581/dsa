Designing a basic web server with Node.js to host both a UI and a REST API is achievable using built-in modules like `http` and `fs`. Here's a simplified design to get you started:

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Handle UI routes
  if (pathname === '/') {
    const uiFilePath = path.join(__dirname, 'ui', 'index.html');
    fs.readFile(uiFilePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
  // Handle REST API routes
  else if (pathname === '/api/data') {
    // Handle API logic here and return JSON response
    const responseData = { message: 'Hello from REST API!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  }
  // Handle 404 for other routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

**Explanation:**

- The code uses the `http`, `fs`, `path`, and `url` modules to create a basic web server in Node.js.
- The server listens for incoming HTTP requests and responds based on the requested URL path.
- When the root URL `/` is accessed, the server reads the HTML file from the `ui` folder and sends it as the UI.
- When the URL `/api/data` is accessed, the server responds with a JSON message, simulating a REST API response.
- For any other routes, the server responds with a "Not Found" message with a status code of 404.

This basic example serves as a starting point for building a more sophisticated server. In a real-world scenario, you'd likely modularize the code, add error handling, implement the actual REST API logic, and enhance security measures. If your application grows, you might consider using Express.js, a popular Node.js framework, to simplify routing and middleware management.