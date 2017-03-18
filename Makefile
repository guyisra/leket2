
dev-shell:
	docker-compose run --rm --service-ports dev /bin/bash

clean:
	docker-compose down

