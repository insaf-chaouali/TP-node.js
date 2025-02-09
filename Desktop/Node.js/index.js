//tenary operation
if(a>b){
    console.log(a>b)
}else{
    console.log(a<b)
}
a>b ? console.log(a>b):console.log(a<b)
//regular expression
const firstName="med"
const lastName="amine"
console.log(firstName+""+lastName)
console.log('${fisrtName} ${lastName}')
//spread object
const user = {
   firstUserName:"Alex",
    lastName:"ch",
    age:24
}
return console.log({...user,jobTitle:"Developer"}

)
//spread array 
const arr1 =[1,2,3,4,5]
const arr2 =[6,7,8,9]
const arr3 =[...arr1,...arr2]
return console.log(arr3)
//Destructing the object
const {firstUserName,age}=user
console.log(firstUserName)
//destructing array 
const [c,d,e]=arr3
console.log(c,d,e)