function concon(str1: string, str2: string):string {
    return str1+str2;
} 

console.log(concon("Hel", "low"));

interface HometaskInterf {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: {howIDoIt: string, simeArray: [string, number]}[]
}
  
const myHometask: HometaskInterf = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [n: number]: T;
  
    reduce<U>(acc: U, fn: (el: T) => U): U;
} 
