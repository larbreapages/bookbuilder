.PHONY: install run build test

PORT := 8080

install: ## Install application
	@ yarn --ignore-engines
	@ ./node_modules/.bin/selenium-standalone install

run: ## Run application
	@ NODE_ENV=production PORT=${PORT} node dist/server.js

dev: ## Run dev environment
	@ NODE_ENV=development PORT=${PORT} ./node_modules/.bin/babel-node src/js/server/server.js & make watch & make browser-sync

watch: ## Watch
	@ mkdir -p dist && cp favicon.ico dist/
	@ ./node_modules/.bin/webpack --watch -d

build: ## Build with webpack
	@ mkdir -p dist && cp favicon.ico dist/
	@ NODE_ENV=production ./node_modules/.bin/babel --minified --compact true -d dist/ src/js/server/ src/js/shared/
	@ NODE_ENV=production ./node_modules/.bin/webpack -p --progress --colors

start-selenium: ## Start Selenium Server
	@ ./node_modules/.bin/selenium-standalone start

test: ## Run tests
	@ NODE_ENV=test ./node_modules/.bin/mocha -t 99999999 --compilers js:babel-core/register --require babel-polyfill test/hook.js test/specs/*.spec.js

test-mobile: ## Run tests mobile
	@ NODE_ENV=test RESOLUTION='320x480' ./node_modules/.bin/mocha -t 99999999 --compilers js:babel-core/register --require babel-polyfill test/hook.js test/specs/*.spec.js

browser-sync:
	@ ./node_modules/.bin/browser-sync start --proxy "http://0.0.0.0:${PORT}" --files "dist/*"

lint:
	@ ./node_modules/.bin/eslint src/

lint-fix:
	@ ./node_modules/.bin/eslint --fix src/

deploy:
	@ rm -rf dist/
	@ make build
	@ npm publish
