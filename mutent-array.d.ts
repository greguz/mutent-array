import { Adapter } from 'mutent'

export type Query<T> = (item: T, index: number) => boolean

export declare function createArrayAdapter<T = any>(array?: T[]): Adapter<T, Query<T>, {}>
