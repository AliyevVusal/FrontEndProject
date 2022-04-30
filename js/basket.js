
function  BasketDiv() {

    let basket = JSON.parse(localStorage.getItem('basket'))

    if(basket.length == 0){
        document.querySelector('.emptybasket').classList.remove('d-none');

        document.querySelector('.cartproduct').classList.add('d-none');

        document.querySelector('.contentbasketbox').classList.add('d-none');
    }else{
        document.querySelector('.emptybasket').classList.add('d-none');

        document.querySelector('.cartproduct').classList.remove('d-none');
       
        document.querySelector('.contentbasketbox').classList.remove('d-none');


        var totalprice = 0;

        for(let product of basket){

            let price = product.Price;
            price = price.slice(1);
            price = Number(price);
            let count = Number(product.Count);
            total = 0;
            total = price*count;
            totalprice+=total;
        }

        document.querySelector('#msubtotal').innerHTML = totalprice;

        var  myproduct = "";

        for(let product of basket){
            
            myproduct+= `

                    <div class="basketbox col-12 mt-3">
                        <div id="${product.Id}" class="row align-items-center">
                        
                            <div class="col-lg-2">
                                <div class="productimg">
                                    <img src="${product.Img}" alt="">
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="productname">
                                    <h3>${product.Name}</h3>
                                </div>
                            </div>    
                            

                            <div class="col-lg-2">
                                <div class="productprice">
                                    <h3 id="price">${product.Price}</h3>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="quality">
                                    <span id="minus"><i class="fa-solid fa-minus"></i></span>
                                    <span id="count">${product.Count}</span>
                                    <span id="plus"><i class="fa-solid fa-plus"></i></span>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="subtotalproduct">
                                    <h3 id="subtotal">${Number(product.Count) * Number(product.Price.slice(1))}</h3>
                                </div>
                            </div>

                        </div>   
                    </div>
            
            `

            document.getElementById('list').innerHTML = myproduct;            

        }


        let minus = document.querySelectorAll('#minus');
        let plus = document.querySelectorAll('#plus');
        let number =  1;
        
        plus.forEach(element => {
            element.addEventListener('click',()=>{
                basket.forEach(e=>{
                    if(element.parentElement.parentElement.parentElement.getAttribute('id') == e.Id){

                        e.Count++;
                        element.parentElement.children[1].innerHTML = e.Count;
                        localStorage.setItem('basket',JSON.stringify(basket));
                    }
                })

            })
        });


        minus.forEach(element => {
            element.addEventListener('click',()=>{
                basket.forEach(e=>{
                    if(element.parentElement.parentElement.parentElement.getAttribute('id') == e.Id){

                        if(e.Count>0){
                            e.Count--;
                            element.parentElement.children[1].innerHTML = e.Count;
                            localStorage.setItem('basket',JSON.stringify(basket));
                            BasketDiv();
                        }
                    }
                })

            })
        });


        document.querySelector('#basketreset').addEventListener('click',()=>{

            basket=[];
            localStorage.setItem('basket',JSON.stringify(basket));
            BasketDiv();
        })



    }

}



BasketDiv();

