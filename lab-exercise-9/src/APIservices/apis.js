import axios from 'axios'
export  async function getBooks(){
    var getbooksAPI="https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key="
    var apikey = "QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b"
    getbooksAPI+=apikey
    var books
    await axios.get("https://cynthiaesthermetilda.github.io/Xhrdemo/products.json").then((res)=>{
       books = res?.data
    //    console.log(books)
    }).catch((err)=>{
        console.log(err);
    });
    return (books)
}