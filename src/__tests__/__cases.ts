/**
 * @description CORE CONCEPTS
 * Matching mode:
 * - match_strict: all code by is used as matcher, except specially marked
 * - match_names: identifier names are used as matchers, all other code is treated as changes
 *
 * Special names
 * - 'xxx' in an identifier name - means 'any', kind of asterisk from regexp
 */

/**
 * @description #001 adding property with value
 * match: any class, because name starts from 'xxx'
 */

class xxx1 {
    // add
    name = 'John';
}

/**
 * @description #002a set value for existing property
 * match: any class with property 'name', property type doesn't matter
 */
class xxx2a {
    name = /* set */ 'John';
}

/**
 * @description #002b set value for existing property
 * match: any class with property 'alert' and type '() => void'
 */
class xxx2b {
    alert: () => void = /* set */ () => {
        alert('Hi!')
    };
}

/**
 * @description #002c set value for existing property
 * match: any class with property 'alert' and type 'Callback'
 * modification comment set on value property
 */
type Callback = () => void;

class xxx2c {
    alert: Callback = /* set */ () => {
        alert('Hi!')
    };
}


// not sure
// /**
//  * @description #002d set value for existing property
//  * match: any class with property 'alert' and type 'Callback'
//  * modification comment set on class property
//  */
//
// class xxx2d {
//     /* set: value */
//     alert: Callback = () => {
//         alert('Hi!')
//     };
// }


/**
 * @description #002e set value for existing property
 * match: any class with property 'alert' and type '() => void'
 * modification comment set on class property
 */

class xxx2e {
    /* set */
    alert: /* before: () => void */ Callback  = () => {
        alert('Hi!')
    };
}
                                                                                   
// before

const enum TypeEnum {
    TypeA = 'TypeA',
    TypeB = 'TypeB'
}

const enum CellRendererEnum {
    NumberCellRenderer = 'NumberCellRenderer',
    TextCellRenderer = 'TextCellRenderer',
}

const a = {
    width: 123,
    height: 431,
    cellType: TypeEnum.TypeA,
    /* handler */ cellRenderer: CellRendererEnum.NumberCellRenderer
};
                                                                                   
                                                                                   
                                                                                   
                                                                                   
