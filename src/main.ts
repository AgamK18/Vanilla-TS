/********** Different Types *********/

// let myName: string = 'Agam' 
// let iL: boolean;
// let al: any;

// myName = 'John'
// iL = true
 
// const sum = (a: number, b: string) => {
//     return a + b
// }

// let postId: string | number

// let re: RegExp = /\w+/g


/********** Array Operations *********/

// let stringArr = ['one', 'hey', 'Dave']

// let guitars = ['Strat', 'Les Paul', 5150]

// let mixedData = ['EVH', 1984, true]

// stringArr[0] = 42 //error because not a number
// stringArr[0] = "jnhj" //allowed

// guitars[0] = 22 // allowed bcoz number|string
// guitars.unshift('Jim') 

// guitars = stringArr //allowed
// guitars = mixedData //not allowed

// let test = [] //"any" type
// let bands: string[] = []


/********** Tuple Operations *********/
// let myTuple: [string, number, boolean] =  ["Dave", 42, true]
 
// let mixed = ['john', 1, false]

// myTuple = mixed //not allowed bcoz mixed may contain fewer elements


/********** Object Operations *********/

// let myObj: object
// myObj = [] //array is type object
// myObj = {}

// const exampleObj = {
//     prop1: 'Dave',
//     prop2: true,
// }

// // exampleObj.prop2 = 42 // not allowed as prop2 is boolean
// // exampleObj.prop1 = 'AK' //allowed as prop1 is string
  

// type Guitarist = {
//     name: string,
//     active ?: boolean, //? makes the property not compulsory
//     albums: (string | number)[]
// }

// interface guitarist {
//     name: string,
//     active ?: boolean, //works the same as type
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: true,
//     albums: [1984, 5150, 'OUB12']
// }
// let jp: Guitarist = {
//     name: 'JIm',
//     active: true,
//     albums: [900, 862, 'OB12']
// }
// evh = jp //allowed as all types match

// const greetGuitarist = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.name}!`
// }


/********** Type Alliases *********/
// type stringOrNumber = string | number

// type stringOrNumberArray = (string | number)[]

// type Guitarist = {
//     name ?: string,
//     active : boolean, 
//     albums: stringOrNumberArray
// }

// type UserId = stringOrNumber 

// interface PostId = stringOrNumber // not allowed with interface


/********** Literal Types *********/
// let myName: 'Dave' //like const

// let userName: 'Dave' | 'John' | 'Amy' //can only have one of three values 
// userName = 'Amy'


/********** Functions *********/
// const add = (a: number, b: number): number => {
//     return a + b 
// }

// const logMsg = (message: any): void => {
//     console.log(message)        //  void for function which does not return anything 
// }

// type mathFunction = (a: number, b: number) => number //function's type

// interface math {
//     (a: number, b:number) : number
// }

// let multiply: mathFunction = function (c,d) {
//     return c*d
// }

// logMsg(multiply(2, 2)) //prints 4


/********** Optional Parameters *********/
// const addAll = (a: number, b: number, c?: number): number => {
//     if(typeof c !== "undefined"){
//         return a + b + c
//     }
//     return a + b
// }

// const sumAll = (a: number, b: number, c: number = 2): number => {
//     return a + b + c
// }

// const sum = (a: number = 2, b: number, c: number = 2): number => {
//     return a + b + c
// }

// logMsg(addAll(2, 3, 2))
// logMsg(addAll(2, 3))
// logMsg(sumAll(2, 3))
// logMsg(sum(undefined, 3)) //bcoz a was already decided

 
/********** Rest Parameters *********/
// const total = (...nums: number[]): number => {
//     return nums.reduce((prev, curr) => prev+curr)
// }

// // never comes only when we get error or have infinte loop

// const createError = (errMsg: string): never => {
//     throw new Error(errMsg)
// }

// const infinite = () => {
//     let i: number = 1
//     while(true){
//         i++
//     }
// }

// //custom type guard
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number' ? true : false
// }

// //use of never type
// const numberOrString = (value: number | string) : string => {
//     if(typeof value === 'string') return 'string'
//     if(typeof value === 'number') return 'number'
//     return createError('Should not happen') //never type function handles the error
// }


/********** Type Assertion *********/
//Type assertion allows you to set the type of a value and tell the compiler not to infer it. 
//This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. 
//Such a situation can occur when you might be porting over code from JavaScript and you may know a more accurate type of the variable than what is currently assigned.

