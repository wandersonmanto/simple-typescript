let age: number = 5
const firstName: string = 'Wanderson'
const isValid: boolean = true
let id: any = 5

const ids: number[] = [1, 2, 3, 4, 5]
const names: string[] = ['wanderson', 'arthur']

const productId: string | number = 1

enum Direction {
  Up = 1,
  Down = 2
}

const direction = Direction.Up

const productName: any = "Boné"
// let itemId = productName as string
let itemId = <string>productName

console.log(itemId)