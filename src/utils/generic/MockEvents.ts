function returnMockEventId(idValuea: string) {
    return {
        srcElement: {
            id: idValuea
        }
    }
}


function returnMockEventNodeValue(nodeValue: string) {
    return {
        target: {
            attributes: [
                {
                    nodeValue: nodeValue
                }
            ]
        }
    }
}

export {
    returnMockEventId,
    returnMockEventNodeValue
}