variable "aws_region" {
  description = "AWS region for S3 bucket"
  type        = string
  default     = "us-west-2"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "matthewpick"
}

variable "domain_name" {
  description = "Custom domain name"
  type        = string
  default     = "matthewpick.com"
}
