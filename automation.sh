#!/usr/bin/bash
echo "Verifying tests..."
npm run test 
if [ $? -eq 0 ]; then 
    echo $?
    echo "All test passed"
    echo "Building production app..."
    npm run build
    exit 
else
    echo $?
    echo "Check your tests passed correctly"
    exit 
fi