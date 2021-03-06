import React,{Component} from 'react';
import {
       Col,Button,ProgressBar,Badge,ButtonGroup,
       ButtonToolbar,Glyphicon,Tooltip,OverlayTrigger
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Doughnut, Bar} from 'react-chartjs-2';
import './Admin.css';
const del = (
  <Tooltip id="tooltip">
    <strong>Delete!</strong> 
  </Tooltip>
);

const Edit = (
  <Tooltip id="tooltip">
    <strong>Edit!</strong> 
  </Tooltip>
);
const  data1 = {
  labels: [
      'Failed',
      'Sucess',
      'Inprogess'
  ],
  datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
  }]
};
const  data2 = {
  labels: [
     
      'Completed',
      'Pending'
      
  ],
  datasets: [{
      label: 'Stastistic Results',
      data: [60,40],
      backgroundColor: [
      '#74C274',
      '#DE6C69'
      
      ],
      hoverBackgroundColor: [
      '#5CB85C',
      '#D9534F'
      
      ]
  }]
};
class UserHome extends Component {
    //state = {  }
    render() { 
        return ( 
//opening of the container
<div className="container">
        <div className="row">
          <Col md={2} mdOffset={1}>
            <div className="small-card card-body color-white">
              <center>
                  <Link to ="/User">
                    <p>Users</p>                    
                  </Link>
              </center>
            </div>          
          </Col>        
          <Col md={2}>
            <div className="small-card card-body" style ={{width:"110px"}}>
            <center>
             <p>Test Cases</p>
             <hr/>
             <Badge>+</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Profile</p>
             <hr/>
             <Badge>25</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Scenario</p>
             <hr/>
             <Badge>+</Badge>
             </center>
            </div>                   
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>UDF</p>
             <hr/>
             <Badge>+</Badge>
             </center>
            </div>                   
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Reports</p>
             <hr/>
             <Badge>120</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Project</p>
             <hr/>
             <Badge>+</Badge>
             </center>
            </div>          
          </Col>
        </div>
          <div className="row">
            <Col md={4} mdOffset={1} >
              <div className="card example-1 scrollbar-ripe-malinka">
              <div className="card-body">
              <h4 >Projects</h4>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 1</p>                                  
                </Col>
                <Col md={2}>                
                <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                              
                </Col>
                <Col md={2}>                
                  <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                               
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 2</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 3</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 4</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 5</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>  
               <OverlayTrigger placement ="right" overlay ={Edit}>              
                    <Button bsSize="xsmall">                     
                        <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                     
                    </Button>   
                    </OverlayTrigger>                 
                  </ButtonToolbar>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 6</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 7</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              </div>
              </div>
            </Col>

            <Col md={7} >
            <div className="card example-1 scrollbar-ripe-malinka" style={{width:"750px"}}>
              <div className="card-body">
              <h4><strong>Project Details</strong></h4>
              <hr/>
              <h5>
                <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                </div>
              </h5>              
              <hr/>
              <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/>
              <div className = "row">
              <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="Top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="Top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> 
              <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/>
              </div>
             </div>
            </Col>    
            <Col md={4} sm={6} >
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4>Project Duration</h4>
                        <hr/>
                            <Doughnut
                                    data={data1}
                                    width={100}
                                    height={90}
                                    options={{
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                },
                                                labels: {
                                                    fontColor: "#fff",
                                                    fontSize: 20
                                                }

                                                
                                            }}
                            />
                     </div>
                 </div>
            </Col> 
            <Col md={4}>
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4> Total Testcases</h4>
                        <hr/>
                            <Doughnut
                                    data={data2}
                                    width={100}
                                    height={90}
                                    options={{
                                              
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                }
                                                
                                            }}
                            />
                            
                     </div>
                 </div>
            </Col>  
            <Col md={4}>
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4> Time Taken</h4>
                        <hr/>
                            <Doughnut
                                    data={data2}
                                    width={100}
                                    height={90}
                                    options={{
                                              
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                }
                                                
                                            }}
                            />
                            
                     </div>
                 </div>
            </Col>        
        </div>
       
      </div>
      //closing of the Container
         );
    }
}
 
export default UserHome;