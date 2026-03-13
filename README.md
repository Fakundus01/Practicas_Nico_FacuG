# Practicas_Nico_FacuG

Base inicial con:

- Frontend en Vite + React + TypeScript + Tailwind
- Backend en Python + Flask
- Base de datos PostgreSQL
- Migraciones con Flask-Migrate

## Estructura

- `frontend`: aplicacion web
- `backend`: API Flask
- `.venv`: entorno virtual de Python

## Guia super simple para levantar todo

### 1. Abrir la carpeta

Parate en:

```powershell
cd C:\Users\Facundo\Estudio_Trabajo\Practica\Practicas_Nico_FacuG
```

### 2. Levantar PostgreSQL

Crea una base llamada `practica_db`.

Si ya tenes PostgreSQL instalado, alcanza con que exista una base con ese nombre.

### 3. Configurar el backend

Copia el archivo de ejemplo:

```powershell
Copy-Item .\backend\.env.example .\backend\.env
```

Si tu usuario o clave de PostgreSQL son distintos, cambia la variable `DATABASE_URL` dentro de `backend\.env`.

### 4. Instalar dependencias del backend

Ya te deje creado el entorno virtual `.venv`.

Para activarlo:

```powershell
.\.venv\Scripts\Activate.ps1
```

Si alguna vez necesitas reinstalar dependencias:

```powershell
pip install -r .\backend\requirements.txt
```

### 5. Crear las tablas de la base

La carpeta de migraciones ya fue inicializada.

```powershell
cd .\backend
$env:FLASK_APP = "run.py"
flask db migrate -m "initial migration"
flask db upgrade
```

### 6. Levantar el backend

Desde `backend`:

```powershell
flask run
```

Tu API va a quedar en:

`http://127.0.0.1:5000`

Prueba rapida:

`http://127.0.0.1:5000/api/health`

### 7. Levantar el frontend

Abri otra terminal y ejecuta:

```powershell
cd C:\Users\Facundo\Estudio_Trabajo\Practica\Practicas_Nico_FacuG\frontend
npm install
npm run dev
```

Tu frontend va a quedar en:

`http://127.0.0.1:5173`

## Backlog resuelto

1. Cree la base del frontend con Vite, React y TypeScript.
2. Agregue Tailwind y reemplace el template por una pantalla inicial simple y responsive.
3. Cree el backend con Flask usando app factory y archivos separados por responsabilidad.
4. Prepare la conexion a PostgreSQL mediante variables de entorno.
5. Inicialice la carpeta de migraciones con Flask-Migrate.
6. Deje una guia corta para levantar todo sin vueltas.
