import React,{Component} from 'react';
import AvatarList from './AvatarList';
import './Avatar.css';
import 'tachyons';

class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }
    nameChange(){
        this.setState({
            name: "Subscribe to my channel"
        })
    }

    render(){
        const AvatarListArray = [
            {
                id: 1,
                name: 'Deepak Saini',
                work: 'Web Designer'
            },
            {
                id: 2,
                name: 'Priyank Kumar',
                work: 'Web Developer'
            },
            {
                id: 3,
                name: 'Shubham Walia',
                work: 'Tester'
            },
            {
                id: 4,
                name: 'Arun Salvi',
                work: 'Tester'
            }
        ]
    
        //map(callback(currentvalue, index, array) arg)
        
        const ArrayAvatarCard = AvatarListArray.map((avatarcard, i) => {
            return <AvatarList key={i} id={AvatarListArray[i].id} name={AvatarListArray[i].name} work={AvatarListArray[i].work}/>
        })

        return (
            <div className="main-page">
                <h1 className="tc">{this.state.name}</h1>
                {ArrayAvatarCard}
                <button onClick={ ()=> this.nameChange() }>Subscribe</button>
            </div>
        )
    }
}

export default Avatar;
