# Base image
FROM node:lts-alpine

# Make directory
RUN mkdir /pairaphrase-ui
WORKDIR /pairaphrase-ui

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install 

#Copy all files to our /pairaphrase-ui created in our image
COPY . .

# Run application
CMD ["npm", "start"]