这是SomeBottle的服务器，一个简单的Minecraft Java版~~土豆~~服务器.  

没有华丽的插件,纯粹大家在一起玩玩~  

准备好了吗？接着往下看吧.  

<img src='https://ae02.alicdn.com/kf/Hcb727e6567b74672a3a709bcc6796fe1V.jpg' style='width:400px'></img>  

本服为**国际正版公益服**，且有白名单  

刚刚跨过<span id="years">?</span>周年的大门，目前处在五周目  

本服周目轮回很慢，一般一年一周目，主要靠投票决定  

从2021年初开始，我们使用自研 ~~(说得高大上一点)~~ 的**BottleM组件**来灵活运营服务器：由小伙伴们自助在群内开启服务器，没有人的时候服务器实例自动回收 ~~(很省成本的操作)~~ 。当然，存档并不会丢失 ~~(服务器已经快进到云共享存档了)~~  

------

相关程序我已经全部开源在了Github，欢迎大伙儿前来点Star：  
https://github.com/Bottle-M  

-----

尽管如此，服务器仍然需要**一定的费用**进行维持（存档云储存，托管Backend的机器等等）。如果你能支持一下咱们服务器，我们接受**无偿赞助**。  
~~饿饿o(>﹏\<)o~~  

嘛，简单介绍就到这里罢~接下来咱推荐你去看看[服规](#!rules)。

<script>
const DREAM_START_TIME = "2015-9-3";
const START_DATE = new Date(DREAM_START_TIME);
const CURRENT_DATA = new Date();
const YEARS_GAP = CURRENT_DATA.getFullYear() - START_DATE.getFullYear();
const MONTHS_GAP = CURRENT_DATA.getMonth() - START_DATE.getMonth();
const DAYS_GAP = CURRENT_DATA.getDate() - START_DATE.getDate();
let serverYears = YEARS_GAP;
if (MONTHS_GAP < 0 || (MONTHS_GAP == 0 && DAYS_GAP < 0)) {
  serverYears--;
}
document.getElementById("years").innerText = serverYears;
</script>