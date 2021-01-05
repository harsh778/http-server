var socket = new Socket();
socket.bind("127.0.0.1", 6789);
socket.listen(1); //listen at 1
var conn = socket.accept(); //acCepT connection lol
stdin.read(); //exit
