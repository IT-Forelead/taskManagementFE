#!/bin/bash
# Run the app development server
echo '--------------------------------------------------------------------'
echo 'Removing Frontend image...'
echo '--------------------------------------------------------------------'
docker stop task-management-ui
docker rmi -f task-management-ui:latest
echo '===================================================================='
echo 'Building Frontend image...'
echo '--------------------------------------------------------------------'
docker build -t task-management-ui .
echo '--------------------------------------------------------------------'