
resource "aws_lightsail_container_service" "auth_with_session" {
  name  = "auth-with-session"
  power = "nano"
  scale = 1
  tags = {
    version = "1.0.0"
  }

}

resource "aws_lightsail_container_service_deployment_version" "session_auth_deployment" {
  container {
    container_name = "auth-with-session"
    image          = "soberbosso/session-auth:latest"
    ports = {
      3001 = "HTTP"
    }

    # environment = {}
  }

  public_endpoint {
    container_name = "auth-with-session"
    container_port = 3001

    health_check {
      healthy_threshold   = 2
      unhealthy_threshold = 2
      timeout_seconds     = 2
      interval_seconds    = 5
      path                = "/"
      success_codes       = "200-499"
    }
  }
  service_name = aws_lightsail_container_service.auth_with_session.name
}


