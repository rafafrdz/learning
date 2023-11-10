# Start with a base image
FROM alpine:latest
RUN apk update && apk add bash curl nodejs npm
RUN npm install -g pnpm
RUN apk del npm

# Set the working directory
WORKDIR /app

ENTRYPOINT [ "bash" ]