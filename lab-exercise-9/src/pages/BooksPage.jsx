import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { getBooks } from '../APIservices/apis'
import axios from 'axios'
import SingleBookCard from '../components/SingleBookCard'
import ReviewModal from '../components/ReviewModal'

function BooksPage() {

  const[books,setBooks]=useState([])
  const[realBooks,setRealBooks]=useState([])
  const[loading,setLoading]= useState(false)
  const [searchInput,setSearchInput]= useState("")
  const [noProducts,setNoProducts]=useState(false)
  const [reviewBook,setReviewBook]=useState("")
  const [modalActive,setModalActive]=useState(false)



  useEffect(()=>{
    setLoading(true)
      axios.get("https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b").then((res)=>{
       setBooks(res.data.results.books)
       setRealBooks(res.data.results.books)
       setLoading(false)
       console.log(books);
    }).catch((err)=>{
        console.log(err);
    });
  },[])



  const filterBook=()=>{
    var newlist=[]
    if(searchInput!==''){
      for (let i = 0; i < books.length; i++) {
        if (books[i].title.toLowerCase().includes(searchInput.toLowerCase())) {
          newlist.push(books[i]);
        }
      }
      if (newlist.length === 0) {
        setNoProducts(true)
      } 
        // renderList(newlist);
        setBooks(newlist)
      }

      if(searchInput===null||searchInput===''||searchInput===" "){
        setBooks(realBooks)
      }
  }
  

  const searchInputHandler=(e)=>{

    console.log(e.target.value,"search input")
    setSearchInput(e.target.value)
    if(e.target.value!==''){
      filterBook()
    }
    else{
      setBooks(realBooks)
      console.log(realBooks);
    }
  }


  const closeReviewModal=()=>{
    setModalActive(false)
    setReviewBook({})
  }

  useEffect(()=>{
    document.body.style.overflow= modalActive?"hidden":"auto"
  })

  const handelReviewModalPopUp=(book)=>{
    window.scrollTo(0,0)
    setReviewBook(book)
    setModalActive(true)


  }

  const handleReviewSubmit=(e,data)=>{
    e.stopPropagation()
    setModalActive(false)
    setReviewBook({})
  }
  


  return (
    <>
    <Navbar activeTab={"books"}/>
  
      {!loading &&
      <div className='w-11/12 p-2 mx-auto mt-20 '>
        <input className='w-full p-2 border-2 border-black' value={searchInput} onInput={(e)=>searchInputHandler(e)} type="text" name="" id="" placeholder='Search for the book you want'/>
      </div>
      }
  
    <div className='grid w-11/12 grid-cols-4 gap-4 p-1 mx-auto my-10 mt-10'>

      {books.length>0&&!loading &&
          books?.map((node,i)=>(
            <SingleBookCard 
            key={i} data={node}
            handelReviewModalPopUp={handelReviewModalPopUp}       
            />
          ))
        }
    </div>
    



    {
      modalActive&&
      <ReviewModal 
      closeReviewModal={closeReviewModal}
      reviewBook={reviewBook}
      handleReviewSubmit={handleReviewSubmit}
      />
    }
    {loading &&
    <div  className='w-full h-[80vh] flex items-center justify-center'>
      <div className="loader"></div>
    </div>
    }

    {
      noProducts&&
      <div>
        <div  className='w-full h-[50vh] flex items-center justify-center'>
          <div className='text-[30px] font-bold text-gray-300'>No Book Found :(</div>
        </div>
      </div>
    }
    <Footer/>
    </>
  )
}

export default BooksPage