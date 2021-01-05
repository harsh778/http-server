var socket = new Socket();
socket.bind("127.0.0.1", 6789);
socket.listen(1); //listen at 1
var conn = socket.accept(); //acCepT connection lol
stdin.read(); //exit

conn.send("Setup Active! gg mate \n");
var reply = client.recv(6789);
client.send(reply); //send before closing
conn.close();

get_stuff() {
    var client = connect("127.0.0.1", 6789);
    client.send("Fetch IP\n");
    var line = client.recv(6789);
    assert(line == "Received\n");
}
