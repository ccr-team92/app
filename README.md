# Trilha da Vida App

You've reached the code repository for our app! 
The app is built with Expo, a platform for building multi-platform (yet native) apps using Typescript and React Native.
Typescript gives us some more security in terms of the hidden bugs in dynamic typing, while keeping the development agility of Javascript.
We do not lose much performance, and yet gain much code reliability, from tested native modules abstracted into Typescript APIs.

To navigate through pages, we use the stacked navigation, enabling the developer to easily navigate from one screen to another inside components.
Since we did not have complex interactions, we've focused on functional React components, but it may be reconsidered in further iterations of the app.

To access our API, we use Axios, a HTTP lib which provides us with much more control than native libs.

Given the wonders Expo can do, we have exported our app as a progressive web app, link here: https://trilhadavida.com.br/demo/

## Roadmap

* Finish up integration with backend
* Add a persistent state storage, with Redux
* Integration with [H5P](https://en.wikipedia.org/wiki/H5P), to create and share contents
* Add push notifications, to instigate users to keep up with their learning paths
