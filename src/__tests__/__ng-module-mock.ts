export function NgModule(params: any) {
    console.log(`NgModule mock was called with params:`, params);
    return (target) => {
        return target
    };
}

