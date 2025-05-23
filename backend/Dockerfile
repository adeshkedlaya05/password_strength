FROM python:3.10-slim

WORKDIR /app

# Install pip packages (flask and flask_cors)
RUN pip install --no-cache-dir flask flask_cors

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
