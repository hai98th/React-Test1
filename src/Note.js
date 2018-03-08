import React from 'react';


class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            onEdit: true,
        }

    }
    removeNote(){
        var {index, handleRemove} = this.props;
        handleRemove(index);
    }
    edit(){
        let onEdit = this.state.onEdit;
        onEdit =  false;
        this.setState({onEdit});
    }
    save(text){
        this.props.change(text,this.props.index);
        this.setState({onEdit : true});
    }
    cancel(){
        let x = this.state.onEdit= true;
        this.setState({x});
    }

    render(){
        if(this.state.onEdit)
            return(
            <div className="border-lime-1px">
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
                <button onClick={()=>{this.edit()}}>Edit</button>
            </div>
        )
        return(
            <div className="border-red-1px">
                <input defaultValue={this.props.children} ref="text"/><br/><br/>
                <button onClick={this.cancel.bind(this)}>Cancel</button>
                <button onClick={()=>{this.save(this.refs.text.value)}}>Save</button>
            </div>
        )

    }
}
export default Note;