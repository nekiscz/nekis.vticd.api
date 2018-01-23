function clamlItem(obj) {
    transformed = {
        type: obj.kind,
        code: obj.code,
        languages: [
            "eng",
            "vn"
        ],
        department: "",
        meta: obj.meta ? obj.meta : '',
        parent: obj.superclass ? obj.superclass.code : '',
        children: obj.subclass ? (obj.subclass.length ? obj.subclass.map((object) => {return object.code}) : [obj.subclass.code]) : [],
        labels : {
            en: obj.rubric.length ? obj.rubric.map((object) => { return transformLabel(object)}) : transformLabel(obj.rubric)
        }
    };
    
    return transformed;
}

function transformLabel(l) {
    var transformed = [];

    if (l.label.fragment) {
        transformed = { 
            kind: l.kind, 
            label: l.label.fragment.length ? l.label.fragment.map((obj) => {
                return { text: obj._, type: obj.type } 
            }): { text: l.label.fragment._, type: l.label.fragment.type }
        };
    }

    if (l.label._) {
        transformed =  {
            kind: l.kind,
            label: [{
                text: l.label._,
                type: "text"
            }]
        };
    }

    return transformed;
}

module.exports = {clamlItem};