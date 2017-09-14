from app import app

#importando rotas
from app.routes import *

from app.models import estado
from app.models import cidade

if __name__ == '__main__':
    app.run(port=8080,debug=True)
