
import React,  {Component} from 'react' ;
import './aboutUs.css'

const ResumeQuery = gql` 
query ResumeQuery {  
  about{
    heading
    header
    paragraph
    img
    button
}
}
`;

 function About() {
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

class About extends Component {
    render() {
        return (
            <div className="about">
                {
                  data.About.map((information) => {
                      return(
                          <section className="container ">
                               <div className="row">
                                            <section className="content col-lg-7 ">
                                                <h3>{information.heading}</h3>
                                                <h4>{information.header}</h4>
                                                {
                                          information.paragraph.map((content) => {
                                            return (
                                                <>                                                  
                                                    <p className="subheader2 text-justify">{content.p}</p>                                                 
                                                </>
                                            );
                                          })                                          
                                       }                                                                                              
                          </section>
                          <section className="col-lg-4 ">
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

export default About;