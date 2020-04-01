FROM node:lts
WORKDIR /app

RUN npm install -g @vue/cli

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD ["tail", "-f", "/dev/null"]
#CMD ["npm", "run", "serve"]
