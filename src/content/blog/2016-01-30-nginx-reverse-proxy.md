---
title: "How to self-host a website using NGINX as a Reverse Proxy"
description: "Route traffic from multiple domain names to specific web servers on your local network using NGINX as a reverse proxy."
pubDate: 2016-01-30T12:00:00
slug: "2016/01/how-to-self-host-a-website-using-nginx-as-a-reverse-proxy"
---

This guide can be used to route traffic from multiple domain names to specific web servers on your local network. *I recommend using a dynamic dns service to give your external IP address a friendly URL.*

After getting my site running on `localhost:8080` on my Mac, I then configured NGINX to route web traffic based on the domain name (the reverse proxy). This allows me to run multiple websites using one public IP address on port 80, rather than using 8080 or 8081 (which would be a simple case of port-forwarding).

On my Mac, I used homebrew to install nginx:

```bash
brew install nginx
```

Then, forward all web traffic on your router to the computer running nginx.

![Port Forwarding](/assets/port_forwarding.png)

Finally, drop in the config at `/usr/localhost/etc/nginx/nginx.conf`

*Make sure to change 192.168.X.XX:8080 to the correct IP address and port*

<script src="https://gist.github.com/matthewpick/5513a469d3fa2f17683f.js"></script>

Then, if your reverse proxy is set up properly, NGINX will route the traffic to the corresponding sites anywhere within your local network. Slick!

My use of this reverse proxy was to self-host an instance of Atlassian JIRA, which is a resource-intensive project management suite.

Side notes: While this is a good way to get a website running, I would recommend paying for proper hosting for improved uptime and security. In the future, I might justify paying for robust hosting or simply use Atlassian's $10/month cloud hosting.

**Additional Resources:**

- [jira-vagrant-install](https://github.com/lwndev/jira-vagrant-install) on Github.com
- [DD-WRT](https://www.dd-wrt.com/) - powerful linux-based firmware for routers
- [DNS-O-Matic](https://www.dnsomatic.com) - free Dynamic DNS service
