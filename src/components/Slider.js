import React, { Component } from 'react';  
import { Carousel } from 'react-bootstrap';


export class Slider extends Component{
    render() {  

        return (  
        
            <div>  
        
                <div class='container-fluid' >  
        
                <div className="row title" style={{ marginBottom: "20px" }} >  

                                 </div>  
        
                                 </div>  
        
                                 <div className='container-fluid' >  
        
                                 <Carousel>  
        
                                 <Carousel.Item style={{'height':"300px"}} >  
        
                                 <img style={{'height':"300px"}}  
        
                                 className="d-block w-100"  
        
                                src={'img/banner2.jpg'}  />  
        
                                   <Carousel.Caption>  
        
                                 
        
                                         </Carousel.Caption>  
        
                                         </Carousel.Item  >  
        
                                         <Carousel.Item style={{'height':"300px"}}>  
        
                                         <img style={{'height':"300px"}}  
        
                                           className="d-block w-100"  
        
                                            src={'img/banner1.jpg'}    />  
        
                                               <Carousel.Caption>  
        
                                            
        
                                              </Carousel.Caption>  
        
                                                 </Carousel.Item>  
        
                                               <Carousel.Item style={{'height':"300px"}}>  
        
                                               <img style={{'height':"300px"}}  
        
                                                className="d-block w-100"  
        
                                                 src={'img/banner3.jpg'}   />  
    
                                                <Carousel.Caption>  
        
                                                   
        
                                                  </Carousel.Caption>  
        
                                                 </Carousel.Item>  
        
                                                </Carousel>  
        
                                        </div>  
        
                                </div>  
        
                        )  
        
                }  
}

export default Slider;