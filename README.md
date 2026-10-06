# AMAAC Perú

Base inicial del sistema web, separada en un frontend Angular y una API ASP.NET Core.

## Estructura

- `frontend/`: Angular 21, componentes standalone, rutas y estilos visuales base.
- `backend/`: solución ASP.NET Core organizada en API, Application, Domain e Infrastructure.
- `docs/`: decisiones y límites de esta primera etapa.

## Requisitos locales

- Node.js 20.19 o superior compatible con Angular 21.
- .NET SDK 10.
- Una instancia de Azure SQL se incorporará cuando exista un modelo de datos aprobado.

## Desarrollo

```powershell
cd frontend
npm install
npm start
```

```powershell
cd backend
dotnet restore --configfile NuGet.Config
dotnet run --project src/Amaac.Api
```

La integración JWT, Azure SQL y SMTP está deliberadamente pendiente. No se crearán contratos ni reglas de negocio sin aprobación.

