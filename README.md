Live site [HERE](https://tender-tesla-3a8ec9.netlify.com/).

This is the client facing version of a basic chat app. It uses websockets to communicate to different clients connected to a Heroku hosted node server. There are some issues running this app on mobile but it is able to communicate between two separate windows on a computer. Open multiple windows to talk to yourself!

To run locally, clone, install packages and run `npm run start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Current Issues: 
Chat does not work on separate devices, suspect that it has something to do with socket.io path option. 
