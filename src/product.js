import React,{Component} from "react";
import './product.css'

export default class Product extends Component{
    state={
        title:'Black Holes: The Reith Lectures',
        author:'Stephen Hawking',
        pricePaperback: 99.00,
        priceEBook:19.00,
        discount:36,
        count:1,
        image:'https://m.media-amazon.com/images/I/91V2mnP754L._AC_UY327_QL65_.jpg',
        discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }

    render(){
        let x=this.state.pricePaperback - (this.state.pricePaperback * this.state.discount)/100

        return <React.Fragment>
            <span className="product-desc">
                <span>
                    <img className="img" src={this.state.image} alt=""/>
                </span>

                <span className="desc">
                    <span className="column">
                        <span className="title">{this.state.title}</span>
                        <span className="author">by {this.state.author}</span>
                    </span>
                    <span>{this.state.discription}</span>
                    
                    <span>
                        <span className="price">
                            <p>₹{x}</p>
                            <p>{this.state.discount}% off</p>
                        </span>
                        <span className="original"> 
                            <p>₹{this.state.pricePaperback}</p>
                        </span>
                    </span>

                    <span className="row footer">
                        <span className="row counter">
                            <span onClick={this.onclickMinus} className="minus"></span>

                            <p className="countValue">{this.state.count}</p>

                            <span onClick={this.onclickAdd} className="add"></span>
                        </span>
                        <span onClick={this.onClickAddToCart} className="atc atc-1">
                            <p>Add to cart</p>
                        </span>
                    </span>
                </span>

            </span>

        </React.Fragment>
    }

    onClickAddToCart(){
        if(document.querySelector('.atc').innerHTML==="Added"){
            document.querySelectorAll('.atc').forEach((ele)=>{
                ele.innerHTML="Add to cart"
            })
        }
        else{
            document.querySelectorAll('.atc').forEach((ele)=>{
                ele.innerHTML="Added"
            })
        }
        document.querySelectorAll('.atc').forEach((ele)=>{
            ele.classList.toggle('added');
        })
    }

    onclickMinus=()=>{
        if(this.state.count > 1){
            this.setState({
                count:this.state.count - 1
            })
        }       
        }
  
        
    onclickAdd=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

}