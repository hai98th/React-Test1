import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {mang: ['Amit Gorai','Mrinal Gosh']}
        this.change = this.change.bind(this);
    }
    remove(index){
        this.state.mang.splice(index,1);
        this.setState(this.state);
    }
    addNote(index){

        let t = this.state.mang.unshift(index);
        this.setState({t});
    }
    change(text,index){
        let mang = [...this.state.mang];
        mang[index] = text;
        this.setState({mang});
    }
    render(){
        return(
            <div>
                <NoteForm handleAdd={this.addNote.bind(this)}/>
                {this.state.mang.map((e,i)=>
                    <Note
                          index={i}
                          handleRemove={this.remove.bind(this)}
                          change = {this.change}
                          key={i}
                    >{e}
                    </Note>)
                }
            </div>
        )
    }
}
export default List;