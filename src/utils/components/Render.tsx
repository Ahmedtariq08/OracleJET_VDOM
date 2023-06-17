/* Component utils that return or use any form of jsx */
import { getYesNoString } from "../generic/Generic";

export const getReadonlyTemplates = (arrayOfTemplates: string[]) => {
    return arrayOfTemplates.map(renderTemplate => { 
        return <template slot={renderTemplate} render={ (row) =>  { 
            let value = row.item.data[renderTemplate];
            return  <span>{Array.isArray(value) ? value.join(", ") : typeof value == "boolean" ?  
                getYesNoString(value) : value}</span>
            }
        }/>
    })
  }