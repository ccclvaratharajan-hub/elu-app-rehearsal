const titles={
dashboard:["Executive Dashboard","One premium command view for appointments, units, photos and progress."],
appointments:["Appointment Schedule","Add, edit, reschedule or cancel appointments from one workspace."],
planner:["Appointment Planner","Today, tomorrow and next 7 days — simple operational view."],
units:["Unit Register","Fast unit search, filters and status tracking."],
blocks:["Block Board","Visual floor-by-floor status board."],
survey:["Survey Visits","Reference-only site visit diary."],
complaints:["Complaint Register","Track issues, ownership and closure."],
photos:["Photo Report","Separate daily photo register and monthly output."],
reports:["Meeting Report","Manager reports, summaries and exports."]
};

function setView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+name)?.classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  const [t,s]=titles[name]||titles.dashboard;
  document.getElementById("pageTitle").textContent=t;
  document.getElementById("pageSubtitle").textContent=s;
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
  const nav=e.target.closest("[data-view]");
  if(nav){setView(nav.dataset.view);return}
  const go=e.target.closest("[data-go]");
  if(go){setView(go.dataset.go);return}
});

const search=document.getElementById("searchDrawer");
document.getElementById("globalSearchBtn").addEventListener("click",()=>search.classList.add("open"));
document.getElementById("closeSearch").addEventListener("click",()=>search.classList.remove("open"));
search.addEventListener("click",e=>{if(e.target===search)search.classList.remove("open")});

document.querySelectorAll(".zone-tabs button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".zone-tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active")
}));
document.querySelectorAll(".planner-toolbar .tab").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".planner-toolbar .tab").forEach(x=>x.classList.remove("active"));b.classList.add("active")
}));

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
}

const v4Search=document.getElementById("v4GlobalSearch");
if(v4Search){v4Search.addEventListener("focus",()=>document.getElementById("searchDrawer")?.classList.add("open"))}

let v6t=null;function v6Toast(m){let t=document.getElementById("v6toast");if(!t){t=document.createElement("div");t.id="v6toast";t.className="v6toast";document.body.appendChild(t)}t.textContent=m+" · design only";t.classList.add("show");clearTimeout(v6t);v6t=setTimeout(()=>t.classList.remove("show"),1500)}document.addEventListener("click",e=>{const b=e.target.closest("[data-demo-action]");if(b)v6Toast(b.dataset.demoAction||"Action")});
