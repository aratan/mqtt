# libreria para mandar mensajes entre maquinas.

## mqtt.js

npm init -y

node index.js

sudo npm i mqtt -g 

mqtt sub -t 'hola' -h 'test.mosquitto.org' -v

mqtt pub -t 'hola' -h 'test.mosquitto.org' -m 'from Mqtt.js'

## @@ Public MQTT Brokers

### Name	Broker Address	TCP Port	TLS Port	WebSocket Port	Message Retention	Persistent Session	Sign Up Requred	Link

Eclipse	    mqtt.eclipse.org	  1883	N/A	  80,   443	  YES	YES	NO	Link

### Mosquitto	  test.mosquitto.org	1883	8883, 8884	80	  YES	YES	NO	Link

HiveMQ	    broker.hivemq.com	  1883	N/A	  8000	YES	  YES	NO	Link

Flespi	    mqtt.flespi.io	    1883	8883	80,   443	  YES	YES	YES	Link

Dioty	      mqtt.dioty.co	      1883	8883	8080, 8880	YES	YES	YES	Link

Fluux	      mqtt.fluux.io	      1883	8883	N/A	  N/A	  N/A	NO	Link

EMQX	      broker.emqx.io	    1883	8883	8083	YES	  YES	NO	Link

