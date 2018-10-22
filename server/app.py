from flask import Flask
from flask_restful import Api
from resources.campaign import CampaignsList

app = Flask(__name__)
api = Api(app)

api.add_resource(CampaignsList, '/campaigns')

if __name__ == '__main__':
    app.run(port=5000, debug=True)