<h1 align="center" id="title">Streaming Application</h1>

<p align="center"><img src="https://socialify.git.ci/Rashmi-Wijesekara/streaming-application/image?forks=1&amp;language=1&amp;logo=https%3A%2F%2Fraw.githubusercontent.com%2FRashmi-Wijesekara%2Fstreaming-application%2Fmain%2Fclient%2Fsrc%2Fassets%2Fstreamers-logo.png&amp;name=1&amp;owner=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

- This is a simple React Redux application to practice CRUD operations in React and using Redux as the state management library. 
- The [Modern React with Redux](https://www.udemy.com/course/react-redux/) course by [Stephen Grider](https://github.com/StephenGrider) was followed to develop this application.
- You can make live streams in this application by using OBS Studio software.
- The installation steps are mentioned below.
<br>

<p align="center">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="shields">
<img src="https://img.shields.io/badge/semantic%20ui-35BDB2?style=for-the-badge&amp;logo=semanticuireact&amp;logoColor=white" alt="shields">
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</p>

<p align="center"><img src="http://ForTheBadge.com/images/badges/built-with-love.svg"></p>

![](https://github.com/Rashmi-Wijesekara/streaming-application/blob/main/images/2.png)

![](https://github.com/Rashmi-Wijesekara/streaming-application/blob/main/images/1.png)
<p align="center">Screenshots of the application</p>

<!-- <h2>🚀 Demo</h2>

[demo-url](demo-url) -->

<br>
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*	Login using Google Identity API
*	Handling CRUD Operations
	- Create a stream
	- Show a stream
	- Edit stream's details
	- Delete a stream
*	Watching live streams which are streaming from the OBS Studio software

<br>
<h2>How does the streaming work?</h2>

![](https://github.com/Rashmi-Wijesekara/streaming-application/blob/main/images/streaming.png)

<br>
<h2>🛠️ Installation Steps:</h2>

1. Run the following command inside the /client, /api, and /rtmp-server directories</p>

```
npm install
```

2. Then run the following command inside all the given 3 directories to start the API server, client, and rtmp-server.
```
npm start
```

3. Install the OBS Studio software
[https://obsproject.com/download](https://obsproject.com/download)

4. Go to the localhost:3000 URL where the React app is running and login to the application by using a google account. Then create a stream by entering relavent details.

5. After creating a stream, the page will be redirected to the streaming list. In there, click on the stream that you just created.

6. Then you will be redirected to a URL like this, `http://localhost:3000/streams/2` where `2` is the stream ID that you just created.

7. In OBS, go to Settings -> Stream,
```
Stream Type: Custom Streaming Server
URL: rtmp://localhost/live
Streaming key: Stream ID
```
The stream ID would be the ID of the stream that you just created. In my case, it's `2`.

8.After changing the settings, Click on `Start Streaming` in OBS and you will see the live stream of yours in the web application as well.

<br> 
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React JS
* React Router
*   Redux
*   Semantic UI
*   React OAuth2 | Google
*   Redux form
* RTMP Node Media server
* flv.js
