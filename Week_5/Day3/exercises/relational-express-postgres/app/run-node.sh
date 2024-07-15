#!/bin/sh

export POSTGRES_DB="172.17.0.2"
export POSTGRES_PASSWORD="mysecretpassword"

npm run start
