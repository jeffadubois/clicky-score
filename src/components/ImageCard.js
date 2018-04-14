import React from 'react';
import Image from './Image';
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.imagename,
            selected: this.props.selected
        };
    }
    componentDidMount(){
        console.log(this.props.id, this.props.imagename, this.props.selected, this.props.handlePreviouslySelectedOrNot);
    }

    render(){
        return(
            <div onClick={()=>this.props.handlePreviouslySelectedOrNot(this.props.imagename,this.props.selected)} className={"col-3 mt-3"}>
                <Image imgSrc={this.props.imagename} />
            </div>
        )
    }

}

export default ImageCard