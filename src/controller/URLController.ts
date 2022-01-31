import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import shortId from 'shortid'
import { config } from '../config/Constants'
import { URLModel } from '../database/model/URL'

export class URLController {

	//Parametros para enviar via json
	//originURL: string
	public async shorten(req: Request, response: Response): Promise<void> {
		//o pedido veio acompanhado de um corpo?
		const { originURL } = req.body
		//Tentamos pegar a propriedade
		const url = await URLModel.findOne({ originURL })
		//Se existe, retorna
		if (url) {
			response.json(url)
			return
		}

		//Cria o encurtamento do URL!
		const hash = shortId.generate()
		const shortURL = `${config.API_URL}/${hash}`
		const newURL = await URLModel.create({ hash, shortURL, originURL })
		response.json(newURL)
	}

	public async redirect(req: Request, response: Response): Promise<void> {
		const { hash } = req.params
		const url = await URLModel.findOne({ hash })

		if (url) {
			response.redirect(url.originURL)
			return
		}

		response.status(400).json({ error: 'URL não encontrada!'})
	}
}
