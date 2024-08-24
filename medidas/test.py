import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="caue2005",
    database="assistente",
    auth_plugin='mysql_native_password'

)
mycursor = mydb.cursor()

query = "SELECT * FROM medidas ORDER BY created_at DESC LIMIT 2" # pega as duas últimas medidas
mycursor.execute(query)
last_row = mycursor.fetchall()

ultima_medida = {
    "panturrilha_esquerda": last_row[1][2],
    "panturrilha_direita": last_row[1][3],
    "perna_esquerda": last_row[1][4],
    "perna_direita": last_row[1][5],
    "abdomen": last_row[1][6],
    "peitoral": last_row[1][7],
    "braco_esquerdo": last_row[1][7],
    "braco_direito": last_row[1][9],
    "antebraco_esquerdo": last_row[1][10],
    "antebraco_direito": last_row[1][11]
}

medidas_atuais = {
    "panturrilha_esquerda": last_row[0][2],
    "panturrilha_direita": last_row[0][3],
    "perna_esquerda": last_row[0][4],
    "perna_direita": last_row[0][5],
    "abdomen": last_row[0][6],
    "peitoral": last_row[0][7],
    "braco_esquerdo": last_row[0][8],
    "braco_direito": last_row[0][9],
    "antebraco_esquerdo": last_row[0][10],
    "antebraco_direito": last_row[0][11]
}

primeira_medida = {
        "panturrilha_esquerda": 34,
        "panturrilha_direita": 35,
        "perna_esquerda": 48.5,
        "perna_direita": 50.5,
        "abdomen": 78.5,
        "peitoral": 111,
        "braco_esquerdo": 30,
        "braco_direito": 30,
        "antebraco_esquerdo": 23.5,
        "antebraco_direito": 24.5
    }

metas = {
        "panturrilha_esquerda": 36.3,
        "panturrilha_direita": 36.3,
        "perna_esquerda": 54.6,
        "perna_direita": 54.6,
        "abdomen": 78.5,
        "peitoral": 130.1,
        "braco_esquerdo": 36.3,
        "braco_direito": 36.3,
        "antebraco_esquerdo": 30.3,
        "antebraco_direito": 30.3
    }

meses = 8


def calcular_crescimento_mensal(primeira_medida, metas, meses):
        crescimento_mensal = {}
        for (key1, value1), (key2, value2) in zip(primeira_medida.items(), metas.items()):
            if key1 == key2:
                crescimento_mensal[key1] = round((float(value2) - float(value1)) / meses, 2)
            else:
                print(f"Chaves não correspondem: {key1} != {key2}")
        return crescimento_mensal

print(calcular_crescimento_mensal(primeira_medida, metas, meses))