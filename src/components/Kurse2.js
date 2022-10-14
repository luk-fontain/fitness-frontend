
import '../style/kurse2.css'
import React from 'react'
import ReactPlayer from 'react-player'

export const Kurse2 = () => {

    return (
        <>
          
            <h2 id='kurse_h2'>Unsere Kurse</h2>
            <div className='kurse-container'>
                <div>
                    <h3>Yoga</h3>
                    <div className='youtobe-box'>

                        <ReactPlayer url='https://www.youtube.com/watch?v=7Av1kR5TnIA' className="video" controls />

                    </div>
                </div>

                <div >
                    <p  className='kurse2_p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
             
                </div>




                <div>
                    <h3>Selbstverteidigung</h3>
                    <div className='youtobe-box'>

                        <ReactPlayer url='https://www.youtube.com/watch?v=Tj7kXi-DCEE' className="video" controls />

                    </div>
                </div>
                <div>
                    <p  className='kurse2_p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      
                    
                </div>




                <h3>Zumba</h3>
                <div className='youtobe-box'>

                    <ReactPlayer url='https://www.youtube.com/watch?v=Gl_tgEC9Kq0' className="video" controls />

                </div>
                <p  className='kurse2_p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
            
              
            </div>

        </>
    );
}