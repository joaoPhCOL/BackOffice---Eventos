import connectToDatabase from "../../server/dbConnect";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const data = req.body;
            const db = await connectToDatabase;//faz a conexão ao banco utilizando a função
            const collection = db.collection('eventos');

            //inseri os dados passados atraves do req.body
            await collection.insertOne(data);

            res.status(200).send('Dados gravados com sucesso');
        } catch (error) {
            console.error('Erro ao gravar dados', error);
        }
    }
}