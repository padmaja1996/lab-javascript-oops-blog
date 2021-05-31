/* Fill your code*/
document.getElementById("addBlog").addEventListener('click',function(){
    document.getElementById('popupContact').style.display = 'block';
});

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popupContact').style.display = 'none';
})

class Blog{
    constuctor(title,detail){
        this.title = title;
        this.detail = detail;
    }
    addTitle(){
        console.log('title',this.title);
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
        this.addDescription();
    }
    addDescription(){
        var description = document.createElement('p');
        description.setAttribute("id","blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML += this.detail;
    }
}

var post = document.getElementById('post').addEventListener('click',function(){
    var img = document.createElement('img');
    img.src = './assets/javascript.png';
    img.setAttribute('id','image');
    document.getElementById('card-text').appendChild(img);
    var title = document.getElementById('title').value;
    // console.log('title',title);
    var detail = document.getElementById('detail').value;
    var card = new Blog(title,detail);
    card.addTitle();
    card.addDescription();
})
