/// <reference types="mutent" />

import { Adapter, Store } from "mutent";

export declare type ArrayStore<T> = Store<T, ArrayQuery<T>, ArrayOptions>;

export declare type ArrayQuery<T> = (item: T, index: number) => boolean;

export declare type ArrayOptions = unknown;

export default class ArrayAdapter<T>
  implements Adapter<T, ArrayQuery<T>, ArrayOptions>
{
  constructor(items?: T[]);
  find(query: ArrayQuery<T>): T | undefined;
  filter(query: ArrayQuery<T>): T[];
  create(item: T): void;
  update(oldItem: T, newItem: T): void;
  delete(item: T): void;
}
