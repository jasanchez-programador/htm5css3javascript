#!/usr/bin/env python2

# python -m SimpleHTTPServer 8000

from SimpleHTTPServer import SimpleHTTPRequestHandler
import BaseHTTPServer

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
	self.send_header('Access-Control-Allow-Origin', '*')
	self.send_header('Allow', 'GET, ,POST, OPTIONS')
        SimpleHTTPRequestHandler.end_headers(self)

    def do_POST(self):
        self.send_response(200)
	self.send_header('Allow', 'GET, ,POST, OPTIONS')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'X-Request, X-Requested-With')

if __name__ == '__main__':
    BaseHTTPServer.test(CORSRequestHandler, BaseHTTPServer.HTTPServer)
