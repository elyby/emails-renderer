FROM node:12.4.0-alpine AS build

RUN mkdir -p /build
WORKDIR /build

# Dependencies to build node-canvas
RUN apk add --no-cache build-base g++ python cairo-dev jpeg-dev pango-dev giflib-dev

COPY scripts /build/scripts
COPY webpack-utils /build/webpack-utils
COPY package.json /build/
COPY yarn.lock /build/

RUN yarn install

COPY . /build

RUN yarn build:quiet \
 && rm dist/*.html \
 && rm dist/stats.json

RUN yarn install --prod \
 && rm node_modules/.yarn-integrity


FROM node:12.4.0-alpine AS app

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000

COPY --from=build /build/node_modules /usr/src/app/node_modules
COPY --from=build /build/dist /usr/src/app/

CMD ["node", "/usr/src/app/app.js"]
