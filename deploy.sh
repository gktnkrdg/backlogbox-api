cd ~/backlogbox/backlogbox-api/

echo "Pulling from Master" 

git pull origin master

echo "Pulled successfully from master"

echo "Restarting server..."

pm2 restart all

echo "Server restarted Successfully"