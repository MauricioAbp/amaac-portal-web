# Plan de seguridad - AMAAC Perú

## Objetivo
Proteger credenciales, datos personales, CV, entrevistas, evaluaciones y decisiones del proceso, evitando accesos no autorizados, pérdida de historial y exposición accidental.

## Controles obligatorios
1. Contraseñas almacenadas con hash seguro; nunca texto plano.
2. HTTPS en ambientes publicados.
3. JWT validado en backend.
4. Autorización por rol y política en API.
5. Validación de entradas en frontend y backend.
6. Restricción de acceso a CV, evaluaciones y datos personales.
7. Registro de usuario, fecha y acción en cambios críticos.
8. Desactivación lógica en lugar de eliminación física.
9. Secretos fuera del repositorio.
10. Respaldo periódico de Azure SQL.
11. Mensajes de error sin detalles internos sensibles.
12. Verificación de correo antes de postular.
13. Tokens de verificación y recuperación con caducidad.
14. Límite de intentos o mitigación ante fuerza bruta en autenticación.
15. Revisión de permisos antes de cada entrega.

## Datos sensibles del alcance
- DNI y datos personales.
- información académica.
- CV.
- entrevista y evaluación.
- resultado y estado de postulación.
- información interna de miembros.

## Controles de desarrollo
- no subir credenciales a Git;
- usar `.env.example` solo como plantilla;
- revisar dependencias;
- validar autorización en pruebas;
- no confiar en ocultar botones como mecanismo de seguridad;
- revisar PR antes de integrar cambios de autenticación/autorización.

## Evidencia de seguridad
Para cada control implementado se debe conservar prueba técnica o funcional: captura, prueba automatizada, configuración, commit o resultado de caso de prueba.
