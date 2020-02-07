import React from 'react';
import ReactDOM from 'react-dom';
import './chat.css';
import socketIOClient from "socket.io-client";

class Message extends React.Component {

    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }

    formatTime(time){
        return time.getHours() + ':' + time.getMinutes()  + ' ' + time.getDate()+'-'+(time.getMonth()+1) + '-' + time.getFullYear();
    }

    render() {
        return (
                
            <div className="d-flex justify-content-start mb-4">
                <div className="msg_cotainer">
                    {this.props.message}
                    <span className="msg_time">{this.formatTime(this.state.date)}</span>
                </div>
                
            </div>
            
        )
    }
}


class Chat extends React.Component {

    constructor(props){
        super(props);
        this.state = { messages : [], text : '', endpoint:'http://192.168.86.36:4001'}

        this.handleClick = this.handleClick.bind(this);
        this.changedText = this.changedText.bind(this);

        
    }

    componentDidMount() {
        const { endpoint } = this.state;

        
        // const socket = socketIOClient(endpoint);
        // this.socket = socket;
        // socket.on("ReceivedMessage", (data) => {

        //     console.log('Data: ' , data);
        //     this.addMessage(data);
        // });
    }

    handleClick(e){        
        this.addMessage(this.state.text);
        //this.socket.emit("SendMessage", this.state.text);
        this.setState({text: ''});
    }

    changedText(event){
        this.setState({
            text: event.target.value
        });
        
    }

    computeList(){
        return this.state.messages.map((item, index) =>  <Message key={index} message={item.message}  /> );
    }

    addMessage(text){
        this.setState((state) => ({
            messages : state.messages.concat({message:text})
        }));
    }

    render(){
        return ( 
            <div className="vertical_center">
                <div className="container main_container">
                    <div className="msg_card_body">  
                        {this.computeList()}                    
                    </div>
                    <div className="card-footer">
                        <div className="input-group">                    
                            <textarea name="" className="form-control type_msg" placeholder="Escreve..." value={this.state.text} onChange={this.changedText} ></textarea>
                            <input type="button" value="Enviar" onClick={this.handleClick}/>          
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Chat;
//ReactDOM.render(<Chat />, document.getElementById('root'));