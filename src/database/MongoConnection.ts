import mongoose from 'mongoose'
import { config } from '../config/Constants'


export class MongoConnection {
	//Vamos manter uma conexão aberta com o Mongo DB
	public async connect(): Promise<void> {
		try {
			//Caso de tudo certo, informamos no console
			await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
			console.log('Database connected')
		} catch (err) {
			//Caso haja falha na conexão
			console.error(err.message)
			process.exit(1)
		}
	};

}
