const MQTT_BROKER = "test.mosquitto.org";
        const MQTT_PORT = 8081;
        const MQTT_TOPIC = "/mqtt/test";

        // Crear un nuevo cliente MQTT
        var client = new Paho.MQTT.Client(MQTT_BROKER, MQTT_PORT, "clientId");

        // Configurar las funciones de callback
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;

        // Conectar al broker
        client.connect({ onSuccess: onConnect });

        // Función de callback cuando la conexión es exitosa
        function onConnect() {
            console.log("Conexión exitosa");
            client.subscribe(MQTT_TOPIC);
        }

        // Función de callback cuando la conexión se pierde
        function onConnectionLost(responseObject) {
            if (responseObject.errorCode !== 0) {
                console.error("Conexión perdida: " + responseObject.errorMessage);
            }
        }

        // Función de callback cuando llega un mensaje
        function onMessageArrived(message) {
            console.log("Mensaje recibido: " + message.payloadString);
        }

        // Función para enviar un mensaje
        function sendMessage() {
            try {
                var message = new Paho.MQTT.Message(document.getElementById('message').value);
                message.destinationName = MQTT_TOPIC;
                client.send(message);
            } catch (error) {
                console.error("Error al enviar el mensaje: " + error.message);
            }
        }
