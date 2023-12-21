import React, { useState } from 'react'
import "./AddMovie.css"
export default function AddMovie({addMovie}) {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posterURL,setPosteruURL]=useState("")
    const [rating,setRating]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        const newMovie={
            Title :title,
            Plot :description,
            Images :[posterURL],
            imdbRating :rating
        }
        addMovie(newMovie)
    }
  return (
    <div class="container">
    <div class="text">
       Contact us Form
    </div>
    <form action="#">
       <div class="form-row">
          <div class="input-data">
             <input  type="text" onChange={(event)=>setTitle(event.target.value)} required/>
             <div class="underline"></div>
             <label for="">Title</label>
          </div>
          <div class="input-data">
             <input type="text"  onChange={(event)=>setDescription(event.target.value)} required/>
             <div class="underline"></div>
             <label for="">Description</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text"  onChange={(event)=>setPosteruURL(event.target.value)} required/>
             <div class="underline"></div>
             <label for="">PosterURL</label>
          </div>
          <div class="input-data">
             <input type="number"  onChange={(event)=>setRating(event.target.value)} required/>
             <div class="underline"></div>
             <label for="">Rating</label>
          </div>
       </div>
       <div class="form-row">
       <div class="input-data textarea">
          
          <div class="form-row submit-btn">
             <div class="input-data">
                <div class="inner"></div>
                <input type="submit" onClick={handleSubmit} value="submit"/>
             </div>
          </div>
          </div>
          </div>
    </form>
   
    </div>
  )
}
