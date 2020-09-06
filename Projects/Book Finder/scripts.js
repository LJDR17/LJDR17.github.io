function main() {
    input = document.forms.search.input.value;
    function validate() {
        if (input === "") {
            alert("You can't leave the input blank");
            return false;
        }
        else {
            return true;
        }
    }
    if (validate()){
    //books=[];
   	var url = "";
   	var image = "";
    var title = "";
    var author = "";
    var publisher = "";
    
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + input, function(response) {
        for(i=0;i<response.items.length;i++){
            
            title=$('<h5>' + response.items[i].volumeInfo.title + '</h5>'); 
            title.appendTo('#books'); 

            author=$('<h5> By ' + response.items[i].volumeInfo.authors + '</h5>');
            author.appendTo('#books');

            publisher=$('<h5> Published by ' + response.items[i].volumeInfo.publisher + '</h5>');
            publisher.appendTo('#books');
                
            image = $('<img><br><a href=' + response.items[i].volumeInfo.infoLink + '</a>');
            url=response.items[i].volumeInfo.imageLinks.thumbnail
            image.attr('src', url);
            image.appendTo('#books');
        }
        
        /*for(i=0;i<response.items.length;i++) {
            books.push(response.items[i].volumeInfo.title);
            books.push(response.items[i].volumeInfo.authors);
            books.push(response.items[i].volumeInfo.imageLinks.thumbnail);
        }
        console.log(books)
        let length = response.items.length;*/

        })
        
    }
}
