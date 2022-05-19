import React, { useState } from 'react'
import Header from './Header'

const Addcourse = () => {
    var [title,setTitle]=useState("")
    var [duration,setDuration]=useState("")
    var [description,setDes]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    const subData=()=>{
        const data={"courseTitle":title,"courseDuration":duration,"courseDescription":description,"courseVenue":venue,"courseDate":date}
        console.log(data)
    }
  return (
    <div>
<Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Course Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Course name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Course Duration</label>
                    <input onChange={(e)=>{setDuration(e.target.value)}} placeholder="Enter Course duration" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(e)=>{setDes(e.target.value)}} placeholder="Enter description" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Course Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} placeholder="Enter Course venue" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Course Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} placeholder="Enter date" type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={subData} class="btn btn-primary">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addcourse