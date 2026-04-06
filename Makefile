.PHONY: help install start build clean stop

help:
	@echo "Comandos disponibles:"
	@echo "  make install    - Instala las dependencias del proyecto"
	@echo "  make start      - Inicia el servidor de desarrollo (puerto 3000)"
	@echo "  make build      - Construye la aplicación para producción"
	@echo "  make clean      - Limpia los archivos generados"
	@echo "  make stop       - Detiene el servidor"

install:
	npm install

start: install
	npm start

build: install
	npm run build

clean:
	rm -rf node_modules
	rm -rf dist
	rm -f package-lock.json

stop:
	pkill -f "webpack serve"
