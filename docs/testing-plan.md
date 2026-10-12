# Plan de pruebas - AMAAC Perú

## Enfoque
Las pruebas se vinculan a historias de usuario y criterios de aceptación. Una HU no debe considerarse terminada si mantiene errores críticos abiertos o si no se verificaron sus criterios aplicables.

## Niveles
- Unitarias: reglas de dominio y servicios puros.
- Integración: API, persistencia y servicios de infraestructura.
- Arquitectura: dependencias entre capas.
- Funcionales: criterios de aceptación por HU.
- Autorización: permisos por rol y protección de recursos.
- UI: flujos críticos en Angular.
- Regresión: funciones ya aprobadas antes de cerrar Sprint.

## Registro mínimo de un caso
- ID.
- HU relacionada.
- criterio de aceptación.
- precondiciones.
- datos de prueba.
- pasos.
- resultado esperado.
- resultado obtenido.
- estado: aprobado/fallido/bloqueado.
- evidencia.
- defecto asociado si falla.

## Criterios críticos a cubrir
- no postular sin correo verificado;
- una sola postulación activa;
- CV obligatorio;
- aislamiento de información entre postulantes;
- cambios de estado válidos;
- reserva de horario sin duplicidad;
- reprogramación solo por coordinador/admin;
- evaluación restringida;
- decisión y conversión de cuenta coherentes;
- historial sin eliminación física;
- autorización por roles;
- horario de prácticas sin cruce con clases, 30 h/semana, máximo 5 h/día, lunes a sábado;
- vencimiento de donativos a 7 días sin afectar los recibidos.

## Evidencia
Las pruebas reales deben ejecutarse sobre el incremento y conservar el resultado. Este documento define qué probar; no sustituye la ejecución.
