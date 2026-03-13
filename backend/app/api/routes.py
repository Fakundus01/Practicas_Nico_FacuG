from flask import jsonify

from . import api_blueprint
from ..services.health_service import HealthService


@api_blueprint.get('/health')
def health_check():
  service = HealthService()
  return jsonify(service.build_payload())


@api_blueprint.get('/highlights')
def highlights():
  return jsonify(
    {
      'items': [
        'Frontend sencillo y responsive',
        'Backend con Flask y PostgreSQL',
        'Base modular para seguir creciendo',
      ]
    }
  )
