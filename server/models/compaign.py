
class CompaignModel:
    def __init__(self, id, name, goal, total_budget):
        self.id = id
        self.name = name
        self.goal = goal
        self.total_budget = total_budget

    def json(self):
        return {'id': self.id, 'name': self.name, 'goal': self.goal, 'total_budget': self.total_budget}