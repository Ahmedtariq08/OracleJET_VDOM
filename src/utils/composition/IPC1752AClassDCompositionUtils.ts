import Common from './Common';

export default class IPC1752AClassDCompositionUtils {

    constructor () {}
  

    static getResultMass = (declaredMass : number, unitOfMeasure : string, hasParent: boolean, parentResultMass: number, fmdMass: number, fmdMassUnitOfMeasure: string) => {
      let resultMass = 0;

      resultMass = Common.getMassInMilligrams(declaredMass, unitOfMeasure);
      if (unitOfMeasure === "%" && (resultMass == null || resultMass == 0)) {
        if (hasParent) {
          resultMass = (declaredMass / 100) * parentResultMass;
        }
        else {
          if (fmdMass > 0) {
            fmdMass = Common.getMassInMilligrams(fmdMass, fmdMassUnitOfMeasure);
            resultMass = (declaredMass / 100) * fmdMass;
          }
        }
      }
      return resultMass;
    }


    static calculateResultMassByPPM = (declaredPPM: number, hasParent: boolean, parentResultMass: number, fmdMass: number, fmdMassUnitOfMeasure: string, conversionFactor: number) => {
      let resultMass = 0;
      let percentage = declaredPPM / 10000;
      let percentMultiplicationFactor = percentage / 100;

      if (hasParent) {
        resultMass = (percentMultiplicationFactor) * parentResultMass;
      }
      else {
        fmdMass = Common.getMassInMilligrams(fmdMass, fmdMassUnitOfMeasure);
        resultMass = (percentMultiplicationFactor) * fmdMass;
      }
      if (conversionFactor) {
        resultMass *= conversionFactor;
      }
      return resultMass;
    }
}