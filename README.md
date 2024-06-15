<h1 align="center">
    Student Management System
</h1>

<h3 align="center">
Simplify administration and classroom organization and create accounts of schools, Assignments, students and professors. <br>
With ease, the efficiency of the attendees can be monitored, evaluated, and even commendation can be offered. <br>
Make record accesses easy, check marks without hassle, and communicate in a stress-free manner.
</h3>
<br><br>

# About

The school management system is a browser-based application developed using technology like MongoDB, Express.
js, React. Js, Node. Js. It is to be used to simplify school administration, proper management of Assignments, as well as efficient communication between students, teachers, and other authorities at school.

## Features

- **User Roles:** Based on the features described above, the system provides three primary user roles: Admin, Teacher, and Student. Both roles have their distinctive functionalities and make decisions regarding the access level.

- **Admin Dashboard:** It is used to add new students and teachers, creating Assignments & subjects, user account management, and configuration of system settings.

- **Attendance Tracking:** Taking of attendance becomes easier for teachers by FSM as it has a special feature of marking students as present in class, or absent among many others.

- **Performance Assessment:** A teacher can remunerate the work of the student by affording them marks and comments on their work. Pupil performance is not only recorded in this method but also they can impress their performance over a particular period.

- **Data Visualization:** For instance , students obtain their performance data through charts and tables which enable them comprehend their performance on one hand.

- **Communication:** Within the system, there is ease of communication between the users. Communication: teachers will be able to send messages to students as well as students with teachers showing how communication can be fostered among them.

## Technologies Used

- Frontend: React.js, Material UI, Redux
- Backend: Node.js, Express.js(package)
- Database: MongoDB

<br>

# Installation

```sh
git clone "git link"
```
Setting Up Backend 
```sh
cd backend
npm install
npm start
```

Create a file called .env in the backend folder.
Inside it write this :

```sh
MONGO_URL = mongodb+srv://admin:Admin123@cluster0.ora7qjg.mongodb.net/
```
If you are using MongoDB Compass you can use this database link but if you are using MongoDB Atlas then instead of this link write your own database link.

Setting Up Frontend
```sh
cd frontend
npm install
npm start
```
Now, navigate to `localhost:3000` in your browser. 
The Backend API will be running at `localhost:5000`.
<br>
# Error Solution

You might encounter an error while signing up, either a network error or a loading error that goes on indefinitely.

To resolve it:

1. Navigate to the `frontend > .env` file.

2. Uncomment the first line. After that, terminate the frontend terminal. Open a new terminal and execute the following commands:
```sh
cd frontend
npm start
```

After completing these steps, try signing up again. If the issue persists, follow these additional steps to resolve it:

1. Navigate to the `frontend > src > redux > userRelated > userHandle.js` file.

2. Add the following line after the import statements:

```javascript
const REACT_APP_BASE_URL = "http://localhost:5000";
```

3. Replace all instances of `REACT_APP_BASE_URL` with `REACT_APP_BASE_URL`.

**IMPORTANT:** Repeat the same process for all other files with "Handle" in their names.

For example, in the `redux` folder, there are other folders like `userRelated`. In the `teacherRelated` folder, you'll find a file named `teacherHandle`. Similarly, other folders contain files with "Handle" in their names. Make sure to update these files as well.

The issue arises because the `.env` file in the frontend may not work for all users, while it works for me.

