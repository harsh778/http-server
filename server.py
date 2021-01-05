import SimpleHTTPServer
import SocketServer

PORT = 6789

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", 6789), Handler)

print "Started Server Successfully.", 6789
httpd.serve_forever()
