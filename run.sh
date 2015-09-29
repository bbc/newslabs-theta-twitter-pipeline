#!/bin/sh

echo "Starting NPM server..."
npm start &
echo "Server started. Go to http://localhost:3000"

echo "Monitoring folder..."
python monitor_additions.py ./public/images/output

echo "Go."
