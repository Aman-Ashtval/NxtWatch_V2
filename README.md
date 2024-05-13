# NxtWatch (online video playing app)

This is an online video playing app where an user can search the videos and can navigate different type of videos like trending videos, saved videos, and can toggle the app theme(dark/light).

## Screen Shorts

- Login views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608729/login_desktop_mi1iyk.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608730/login_sm_pshu9k.png)

- Home views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608735/home_desktop_light_hgyi8y.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608735/home_desktop_dark_ykxigx.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608731/home_extra-sm_light_pwxpsa.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608731/home_extra-sm_dark_ejdgbe.png)

- Trending views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608738/trending_lg_light_iozqte.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608735/trending_lg_dark_abum99.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608737/trending_sm_light_hh7ech.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608736/trending_sm_dark_hlbs2v.png)

- Gaming views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608730/gaming_desktop_light_ebqylq.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608729/gaming_desktop_dark_xvjk1p.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608729/gaming_sm_light_qkdvnf.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608728/gaming_sm_dark_ocfcc9.png)

- SavedVideos views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608736/saved_videos_desktop_light_p8d0rq.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608736/saved_videos_desktop_dark_udz8us.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608736/saved_videos_sm_light_wgwdta.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608734/saved_videos_sm_dark_wd77ma.png)

- VideoDetails views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608739/video_detail_desktop_light_stzxof.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608739/video_detail_desktop_dark_ej3maq.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608739/video_detail_sm_light_o4c1f8.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608739/video_detail_sm_dark_wzgcnr.png)

- Small device menu view

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608731/menu_mobile_dark_u8rge3.png)

- Logout views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608733/logout_desktop_izzinj.png) ![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1715608732/logout_sm_doxskz.png)

## Components Structure

- LoginRoute -> It is a class component render input fields to take user password and name if the user information is correct then it will store jwt token and navigate user to Home otherwise if there is any error with user details, etc. then it display error message to user, etc.

- App.js -> It is the main Component of our Application. In which I have implementing Rect Routing with the help of rect-router-dom library. It is a class component that uses state to hold the data to update the context of our application.

- HomeRoute.js -> HomeRoute component contains other components like Header, LeftBar, VideoItem, ets. all the videos will be displayed in home component and user can search different videos using search bar and also can Toggle app theme light/dark, and can navigate different routes using LeftBar menu, etc.

- Header.js -> It holds menu list and app them toggle logic. user can toggle app theme dark/light inside Header, etc.

- LeftBar.js -> It will show only medium and above devices. user can navigate between different routs Like Home, Trending, SavedVideos, Gaming.

- Trending.js -> It contains Header, LeftBar and VideoItem components and display trending video List.

- TrendingItem.js -> Trending Item render the video card for the Trending videoList by clicking on this video card user will navigate VideoItemDetails Route and can play the video.

- Gaming.js -> It contains Header, LeftBar and VideoItem components and display gaming video List.

- SavedVideos.js -> In this app user can saved a video while watching and can see saved videos inside SavedVideos Component that typically contains Header, LeftBar and VideosList, etc.

- NoteFound.js -> This component hold a massage that should be display to user whenever he will try to access invalid path.

- VideoItem.js -> It accept video details as prop and render video cards into the videoList. By clicking on this video card user will navigate to VideoItemDetails Route where he can play the video.

- VideoItemDetails.js -> It show the full information of the video where a user can like, dislike and save the video, and also can play the video, etc.

- ProtectedRoute -> ProtectedRoute controls the logic of rendering specific route. It ensure if the user is Authenticated and try to access Login page then automatically It will navigate to Home Route and voice versa.

- AppContext.js -> In this Component I have Implementing ReactContext API. It share global properties to all the components like savedVideosList, lightTheme, changeAppTheme, savedVideo.

## About

Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending,Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark)

## Demo

click on this link to watch the demo -> https://nxtwatchaman.ccbp.tech

## Technologies Used

- React
- React Popups
- React Icons
- Rect Class Component
- React Context API
- React Router API
- React Loader Spinner
- ReactJs Cookie
- jwt Token
- Authentication and Authorization
- Rest API
- Styled Component
- History props, etc.

## Installation

install all the dependencies using 'npm install' run the application using 'npm start'
