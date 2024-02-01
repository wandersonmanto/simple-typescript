const returnValue = <T>(value: T) => value

const message = returnValue<string>('Hello Word')
const count = returnValue(5)

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0]
}

const firstValueString = getFirstValueFromArray<string>(["1", "2"])
const firstValueNumber = getFirstValueFromArray<number>([10, 20])