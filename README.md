# **Quizoo - Competitive Programming & Fun Quizzes Platform**

Welcome to **Quizoo**, a platform designed to foster growth and challenge for coding enthusiasts through regular **coding contests**, interactive **quizzes**, and performance tracking. Whether you are a competitive coder or someone who loves fun challenges, Quizoo provides a space for both learning and competition!

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributors](#contributors)
- [License](#license)

---

## **Project Overview**

**Quizoo** is an interactive platform that allows users to participate in **coding contests** and **quizzes**, track their performance, and engage with coding challenges. Users can:

- Participate in **weekly** and **bi-daily contests**.
- Solve **coding problems** from various domains.
- Track their **performance** over time.
- Have fun with **special quizzes** on holidays and occasions.
- Admins can **create contests**, monitor user submissions, and manage the platform’s content.

![image](https://github.com/user-attachments/assets/2427e2b4-0d8a-4f8b-99c3-a611ad8e2491)
---
![image](https://github.com/user-attachments/assets/c803aac9-ae45-4a69-9c11-85ba1e5f1e39)


---

## **Features**

- **User Authentication**: Secure login and registration functionality.
- **Contest Participation**: Users can join coding contests, with time-limited problem solving.
- **Riddle Feature**: Solve a riddle to access coding problem statements.
- **Leaderboards**: Display rankings based on user performance in contests.
- **Performance Tracking**: View past performance statistics.
- **Admin Dashboard**: Admins can create and manage contests and monitor submissions.
- **Special Quizzes**: Fun, special quizzes to celebrate occasions.
- **Mobile-Friendly UI**: Optimized design for both desktop and mobile use.

---

## **Technologies Used**

- **Frontend**:
  - React.js (for building the interactive user interface)
  - React Router (for routing and navigation)
  - Axios (for making HTTP requests to the backend)
  - CSS (for styling the application)
  
- **Backend**:
  - Node.js (server-side JavaScript)
  - Express.js (web framework for Node.js)
  - MongoDB (database for storing user data, contest details, and submissions)
  - JWT (JSON Web Tokens for authentication)

---

## **Usage**

- **Login/Register**: Start by registering or logging into your account.
- **Contests**: Participate in ongoing contests and try to solve problems within the given time limit.
- **Leaderboards**: Check out the leaderboard to see where you stand among other users.
- **Profile**: Track your performance over time, including your contest history and scores.
- **Admin Panel**: Admins can create contests, manage problems, and monitor submissions.

---

## **API Documentation**

### **Authentication**

- **POST /api/auth/login**: Login a user
  - Request: `{ email, password }`
  - Response: `{ token, user }`

- **POST /api/auth/register**: Register a new user
  - Request: `{ email, password }`
  - Response: `{ token, user }`

### **Contests**

- **GET /api/contests**: Get a list of all contests
  - Response: `[{ contestId, name, date, type }]`

- **POST /api/contests**: Create a new contest (Admin only)
  - Request: `{ name, startDate, endDate, type }`
  - Response: `{ contestId, name, startDate, endDate, type }`

### **Leaderboard**

- **GET /api/leaderboard/:contestId**: Get the leaderboard for a specific contest
  - Response: `[{ userId, username, score }]`

---

## **Contributors**

- **Nitin Kumar Singh** – [SedulousN](https://github.com/SedulousN)
- **Aryan Lunawat** – [aryanlunawat555](https://github.com/aryanlunawat555)

If you'd like to contribute to **Quizoo**, feel free to fork the repo, make your changes, and submit a pull request.

---

## **License**

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
