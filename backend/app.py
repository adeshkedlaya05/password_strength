from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:30036"])
  # Allow requests from frontend (React)

@app.route('/')
def home():
    return "Flask API is running."

@app.route('/check-strength', methods=['POST'])
def check_strength():
    data = request.get_json()
    password = data.get('password', '')

    # Basic password strength logic (replace with your own later)
    score = 0
    if len(password) >= 8:
        score += 1
    if any(c.isupper() for c in password):
        score += 1
    if any(c.isdigit() for c in password):
        score += 1
    if any(not c.isalnum() for c in password):
        score += 1

    if score <= 1:
        strength = 'Weak'
    elif score == 2:
        strength = 'Moderate'
    elif score == 3:
        strength = 'Strong'
    else:
        strength = 'Very Strong'

    return jsonify({'strength': strength})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
