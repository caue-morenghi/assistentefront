import mysql.connector
import google.generativeai as genai

def analisar_medidas():

    API_KEY = "AIzaSyDAhEn0-2evZ2JiL9j2saNhvDnwwuOq1CA"
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    genai.configure(api_key=API_KEY)

    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="caue2005",
        database="assistente",
        auth_plugin='mysql_native_password'

    )
    mycursor = mydb.cursor()

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
        "braco_esquerdo": last_row[1][8],
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

    metas = {
        "panturrilha_esquerda": 39.5,
        "panturrilha_direita": 39.5,
        "perna_esquerda": 54.6,
        "perna_direita": 54.6,
        "abdomen": 78.5,
        "peitoral": 130.1,
        "braco_esquerdo": 36.3,
        "braco_direito": 36.3,
        "antebraco_esquerdo": 30.3,
        "antebraco_direito": 30.3
    }

    def calcular_crescimento_mensal(primeira_medida, metas, meses):
        crescimento_mensal = {}
        for (key1, value1), (key2, value2) in zip(primeira_medida.items(), metas.items()):
            if key1 == key2:
                crescimento_mensal[key1] = round((float(value2) - float(value1)) / meses, 2)
            else:
                print(f"Chaves não correspondem: {key1} != {key2}")
        return crescimento_mensal

    def comparar_medidas(ultima_medida, medidas_atuais):
        comparacao = {}
        for (key1, value1), (key2, value2) in zip(ultima_medida.items(), medidas_atuais.items()):
            if key1 == key2:
                comparacao[key1] = round(float(value2) - float(value1), 2)
            else:
                print(f"Chaves não correspondem: {key1} != {key2}")
        return comparacao

    def formatar_resultados(crescimento_mensal, comparacao_medidas, ultima_medida, medidas_atuais):
        resultados = []
        for key in crescimento_mensal.keys():
            crescimento_esperado = crescimento_mensal[key]
            crescimento_real = comparacao_medidas[key]
            ultima = ultima_medida[key]
            atual = medidas_atuais[key]
            if crescimento_esperado != 0:
                percentual_atingido = (crescimento_real / crescimento_esperado) * 100
            else:
                percentual_atingido = 0
            resultados.append(f"{key.replace('_', ' ').capitalize()}: última medida foi {ultima} e a nova medida é {atual}. Deveria crescer {crescimento_esperado}, cresceu {crescimento_real}. Meta mensal atingida em {percentual_atingido:.2f}%")
        return "\n".join(resultados)

    meses = 8
    crescimento_mensal = calcular_crescimento_mensal(primeira_medida, metas, meses)
    comparacao_medidas = comparar_medidas(ultima_medida, medidas_atuais)

    resultados_formatados = formatar_resultados(crescimento_mensal, comparacao_medidas, ultima_medida, medidas_atuais)

    formatacao = "- Panturrilha esquerda: cresceu como deveria.\n- Panturrilha direita: cresceu menos do que devia\n- Análise das panturrilhas: deve-se treinar mais a panturrilha direita (desproporção)\n\n- Perna esquerda: cresceu como deveria\n- Perna direita: cresceu como deveria\n- Análise das pernas: deve-se manter o cronograma (resultados esperados obtidos).\n\n- Abdomen: deve-se manter o cronograma (resultados esperados obtidos)\n\n- Peitoral: cresceu mais do que deveria.\n- Análise do peitoral: deve-se fazer uma pausa (resultados esperados ultrapassados)\n\n- Braço esquerdo: não cresceu como deveria\n- Braço direito: não cresceu como deveria\n- Análise dos braços: deve-se refatorar o treinamento (resultados esperados não obtidos)\n\n- Antebraco esquerdo: cresceu como deveria\n- Antebraco direito: cresceu como deveria\n- Análise dos antebraços: deve-se manter o cronograma (resultados esperados obtidos)"

    prompt = f"Gemini, você fará uma análise do crescimento de medidas de um corpo. Para isso, você irá comparar as medidas antigas de uma área com as novas, ou seja, a antiga medida do peitoral deve ser comparada com a nova medida do peitoral, a antiga medida do braço esquerdo deve ser comparada à nova medida do braço esquerdo, e assim por diante. Faça um breve resumo, dos pontos a melhorar, dos pontos que cresceram mais do que deveriam, e dos pontos a manter. Aja como um profissional, mas não dê detalhes, seja direto ao ponto. Siga a seguinte formatação: '{formatacao}'. Para ser um 'resultado esperado obtido', a meta mensal atingida deve ser próxima de 100%, com um erro máximo de 10%, exemplo: 90% e 110% são resultados esperados obtidos. No entanto, 85% ou 120% já não são resultados esperados obtidos, são abaixo e acima do esperao, respectivamente. Leve em conta, principalmente, a porcentagem de meta mensal atingida. Se há uma diferença de mais de 0.5cm entre membros esquerdos e direitos, a análise deve adicionar: 'deve-se treinar mais a panturrilha/perna/etc esquerda/direita (desproporção)', além da análise já existente. Não escreva mais do que pede a formatação. ANALISE:\n\n{resultados_formatados}"

    response = model.generate_content(prompt)

    return response.candidates[0].content.parts[0].text


def main():
    resultado = analisar_medidas()
    print(resultado)


if __name__ == "__main__":
    main()