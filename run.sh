#!/bin/bash
source ../env.sh
docker compose down mxui
source ./build.sh
docker compose up -d mxui