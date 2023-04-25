# GreenieWebPowerConsumptionApp
Power Consumption Measurement Application Technical Documentation
Overview
The Power Consumption Measurement Application provides a technique to measure the specific power consumption of applications on a computer, allowing developers to optimize their applications for lower power consumption. The power consumption measurement application has a client-server architecture, where the client is built with React, and the APIs is built with Node.js. The front-end client communicates with the back-end server through a RESTful API. The back-end server is responsible for measuring the power consumption of different processes running on the computer and serving that data to the front-end client via the API. The front-end client then displays the power consumption data to the user in a modern and user-friendly interface. This document provides an overview of the program architecture, how to set it up, how to use it, and how to test it.
Setup
1.	Clone the program repository to the local machine. 
(GitHub - https://github.com/Madhuja93/GreenieWebPowerConsumptionApp.git ).
2.	Install Node.js (version X or later).
3.	Install the necessary dependencies for the client and server. Navigate to the project directory and run npm install to install all necessary dependencies.
4.	Start the back-end server and front-end client by running npm start in the client and server directories. This will start the client and server on specified ports, which is configured in the server's configuration files.
5.	Open a web browser and navigate to the client's URL (http://localhost:3000). This will load the power consumption measurement application in the browser.
Usage
1.	Open the program in a web browser by navigating to the client's URL (http://localhost:3000).
2.	After the measurement process is complete, the headers of power consumption data for all processes will be displayed on the screen. 
3.	To view detailed information about a specific process, user can click on the header of the process name in the list. It will display a notification message sowing additional information about the process, including its memory usage, CPU usage, and other metrics.
Architecture
The Power Consumption Measurement Application is built using a Node.js server and a React front-end.
The server uses the following libraries.
	Express.js - A web application framework for Node.js that handles HTTP requests and responses.
	Child Process - A module in Node.js that allows the program to execute external commands and scripts.
The front-end is built using React, a JavaScript library for building user interfaces using following libraries.
	Axios - A library for making HTTP requests to the server.
	React-notifications-component - To display details of a specific application.
API Endpoints
The power consumption measurement program can be tested using Postman as follows.
1.	Open Postman and create a new request to the server's API endpoint (http://localhost:5000/allprocesses).
GET / allprocesses’ - Measure the power consumption of all applications.

Send the request to the server and observe the response. The response contain data about the power consumption of all processes running on the computer.
Response - The power consumption of the all the running applications as 
JSON response. 
2.	Create a new request to the server's API endpoint for a specific process (http://localhost:5000/specificprocess). Include the appname of the process as a parameter in the request body.

‘POST / specificprocesses’ - Measure the power consumption of specific application.
Request Body
‘appName’ - The name of the application to measure power consumption for.
Send the request to the server and observe the response containing detailed information about the specified process, including its memory usage, CPU usage, and other metrics.
Response - The power consumption of specific application as JSON response. 
