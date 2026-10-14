const grid=document.getElementById('grid');

// --- এখানে তোমার ভিডিও লিস্ট, লিংক চেঞ্জ করে দাও ---
const vids=[
 {title:"ভাবি ভাই বোন ভাইরাল ভিডিও লিংক",img:"https://picsum.photos/300/200?1",time:"5:34", link:"https://t.me/viralvideolink07/2"},
 {title:"বাংলা ভাবি নতুন ভাইরাল",img:"https://picsum.photos/300/200?2",time:"3:12", link:"https://t.me/viralvideolink07/3"},
 {title:"বাংলাদেশি ভাইরাল লিংক ২০২৪",img:"https://picsum.photos/300/200?3",time:"2:45", link:"https://t.me/viralvideolink07/4"},
 {title:"ভাই বোন ভাইরাল ভিডিও",img:"https://picsum.photos/300/200?4",time:"6:10", link:"https://t.me/viralvideolink07/5"},
 {title:"ভাইরাল ভিডিও লিংক - ভাবি",img:"https://picsum.photos/300/200?5",time:"4:20", link:"https://t.me/viralvideolink07/6"},
 {title:"গার্লফ্রেন্ড ভাইরাল ভিডিও",img:"https://picsum.photos/300/200?6",time:"2:10", link:"https://t.me/viralvideolink07/7"},
];

function render(){
 grid.innerHTML="";
 vids.forEach((v,i)=>{
   grid.innerHTML+=`<div class="card" onclick="openVideo(${i})"><img src="${v.img}"><span class="time">${v.time}</span><p>${v.title}</p><div class="play-icon">▶</div></div>`
 })
}
render();

// --- স্ক্রিন রেকর্ডের মতো লক সিস্টেম ---
window.openVideo = function(index){
  const v = vids[index];
  // Modal বানাও
  let modal = document.createElement('div');
  modal.id="videoModal";
  modal.style=`position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px`;
  modal.innerHTML=`
    <div style="background:#141a2e;width:100%;max-width:360px;border-radius:16px;padding:20px;text-align:center;border:1px solid #222">
      <img src="${v.img}" style="width:100%;border-radius:12px">
      <h3 style="margin:12px 0">${v.title}</h3>
      <p style="font-size:13px;color:#aaa">ভিডিও দেখতে ৩ টা স্টেপ কমপ্লিট করো</p>

      <button id="step1" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:linear-gradient(90deg,#ff0066,#ff3c00);color:#fff;font-weight:bold">1. বিজ্ঞাপন দেখো (Ad) - 10s</button>
      <button id="step2" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:#222;color:#888" disabled>2. টেলিগ্রাম চ্যানেল Join করো</button>
      <button id="step3" style="width:100%;padding:14px;margin:8px 0;border-radius:10px;border:0;background:#222;color:#888" disabled>3. ভিডিও দেখো ▶</button>
      <button onclick="document.getElementById('videoModal').remove()" style="margin-top:10px;background:none;border:0;color:#666">Close</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Step 1 - Ad
  document.getElementById('step1').onclick = ()=>{
    // Monetag Ad - তোমার Ad ID এখানে বসবে
    if(typeof show_9421234 === 'function'){
      show_9421234().then(()=>{
        unlockStep2();
      });
    } else {
      // Ad না থাকলে ডেমো হিসেবে 3 সেকেন্ড পর unlock
      document.getElementById('step1').innerText="Loading Ad...";
      setTimeout(unlockStep2, 3000);
    }
  };

  function unlockStep2(){
    document.getElementById('step1').innerText="✅ Ad দেখা শেষ";
    document.getElementById('step1').style.background="#0f3";
    document.getElementById('step1').style.color="#000";
    let s2=document.getElementById('step2');
    s2.disabled=false; s2.style.background="#1a223e"; s2.style.color="#fff";
    s2.onclick=()=>{
      window.open("https://t.me/viralvideolink07","_blank");
      s2.innerText="✅ Join Done";
      s2.style.background="#0f3"; s2.style.color="#000";
      let s3=document.getElementById('step3');
      s3.disabled=false; s3.style.background="linear-gradient(90deg,#00ff88,#00ccff)"; s3.style.color="#000";
      s3.onclick=()=>{
        window.open(v.link,"_blank");
        document.getElementById('videoModal').remove();
      }
    }
  }
}

// Loader + Age Gate
setTimeout(()=>{document.getElementById('loader').style.display='none';document.getElementById('ageGate').style.display='flex'},1200);
document.getElementById('yes18').onclick=()=>{document.getElementById('ageGate').style.display='none'};
document.getElementById('no18').onclick=()=>{window.Telegram.WebApp.close()};
document.getElementById('goProfile').onclick=()=>{document.getElementById('profilePage').style.display='block'};
document.getElementById('backHome').onclick=()=>{document.getElementById('profilePage').style.display='none'};

// Telegram User Info
const tg = window.Telegram.WebApp;
tg.expand();
const user = tg.initDataUnsafe?.user;
if (user) {
  const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim();
  const username = user.username? `@${user.username}` : `ID: ${user.id}`;
  if(document.querySelector('.user-name')) document.querySelector('.user-name').innerText = fullName || "USER";
  if(document.querySelector('.user-username')) document.querySelector('.user-username').innerText = username;
  if (user.photo_url && document.querySelector('.user-avatar')) {
    document.querySelector('.user-avatar').src = user.photo_url;
  }
  const refLink = `https://t.me/viralvideolink07_bot?startapp=ref_${user.id}`;
  if(document.querySelector('.ref-link-input')) document.querySelector('.ref-link-input').value = refLink;
}
