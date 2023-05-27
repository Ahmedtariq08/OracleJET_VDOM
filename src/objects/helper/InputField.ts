export default class InputField {

    public NUMBER = function (id, label, value, isRequired, isDisplayable = true) {
        return { 
            Id: id, label: label, value: value, type: "NUMBER", required: isRequired, isDisplayable: isDisplayable
        };
    };
    
    public TEXT = function (id, label, value, isRequired, readOnly, isDisplayable = true) {
        return { 
            Id: id, label: label, value: value, type: "TEXT", required: isRequired, readOnly: readOnly, isDisplayable: isDisplayable
        };
    };

    public DESC = function (id, label, value, rows, isDisplayable = true) {
        return { 
            Id: id, label: label, value: value, type: "DESC", rows: rows, isDisplayable: isDisplayable
        };
    };

    public DATE = function (id, label, value, min, isRequired, isDisplayable = true) {
        return { 
            Id: id, label: label, value: value, min: min, type: "DATE", required: isRequired, isDisplayable: isDisplayable
        };
    }

    public COMPLIANCE = function (id, label, value, isRequired, isDisplayable = true) {
        return { 
            Id: id, label: label, value: value, type: "COMPLIANCE", required: isRequired, isDisplayable: isDisplayable
        };
    }
    
    public LIST = function (id, label, value, isRequired, isWriteable, isDisplayable, options, onClick, selectionMode, onValueChanged, placeholder, error, validator?) {
        return { 
            Id: id, label: label, value: value, type: "LIST", required: isRequired, isWriteable: isWriteable, options: options, error: error,
            selectionMode: selectionMode, onClick: onClick, isDisplayable: isDisplayable, onValueChanged: onValueChanged, placeholder: placeholder, validator: validator
        };
    }

}