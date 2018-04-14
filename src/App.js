import React, { Component } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import './App.css';

class App extends Component {
    state= {
        score: 0,
        images:[
            {
                key: 1,
                name: "ryu",
                selected: false
            },
            {
                key: 2,
                name: "blanka",
                selected: false
            }
            ,
            {
                key: 3,
                name: "dhalsim",
                selected: false
            }
            ,
            {
                key: 4,
                name: "vega",
                selected: false
            }
            ,
            {
                key: 5,
                name: "mbison",
                selected: false
            }
            ,
            {
                key: 6,
                name: "balrog",
                selected: false
            }
            ,
            {
                key: 7,
                name:"sagat",
                selected: false
            }
            ,
            {
                key: 8,
                name: "chunli",
                selected: false
            },
            {

                key: 9,
                name: "zangief",
                selected: false
            },
            {
                key: 10,
                name: "guile",
                selected: false
            },
            {
                key: 11,
                name: "ehonda",
                selected: false
            },
            {
                key: 12,
                name: "ken",
                selected: false
            }

        ]
    };

    handlePreviouslySelectedOrNot=(name,previouslySelected)=>{
        let imagesArray = this.state.images;
        imagesArray.sort(function(a, b){return 0.5 - Math.random()});

		//if image previously selected, then start over, and reset image.selected to false for all the images
        if (previouslySelected){
            imagesArray.forEach(image=> image.selected = false);
            this.setState({images: imagesArray, score: 0})
		//else if not previously selected, then mark that image as selected. and increment the score.
        } else {
            imagesArray.forEach((image) => {
                if (image.name === name && image.selected === false) {
                    image.selected = true;
                    this.setState({images: imagesArray, score: this.state.score + 1})
                }
            });
        }
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.score} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.images.map((image) => <ImageCard  key={image.key} id ={image.key} imagename={image.name} selected={image.selected} handlePreviouslySelectedOrNot={this.handlePreviouslySelectedOrNot}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;