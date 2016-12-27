install: ## Install application
	@ npm i

run: ## Run application
		@ PORT=9000 ./node_modules/.bin/babel-node src/js/server.js

watch: ## Watch
		@ ./node_modules/.bin/webpack --watch -d

build: ## Build with webpack
	@ ./node_modules/.bin/webpack -p --progress --colors
	@ cp favicon.ico public/
