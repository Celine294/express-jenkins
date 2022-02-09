FROM node:16

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm ci

EXPOSE 3210
CMD [ "npm", "run", "start" ]
