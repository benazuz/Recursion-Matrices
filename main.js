// let x = 5
// const factorial = function(baseNum, totalSum = 0){
//     if(baseNum === 1){
//         return totalSum
//     }
//     if(totalSum === 0){totalSum = baseNum}
//     let nextNum = (baseNum -1)

//     totalSum *= nextNum

//     baseNum--

//     return factorial(baseNum, totalSum)
// }
// console.log(factorial(5))


// const reverseStringR = function(str){

//     if(str === null){return null}

//     if(str.length <= 1){return str}

//     return (reverseStringR(str.substring(1)) + str.charAt(0))

// }

// console.log(reverseStringR("Ben Azuz ABCDEF"))


// const arr1 = [1, 2, 3]
// const arr2 = []

// const swapR = function(arr, newArr = []){
//     if(arr.length === 0){
//         return newArr
//     }

//     let item = arr.splice(0, 1)
//     let itemFixed = item[0]
//     newArr.push(itemFixed)
//     swapR(arr, newArr)
// }

// swapR(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]

// class Stack {
//     constructor() {
//         this.stack = []
//         this.length = 0
//     }

//     print() {
//         console.log(this.stack)
//     }

//     push(x) {
//         this.stack[this.length] = x
//         this.length++
//     }

//     isEmpty() {
//         return this.length === 0
//     }
//     peek() {
//         return this.isEmpty() ? null : this.stack[this.length - 1]
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return null
//         }
//         this.length--
//         return delete this.stack[this.length]
//     }
// }

// let myStack1 = new Stack()
// let myStack2 = new Stack()
// myStack1.push(1)
// myStack1.push(2)
// myStack1.push(3)
// console.log(myStack1)
// console.log(myStack2)
// myStack1.print() //[]
// myStack2.print() //[1, 2, 3]


// const swapRStack = function (stack1, stack2) {
//     if (stack1.isEmpty()) {
//         return stack2
//     }

//     let item = stack1.peek()
//     stack1.pop()
//     stack2.push(item)

//     return swapRStack(stack1, stack2)
// }

// swapRStack(myStack1, myStack2)
// myStack1.print() //[]
// myStack2.print() //[1, 2, 3]

///matrices
// const generateMatrix = function (numRows, numColumns) {
//     let matrix = []
//     let num = 1

//     for (let r = 0; r < numRows; r++) {
//         matrix.push([])
//         for (let c = 0; c < numColumns; c++) {
//             matrix[r].push(num++)
//         }
//     }
//     return matrix
// }
// let matrix = generateMatrix(3, 4)

// const printMatrix = function(matrix){
//     for(let row of matrix){
//         for(let r of row){
//             console.log(r)
//         }
//     }
//     //lession did it like this (noob lession? or noob me):
//     // for (let i = 0; i < matrix.length; i++) {
//     //     for (let j = 0; j < matrix[i].length; j++) {
//     //         console.log(matrix[i][j])
//     //     }
//     // }
// }
// printMatrix(matrix)


// const getFromMatrix = function (rowNum, colNum){
//     return matrix[rowNum][colNum]
// }

// console.log(getFromMatrix(1, 2))

// const printInOrder = function(matrix){
//     for(let i = 0; i<matrix.length; i++){
//         let line = ""
//         for(let j = 0; j<matrix[i].length; j++){
//             line += (matrix[i][j] + "\t")
//         }
//         console.log(line)
//     }
// }
// printInOrder(matrix)

// const printRow = function(matrix, rowNum) {
//     for (let i = 0; i < matrix[rowNum].length; i++) {
//         console.log(matrix[rowNum][i])
//     }
// }

// printRow(matrix, 2)

// const alterMatrix = function (matrix, r, c, v) {
//     matrix[r][c] = v
//     return matrix
// }
// console.log(alterMatrix(matrix, 1, 3, 174))

class Matrix {
    constructor(numRows, numColumns) {
        this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        this.matrix = []
        let num = 1
    
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(num++)
            }
        }
    }

    printSeperate(){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                console.log(this.matrix[i][j])
            }
        }
    }

    get(rowNum, colNum){
        return this.matrix[rowNum][colNum]
    }
        
    print(){
        for(let i = 0; i<this.matrix.length; i++){
            let line = ""
            for(let j = 0; j<this.matrix[i].length; j++){
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    findCoordinate(value){
        let obj = {}
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return obj = { x: j, y: i }
                }
            }
        }
    }
    
}

let m = new Matrix(3, 4)
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

//continue from exercise 3