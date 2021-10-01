FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY package-lock.json

RUN npm install --production=false

# Bundle app source
COPY . .

RUN npm build

EXPOSE 3000
CMD [ "node", "server.js" ]
