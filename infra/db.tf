resource "aws_db_instance" "mydb" {
  allocated_storage       = 20
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "16.2"
  instance_class          = "db.t3.micro"
  username                = var.db_username
  password                = var.db_password
  parameter_group_name    = "default.postgres16"
  publicly_accessible     = true
  backup_retention_period = 7
  vpc_security_group_ids  = [aws_security_group.mydb_sg.id]
  deletion_protection     = false
  skip_final_snapshot     = true
  tags = {
    Name = "postgresRDS"
  }
}


resource "aws_security_group" "mydb_sg" {
  name        = "rdsg"
  description = "Allow Access"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


output "db_instance_endpoint" {
  value = aws_db_instance.mydb.endpoint
}

output "db_instance_id" {
  value = aws_db_instance.mydb.id
}
