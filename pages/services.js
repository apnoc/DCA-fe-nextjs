import React,  {Component} from 'react' ;
import './services.css';


const ResumeQuery = gql` 
  query ResumeQuery {  
    home{
      name
      paragraph
      img
      button
  }
}
`;

export default function Home() {
  const {data, error, loading} = useQuery(ResumeQuery);


  if (error) {
    return <span>Error... oops!</span>
  }

  if (loading) {
    return (
      <header>
        <h1>Loading </h1>
        <h2>Error</h2>
      </header>
    );
  }


  
class Services extends Component {
    render() {
        return (
            <div className="Content__Background">
                {
                  data.Services.map((information) => {
                      return(
                          <section className="container">
                               <div className="row">
                                            <section className="col-lg-8 p-4 ">
                                                <h3 className=" contnt m-3">{information.heading}</h3>
                                                
                                                {
                                                   information.detailservices.map((content) => {
                                                        return (
                                                            <div>
                                                            <h4 className=" subheader1 ">{content.header}</h4>
                                                            <section>
                                                                {
                                                                    content.paragraph.map((detail) => {
                                                                        return (
                                                                            <ul>
                                                                                 <li className="subheader2">{detail.p}</li>                                                        
                                                                            </ul>
                                                                        );
                                                                    })
                                                                }
                                                            
                                                            </section>
                                                           
                                                            </div>
                                                          );
                                                     })
                                                
                                                }
                                                                                              
                                           </section>
                                
                                           <section className="col-lg-4 p-4">
                                           {
                    data.HomePages.map((directory) => {
                        return (
                            <div className="content_info">
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
                                            </span>{details.p}
                                            </a>
                                        </li>                       
                                       
                                    </ul> 
                                    );
                                })
                            }
                            </div>
                        )
                    })
                }
                  </section>
               
                                </div>                             
                          </section>
                      )
                  })  
                }
            </div>
        )
    }
}

export default Services;