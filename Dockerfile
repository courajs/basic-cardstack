FROM cardstack/hub
WORKDIR /hub/app
COPY package.json yarn.lock /hub/app/
RUN yarn install --frozen-lockfile
COPY . /hub/app/
