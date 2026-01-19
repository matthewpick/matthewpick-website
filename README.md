# matthewpick.com

Personal website built with Astro 5 and Tailwind CSS.

## Development

```bash
npm install
make dev
```

## Deployment

Deploys to AWS (S3 + CloudFront) via OpenTofu.

```bash
# First time setup
make setup

# Deploy changes
make deploy
```

## Infrastructure

- S3 bucket for static hosting
- CloudFront CDN with HTTPS
- Route53 DNS
- ACM certificate
