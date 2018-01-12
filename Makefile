setup:
	npm install --production

skill: clean setup
	mkdir build
	cp index.js build/
	cp -r src build/
	cp -r node_modules build/
	cd build && zip -r -X "my-meal-planner.zip" *

clean:
	rm -rf node_modules
	rm -rf build
	rm -rf docs
	rm -rf coverage

.PHONY : setup skill clean
