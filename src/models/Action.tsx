export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}
