import ko = require('knockout');

export default class SearchField {

    public TEXT = function (id, label, value, criteria, isDefault, comboboxOptions, operationsComboBox, onKeyDown) {
        return { 
            Id: id, label: label, value: value, type: "TEXT", criteria: criteria, default: isDefault, 
            comboboxOptions: comboboxOptions, operationsComboBox: operationsComboBox, onKeydown: onKeyDown 
        };
    };

    public LIST = function (id, label, value, criteria, isDefault, selectionMode, options, onClick, onValueChanged, comboboxOptions, operationsComboBox, onKeyDown) {
        return { 
            Id: id, label: label, value: value, type: "LIST", criteria: criteria, default: isDefault, options: () => { return options }, 
            onClick: () => { return onClick }, selectionMode: selectionMode, onValueChanged: onValueChanged,
            comboboxOptions: comboboxOptions, operationsComboBox: operationsComboBox, onKeydown: onKeyDown
        };
    }

    public DATE = function (id, label, isDefault, startDate, endDate, omitEndDate) {
        return { 
            Id: id, label: label, type: "DATE", default: isDefault, startDate: startDate, endDate: endDate, omitEndDate: () => { return omitEndDate }
        };
    }

    public NUMBER = function (id, label, value, isDefault, min, max, step) {
        return {
            Id: id, label: label, value: value, type: "NUMBER", default: isDefault, min: min, max: max, step: step
        };
    }

    public COMPLIANCE = function (id, label, value, criteria, isDefault, options, onClick, onValueChanged, operationsComboBox, onKeyDown) {
        return { 
            Id: id, label: label, value: value, type: "COMPLIANCE", criteria: criteria, default: isDefault, options: () => { return options }, 
            onClick: () => { return onClick }, onValueChanged: onValueChanged, operationsComboBox: ko.observable(operationsComboBox), onKeydown: onKeyDown
        };
    }
}