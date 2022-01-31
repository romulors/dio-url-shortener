import { prop, Typegoose } from '@hasezoey/typegoose'

//Decora as propriedades da URL para que possua obrigatoriamente todos os campos
export class URL extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

//Cria uma instância para utilizarmos
export const URLModel = new URL().getModelForClass(URL)
