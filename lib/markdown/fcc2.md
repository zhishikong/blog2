#### 在FreeCodeCamp遇到一个题：找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

我是这样做的：
```
function smallestCommons(arr) {
  arr = arr.sort();  //从小到大排序
  var result ;       //结果
  var judge = false; //判断公倍数
  var count = 0;     //计数
  for(var g=arr[1];g<400000;g++){    //从arr[1]开始遍历判断公倍数g，‘j<400000’可为空,直到无穷（不推荐）
    //①
    for(var i=arr[0];i<=arr[1];i++){ //遍历 给定参数arr之间的连续数字
      if(g%arr[1] !== 0) break;      //是否arr[1]的倍数，加快循环判断
      if(g%i !== 0) break;           //是否i的倍数
      else count++;                  
      //如果count等于参数之差，则j是所求的公倍数
      if(count === arr[1]-arr[0]) {judge = true; result = g;}
    }
    //②
    if(judge === true) break;        //判断g是公倍数,遍历结束
    else count = 0;                  //否则重新计数
  }   

  return result;
}


smallestCommons([5,1]);
```

