export function decorator() {
    return function (target: any, descriptorKey: any) {
        console.log("cool");
    }
}
