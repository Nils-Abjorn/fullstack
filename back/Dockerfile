FROM node:alpine

WORKDIR /backend
COPY . .
RUN npm install 
ENTRYPOINT ["npm"]
CMD ["run", "start"]
