from datetime import datetime

from ..extensions import db


class Contact(db.Model):
  __tablename__ = 'contacts'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(120), nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
