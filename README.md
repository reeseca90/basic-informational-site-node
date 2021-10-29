# basic-informational-site-node

The first server code written in Node.js following The Odin Project.

Running the server pre-loads the four HTML files using Promise.all() then starts the server at localhost:8080. Initial loading will display index.html, and clicking each link will open the associated page. Entering a path that does not exist on the server will result in a 404 page and status code.

The logic to serve the correct web page is in a hard coded switch statement, since that was the easiest way at this scale to accomplish the routing.
