
# Simple Feedback Management System

## Project Setup

### Submitted by Krishna Jaiswal

## Setup
- Clone the repository
- https://github.com/Krishna-jaiswal-24/feedback-management-system.git
### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Run `npx ts-node src/index.ts` to start the server.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React application.

## Project Structure

### Backend

- `src/index.ts`: Main server file.

### Frontend

- `src/components/FeedbackForm.tsx`: Form component for submitting feedback.
- `src/components/FeedbackList.tsx`: Component for displaying feedback entries.
- `src/App.tsx`: Main App component combining form and list.

## Additional Notes

- Ensure the backend server is running before starting the frontend.
- API endpoints:
    - `GET /feedback`: Retrieve all feedback entries.
    - `POST /feedback`: Submit new feedback.