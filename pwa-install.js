let deferredInstallPrompt=null;
const installButton=document.getElementById("installRehearsalApp");

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("./service-worker.js").catch(err=>console.error("PWA registration failed",err));
  });
}

window.addEventListener("beforeinstallprompt",event=>{
  event.preventDefault();
  deferredInstallPrompt=event;
  if(installButton)installButton.hidden=false;
});

if(installButton){
  installButton.addEventListener("click",async()=>{
    if(!deferredInstallPrompt)return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt=null;
    installButton.hidden=true;
  });
}

window.addEventListener("appinstalled",()=>{
  deferredInstallPrompt=null;
  if(installButton)installButton.hidden=true;
});
