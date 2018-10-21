import sqlite3
from flask_restful import Resource
from models.compaign import CompaignModel

class CompaignsList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM compaigns"
        result = cursor.execute(query)

        compaigns = []
        for row in result:
            compaign_model = CompaignModel(row[0], row[1], row[2], row[3])
            compaigns.append(compaign_model.json())

        connection.close()
        return {'compaigns': compaigns}