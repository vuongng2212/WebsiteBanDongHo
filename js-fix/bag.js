
    let cartProductArr = window.localStorage.getItem("cartProduct");
    cartProductArr = JSON.parse(cartProductArr);
    console.log(cartProductArr);
    let container = document.querySelector(".shop.box-container");
    console.log(container); 
    let thanhToanBtn = document.getElementById("thanhToanBtn");
    console.log(thanhToanBtn);
    let flag = true;
    let right_bar = document.querySelector(".right-bar");
    let priceShow1 = document.getElementById("priceShow1");
    let priceShow2 = document.getElementById("priceShow2");
    console.log(right_bar);
    
    let stringItem = ``;
    let stringDeal = ``;
    let sumPrice = 0;

    if(cartProductArr.length==0){
      console.log("co hang");

            flag = false;
            // container.classList.add("empty");
            // right_bar.classList.add("none");
    }
    if(flag == true){
      cartProductArr.forEach((item)=>{
        stringItem+=`<div class="box">
                <img src="${item.sp.img[0]}" alt="">
                <div class="content"  style="text-align: left;">
                    <h3>${item.sp.name}</h3>
                    <h4>Price:${item.sp.price.toLocaleString()}₫</h4>
                    <p class="unit">Quantity: <span>${item.quantity}</span>
                    <p class="btn-area">
                        <i class="fa fa-trash"></i>
                        <span class="btn2">Xóa</span>
                    </p>
                </div>
            </div>`;
            sumPrice+=(item.quantity*item.sp.price);
            // right_bar.classList.remove("none");
    });
    container.innerHTML=stringItem;
    priceShow1.innerHTML = sumPrice.toLocaleString();
    priceShow2.innerHTML = sumPrice.toLocaleString();
    }
   
    // thanhToanBtn.onclick()

    
    
    function chotDeal(){
      if(cartProductArr.length==0){
        alert("Chua co san pham thanh toan");
      }else {
        location.href("thanhToan.html");
        console.log("ahiu")
      }
      console.log("ahihi");
    }
    thanhToanBtn.addEventListener("click",()=>{
      if(sumPrice ==0){
        
        alert("Chưa có sản phẩm để thanh toán");
      }else{
        location.href = "thanhToan.html";
      }
    })
    
