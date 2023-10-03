import React from 'react'

function SingleBookCard(props) {
    const{data,handelReviewModalPopUp}=props
  return (
    <>
    <div className='flex flex-col gap-2 text-center p-3 shadow-md  rounded-md justify-center  border-2 border-transparent hover:border-[#010101] hover:bg-gray-100' >
        <img className='mx-auto rounded-sm  z-0 bg-red '  src={data?.book_image} alt="" width="200" height="200"/>
        <div className='font-bold text-xl capitalize '>{data.title}</div>
        <div className='italic py-1 px-4 border rounded-full bg-gray-100 w-fit text-[14px] mx-auto'>{data.author}</div>
        <div className='flex-1 text-justify text-[14px]'>{data.description}</div>
        <div className='flex flex-row items-center justify-between mt-5'>
            <div className='font-bold text-[20px] text-slate-700 text-right'>7.99 $</div>
            <button
            onClick={()=>handelReviewModalPopUp(data)}
             className='px-[16px] py-[8px] border-2 border-black rounded-sm font-bold text-black text-[13px] hover:text-white hover:bg-black'>Write a Review</button>    

        </div>
        
    </div>
    </>
  )
}

export default SingleBookCard