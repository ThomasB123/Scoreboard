# Scoreboard

This is my project for a scoreboard for my local hockey club.
There are two client HTML pages with javascript controlling them and their content.
One of these is a controls page which will be run in a browser on a laptop.
The other is a display page which will be displayed on the big screen.
These two pages communicate via a server written in javascript using GET/POST fetch requests.
The server is run using node.

## How to run

1.) Download this folder and uncompress it

2.) Open a terminal and navigate to the folder

3.) ``` npm install ``` to install all the necessary dependencies

4.) ``` npm start ``` to start the server

5.) Go to a browser and enter your device's IP address plus ':8080' (e.g. '192.168.1.x:8080')

6.) This will give you the controls page

7.) To view the display page, simply add '/board.html' to the address shown above (e.g. '192.168.1.x:8080/board.html')

8.) That's it!
