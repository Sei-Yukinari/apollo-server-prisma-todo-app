.PHONY: setup build up down ps logs exec test

setup:
	@make up
	@make ps
down:
	docker compose down
build:
	docker compose build
up:
	docker compose up -d
ps:
	docker compose ps
logs:
	docker compose logs -f postgres
exec:
	docker compose exec postgres bash
