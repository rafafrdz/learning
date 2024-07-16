# Start with a base image
FROM ubuntu:latest

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y curl

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Set NVM environment variables
ENV NVM_DIR="/root/.nvm"
ENV SH_VERSION="1.38.0"

# Install Node.js using NVM
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && \
    nvm install --lts && \
    nvm alias default 'lts/*' && \
    nvm use default"

# Add NVM and Node.js binaries to the PATH
ENV PATH="${NVM_DIR}/versions/node/$(nvm version)/bin:${PATH}"

# Set the working directory
WORKDIR /app

# Run your application
CMD [ "bash" ]
