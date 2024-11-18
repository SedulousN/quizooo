import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [contests, setContests] = useState([]);
  const [users, setUsers] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  // Fetch contests, users, and submissions on component mount
  useEffect(() => {
    fetchContests();
    fetchUsers();
    fetchSubmissions();
  }, []);

  // Fetch all contests
  const fetchContests = async () => {
    try {
      const response = await axios.get('/api/contests');
      setContests(response.data);
    } catch (error) {
      console.error("Error fetching contests:", error);
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch all submissions
  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('/api/submissions');
      setSubmissions(response.data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  // Delete a contest
  const deleteContest = async (contestId) => {
    try {
      await axios.delete(`/api/contests/${contestId}`);
      fetchContests(); // Refresh contests list
    } catch (error) {
      console.error("Error deleting contest:", error);
    }
  };

  // Render list of contests
  const renderContests = () => {
    return contests.map((contest) => (
      <div key={contest._id} className="contest-item">
        <h3>{contest.name}</h3>
        <button onClick={() => deleteContest(contest._id)}>Delete Contest</button>
      </div>
    ));
  };

  // Render list of users
  const renderUsers = () => {
    return users.map((user) => (
      <div key={user._id} className="user-item">
        <h3>{user.email}</h3>
        <p>{user.role}</p>
      </div>
    ));
  };

  // Render list of submissions
  const renderSubmissions = () => {
    return submissions.map((submission) => (
      <div key={submission._id} className="submission-item">
        <p>{submission.user.email} submitted problem {submission.problem.name} with status {submission.status}</p>
      </div>
    ));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <section className="contests">
        <h2>Manage Contests</h2>
        {renderContests()}
        {/* You can add a form or button to add new contests here */}
      </section>

      <section className="users">
        <h2>Manage Users</h2>
        {renderUsers()}
        {/* You can add functionality to manage users here */}
      </section>

      <section className="submissions">
        <h2>Review Submissions</h2>
        {renderSubmissions()}
        {/* You can add functionality to approve/reject submissions */}
      </section>
    </div>
  );
};

export default AdminDashboard;
