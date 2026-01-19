---
title: "Creating Static Sites with Astro"
description: "Converting all my static sites to Astro, OpenTofu, and AWS."
pubDate: 2026-01-10T12:00:00
slug: "2026/01/creating-static-sites-with-astro"
---

Over the past few months, I've been converting all my static sites to use [Astro](https://astro.build/) for site 
generation and [OpenTofu](https://opentofu.io/) for infrastructure deployment to AWS.

The biggest site I've converted so far is my dad's dental practice.

I was able to scrape his old WordPress site for content, and then re-create a similar site using Astro components.
It is going to be a lot easier to maintain going forward, not having to deal with WordPress updates, plugins, and security issues.

Claude Code helped with scraping, formatting, and rapid iteration of the Terraform infrastructure-as-code.

This OpenTofu, Astro, and Claude Code combination has been really effective for me to create clean, modern, and lightweight sites.

The costs are minimal, the infrastructure is easy to manage, and the sites are fast when hosted via Cloudfront.
The main cost I incur is the $0.50/month for the Route53 hosted zone. Since these are low-traffic sites,
the remaining S3 and CloudFront costs are negligible.

Now that I have a stack that is dialed-in, I can spin up a new site in under an hour or two.
If you're looking to create simple static sites, I highly recommend checking out Astro and OpenTofu.

Sites I've created so far using this stack:
- [MatthewPick.com](https://matthewpick.com) (This blog! Code can be found [here](https://github.com/matthewpick/matthewpick-website))
- [IowaSleepTMJ.com](https://iowasleeptmj.com)
- [PestoClipboard.com](https://pestoclipboard.com)
- [Formsnare](https://formsnare.com) (marketing site for SaaS product)
