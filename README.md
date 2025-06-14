# Password Strength Checker

A simple web application to check the strength of a password using React for the frontend, Flask for the backend API, containerized with Docker, served via Nginx, and deployed using Kubernetes.

---

## Tech Stack

- **React** — Frontend user interface
- **Flask** — Backend REST API
- **Docker** — Containerization for consistent deployment
- **Nginx** — Reverse proxy and static content server
- **Kubernetes** — Orchestration and deployment of containers

---

## Features

- Real-time password strength evaluation on user input
- Backend API calculates password strength with simple scoring rules
- Fully containerized with Docker and deployed on Kubernetes
- Frontend communicates with backend service internally using Kubernetes service discovery
- CORS enabled to allow cross-origin requests from frontend to backend

---

## API Endpoints

### 1. GET `/`
Returns a simple message confirming that the Flask API is running. Useful as a health check endpoint.

---

### 2. POST `/check-strength`
Accepts a password in the request body and evaluates its strength based on basic criteria:
- Minimum length
- Presence of uppercase letters
- Presence of digits
- Presence of special characters

Returns the evaluated password strength as one of: `"Weak"`, `"Moderate"`, `"Strong"`, or `"Very Strong"`.

---

## Project Structure/deployment diagram
![image](https://github.com/user-attachments/assets/056cee11-8adc-49f6-8dde-b7de9671a03e)



## Output
![Screenshot 2025-05-23 151945](https://github.com/user-attachments/assets/b5be1bbb-9c92-4d17-a096-f96e7bd1831b)

![Screenshot 2025-05-23 152006](https://github.com/user-attachments/assets/b2f7396a-3394-4f14-a915-e3d41a00ac69)


## Clone and Run the Application

```bash
https://github.com/adeshkedlaya05/password_strength.git
```




