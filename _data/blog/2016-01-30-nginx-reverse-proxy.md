---
template: BlogPost
path: /2016/01/how-to-self-host-a-website-using-nginx-as-a-reverse-proxy/
date: 2016-01-30T10:00:00.001Z
title: How to self-host a website using NGINX as a Reverse Proxy
thumbnail: /assets/image-5.jpg
---
This guide can be used to route traffic from multiple domain names to specific web servers on your local network. <em>I recommend using a dynamic dns service to give your external IP address a friendly URL.</em>

After getting my site running on <code>localhost:8080</code> on my Mac, I then configured NGINX to route web traffic based on the domain name (the reverse proxy). This allows me to run multiple websites using one public IP address on port 80, rather than using 8080 or 8081 (which would be a simple case of port-forwarding).

On my Mac, I used homebrew to install nginx:

<code>brew install nginx</code>

Then, forward all web traffic on your router to the computer running nginx.

<img src="https://629a27e4-a51c-11e8-b072-36d63035d715.app.getshifter.io:45300/wp-content/uploads/2016/01/port_forwarding.png" alt="port_forwarding" />

Finally, drop in the config at <code>/usr/localhost/etc/nginx/nginx.conf</code>
* <em>Make sure to change 192.168.X.XX:8080 to the correct IP address and port</em>

<script src="https://gist.github.com/matthewpick/5513a469d3fa2f17683f.js"></script>

Then, if your reverse proxy is set up properly, NGINX will route the traffic to the corresponding sites anywhere within your local network. Slick!

My use of this reverse proxy was to self-host an instance of Atlassian JIRA, which is a resource-intensive project management suite.

Side notes: While this is a good way to get a website running, I would recommend paying for proper hosting for improved uptime and security. In the future, I might justify paying for robust hosting or simply use Atlassian's $10/month cloud hosting.

Additional Resources:
- <a href="https://github.com/lwndev/jira-vagrant-install">jira-vagrant-install</a> on Github.com
- <a href="http://www.dd-wrt.com/">DD-WRT</a> - powerful linux-based firmware for routers
- <a href="www.dnsomatic.com">DNS-O-Matic</a> - free Dynamic DNS service
