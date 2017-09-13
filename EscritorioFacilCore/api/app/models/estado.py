from app import db
from app import manager


class Estado(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.String(100))
    uf = db.Column(db.String(2))

db.create_all()
manager.create_api(Estado,methods=['POST','GET','PUT','DELETE'])



    
