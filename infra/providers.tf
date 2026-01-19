terraform {
  required_version = ">= 1.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    key     = "matthewpick-website/terraform.tfstate"
    region  = "us-east-1"
    profile = "personal"
    encrypt = true
  }
}

provider "aws" {
  profile = "personal"
  region  = var.aws_region
}

provider "aws" {
  alias   = "us_east_1"
  profile = "personal"
  region  = "us-east-1"
}
