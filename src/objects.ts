type User = {
  firstName: string;
  age: number;
  email: string;
  password: string;
}

type Student = {
  notas: number[];
  stage: string;
}

type Product = {
  description: string;
  cod: number;
  quant?: number;
}

const user: User = {
  firstName: 'Wanderson',
  age: 35,
  email: 'wanderson.com',
  password: '123456'
}

const product: Product = {
  description: 'car',
  cod: 123456
}

const student: User & Student = {
  firstName: 'William',
  age: 32,
  email: 'william.com',
  password: '123456',
  notas: [8, 10],
  stage: "universit"

}

// Interfaces
interface UserInterface {
  firstName: string;
  email: string;
}

const secondUser: UserInterface = {
  firstName: 'wanderson',
  email: 'wanderson.com'
}