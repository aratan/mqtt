# Libreria para mandar mensajes entre maquinas.

## Uno es por MQTT y el otro por websocket

### pruebas
sudo npm i mqtt -g 
mqtt sub -t 'hola' -h 'test.mosquitto.org' -v
mqtt pub -t 'hola' -h 'test.mosquitto.org' -m 'from Mqtt.js'


instalacion npm i 

los codigos no precisan de node ya que tienen CDN
