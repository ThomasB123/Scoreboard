# Scoreboard

This is my project for a scoreboard for my local hockey club.
There are two client HTML pages with javascript controlling them and their content.
One of these is a controls page which will be run in a browser on a laptop.
The other is a display page which will be displayed on the big screen.
These two pages communicate via a server written in javascript using GET/POST fetch requests.
The server is run using node.

## How to run

To run this scoreboard, first download this folder and uncompress it, then open a terminal and
``` bash
cd
```
into this folder.
Run
``` bash
npm install
```
to install all of the necessary dependencies, then run
``` bash
npm start
```
to start the server. Then go to a browser and type in your device's IP address plus ':8080' (because the server runs on port 8080).
This will give you the controls page, to view the display page, open a new tab on any device on the same network and type the same address except with '/board.html' at the end.
