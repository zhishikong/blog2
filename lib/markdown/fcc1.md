&emsp;在FreeCodeCamp遇到一个题：用JS将给定的数字转换成罗马数字，以下是我想的解题方法（可行通过，仅限4000以内的数）。

```
function convert(num) {
 var arr = [['','I','II','III','IV','V','VI','VII','VIII','IX'],//个位
            ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],//百位
            ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M'],//十位
            ['','M','MM','MMM','IV','V','VI','VII','VIII','IX']//千位
           ];
  //罗马数字I=1,V=5,X=10,L=50,C=100,D=500,M=1000;

 var sum = []; //结果容器
 var s = num.toString(); //获取num字符串
 for(var i=0;i<s.length;i++){
   sum[i] = parseInt(s[i]);  //获取个(十百千)位整数
   if(sum[i] === 0) sum[i] = ""; //罗马数字没有0
 } 

 sum.reverse(); //使零位等于个位，以此类推...
 for(var y=0;y<sum.length;y++){  //循环遍历sum
    if(sum[y]){
    sum[y] = arr[y][sum[y]];     //个(十百千)位arr[y]等于对应的罗马数字sum[y]
  }
 } 

 sum = sum.reverse().join("");//整合数组
 return sum;
}


convert(97);

```


