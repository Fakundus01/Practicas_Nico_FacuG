from datetime import UTC, datetime


class HealthService:
  def build_payload(self) -> dict:
    # Payload chico para comprobar rapidamente que la API esta viva.
    return {
      'status': 'ok',
      'message': 'Backend Flask funcionando',
      'timestamp': datetime.now(UTC).isoformat(),
    }
