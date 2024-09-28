const tabs = document.querySelectorAll(".tabs-wrapper span")
const tab_content = document.querySelectorAll(".tab-content-wrapper section")


tabs.forEach((tab, index)=>{
   tab.addEventListener("click", ()=>{
      tab_content.forEach((content)=>{
         content.classList.remove("active")
      });
      tabs.forEach((tab)=>{
         tab.classList.remove("active")
      });
      tab_content[index].classList.add("active");
      tabs[index].classList.add("active")
   })
})