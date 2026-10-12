# Arquitectura objetivo - AMAAC Perú

## Alcance
Esta arquitectura corresponde a la versión objetivo del sistema web de gestión del proceso de postulación e incorporación de voluntarios y practicantes. El alcance funcional vigente se mantiene en el documento maestro de requisitos e historias de usuario v2.1.

## Frontend
Angular 21 con organización por dominios:
- `core/`: autenticación, guards, interceptores, configuración y servicios singleton.
- `shared/`: componentes y utilidades reutilizables.
- `layout/`: shells público e interno.
- `features/`: módulos funcionales desacoplados por dominio.

El frontend consume exclusivamente la API; las restricciones de seguridad no deben depender solo de controles visuales.

## Backend
ASP.NET Core (.NET 10) con separación en capas:
- `Amaac.Domain`: entidades, value objects y reglas de dominio.
- `Amaac.Application`: casos de uso, contratos, DTO, validaciones y puertos.
- `Amaac.Infrastructure`: persistencia Azure SQL, almacenamiento de archivos, correo y servicios externos.
- `Amaac.Api`: endpoints HTTP, autenticación/autorización, middleware y composición de dependencias.

Las dependencias apuntan hacia dentro: Api e Infrastructure dependen de Application; Application depende de Domain; Domain no depende de capas externas.

## Datos
Azure SQL es la base relacional objetivo. Debe conservar historial de postulaciones, cambios de estado, entrevistas, evaluaciones, decisiones, roles, departamentos y cambios de tipo de miembro.

No se permite eliminación física de registros históricos relevantes; las salidas se gestionan mediante estados o desactivación.

## Autenticación y autorización
- Cuenta temporal con correo y contraseña.
- Verificación de correo previa al envío de la postulación.
- Recuperación de contraseña por correo.
- JWT validado en la API.
- Autorización por políticas/roles en backend.
- Roles funcionales: postulante, voluntario, practicante, coordinador y administrador.
- Coordinador y administrador pueden operar sobre postulantes y miembros de cualquier departamento según el alcance vigente.

## Archivos
Los CV son obligatorios para voluntarios y practicantes. Se implementará un servicio de almacenamiento abstraído por contrato; el proveedor físico debe definirse antes del despliegue productivo. La base de datos almacenará metadatos y referencia segura del archivo, no el archivo binario salvo decisión expresa.

## Correo
El servicio de correo debe cubrir únicamente los flujos aprobados:
1. verificación de correo;
2. recuperación de contraseña;
3. comunicación del resultado de postulación.

No se incluye un sistema general de notificaciones.

## Seguridad
- HTTPS en ambientes publicados.
- Hash seguro de contraseñas.
- Validación cliente y servidor.
- Autorización en servidor.
- Principio de mínimo privilegio.
- Protección de CV, evaluaciones y datos personales.
- Auditoría de cambios críticos.
- secretos mediante variables de entorno o almacén de secretos.
- respaldo periódico de Azure SQL al menos cada 24 horas según RNF vigente.

## Despliegue lógico
Usuario -> Angular -> API ASP.NET Core -> Azure SQL
                         |-> almacenamiento de CV
                         |-> servicio de correo

Los proveedores concretos de almacenamiento y correo se mantienen desacoplados para no bloquear el desarrollo mientras se toma la decisión de infraestructura.

## Estado actual
A la fecha de esta documentación, el repositorio contiene el esqueleto Angular, el portal público inicial, la solución ASP.NET Core por capas y pruebas de arquitectura. JWT, persistencia Azure SQL, correo y reglas de negocio todavía deben implementarse y no deben declararse como funcionalidades terminadas.
