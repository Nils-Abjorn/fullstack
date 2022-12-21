FROM node:alpine

WORKDIR /frontend
COPY . .
RUN npm install
ENTRYPOINT ["npm"]
CMD ["run", "serve"]
