type ArgsType<T> = T[];

type FuncType<T> = (...args: ArgsType<T>) => T;

export {
  ArgsType,
  FuncType
}