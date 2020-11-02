class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;

const stringHolder = new ValueHolder<string>();
stringHolder.value = 'Ivan';

const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = true;
