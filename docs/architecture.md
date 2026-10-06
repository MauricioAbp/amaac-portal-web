# Arquitectura inicial

## Límites

Esta etapa entrega únicamente el esqueleto técnico y el shell visual. No incluye autenticación, usuarios, permisos, persistencia, envío de correo ni reglas de negocio.

## Frontend

- `core/`: servicios singleton, interceptores y guards cuando se definan sus contratos.
- `shared/`: componentes presentacionales y utilidades reutilizables.
- `layout/`: estructura global de navegación.
- `features/`: funcionalidades aisladas por dominio. La vista `account` actual es una composición visual sin persistencia.

## Backend

- `Amaac.Domain`: entidades y reglas puras, una vez aprobadas.
- `Amaac.Application`: casos de uso, contratos y validación de aplicación.
- `Amaac.Infrastructure`: Azure SQL, JWT y SMTP detrás de contratos de Application.
- `Amaac.Api`: transporte HTTP, composición de dependencias y middleware.

Las dependencias apuntan hacia dentro: API e Infrastructure dependen de Application; Application depende de Domain; Domain no depende de otros proyectos.

## Seguridad prevista

- JWT será validado en la API y no sólo en Angular.
- Los permisos se aplicarán mediante políticas de backend.
- Las credenciales se suministrarán con variables de entorno o un almacén de secretos.
- SMTP se limitará al flujo de recuperación de contraseña.

