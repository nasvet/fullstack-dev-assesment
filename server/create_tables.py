import sqlite3

connection = sqlite3.connect('data.db')

cursor = connection.cursor()

create_table = "CREATE TABLE compaigns (id int, name text, goal text, total_budget int)"
cursor.execute(create_table)

insert_query = "INSERT INTO compaigns VALUES (?, ?, ?, ?)"

compaigns = [
    (100000001, 'Test Ad 1', 'Increase Reach', 120),
    (100000002, 'Test Ad 2', 'Raise Awareness', 360),
    (100000003, 'Test Ad 3', 'Raise Awareness', 90)
]
cursor.executemany(insert_query, compaigns)

select_query = "SELECT * FROM compaigns"
for row in cursor.execute(select_query):
    print(row)

connection.commit()
connection.close()