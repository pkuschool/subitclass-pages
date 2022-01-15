const Wechat=`      
<div>             
    <h2>微信/TEL</h2>
    <p>微信群里就能找到我（</p>
</div>`;
const Office_mail=`
<div>   
    <h2>Office 365 (Outlook)</h2>
    <div>
        <a href="mailto:weizifeng2024@i.pkuschool.edu.cn">weizifeng2024@i.pkuschool.edu.cn</a>
    </div>
</div>`;
const Yammer=`
<div>   
    <h2>Yammer</h2>
    <div>
        <a href="https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6IjExMDU1ODQ4ODk4NTYifQ">魏子峰</a>
    </div>
</div>`;

function We_click(){
    const card=document.getElementById("contact-card");
    card.innerHTML = Wechat;
};
function Of_click(){
    const card=document.getElementById("contact-card");
    card.innerHTML = Office_mail;
};
function Ya_click(){
    const card=document.getElementById("contact-card");
    card.innerHTML = Yammer;
};