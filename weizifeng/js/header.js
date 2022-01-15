document.querySelector(".header").innerHTML = `
<ul style="min-width: 600px;">
<li>
    <a href="index.html">主页</a>
</li>
<li>
    <a href="self.html">自我介绍</a>
</li>
<li><a href="article-guide.html">文章</a>
    <ul>
        <li><a href="./article/Coding.html">关于代码</a></li>
        <!-- <li><a href="">关于二次元</a></li>
         <li><a href="">关于Apple</a></li> -->
        <li><a href="./article/Hardware.html">关于电脑硬件</a></li>
    </ul>
</li>
<li><a href="version-history.html">更新日志</a>
    <ul>
        <li><a href="version-history.html#V1_0_0">V1.0.0</a></li>
        <li><a href="version-history.html#V1_1_0">V1.1.0</a></li>
        <li><a href="version-history.html#V1_2_0">V1.2.0</a></li>
    </ul>
</li>
<li><a href="writer's-word.html">作者的话</a>
</li>
</ul>
<script>
/*
$(function(){/*下拉菜单效果，300ms
    $("nav>ul").mouseover(function(){
        $(".head_block").stop().slideToggle(300);
        $(this>li>ul).stop().slideToggle(300);
    });
});
*/
</script>
`;