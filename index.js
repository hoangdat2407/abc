function menuClick(x) {
var menu = document.getElementsByClassName("menu");

  //Home[0].addEventListener("click",()=> {
  if (x == 0) {
    // t nghĩ là do việc set lại menu[0] ntn
    // sẽ chỉ tạo mới thẻ (tức lả c set listener cho nó, thì sau
    // khi nhấn 1 cái lại bị reset luôn)t hiểu rồi kk 
    // ok nhé:)
   menu[0].innerHTML = `
    
   <li><a href="#home" class="list-item " style="color:green" onclick="menuClick(0)" ><i class="fa-solid fa-house" style="color:green" ></i> Home</a></li>
   <li><a href="#math" class="list-item " onclick="menuClick(1)"><i class="fa-solid fa-infinity"></i> Math</a></li>
   <li><a href="#infomatic" class="list-item "  onclick="menuClick(2)"><i class="fa-solid fa-code"></i></i> Informatic</a></li>
   <li><a href="#contact" class="list-item "   onclick="menuClick(3)"><i class="fa-solid fa-phone"></i> Contact</a></li>
  <div class="underline t1"></div>
 
      `;
  };
  //About[0].addEventListener("click", ()=> {
  if (x == 1) {
    menu[0].innerHTML = `
     
    <li><a href="#home" class="list-item " onclick="menuClick(0)" ><i class="fa-solid fa-house" ></i> Home</a></li>
    <li><a href="#math" class="list-item "style="color:green"  onclick="menuClick(1)"><i class="fa-solid fa-infinity"style="color:green" ></i> Math</a></li>
    <li><a href="#infomatic" class="list-item "  onclick="menuClick(2)"><i class="fa-solid fa-code"></i></i> Informatic</a></li>
    <li><a href="#contact" class="list-item "   onclick="menuClick(3)"><i class="fa-solid fa-phone"></i> Contact</a></li>
   <div class="underline t2"></div>
  
      `;
  }
  // });
  if (x == 2) {
  // Contact[0].addEventListener("click",  ()=> {
    menu[0].innerHTML = `
   
    <li><a href="#home" class="list-item " onclick="menuClick(0)" ><i class="fa-solid fa-house" ></i> Home</a></li>
    <li><a href="#math" class="list-item " onclick="menuClick(1)"><i class="fa-solid fa-infinity"></i> Math</a></li>
    <li><a href="#infomatic" class="list-item " style="color:green"  onclick="menuClick(2)"><i class="fa-solid fa-code" style="color:green"></i></i> Informatic</a></li>
    <li><a href="#contact" class="list-item "  onclick="menuClick(3)"><i class="fa-solid fa-phone"></i> Contact</a></li>
   <div class="underline t3"></div>
  
      `;
  }
  if(x==3)
  {
    menu[0].innerHTML = `  
    <li><a href="#home" class="list-item " onclick="menuClick(0)" ><i class="fa-solid fa-house" ></i> Home</a></li>
    <li><a href="#math" class="list-item " onclick="menuClick(1)"><i class="fa-solid fa-infinity"></i> Math</a></li>
    <li><a href="#infomatic" class="list-item "  onclick="menuClick(2)"><i class="fa-solid fa-code"></i></i> Informatic</a></li>
    <li><a href="#contact" class="list-item " style="color:green"  onclick="menuClick(3)"><i class="fa-solid fa-phone"style="color:green"></i> Contact</a></li>
   <div class="underline t4"></div>
  
`;
  }
  // });
};
