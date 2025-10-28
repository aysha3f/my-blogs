import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {
  const [bookmakred, setBookmarked] =useState([]);
const [readingCount, setReadingCount] = useState(0);

const handleBookMark = (blog) =>{
setBookmarked([...bookmakred,blog])
}

const handlemarkAsRead =(time, id) =>{
const newTime = readingCount + time;
  setReadingCount(newTime);
 handleRemoveFromBookmark(id)
}

const handleRemoveFromBookmark = (id) => {
const remainingBookMark = bookmakred.filter((mark)=> mark.id !== id);
setBookmarked(remainingBookMark);
}


  return (
    <>
<Navbar></Navbar>


<div className="main-container flex text-center">
  <div className="left-container w-[70%]">
   

   <Blogs handleBookMark={handleBookMark} handlemarkAsRead={handlemarkAsRead}></Blogs>
  </div>
  <div className="right-container w-[30%]">
 <h1>Reading time: {readingCount}</h1>
 <h1>bookmakred count: {bookmakred.length}</h1>

 {
  bookmakred.map((marked)=><p key={marked.id} className='bg-red-500 p-2 shadow m-2 text-white'>{marked.title}</p>)
 }
  </div>
</div>


    </>
  )
}

export default App
