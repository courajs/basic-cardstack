FROM cardstack/hub
WORKDIR /hub/app
COPY package.json yarn.lock /hub/app/
RUN yarn install --frozen-lockfile
COPY . /hub/app/
ENV ELASTICSEARCH http://elasticsearch:9200
CMD node /hub/app/node_modules/@cardstack/hub/bin/server.js /hub/app/cardstack/seeds/development -d
