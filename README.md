# libreria para mandar mensajes entre maquinas.

## mqtt.js

npm init -y
node index.js
sudo npm i mqtt -g 
mqtt sub -t 'hola' -h 'test.mosquitto.org' -v
mqtt pub -t 'hola' -h 'test.mosquitto.org' -m 'from Mqtt.js'
