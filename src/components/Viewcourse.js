import React from 'react'

const Viewcourse = () => {
    var viewlist=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
  return (
    <div>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Course Title</th>
      <th scope="col">Course Description</th>
      <th scope="col">Course Duration</th>
      <th scope="col">Course Venue</th>
      <th scope="col">Course Date</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <td>{value.courseTitle}</td>
      <td>{value.courseDescription}</td>
      <td>{value.courseDuration}</td>
      <td>{value.courseVenue}</td>
      <td>{value.courseDate}</td>
      
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default Viewcourse