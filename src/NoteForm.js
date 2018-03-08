import React from 'react';


class NoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAdding: false,
            num: 2,
        }
    }
    toggle(){

        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }
    handleSubmit(e){

        e.preventDefault();
        if(this.refs.txt.value){
            let t1 = this.state.num++;
            this.setState({t1});
            this.props.handleAdd(this.refs.txt.value);
        }
        this.refs.txt.value = '';
        this.toggle();
    }
    render(){
        if(this.state.isAdding) return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input tyle="text" placeholder="Nhap ten vao day" ref="txt"/>
                <br/><br/>
                <button>Nhap vao</button>
                <p>Danh sach hien thi <span className="red">{this.state.num} </span> hoc sinh</p>
            </form>
        )
        return(
            <div>
                <button onClick={this.toggle.bind(this)}>+</button>
                <p>Danh sach hien thi <span className="red">{this.state.num} </span> hoc sinh</p>
            </div>
        )

    }
}
export default NoteForm;