
dev-shell:
	docker-compose run --rm --service-ports dev /bin/bash

db-shell:
	psql --host localhost --user user leket

clean:
	docker-compose down

