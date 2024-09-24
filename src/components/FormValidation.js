import React, { useState } from 'react'

const FormValidation = () => {
    const currentUsers = [

        { email: 'user1@example.com', userId: 'user1' },
      
        { email: 'user2@example.com', userId: 'user2' },
      
        { email: 'user3@example.com', userId: 'user3' }
      
      ];
      const [obj,setObj]=useState({email:'',id:''})
      const [isSubmit,setIsSubmit] = useState(false);
      const handleClick = () => {
        if(currentUsers.email!=obj.email) {
            alert("User dose not exist")
        }
        setIsSubmit(true);
      }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <p>email</p>
        <input type="text" value={obj.email} onChange={(e)=>setObj({...obj,email:e.target.value})}></input>
        <p>userId</p>
        <input type="text" value={obj.id} onChange={(e)=>setObj({...obj,id:e.target.value})}></input>
        <button onClick={handleClick}>Click me</button>
        </form>
        {isSubmit&&(
             <table>
             <thead>
                 <tr>
                     <th>Email</th>
                     <th>UserId</th>
                 </tr>
             </thead>
             <tbody>
                 {/* {currentUsers.map((user)=>(
                     <tr key={user.userId}>
                         <td>{user.email}</td>
                         <td>{user.userId}</td>
                     </tr>
                 ))} */}
                 <tr>
                     <td>{obj.email}</td>
                     <td>{obj.id}</td>
                 </tr>
             </tbody>
         </table>
        )}
       
    </div>
  )
}

export default FormValidation