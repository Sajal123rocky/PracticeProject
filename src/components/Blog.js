import React from 'react'

const Blog = () => {
  return (
    <div>
        {
            isCLicked?<div>Create a new blog</div>:
                (<form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Content" />
                    <button type="submit">Create</button>
                </form>)
            
        }
    </div>
  )
}

export default Blog