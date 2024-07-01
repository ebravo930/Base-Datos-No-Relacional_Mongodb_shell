README
======

Este proyecto incluye un entorno Docker para ejecutar MongoDB con un script que inicializa una base de datos llamada 'tienda' con colecciones de 'productos' y 'clientes'. Se utiliza Docker Compose para facilitar la configuración y gestión del contenedor de MongoDB.

Requisitos
----------
- Docker Desktop (para Windows/Mac) o Docker Engine (para Linux)
- Docker Compose
- Git (para clonar este repositorio)

Estructura de Archivos
----------------------
- `docker-compose.yml`: Contiene la configuración necesaria para ejecutar MongoDB en un contenedor Docker.
- `/data/shared/`: Directorio donde se deben colocar los scripts de MongoDB para su ejecución en el contenedor.
- `script_tienda.js`: Script de MongoDB que inicializa la base de datos y las colecciones, y realiza varias operaciones CRUD.

Configuración del Entorno
-------------------------
1. Clona el repositorio Git en tu máquina local.
2. Asegúrate de que Docker está instalado y corriendo.
3. Navega al directorio donde clonaste el repositorio.
4. Crea un directorio dentro de tu proyecto llamado `data/shared/` si no existe.
5. Coloca cualquier script de MongoDB, como `script_tienda.js`, dentro del directorio `data/shared/`.

Cómo Ejecutar
-------------
1. Abre una terminal o CMD.
2. Navega al directorio del proyecto.
3. Ejecuta el siguiente comando para iniciar MongoDB y montar el volumen:
docker-compose up -d
4. Para ejecutar el script `script_tienda.js` dentro del contenedor de MongoDB, usa:
docker exec -it mongodb mongosh /data/shared/script_tienda.js

Detener y Limpiar
-----------------
- Para detener el contenedor y remover los contenedores junto con la red y los volúmenes creados, ejecuta:
docker-compose down

Ayuda Adicional
---------------
Para más información sobre cómo usar Docker y Docker Compose, visita la documentación oficial:
- Docker: https://docs.docker.com/
- Docker Compose: https://docs.docker.com/compose/

Este README proporciona una guía básica para comenzar a usar el entorno Docker configurado para e