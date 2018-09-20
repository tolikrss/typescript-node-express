export class Schema<T> {
    constructor( data: T = {} as T ) {
        Object.assign( this as any, data );
    }
}