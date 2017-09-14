from app import db
from app import manager

class Cidade(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.String(200))
    estadoId = db.Column(db.Integer,db.ForeignKey('estado.id'))
    estado = db.relationship('Estado')

    #tratamento da informacao para exibicao
    def apelido(self):
        return "%s (%s)" % (self.nome, self.estado.uf)
    

  
        
#metodos antes e depois da chamada da api
def valida(instance_id=None,**kw):
    print("GetById:" + instance_id)

def logar_depois(result,**kw):
    print("final do get:" + str(result['id']))

def pre_delete(instance_id=None,**kw):
    print("deletará o id:" + instance_id)



db.create_all()

includes_columns = ['id','nome','estado','estado.nome']
include_methods = ['apelido']




manager.create_api(Cidade
,collection_name='cidade'
,url_prefix='/api/v1'
,methods=['POST','GET','PUT','DELETE']
,include_columns=includes_columns
,include_methods=include_methods
,results_per_page=10  #numero de itens por pagina
,preprocessors={
                'GET_SINGLE': [valida],
                'DELETE': [pre_delete]
                }
,postprocessors=dict(GET_SINGLE=[logar_depois])                
)

