## 介绍

一天时间写的一个小demo，包括两个页面，注册页和音乐律动页

**具体要求**：

- 注册页：
  1. 点击登录必须验证必填选择,验证不通过弹出信息，让⽤户重新填写

  2. 点击登录完，使⽤json数据的格式，进⾏弹窗展示所填写的信息

  3. 过完3s中跳转⾳乐律动的⻚⾯

- 音乐律动页：

  1. 点击播放，播放mp3，再次点击停⽌播放

  2. 播放的时候，循环（每隔1s）⾼亮中间圆圈，⾼亮效果为第⼆个绿⾊圆圈，中间有图⽚，⾼亮时⽔果图⽚还是需要在中间。停⽌播放便停⽌⾼亮

## 收获

- 背景图片铺满过大导致有部分不显示

  ```css
  background-size: 100% 100%;  /* 正确设置 */
  
  background-size: cover;  /* 背景图像拓展至无限大，以使背景图像完全覆盖背景区域 */
  ```

- audio的src设置

  直接设置

  ```js
  this.audio.src = "@/assets/maka.mp3";
  ```

  控制台报错

  

  ![1675423430896](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1675423430896.png)

  解决方法：利用require动态引入

  ```js
  const url = require("@/assets/maka.mp3");
  this.audio.src = url;
  ```

  