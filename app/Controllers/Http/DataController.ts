// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const mongoose = require('mongoose');
import { Schema, model} from 'mongoose';
import ModeloDatos from "App/Controllers/Http/DataController"

export default class DataController {

    public connection() {
        mongoose.connect('mongodb+srv://mike:starplatinum@sandbox.tbdy0.mongodb.net/db_admin?retryWrites=true&w=majority')
            .then(() => console.log('Connected!'));
    }

    async public generateAggregation(query: any){
        this.connection()
        const doc = ModeloDatos.dataModel.aggregate(query);
        return doc;
    }

    async public generateQuery(document: String){
        const query = [
            {
                '$group': {
                    '_id': document, 
                    'count': {
                        '$sum': 1
                    }
                }
            }
        ]
        return await this.generateAggregation(query);
    }
    //1
    async public getDataWithEvWeek({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Evweek')
        })
    }
    //2
    async public getDataWithTech({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Tech');
        })
    }
    //3
    async public getDataWithEvsirebreed({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Evsirebreed');
        })
    }
    //4
    async public getDataWithBrd({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Brd');
        })
    }
    //5
    async public getDataWithAgeda({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Ageda');
        })
    }
    //6
    async public getDataWithBredREas({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$BredREas');
        })
    }
    //7
    async public getDataWithDate({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Date');
        })
    }
    //8
    async public getDataWithPen({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$Pen');
        })
    }
    //9
    async public getDataWithConcepRate({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$ConcepRate');
        })
    }
    //10
    async public getDataWithBarnNm({request, response}: HttpContextContract) {
        return response.json({
            data: await this.generateQuery('$BarnNm');
        })
    }

}

class ModeloDatos {
    static dataSchema = new Schema();
    static dataModel: any = model('data', this.dataSchema);
}