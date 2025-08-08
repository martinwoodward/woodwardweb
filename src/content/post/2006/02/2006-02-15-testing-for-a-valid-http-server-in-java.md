---
title: "Testing for a Valid HTTP Server in Java"
date: 2006-02-15T14:56:45.000Z
# post thumb
images:
  - "/images/post/2006-testing-for-a-valid-http-server-in-java.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn to check if an HTTP server is listening on a specific port using Java in this practical diagnostics tool guide."
# Taxonomies
categories: ["technology", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I’m currently writing a diagnostics tool to perform all the same connectivity diagnostic checks that I do manually when I am having trouble connecting to something. The following code snippet is how I am checking to see if a web or proxy server is listening on a particular port. I thought I’d post a similar example here in case it was useful to you.
public String pingHttp(String host, int port) throws Exception
{
PrintWriter output;
InputStream input;
StringBuffer response = new StringBuffer();
try
{
Socket httpSocket = new Socket(host, port);
// Timeout after 5 seconds of trying to talk over socket.
httpSocket.setSoTimeout(5000);
output = new PrintWriter(httpSocket.getOutputStream(), false);
input = httpSocket.getInputStream();
output.print("OPTIONS \* HTTP/1.1\nHost: " + host + "\nUser-Agent: Woodwardweb.com Diagnostics\r\n\r\n");
output.flush();

            // Read maximum of 1k of data as we don't really care what this says.
            byte[] b = new byte[1024];
            int n = input.read(b);
            response.append(new String(b, 0, n));
            output.close();
            input.close();
            httpSocket.close();

        }
        catch (UnknownHostException e)
        {
            throw new Exception("Could not resolve the host \"" + host + "\"",e);
        }
        catch (SocketTimeoutException e)
        {
            throw new Exception("The host \"" + host + "\" did not respond in a timely manner");
        }
        catch (IOException e)
        {
            throw new Exception("Could not connect to port " + port +" on \"" + host + "\"",e);
        }
        return response.toString();
    }

Note that the [OPTIONS](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.2) http method is very useful as a ping or noop type call on a web server. Some web server administrators (such as Google) deny the OPTIONS request as it isn’t something that you’ll see a browser doing and they want to minimise their attack surface for the naughty folks out there in internet land. Even if they do, you will still get some http response back (i.e. a String beginning with “HTTP”) which you can test for to tell if a web server exists on that port.
