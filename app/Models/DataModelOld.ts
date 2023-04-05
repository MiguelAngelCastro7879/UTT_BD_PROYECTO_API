
class ModeloDatos {
    static dataSchema = new Schema({
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
    static dataModel: any = model('data', this.dataSchema);
}