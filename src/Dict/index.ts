/** Creates an empty object. Alternative for `const obj = {} as SomeObjectType`. */

export declare function makeEmpty<T>(): T

/** Returns the value of the given property. */

export declare function prop<T, K extends keyof T>(dict: T, key: K): T[K]

export declare function prop<T, K extends keyof T>(key: K): (dict: T) => T[K]

/** Converts an object into an array of `[key, value]` tuples. */

export declare function toPairs<T>(
  dict: Record<string, T>,
): ReadonlyArray<readonly [string, T]>

/** Returns a new array that contains all values of the provided object. */

export declare function values<T extends string | number, R>(
  dict: Record<T, R>,
): ReadonlyArray<R>

/** Returns a new array that contains all keys of the provided object. */

export declare function keys<T extends Record<string, unknown>>(
  dict: T,
): ReadonlyArray<keyof T>

/** Creates a new object from an array of tuples (`[key, value]`). */

export declare function fromPairs<T, K>(
  xs: ReadonlyArray<readonly [string, T]>,
): Record<string, T>

/** Merges two provided objects. */

export declare function merge<A, B>(fst: A, snd: B): A & B

export declare function merge<A, B>(snd: B): (fst: A) => A & B

/** Transforms each value in the object to a new value using the provided function. */

export declare function map<T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T]) => R,
): Record<keyof T, R>

export declare function map<T extends Record<string, any>, R>(
  mapFn: (value: T[keyof T]) => R,
): (dict: T) => Record<keyof T, R>

/** Transforms each value in the object to a new value using the provided function (which takes two arguments: a property value and key). */

export declare function mapWithKey<T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T], key: keyof T) => R,
): Record<keyof T, R>

export declare function mapWithKey<T extends Record<string, any>, R>(
  mapFn: (value: T[keyof T], key: keyof T) => R,
): (dict: T) => Record<keyof T, R>

/** Removes each property that doesn't satisfy the given predicate function. */

export declare function filter<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>

export declare function filter<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that doesn't satisfy the given predicate function (which takes two arguments: a property value and key). */

export declare function filterWithKey<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T>

export declare function filterWithKey<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that satisfies the given predicate function. */

export declare function reject<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>

export declare function reject<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that satisfies the given predicate function (which takes two arguments: a property value and key). */

export declare function rejectWithKey<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T>

export declare function rejectWithKey<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): (dict: T) => Partial<T>
