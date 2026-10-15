
{title:"Kora", category:"ভাইরাল ভিডিও", img:"https://picsum.photos/seed/38/400/300", time:"0:25", link:"https://t.me/prime_vplayer_bot?start=video_12"},
const grid=document.getElementById('grid');
const vids=[
 {title:"ভাবি ভাই বোন ভাইরাল ভিডিও লিংক", category:"বাংলাদেশি ভিডিও", img:"https://picsum.photos/400/300?1", time:"5:34", link:"https://t.me/viralvideolink07/2"},
 {title:"বাংলা ভাবি নতুন ভাইরাল", category:"বাংলাদেশি ভিডিও", img:"https://picsum.photos/400/300?2", time:"3:12", link:"https://t.me/viralvideolink07/3"},
 {title:"বাংলাদেশি ভাইরাল লিংক ২০২৪", category:"ভাইরাল ভিডিও", img:"https://picsum.photos/400/300?3", time:"2:45", link:"https://t.me/viralvideolink07/4"},
 {title:"ভাই বোন ভাইরাল ভিডিও", category:"ছোট বোন", img:"https://picsum.photos/400/300?4", time:"6:10", link:"https://t.me/viralvideolink07/5"},
 {title:"ভাইরাল ভিডিও লিংক - ভাবি", category:"ভাইরাল ভিডিও", img:"https://picsum.photos/400/300?5", time:"4:20", link:"https://t.me/viralvideolink07/6"},
  {title:"গার্লফ্রেন্ড ভাইরাল ভিডিও"...},
 {title:"নতুন ভাইরাল ভিডিও", category:"ভাইরাল ভিডিও", img:"https://picsum.photos/400/300?99", time:"4:11", link:"https://t.me/viralvideolink07/99"},
];

let currentCat = "সব একসাথে";
function render(){
  if(!grid) return;
  grid.innerHTML="";
  let filtered = currentCat==="সব একসাথে"? vids : vids.filter(v=>v.category===currentCat);
  filtered.forEach((v,i)=>{
    grid.innerHTML+=`<div class="card" onclick="openVideo(${i})"><img src="${v.img}"><span class="time">${v.time}</span><p>${v.title}</p></div>`
  })
}
render();

window.openVideo = function(index){
  const v = vids[index];
  let modal = document.createElement('div');
  modal.id="videoModal";
  modal.style=`position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px`;
  modal.innerHTML=`
    <div style="background:#141a2e;width:100%;max-width:360px;border-radius:16px;padding:20px;text-align:center;border:1px solid #333">
      <img src="${v.img}" style="width:100%;border-radius:12px">
      <h3 style="margin:12px 0;color:#fff">${v.title}</h3>
      <button id="step1" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:linear-gradient(90deg,#ff0066,#ff3c00);color:#fff;font-weight:bold">1. বিজ্ঞাপন দেখো - 3s</button>
      <button id="step2" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:#222;color:#888" disabled>2. চ্যানেল Join করো</button>
      <button id="step3" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:#222;color:#888" disabled>3. ভিডিও দেখো ▶</button>
      <button onclick="document.getElementById('videoModal').remove()" style="margin-top:10px;background:none;border:0;color:#666">Close</button>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById('
// --- BOT LINK SYSTEM - NEW ---
let botIdToSend = `video_${index + 1}`;
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('v')){
  botIdToSend = urlParams.get('v');
}
let finalBotLink = `https://t.me/prime_vplayer_bot?start=${botIdToSend}`;

document.getElementById('step1').onclick=()=>{
  document.getElementById('step1').innerText="Loading...";
  setTimeout(()=>{
    document.getElementById('step1').innerText="✅ Ad শেষ";
    document.getElementById('step1').style.background="#00ff88";
    let s2=document.getElementById('step2'); s2.disabled=false; s2.style.background="#2ea6ff";
    s2.onclick=()=>{
      s2.innerText="Loading...";
      setTimeout(()=>{
        s2.innerText="✅ Ad শেষ";
        s2.style.background="#00ff88"; s2.style.color="#000";
        let s3=document.getElementById('step3'); s3.disabled=false; s3.style.background="#2ea6ff";
        s3.onclick=()=>{
          // --- FINAL STEP - BOT এ পাঠাবে ---
          if(window.Telegram && Telegram.WebApp){
            Telegram.WebApp.openTelegramLink(finalBotLink);
          } else {
            window.open(finalBotLink, "_blank");
    
          
     {title:"নতুন ভিডিও", category:"ভাইরাল লিংক", img:"https://picsum.photos/seed/902/400/300", time:"0:25", link:"https://t.me/prime_vplayer_bot?start=video_8"},     
          
          }
        }
      },1500);
    }
  },1000);
}
setTimeout(()=>{let l=document.getElementById('loader'); if(l) l.style.display='none'; let a=document.getElementById('ageGate'); if(a) a.style.display='flex'},800);
let y=document.getElementById('yes18'); if(y) y.onclick=()=>{document.getElementById('ageGate').style.display='none'};
let n=document.getElementById('no18'); if(n) n.onclick=()=>{window.Telegram.WebApp.close()};
let tg=window.Telegram.WebApp; tg.expand();
