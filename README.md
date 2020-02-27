Welcome to the "Click the Button" game!

## Before use
In order to use this application, you must 

1. Install NodeJS on your computer (Download link: https://nodejs.org/en/download/)

2. Navigate to frontend folder in command prompt

3. Run command `npm install` to install all the necessary dependencies

4. Run command `npm start` to start the frontend, it will automatically open it in default browser

### NOTE
When clicking the 'Click me' button for the first time, if using heroku backend (it's on by default),
it will take some time to start the heroku client.

## Running in local host
If you want to run the software locally, you have to follow these steps:

1. Install Java development kit (Download link: https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)

2. Set Java path variable (example: Variable name: `JAVA_HOME` | Variable value: `C:\Program Files\Java\jdk1.8.0_231\` )

2. Install Maven (Install instruction: https://maven.apache.org/install.html)

3. Uncomment Local backend URL path in frontend/src/App.js and comment out Heroku backend URL:
    `// const URL = 'https://tranquil-depths-95164.herokuapp.com/'`
    `const URL = 'http://localhost:8080'`

4. Navigate to backend folder and run commands `mvn compile` and `mvn spring-boot:run`

After that the react frontend will connect to the local host.