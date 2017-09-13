from app import app

#importando rotas
from app.routes import *

from app.models import estado

if __name__ == '__main__':
    app.run(port=8080,debug=True)
