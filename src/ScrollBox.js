import React, {Component} from 'react';

class ScrollBox extends Component{
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render(){
        const style={
            border:'1px solid #000',
            height:300,
            width:300,
            overflow:'auto',
            position:'relative',
        }
        const innerStyle={
            width:'100%',
            height:650,
            background:'linear-gradient(#fff, #000)',
        }
        
        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}
            >
                <div style={innerStyle}></div>
            </div>
        )
    }
}

export default ScrollBox;