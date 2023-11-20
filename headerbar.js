var header=`<div class="header">
<div class="name">AZEE</div>
<div class="h-left">
    <a href="index.html"><button class="header-buttons" role="button">Home</button></a>
    <a href="scratch.html"><button class="header-buttons" role="button">
    <img class="scratch-icon" src="scratch2.png"></button></a>
    <a href="content.html"><button class="header-buttons" role="button">Content Writing</button></a>
    <a href="contact.html"><button class="header-buttons" role="button">Contact Us</button></a>
    <a href="about-us.html"><button class="header-buttons" role="button">About Us</button></a>
</div>

<div class="h-right">
    <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search">
        <a href="https://www.google.com">
            <div class="search-icon">
            </div>
        </a>        
    </div>
</div>
</div>`
document.body.insertAdjacentHTML("afterbegin", header);