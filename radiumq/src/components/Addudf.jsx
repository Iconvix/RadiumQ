import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,Checkbox,Button,
    Table,Glyphicon,ButtonToolbar,Overlay,OverlayTrigger,Tooltip,Modal
} from 'react-bootstrap';
class ADDUDF extends Component {
   // state = {  }
   constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
    render() { 
        return ( 
            <Form horizontal>
                <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                            Add UDF
                        </Button>
                        <div className = "row">
                        <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>UDF Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           
                            <FormGroup controlId="formHorizontalText">  
                                <Col componentClass={ControlLabel}>
                                   <p>Name</p>  
                                 </Col>                         
                                <Col>
                                <FormControl type="search" placeholder="Search…" required />
                                </Col>
                            </FormGroup>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                            <Button bsStyle="primary">Search</Button>
                        </Modal.Footer>
                    </Modal>
                        
                        </div>
                       
            </Form>
         );
    }
}
 
export default ADDUDF;