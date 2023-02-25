docker build -t predico-client .
docker run -d --name predico -p 7000:80 predico-client
