console.log('Funciona');

var client = mqtt.connect("ws://test.mosquitto.org:8080/mqtt");
//Si lo usas en hosting para usar encriptado https

var client = mqtt.connect("wss://test.mosquitto.org:8081/mqtts")
function EventoConectar() {
  console.log("Conectado a MQTT");
  //lectura
  client.subscribe("shellypro3em-08f9e0eb4dd0/status/em:0", function (err) {
    if (!err) {
    //envio
      client.publish("ALSW/Temperatura", "1976");
    }
  });
}

function EventoMensaje(topic, message) {
  if (topic == "ALSW/temp") {
    console.log("La Temperatura es " + message.toString());
  }
  console.log(topic + " - " + message.toString());
  document.getElementById("app").innerHTML=message.toString()
  // client.end() 
}

client.on("connect", EventoConectar);
client.on("message", EventoMensaje);

console.log("Empezando a conectar");