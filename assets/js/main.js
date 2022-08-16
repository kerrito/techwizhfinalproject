// Single Page Functions
function pageroutes(page) {
    if (JSON.parse(localStorage.getItem("cart"))) {
        document.querySelector("#cart-count").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
    } else {
        document.querySelector("#cart-count").innerHTML = "0";
    }  
    switch (page) {
        case "home":
            $.ajax({
                url: "assets/slicepage/home.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    document.querySelector(".nav-link").classList
                    featureitem();
                    popularItem();
                    pageactive(0);
                    menuhide();
                }
            });
            break;
        case "all":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("all");
                    pageactive(2);
                    menuhide();

                }
            });
            break;
        case "men":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("men");
                    menuhide();
                    pageactive(2);
                }
            });
            break;
        case "women":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("women");
                    pageactive(2);
                    menuhide();

                }
            });
            break;
        case "jeans":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("jeans");
                    pageactive(2);
                    menuhide();

                }
            });
            break;
        case "shirts":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("shirts");
                    pageactive(2);
                    menuhide();

                }
            });
            break;
        case "shoes":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("shoes");
                    pageactive(2);
                    menuhide();

                }
            });
            break;
        case "tshirts":
            $.ajax({
                url: "assets/slicepage/products.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    allProducts("tshirts");
                    pageactive(2);
                }
            });
            break;
        case "cart":
            $.ajax({
                url: "assets/slicepage/cart.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    // allProducts("tshirts");
                    cartLoad();
                    pageactive(5);
                    menuhide();

                }
            });
            break;
        case "about":
            $.ajax({
                url: "assets/slicepage/about.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    // allProducts("tshirts");
                    pageactive(1)
                }
            });
            break;
        case "feedback":
            $.ajax({
                url: "assets/slicepage/feedback.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    // allProducts("tshirts");
                    pageactive(4);
                    menuhide();

                }
            });
            break;
        case "contact":
            $.ajax({
                url: "assets/slicepage/contact.html",
                success: function (load) {
                    document.querySelector("#pages").innerHTML = load;
                    // allProducts("tshirts");
                    pageactive(3);
                    menuhide();

                }
            });
            break;
    }
}

pageroutes("home");

function pageactive(id) {
    for (var i = 0; i < document.querySelectorAll(".nav-link").length; i++) {
        document.querySelectorAll(".nav-link")[i].classList.remove("active")
    }
    if (!id) {
        document.querySelectorAll(".nav-link")[0].classList.add("active")
    } else {
        document.querySelectorAll(".nav-link")[id].classList.add("active")
        // id.classList.add("active");
    }
}

// Feature Product Function
function featureitem() {
    for (var i = 0; i < 4; i++) {

        document.querySelector("#featureCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[i].img}" class="main-pic" alt="">
        <div class="option">
            <img src="assets/img/${data[i].img}" onclick="item(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[i].img2}" onclick="item(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img3}" onclick="item(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img4}" onclick="item(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[i].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[i].finalprice} <del class="text-danger">(Rs. ${data[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

    }
}

// Current Location Work
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    document.querySelector("#ticker-location").innerHTML = "Geolocation is not supported by this Browser"
}

function showPosition(position) {
    document.querySelector("#ticker-location").innerHTML = " Location (Latitude : " + position.coords.latitude + " & Longitude : " + position.coords.longitude + ")";
}

