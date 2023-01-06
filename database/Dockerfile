FROM mongo:latest

COPY ./seed/initial-seed.js /docker-entrypoint-initdb.d

EXPOSE 27017
VOLUME [ "data:/data/db" ]

ARG MONGO_INITDB_DATABASE

ENV MONGO_INITDB_DATABASE=$MONGO_INITDB_DATABASE