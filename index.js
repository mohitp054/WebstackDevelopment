const api_url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=gJUcrGeSRdqBsgnHb7Uky4gGQM7q9Ijq"
var booklist=[];
window.onload=()=>{ 
    var fetchbtnaction=document.getElementById("fetch-btn");
    fetchbtnaction.addEventListener('click',async()=>
    {
        await fetch(api_url).then((res)=>
        {
            res.json().then((data)=>
            {
            
                booklist=data.results.books;
                console.log(data);
                for(let i=0;i<booklist.length;i++)
                {
                    var book=document.createElement('div');
                    book.innerHTML=  `Title: ${booklist[i].title}   Author: ${booklist[i].author}`;
                    document.getElementById("booklist").appendChild(book);
                }
            })
        }).catch((err)=>
        {
            console.log(err);
        })
    })
}
