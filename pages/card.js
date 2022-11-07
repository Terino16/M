import React from "react";
import './Pay.css'
import logo from './card_img.png'
export default function Card()
{
    return(
        <div className="container">

        <form action="">
    
            <div className="row">
    
                <div className="col">
    
                    <h3 className="title">billing address</h3>
    
                    <div className="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="john deo"></input>
                    </div>
                    <div className="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com"></input>
                    </div>
                    <div className="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="room - street - locality"></input>
                    </div>
                    <div className="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="mumbai"></input>
                    </div>
    
                    <div className="flex">
                        <div className="inputBox">
                            <span>state :</span>
                            <input type="text" placeholder="india"></input>
                        </div>
                        <div className="inputBox">
                            <span>zip code :</span>
                            <input type="text" placeholder="123 456"></input>
                        </div>
                    </div>
    
                </div>
    
                <div className="col">
    
                    <h3 className="title">payment</h3>
    
                    <div className="inputBox">
                        <span>cards accepted :</span>
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="inputBox">
                        <span>name on card :</span>
                        <input type="text" placeholder="mr. john deo"></input>
                    </div>
                    <div className="inputBox">
                        <span>credit card number :</span>
                        <input type="number" placeholder="1111-2222-3333-4444"></input>
                    </div>
                    <div className="inputBox">
                        <span>exp month :</span>
                        <input type="text" placeholder="january"></input>
                    </div>
    
                    <div className="flex">
                        <div className="inputBox">
                            <span>exp year :</span>
                            <input type="number" placeholder="2022"></input>
                        </div>
                        <div className="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="1234"></input>
                        </div>
                    </div>
    
                </div>
        
            </div>
    
            <input type="submit" value="proceed to checkout" className="submit-btn"></input>
    
        </form>
    
    </div>    
    );
}
