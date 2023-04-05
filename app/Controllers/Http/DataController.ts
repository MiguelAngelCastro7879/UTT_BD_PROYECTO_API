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
    async public getDataWithEvWeek({request}: HttpContextContract) {
        return await this.generateQuery('$Evweek')
    }
    //2
    async public getDataWithTech({request}: HttpContextContract) {
        return await this.generateQuery('$Tech');
    }
    //3
    async public getDataWithEvsirebreed({request}: HttpContextContract) {
        return await this.generateQuery('$Evsirebreed');
    }
    //4
    async public getDataWithBrd({request}: HttpContextContract) {
        return await this.generateQuery('$Brd');
    }
    //5
    async public getDataWithAgeda({request}: HttpContextContract) {
        return await this.generateQuery('$Ageda');
    }
    //6
    async public getDataWithBredREas({request}: HttpContextContract) {
        return await this.generateQuery('$BredREas');
    }
    //7
    async public getDataWithDate({request}: HttpContextContract) {
        return await this.generateQuery('$Date');
    }
    //8
    async public getDataWithPen({request}: HttpContextContract) {
        return await this.generateQuery('$Pen');
    }
    //9
    async public getDataWithConcepRate({request}: HttpContextContract) {
        return await this.generateQuery('$ConcepRate');
    }
    //10
    async public getDataWithBarnNm({request}: HttpContextContract) {
        return await this.generateQuery('$BarnNm');
    }

}

class ModeloDatos {
    static dataSchema = new Schema();
    static dataModel: any = model('data', this.dataSchema);
}