// type One = string
// type Two = string | number
// type Three = "hello"

// //convert to more or less specific
// let a: One = 'hello'
// let b = a as Two // b's type assigned to Two which is less specific
// let c = a as Three // c's type assigned to Three which is less specific

// let d = <One>'world'
// let e = <string | number>'world' //not used in TSX

// //example
// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
//     if( c === 'add') return a + b
//     return '' + a + b 
// } 

// let myVal: string = addOrConcat(2, 2, 'concat') as string

// //TS has no problem but a string is returned
// let nextVal: number = addOrConcat(2, 2, 'concat') as number
 
// // 10 as string //not allowed
// (10 as unknown) as string // Forced Casting

// // DOM
// const myImg = document.getElementById('#myId') //Element | null
// const img = document.querySelector('img') //HTMLImageElement | null

// //img.src //error as it can be null

// const img1 = document.querySelector('img') as HTMLImageElement
// img1.src // now allowed

// //myImg.src //error as it can be null or no source at all

// const myImg1 = document.getElementById('#myId')! as HTMLImageElement // ! Non-Null assertion
// myImg1.src

// const nextImg = <HTMLImageElement>document.getElementById('#img')
 


/********** Classes *********/
// class Coder {
//     // we need class as well as constructor at same time
//     name: string
//     music: string
//     age: number
//     lang: string
    
//     constructor(
//         name: string, 
//         music: string, 
//         age: number, 
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }

// }

// class Coder1 {
//     // We use visibility/access modifier to remove redundancy

//     secondLang!: string // will not initialise

//     constructor(
//         public readonly name: string, 
//         public music: string, 
//         private age: number, 
//         protected lang: string = 'Typescript'
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }

//     public getAge() {
//         return `Hello, I'm ${this.age}` //accessible in class
//     }
// }

// const Dave = new Coder1('Dave', 'Rock', 42)
// console.log(Dave.getAge())
// // console.log(Dave.age) //private not accessible outside class but JS allows
// // console.log(Dave.lang) // not accessible outside class or derived class

// class WebDev extends Coder1 {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string, //still public
//         age: number,  //still private
//     ) {
//         super(name, music, age)
//         this.computer = computer
//     }

//     public getLang() {
//         //lang still protected 
//         return `I write ${this.lang}`
//     }
// }

// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
// console.log(Sara.getLang())

// //Interface

// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }

// class Guitarist implements Musician{
//     name: string
//     instrument: string

//     constructor(name: string, instrument: string){
//         this.name = name
//         this.instrument = instrument
//     }

//     play(action: string){
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// //static
// //property applies to the class directly not to any instantiation
// class Peeps {
//     static count: number = 0
    
//     static getCount(): number {
//         return Peeps.count
//     }

//     public id: number

//     constructor(public name: string){
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }

// //getter and setter
// class Band {
//     private dataState: string[]

//     constructor() {
//         this.dataState = []
//     }   

//     //getter
//     public get data(): string[] {
//         return this.dataState
//     }

//     //setter
//     public set data(value: string[]) {
//         if(Array.isArray(value) && value.every(el => typeof el === 'string')){
//             this.dataState = value
//             return //setters cant return value
//         } else throw new Error ('Param is not an array of strings')
//     }
// }



/********** Index Signatures *********/
//The idea of the index signatures is to type objects of unknown structure 
//when you only know the key and value types.

// interface TransactionObj {
//     readonly [index: string]: number   
// }

// interface TransactionObj {
//    readonly [index: string]: number   
//     Pizza: number,
//     Books: number,
//     Job: number
// }

// const todaysTransactions: TransactionObj = {
//     Pizza: -10,
//     Books: -5,
//     Job: 50
// }

// let prop: string = 'Pizza'
// console.log(todaysTransactions[prop])

// const todaysNet = (transactions: TransactionObj): number => {
//     let total = 0
//     for (const transaction in transactions) {
//         total += transactions[transaction]
//     }
//     return total
// }

// console.log(todaysNet(todaysTransactions))

// //example
// interface Student {
//     [key: string]: string | number | number[] | undefined
//     name: string,
//     GPA: number,
//     classes?: number[]
// }

// const student: Student = {
//     name: "Doug",
//     GPA: 3.5,
//     classes: [100, 200]
// }

// //allowed only bcoz of index signature
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }

// //below doesnt require index signature
// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }

// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof typeof student]}`)
// }

// const logStudentKey = (student: Student, key: keyof Student): void => {
//     console.log(`Student ${key}: ${student[key]}`)
// }


/********** Generics *********/
// const stringEcho = (arg: string): string => arg //works for only string

// const echo = <T>(arg: T): T => arg //generic

// const isObj = <T>(arg: T): boolean => {
//     return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// interface BoolCheck<T> {
//     value: T,
//     is: boolean,
// }

// const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
//     if (Array.isArray(arg) && !arg.length){
//         return { value: arg, is: false }
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length){
//         return { value: arg, is: false }
//     }
//     return { value: arg, is: !!arg }
// }

// interface HasID {
//     id: number
// }

// const processUser = <T extends HasID>(user: T): T => {
//     return user
// }

// console.log(processUser({ id: 1, name: 'Dave'}))
// //console.log(processUser({ name: 'Dave'})) //error because it does not have parameter id

// const getUserProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] => {
//     return users.map(user => user[key])
// }

// class StateObject<T> {
//     private data: T

//     constructor(value: T) {
//         this.data = value
//     }

//     get state(): T {
//         return this.data
//     }

//     set state(value: T) {
//         this.data = value
//     }
// }

// const store = new StateObject("John")
// store.state = "Dave"
// //store.state = 12 //number not assignable to string

// const myState = new StateObject<(string|number|boolean)[]>([15])
// myState.state = (["Dave", 42, true])



/********** Utility Types *********/

// Partial

// interface Assignment {
//     studentId: string,
//     title: string,
//     grade: number,
//     verified?: boolean,
// }

// const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
//     return {...assign, ...propsToUpdate}
// }

// const assign1: Assignment = {
//     studentId: "compsci123",
//     title: "Final Project",
//     grade: 0,
// }

// console.log(updateAssignment(assign1, {grade: 95}))
// const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// // Required and Readonly
// // all properties required and can't overwrite existent properties
// const recordAssignment = (assign: Required<Assignment>): Assignment => {
//     return assign
// }

// const assignVerified: Readonly<Assignment> = {
//     ...assignGraded, verified: true
// }

// // assignVerified.grade = 88 // wont work as readonly

// //recordAssignment(assignGraded) //missing property
// recordAssignment({...assignGraded, verified: true}) //no missing property


// //Record
// //Record is a shortcut to defining an object type with a specific key type and value type.

// const hexColorMap: Record<string, string> = {
//     red: "FF0000",
//     green: "00FF00",
//     blue: "0000FF",
// }

// type Students = "Sara" | "Kelly"
// type LetterGrades = "A" | "B" | "C" | "D" | "U" 

// const finalGrades: Record<Students, LetterGrades> = {
//     Sara: "B",
//     Kelly: "U"
// }

// interface Grades {
//     assign1: number,
//     assign2: number,
// }

// const gradeData: Record<Students, Grades> = {
//     Sara: { assign1: 85, assign2: 93 },
//     Kelly: { assign1: 71, assign2: 15 },
// }

// // Pick and Omit
// // Pick removes all but the specified keys from an object type.
// type AssignResult = Pick<Assignment, "studentId" | "grade">

// const score: AssignResult = {
//     studentId: "k123",
//     grade: 85,
// }

// //Omit removes keys from an object type.
// type AssignPreview = Omit<Assignment, "grade" | "verified">

// const preview: AssignPreview = {
//     studentId: "k123",
//     title: "Final Project",
// }


// //Exclude and Extract
// //Exclude removes types from a union.

// type adjustedGrade = Exclude<LetterGrades, "U">

// type highGrades = Extract<LetterGrades, "A" | "B">


// //Nonnullable

// type AllPossibleGrades = "Dave" | 'John' | null | undefined

// type NamesOnly = NonNullable<AllPossibleGrades>


// // ReturnType
// // ReturnType extracts the return type of a function type.

// const createNewAssign = (title: string, points: number) => {
//     return { title, points }
// }

// type NewAssign = ReturnType<typeof createNewAssign>


// //Parameters
// // Parameters extracts the parameter types of a function type as an array.

// type AssignParams = Parameters<typeof createNewAssign>

// const assignArgs: AssignParams = ["Generics", 100]

// const tsAssign2: NewAssign = createNewAssign(...assignArgs)


// Awaited - helps us with the ReturnType of a Promise






