import React, { useState } from 'react'

function ReviewModal(props) {
    const{reviewBook,handleReviewSubmit,closeReviewModal}=props
    const [reviewData,setReviewData]=useState({
      name:"",
      email:"",
      comment:"",
      bookname:""
    })
    const [formErr,setFormErr]= useState("")

    const handleReviewData=(e)=>{

      console.log(e.target.name,"=>",e.target.value)
      setReviewData((prevState)=> ({...prevState,[e.target.name]: e.target.value}))
    }

    const handleReview=(e)=>{
      const nameRegex= /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const commentRegex=/[\S\s]+[\S]+/;
      if(reviewData.comment==="")
        // setFormErr("comment")
        alert("Enter Comment")
      else if(!emailRegex.test(reviewData.email))
        // setFormErr("email")
        alert("Enter valid Email")
      else if(!nameRegex.test(reviewData.name))
        // setFormErr("name")
        alert("Enter Valid Name")
      else
        handleReviewSubmit(e,reviewData)
    }



  return (
    <>
    <div className='w-[100vw] h-[100vh] absolute left-0 top-0 z-20 bg-[#00000057]  flex items-center justify-center' onClick={()=>closeReviewModal()}>
        {/* Modal */}
        <div className=' max-h-[500px] bg-white rounded-sm p-3 flex flex-row items-center justify-between gap-4'  onClick={(e)=>e.stopPropagation()}>
          <div className=' p-1  h-[400px] '>
            <img src={reviewBook.book_image} className='h-[300px] mx-auto' alt="" />
            <div className='text-xl font-bold text-center'>{reviewBook.title}</div>
            <div className='italic text-center'>{reviewBook.author}</div>
          </div>
          <div className='p-1  flex flex-col gap-2 h-[400px] '>
            <div className='font-bold text-[30px]'>Write To Us</div>

            <input
            onChange={(e)=>handleReviewData(e)}
              className='border-2 border-black p-1 w-[300px]' type="text" name="name" id=""  placeholder='Enter your Name'/>
            <input
            onChange={(e)=>handleReviewData(e)}
               className='border-2 border-black p-1 w-[300px]' type="text" name="email" id="" placeholder='Enter your Email' />
            <textarea 
            onChange={(e)=>handleReviewData(e)}
             
            className='border-2 border-black p-1 w-[300px]' 
            name="comment" 
            id="" 
            cols={30} rows={10} 
            placeholder={`Tell us what you felt about "${reviewBook.title}" by ${reviewBook.author}`}/>
            <button 
            onClick={e=>handleReview(e)}
            className='px-[16px] py-[8px] border-2  rounded-sm font-bold  text-[13px] text-white bg-black'
            >Submit Review</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewModal