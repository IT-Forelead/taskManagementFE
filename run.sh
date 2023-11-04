#!/bin/bash
source ../env.sh
docker compose down
source ./build.sh
docker compose up -d