// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
let l1=[2,4,3];
let l2=[5,6,4];

let one=l1.join("")
let two=l2.join("")
let ans=parseInt(one)+parseInt(two)
console.log(ans)
let arr=[]
let sum=0
let val
console.log(ans.length)
for(let i=0;i<ans.length;i++){
    console.log("for");
       val=parseInt(ans)%10
       console.log(val)
        sum=sum*10+val
        val=parseInt(ans/10)
}
