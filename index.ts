class ValueHolder<T> {
  value: T;
}

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

const numberWrapper = valueWrapper<number>(10);
const stringWrapper = valueWrapper<string>('ABC');
const booleanWrapper = valueWrapper<boolean>(true);
