// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const mongoose = require('mongoose');
import { Schema, model} from 'mongoose';
import ModeloDatos from "App/Controllers/Http/DataController"

export default class DataController {
    
    /**
     * getData
     */
    async public getDataWithEvWeek({request}: HttpContextContract) {
        const page = request.input('page')
        mongoose.connect('mongodb://127.0.0.1:27017/admin_bd')
            .then(() => console.log('Connected!'));

        const doc = ModeloDatos.dataModel.aggregate([
            {
                $match: {
                    Evweek:{
                        $gt:"0000-00-00"
                    }
                }
            },{
                $skip: (page - 1)*1000
            },{
                $limit: 1000
            }
        ]);

        return doc;
    }
}

class ModeloDatos {
    static dataSchema = new Schema<InData>({
        id: { type: String },
        NumPreg: { type: String },
        AbortRes: { type: String },
        SireBull: { type: String },
        Lact: { type: String },
        EvnL: { type: String },
        EnEV: { type: String },
        Date: { type: String },
        EvGap: { type: String },
        Tech: { type: String },
        Pen: { type: String },
        BredSexed: { type: String },
        BredREas: { type: String },
        DIME: { type: String },
        Anld: { type: String },
        FarmLoc: { type: String },
        AnOwner: { type: String },
        Brd: { type: String },
        Ageda: { type: String },
        Other2id: { type: String },
        Other5id: { type: String },
        ConcepRate: { type: String },
        Bredunk: { type: String },
        Evsirebreed: { type: String },
        Evsirestudcd: { type: String },
        Evweek: { type: String },
        Age1blt: { type: String },
        BarnNm: { type: String },
    });
    static dataModel: any = model<InData>('datos', this.dataSchema);
}

interface InData{
    id: Any,
    NumPreg: Any,
    AbortRes: Any,
    SireBull: Any,
    Lact: Any,
    EvnL: Any,
    EnEV: Any,
    Date: Any,
    EvGap: Any,
    Tech: Any,
    Pen: Any,
    BredSexed: Any,
    BredREas: Any,
    DIME: Any,
    Anld: Any,
    FarmLoc: Any,
    AnOwner: Any,
    Brd: Any,
    Ageda: Any,
    Other2id: Any,
    Other5id: Any,
    ConcepRate: Any,
    Bredunk: Any,
    Evsirebreed: Any,
    Evsirestudcd: Any,
    Evweek: Any,
    Age1blt: Any,
    BarnNm: Any,
};