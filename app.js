const grid=document.getElementById('grid');
const vids=[
{title:"ভাবি ভাই বোন ভাইরাল ভিডিও লিংক",img:"https://picsum.photos/300/200?1",time:"5:34"},
{title:"বাংলা ভাবি নতুন ভাইরাল",img:"https://picsum.photos/300/200?2",time:"3:12"},
{title:"বাংলাদেশি ভাইরাল লিংক ২০২৪",img:"https://picsum.photos/300/200?3",time:"2:45"},
{title:"ভাই বোন ভাইরাল ভিডিও",img:"https://picsum.photos/300/200?4",time:"6:10"},
{title:"ভাইরাল ভিডিও লিংক - ভাবি",img:"https://picsum.photos/300/200?5",time:"4:20"},
{title:"গার্লফ্রেন্ড ভাইরাল ভিডিও",img:"https://picsum.photos/300/200?6",time:"2:10"},
];
function render(){grid.innerHTML="";vids.forEach(v=>{grid.innerHTML+=`<div class="card"><img src="${v.img}"><span class="time">${v.time}</span><p>${v.title}</p></div>`})}
render();
setTimeout(()=>{document.getElementById('loader').style.display='none';document.getElementById('ageGate').style.display='flex'},1200);
document.getElementById('yes18').onclick=()=>{document.getElementById('ageGate').style.display='none'};
document.getElementById('no18').onclick=()=>{window.Telegram.WebApp.close()};
document.getElementById('goProfile').onclick=()=>{document.getElementById('profilePage').style.display='block'};
document.getElementById('backHome').onclick=()=>{document.getElementById('profilePage').style.display='none'};
// Telegram থেকে ইউজারের ইনফো নেওয়া
const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
    const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim();
    const username = user.username ? `@${user.username}` : `ID: ${user.id}`;
    
    // নাম চেঞ্জ করা
    document.querySelector('.user-name').innerText = fullName || "USER";
    document.querySelector('.user-username').innerText = username;

    // ছবি থাকলে ছবি চেঞ্জ করা
    if (user.photo_url) {
        document.querySelector('.user-avatar').src = user.photo_url;
    }

    // রেফারেল লিংক ডাইনামিক করা
    const refLink = `https://t.me/viral_video_link_bot?startapp=ref_${user.id}`;
    document.querySelector('.ref-link-input').value = refLink;
}