// Scroll Ticker Function
function ticker() {
    var arsh = "";
    var da = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var mon = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December");
    var now = new Date();
    arsh += da[now.getDay()] + ", " + now.getDate() + " " + mon[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.querySelector("#ticker").innerHTML = arsh;
}
setInterval(ticker, 1000);

// Random Number function
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function popularItem() {
    var n = 0;
    for (var i = 0; i < 8; i++) {
        n = randNum(1, data.length);
        document.querySelector("#popularCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[n].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${data[n].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[n].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[n].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[n].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[n].id},'${data[n].heading}' ,'${data[n].img}', ${data[n].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[n].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[n].finalprice} <del class="text-danger">(Rs. ${data[n].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[n].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

    }
}

function allProducts(category) {
    if (category == "all") {
        document.querySelector("#title").innerHTML = "Products"
        for (var i = 0; i < data.length; i++) {
            n = randNum(1, data.length - 1);
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[n].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${data[n].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[n].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[n].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[n].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[n].id},'${data[n].heading}' ,'${data[n].img}', ${data[n].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[n].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[n].finalprice} <del class="text-danger">(Rs. ${data[n].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[n].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
    } else if (category == "men") {
        document.querySelector("#title").innerHTML = "Mens Products"
        document.querySelector("#p-title").innerHTML = "Mens Products"
        for (var i = 0; i < data.length; i++) {
            if (data[i].id < 1025) {
                document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${data[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart"onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[i].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[i].finalprice} <del class="text-danger">(Rs. ${data[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;
            }

        }
    } else if (category == "women") {
        document.querySelector("#title").innerHTML = "Women Products"
        document.querySelector("#p-title").innerHTML = "Women Products"
        for (var i = 0; i < data.length; i++) {
            if (data[i].id >= 1025) {
                document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${data[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[i].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[i].finalprice} <del class="text-danger">(Rs. ${data[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;
            }

        }
    } else if (category == "shoes") {
        document.querySelector("#title").innerHTML = "All Shoes"
        document.querySelector("#p-title").innerHTML = "All Shoes"
        for (var i = 0; i < shoes.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${shoes[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${shoes[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${shoes[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shoes[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shoes[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart"onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${shoes[i].heading}</div>
        <p>${shoes[i].cardtext}</p>
        <p class="m-0">Rs. ${shoes[i].finalprice} <del class="text-danger">(Rs. ${shoes[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${shoes[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
        for (var i = 0; i < shoes_women.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${shoes_women[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${shoes_women[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${shoes_women[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shoes_women[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shoes_women[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${shoes_women[i].heading}</div>
        <p>${shoes_women[i].cardtext}</p>
        <p class="m-0">Rs. ${shoes_women[i].finalprice} <del class="text-danger">(Rs. ${shoes_women[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${shoes_women[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
    } else if (category == "shirts") {
        document.querySelector("#title").innerHTML = "All Shirts"
        document.querySelector("#p-title").innerHTML = "All Shirts"
        for (var i = 0; i < shirts.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${shirts[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${shirts[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${shirts[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shirts[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shirts[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${shirts[i].heading}</div>
        <p>${shirts[i].cardtext}</p>
        <p class="m-0">Rs. ${shirts[i].finalprice} <del class="text-danger">(Rs. ${shirts[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${shirts[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
        for (var i = 0; i < shirts_women.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${shirts_women[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${shirts_women[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${shirts_women[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shirts_women[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${shirts_women[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${shirts_women[i].heading}</div>
        <p>${shirts_women[i].cardtext}</p>
        <p class="m-0">Rs. ${shirts_women[i].finalprice} <del class="text-danger">(Rs. ${shirts_women[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${shirts_women[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
    } else if (category == "jeans") {
        document.querySelector("#title").innerHTML = "All Jeans"
        document.querySelector("#p-title").innerHTML = "All Jeans"
        for (var i = 0; i < pants.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${pants[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${pants[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${pants[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${pants[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${pants[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${pants[i].heading}</div>
        <p>${pants[i].cardtext}</p>
        <p class="m-0">Rs. ${pants[i].finalprice} <del class="text-danger">(Rs. ${pants[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${pants[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
        for (var i = 0; i < pants_women.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${pants_women[i].img}" class="main-pic" alt="">
        <div class="option">
            <img src="assets/img/${pants_women[i].img}" onclick="item(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${pants_women[i].img2}" onclick="item(this,${i + 1})" alt="">
            <img src="assets/img/${pants_women[i].img3}" onclick="item(this,${i + 1})" alt="">
            <img src="assets/img/${pants_women[i].img4}" onclick="item(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${pants_women[i].heading}</div>
        <p>${pants_women[i].cardtext}</p>
        <p class="m-0">Rs. ${pants_women[i].finalprice} <del class="text-danger">(Rs. ${pants_women[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${pants_women[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
    } else if (category == "tshirts") {
        document.querySelector("#title").innerHTML = "All T-Shirts"
        document.querySelector("#p-title").innerHTML = "All T-Shirts"
        for (var i = 0; i < tshirts.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${tshirts[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${tshirts[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${tshirts[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${tshirts[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${tshirts[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${tshirts[i].heading}</div>
        <p>${tshirts[i].cardtext}</p>
        <p class="m-0">Rs. ${tshirts[i].finalprice} <del class="text-danger">(Rs. ${tshirts[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${tshirts[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
        for (var i = 0; i < tshirts_women.length; i++) {
            document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${tshirts_women[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${tshirts_women[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${tshirts_women[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${tshirts_women[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${tshirts_women[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${tshirts_women[i].heading}</div>
        <p>${tshirts_women[i].cardtext}</p>
        <p class="m-0">Rs. ${tshirts_women[i].finalprice} <del class="text-danger">(Rs. ${tshirts_women[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${tshirts_women[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;

        }
    } else {
        document.querySelector("#title").innerHTML = "Mens Products"
        document.querySelector("#p-title").innerHTML = "Mens Products"
        document.querySelector("#productCards").innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            let str = data[i].heading;
            if (str.search(category) >= 0) {
                document.querySelector("#productCards").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div class="card">
    <div class="img-box">
        <img src="assets/img/${data[i].img}" class="main-pic1" alt="">
        <div class="option">
            <img src="assets/img/${data[i].img}" onclick="item2(this,${i + 1})" class="active" alt="">
            <img src="assets/img/${data[i].img2}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img3}" onclick="item2(this,${i + 1})" alt="">
            <img src="assets/img/${data[i].img4}" onclick="item2(this,${i + 1})" alt="">
        </div>
        <button class="btn cart-btn" title="Add to Cart" onclick="cart(${data[i].id},'${data[i].heading}' ,'${data[i].img}', ${data[i].finalprice})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="card-body">
        <div class="fs-4">${data[i].heading}</div>
        <p>${data[i].cardtext}</p>
        <p class="m-0">Rs. ${data[i].finalprice} <del class="text-danger">(Rs. ${data[i].orignalprice})</del></p>
        <div class="d-flex justify-content-between">
            <span>Stock : ${data[i].stock}</span>
            <span class="text-success">Available</span>
        </div>
    </div>
</div>
</div>`;




            }
        }
    }

}


// Product Image Change Function  
function item(a, n) {
    document.querySelectorAll(".main-pic")[n - 1].src = a.src;
    var opt = n * 4;
    for (var i = opt - 4; i < opt; i++) {
        document.querySelectorAll(".card .option img")[i].classList.remove("active");
    }
    a.classList.add("active");
}

function item2(a, n) {
    document.querySelectorAll(".main-pic1")[n - 1].src = a.src;
    var opt = n * 4;
    for (var i = opt - 4; i < opt; i++) {
        document.querySelectorAll(".card .option img")[i].classList.remove("active");
    }
    a.classList.add("active");
}

var cartdata;
if (!localStorage.getItem("cart")) {
    cartdata = [];
} else {
    cartdata = JSON.parse(localStorage.getItem("cart"));
}

// Add to Cart Function
function cart(id, name, img, price) {
    cartdata.push({
        id: id,
        name: name,
        price: price,
        img: img
    });
    localStorage.setItem("cart", JSON.stringify(cartdata));
    document.querySelector("#cart-count").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
    // cartLoad();
}

function cartLoad() {
    if (localStorage.getItem("cart")) {
        var carttable = JSON.parse(localStorage.getItem("cart"));
        var total = 0;
        for (var i = 0; i < carttable.length; i++) {
            document.querySelector("#cartData").innerHTML += `<tr>
                            <td>${carttable[i].id}</td>
                            <td><img src="assets/img/${carttable[i].img}" ></td>
                            <td>${carttable[i].name}</td>
                            <td>${carttable[i].price}</td>
                        </tr>`;
            total = total + (parseInt(carttable[i].price));
        }
        document.querySelector("#totalAmount").innerHTML = "PKR. " + total;
        document.querySelector("#cart-count").innerHTML = JSON.parse(localStorage.getItem("cart")).length;
    }
}


const myModal = new bootstrap.Modal('#inputPopup');

var count = 0;
count = localStorage.getItem('counter');
count++;
localStorage.setItem('counter', count);
document.getElementById('usercount').innerHTML = count;

function pageload() {

    if (localStorage.getItem("prompt") == null && !localStorage.getItem("prompt")) {
        myModal.show();
        document.querySelector("#logoutBtn").innerHTML = "";
    } else {
        document.querySelector("#username").innerHTML = localStorage.getItem("prompt");
        document.querySelector("#logoutBtn").innerHTML = `<a class="nav-link" href="#" onclick="logout()"><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Logout</a>`;

    }

}

function saveName() {
    var nameParttern = /^[a-zA-Z]{3,30}$/;
    // var ctrl = document.getElemetnById(id);
    if (nameParttern.test(document.querySelector("#inputText").value)) {
        localStorage.setItem("prompt", document.querySelector("#inputText").value);
        document.querySelector("#username").innerHTML = localStorage.getItem("prompt");
        document.querySelector("#inputText").value = "";
        document.querySelector("#invalidName").classList.add("invisible");
        myModal.hide();
        pageload();
    } else {
        document.querySelector("#invalidName").classList.remove("invisible")
    }
}

function menuhide(){
    document.querySelector("#navbarBS").classList.remove("show");
}
const thankyou = new bootstrap.Modal('#modal12');

// function messegemodal(){
//     // if(localStorage.getItem("cart")!=null){
//     //     document.querySelectorAll("#modal12").classList.add("d-block")
//     //         }else{
//     //     document.querySelectorAll("#modal12").classList.add("d-none")
        
//     //         }
// }
function checkout() {
    var shipping_address=document.getElementById("shippingaddress_test").value;
    var test_shippingaddress=/^[a-zA-Z0-9 ]{10,45}$/;
    if(shipping_address!= null){
    if(test_shippingaddress.test(shipping_address)){


        if(localStorage.getItem("cart")){
            thankyou.show();
        }
        localStorage.removeItem("cart");
        cartdata=[];
        pageroutes("cart",5);
        document.querySelector("#cart-count").innerHTML = "0";  
    } else{
        alert("please fill up the Correct address")
    }} else{
        alert("Please fill up the address")
    }
}

function logout() {
    localStorage.removeItem("prompt");
    pageload();
    checkout();

}
pageload();