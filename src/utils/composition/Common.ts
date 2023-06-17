export default class Common {
    
    constructor () {}

    static getMassInMilligrams (mass: number, unitOfMeasure: string) : number{
        let convertedMass = 0;

        if (unitOfMeasure === "mg") {
            convertedMass = mass;
        }
        else if (unitOfMeasure === "g") {
            convertedMass = mass * 1000;
        }
        else if (unitOfMeasure === "kg") {
            convertedMass = mass * 1000000;
        }
        return convertedMass;
    }
}