# Game Play Hub

You can check it hosted here:  
https://game-play-hub.onrender.com/catalog

*NOTE:*  It will take a few minutes for the website to load when you open it.

| Contents
|---
| [Overview](#overview)
|   - [Project design](#project-design)
| [Description](#description)
|   - [State management](#state-management)
|   - [User or guest page](#user-or-guest-page)
|   - [Error page](#error-page)
| [Getting Started](#getting-started)
| [Backend](#backend)

## Overview
Game Play Hub is a personal project, made with ReactJS. I decided to challenge myself to create a website for various games. Building a full stack project helped me to develop new abilities and to wrap my knowledge from Software University (SoftUni).

### Project design
I designed the website and created the logo entirely by myself, using only HTML and CSS. It's a responsive website, featuring two variations of navigation:
*   Mobile version

![mobile nav img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/mobile-nav.png)

*   Desktop version 

![desktop nav img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/desktop-nav.png)

## Description
Game play hub is a website for various simply games. Here users can play with or without registration.

### State management
I decided to use Redux to handle the current user information because it's more secure. For better user experience, I chose to save the user's access token in local storage. This way, gamers don't need to log in to their profiles every time they visit the website. 

*   Navigation for unlogged users

![unlogged nav img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/desktop-nav.png)

*  Navigation for logged users

![logged nav img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/logged-nav.png)

### User or guest page
The website loads with three forms on this page. First, if the user is already registered, they can log in. If they are not registered, they can proceed to registration. Lastly, if the user prefers not to register, they can play as a guest but are required to provide a username.

![user or guest img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/userOrGuest.png)

### Error page 
I've used the react-toastify library to manage error and success notification, but  in the case of attempting to access a non-existing page, the system should automatically redirect to `/error`.

![error page img](https://github.com/renetaBoneva/Game-play-hub/blob/main/public/readmeImg/error.png)

## Back-End
 I made a custom server for Game Play Hub. You can check the repository here:  
 https://github.com/renetaBoneva/Game-play-hub-Server

 ## Getting started
* Clone the repo from github.
* Open integrated terminal on game-play-hub directory and run `npm install`.
* Run `npm start` to start the project. 
* Navigate to `http://localhost:3000/`.

*NOTE:* This will work with deployed server.
