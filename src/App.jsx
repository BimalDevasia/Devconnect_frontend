import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlurText from './components/BlurText'
function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  const get_posts=async()=>{
    const response=await fetch("http://127.0.0.1:8000/api/posts")
    const data=await response.json()
    
    setPosts(data)
  } 
  // useEffect(() => {
  //   get_posts()
  // }, []);


  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div>
        {/* {posts.map((post)=>(
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))} */}
        <p className='text-gray-600 '>New paragraph content here</p>
        <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-4xl mb-8 "
/>
      </div>
    </>
  )
}

export default App
