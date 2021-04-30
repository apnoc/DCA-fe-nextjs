

import React, {Component} from 'react' ;
import {Carousel} from 'react-bootstrap';
import './home.css';


class Home extends Component {
    render() {
        return (
          <section className="hero_section">
            <section className="container  ">                               
                  <div className="row">
                      <section className="col-lg-8 px-1">   
                              <div className="banner">
                                  <div>
                                  <img  width="100px" src="/assets/CM.png" alt="logo1"  /> 
                                  <h6>Sri Y.S.Jaganmohan</h6>
                                    <p>Hon'ble Cheif Minister</p>                                 
                                  </div>
                                  <div>
                                  <img width="110px" src="/assets/HM.png" alt="logo1"  />
                                  <h6>Sri Alla Kali Krishna Srinivas </h6>
                                    <p>Hon'ble Minister of Health</p>
                                  </div>
                                  <div>
                                  <img  width="110px" src="/assets/DC.png" alt="logo1"  />
                                    <h6>Sri Ravi Shankar Narayan </h6>
                                    <p>DG Drugs and Copyright</p>
                                  </div>
                            </div>                    
                                    
                         <section className="testimonials"> 
                             <div className="fixed-bnr">
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="Third slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                             className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Fourth slide"
                              />
                            </Carousel.Item>
                           <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="Fifth slide"
                              />
                             </Carousel.Item>
                        </Carousel>
                        </div> 
                        <div>

                        </div>                
                       
                        </section>
                      <section className="m-5">
                        {
                          data.Content.map((details) => {
                            return (
                            <p ><span><h4  className="main__heading">{details.header} </h4></span>
                               <p  className="sub__heading" >{details.p}</p></p>
                            );
                          })

                        }
                      </section>

                    
                      </section>
                     <section className="col-lg-4 p-4">
                     {
                       data.Notifications.map((details) => {
                         return(
                           <>
                           
                           <div className="notifications" >  
                           <div className="text">
                           <h4 className="header" >Notifications</h4>
                           <a className="content" href={details.link}><marquee direction="up" onmouseover="this.stop();" onmouseout="this.start();">{details.content}</marquee>
                               </a>
                             </div>                             
                              
                           </div>
                         </>
                         );
                       })
                     }
                     {
                    data.HomePages.map((directory) => {
                        return (
                          <div className="content_info">
                            < >
                             <h4 className="content"> {directory.header}</h4>                               
                                    
                            {
                                directory.paragraph.map((details) => {
                                    return (                                      
                                        <ul className="list-group list-group-flush ">
                                        <li className="list-group-item "> 
                                        <a  className="sub__header"
                                        href={details.link}>
                                            <span className=" px-2"> 
                                                <strong>
                                                    <i className="  fa fa-angle-double-right" aria-hidden="true"></i>
                                                </strong>                                                
                                            </span>
                                                {details.p}
                                            </a>
                                        </li>                       
                                       
                                    </ul> 
                                    );
                                })
                            }
                            </>
                            </div>
                        )
                    })
                }
                  </section>
                </div>
            </section>
            </section>
        );
    }
}

export default Home;

