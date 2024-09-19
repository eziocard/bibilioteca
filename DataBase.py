import pymongo as pym

class DataBase:
    def __init__(self):
        self.client = pym.MongoClient("mongodb+srv://cluster0.1578n.mongodb.net/", 27017,
                connect=False, username='tarea_bigdata', password='admin..')

    def get_database(self):
        db = self.client.biblioteca
        return list(db.libro.find({},{"_id": 0}))
         
    def ingresar(self,isbn,titulo,autor,fecha,editorial,precio):
        db = self.client.biblioteca
        db.libro.insert_one({"isbn":isbn,"titulo":titulo,"autor":autor,"fecha":fecha,"editorial":editorial,"precio":precio})

        




