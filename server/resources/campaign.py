import sqlite3
from flask_restful import Resource
from models.campaign import CampaignModel

class CampaignsList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM campaigns"
        result = cursor.execute(query)

        campaigns = []
        for row in result:
            campaign_model = CampaignModel(row[0], row[1], row[2], row[3])
            campaigns.append(campaign_model.json())

        connection.close()
        return {'campaigns': campaigns}