##### 通过css制作气泡窗口右边的三角形凸起效果的demo代码如下：
```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>气泡窗口的小三角形</title>
		<style type="text/css">
			.delta{
				width: 348px;
				height: 140px;
				border:1px solid  #D3D3D3;
				border-radius: 10px;
			}
			.delta:before{
				content: "";
				display: block;
				position: absolute;
				top: 57px;
				left: 357px;
				overflow: hidden;
				width: 0;
				height: 0;
				border-width: 12px;
				border-style: dashed dashed dashed solid;
				border-color: transparent transparent transparent lightgray;
			}
			.delta:after{
				content: "";
				display: block;
				position: absolute;
				top: 59px;
				left: 357px;
				overflow: hidden;
				width: 0;
				height: 0;
				border-width: 10px;
				border-style: dashed dashed dashed solid;
				border-color: transparent transparent transparent white;
			}
		</style>
	</head>
	<body>
		<div class="delta">
		</div>
	</body>
</html>
```

#### 效果：

![](https://img-blog.csdnimg.cn/20190923130406401.png)







