# AMAAC Perú

Sistema web del proyecto Capstone para centralizar la gestión del proceso de postulación e incorporación de voluntarios y practicantes de AMAAC PERÚ.

## Estructura

- `frontend/`: Angular 21.
- `backend/`: ASP.NET Core (.NET 10) organizado en Api, Application, Domain e Infrastructure.
- `docs/`: arquitectura, seguridad, estrategia de ramas y pruebas.

## Estado actual

El repositorio contiene el esqueleto técnico, el portal público inicial y pruebas de arquitectura. No debe declararse como terminado el flujo de postulación/incorporación: autenticación JWT, persistencia Azure SQL, correo, almacenamiento de CV y reglas de negocio aún requieren implementación e integración.

## Entornos

### Demostración actual
El frontend incluye configuración de Netlify para facilitar la visualización del prototipo durante el desarrollo académico. Esta configuración **no define la arquitectura final de producción**.

### Arquitectura objetivo
La solución objetivo del informe utiliza:
- Angular 21.
- ASP.NET Core (.NET 10).
- Azure SQL.
- Microsoft Azure para la infraestructura de producción.
- Servicio abstraído para almacenamiento privado de CV.
- Servicio abstraído de correo para verificación, recuperación y resultado de postulación.

## Desarrollo local

Frontend:

```powershell
cd frontend
npm install
npm start
```

Backend:

```powershell
cd backend
dotnet restore --configfile NuGet.Config
dotnet run --project src/Amaac.Api
```

## Flujo Git

- `main`: versión estable/demostrable.
- `develop`: integración.
- `feature/HU-XX-descripcion`: funcionalidad.
- `fix/HU-XX-descripcion`: corrección.

Consultar `docs/branching-strategy.md`.

## Evidencia y pruebas

Una historia de usuario solo puede considerarse terminada cuando cumple sus criterios de aceptación y la Definition of Done. El catálogo base de pruebas se encuentra en `docs/test-cases.md`; sus resultados reales deben registrarse durante la ejecución del Sprint.

## Documentación técnica

- `docs/architecture.md`
- `docs/security-plan.md`
- `docs/testing-plan.md`
- `docs/test-cases.md`
- `docs/branching-strategy.md`
