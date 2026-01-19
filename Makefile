.PHONY: build dev clean init plan apply deploy sync invalidate destroy

# Development
dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf dist node_modules

# Infrastructure
init:
	cd infra && tofu init -backend-config=backend.tfvars

plan:
	cd infra && tofu plan

apply:
	cd infra && tofu apply -auto-approve

destroy:
	cd infra && tofu destroy

# Deployment
sync: build
	@BUCKET=$$(cd infra && tofu output -raw s3_bucket_name) && \
	aws s3 sync dist/ s3://$$BUCKET --delete --profile personal

invalidate:
	@DIST_ID=$$(cd infra && tofu output -raw cloudfront_distribution_id) && \
	AWS_PAGER="" aws cloudfront create-invalidation --distribution-id $$DIST_ID --paths "/*" --profile personal

deploy: sync invalidate
	@echo "Deployment complete!"
	@cd infra && tofu output -raw website_url

# Full setup (first time)
setup: init apply deploy

# Show outputs
outputs:
	cd infra && tofu output
