/// <reference types="mutent" />

import { Adapter, Generics, Store } from "mutent";

export interface ArrayGenerics<T> extends Generics {
  adapter: ArrayAdapter<T>;
  entity: T;
  query: ArrayQuery<T>;
  options: ArrayOptions;
}

export declare type ArrayStore<T> = Store<ArrayGenerics<T>>;

export declare type ArrayQuery<T> = (item: T, index: number) => boolean;

export declare type ArrayOptions = any;

export interface ArrayAdapterOptions<T> {
  ignoreMissingItems?: boolean;
  items?: T[];
}

export declare class ArrayAdapter<T> implements Adapter<ArrayGenerics<T>> {
  ignoreMissingItems: boolean;
  items: T[];
  constructor(options?: ArrayAdapterOptions<T>);
  find(query: ArrayQuery<T>): T | undefined;
  filter(query: ArrayQuery<T>): T[];
  create(item: T): void;
  update(oldItem: T, newItem: T): void;
  delete(item: T): void;
}
