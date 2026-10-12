# Estrategia de ramas

## Ramas permanentes
- `main`: versión estable y demostrable.
- `develop`: integración del trabajo del Sprint.

## Ramas temporales
Crear desde `develop`:
- `feature/HU-XX-descripcion-corta`: nueva funcionalidad.
- `fix/HU-XX-descripcion-corta`: corrección asociada a una HU.
- `chore/descripcion`: configuración, documentación o mantenimiento técnico.

## Flujo
1. Actualizar `develop`.
2. Crear rama temporal.
3. Implementar cambios pequeños y coherentes.
4. Realizar commits descriptivos.
5. Abrir Pull Request hacia `develop`.
6. Revisar código y criterios de aceptación.
7. Integrar solo si las pruebas aplicables pasan.
8. Al cerrar un incremento demostrable, integrar `develop` hacia `main` mediante Pull Request.

## Convención de commits
Formato recomendado:
- `feat(HU-07): registrar postulación`
- `fix(HU-14): evitar doble reserva de entrevista`
- `test(HU-18): agregar pruebas de evaluación`
- `docs: actualizar arquitectura`

## Evidencia
Cada HU terminada debe poder relacionarse con:
- issue de Jira;
- rama o commits;
- Pull Request cuando corresponda;
- resultado de pruebas;
- evidencia funcional;
- cumplimiento de Definition of Done.
