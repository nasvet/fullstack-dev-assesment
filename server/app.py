from flask import Flask
from flask_restful import Api
from resources.compaign import CompaignsList

app = Flask(__name__)
api = Api(app)

api.add_resource(CompaignsList, '/compaigns')

if __name__ == '__main__':
    app.run(port=5000, debug=True)