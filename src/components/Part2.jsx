import React, { createContext, useContext, useRef, useState } from "react";
import "./part2.css";
import { cardnum, cardnumFunc } from "../App";

export default function part2() {
//  const cardno = useRef(1);
 const card=useContext(cardnum);
 const setcard=useContext(cardnumFunc);
  // const [card, setcard] = useState(1);
  const verified = useRef(false);

  function verifyForm() {
    // var userRegex="abc123xyz456_7_00";
    // const inputs = document.querySelectorAll(".input");
    const username = document.querySelector("#user__name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    let phoneverified = false;
    let emailverified = false;
    let userverified = false;
    if (/[0-9]+/.test(phone.value)) {
      phoneverified = true;
    } else {
      let error = phone.parentElement.querySelector(".error");
      error.textContent = "This feild is required";
      phone.style.border = "1px solid red";
      phone.addEventListener("input", (e) => {
        if (e.target.value.length < 10) {
          error.textContent = "Atleast 10 character";
        } else {
          error.textContent = "";
          phone.style.border = "1px solid blue";
        }
      });
    }
    if (/[a-zA-Z_][0-9a-zA-Z_]*/.test(username.value)) {
      userverified = true;
    } else {
      let error = username.parentElement.querySelector(".error");
      error.textContent = "This feild is required";
      username.style.border = "1px solid red";
      username.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
          error.textContent = "Atleast 3 character";
        } else {
          error.textContent = "";
          username.style.border = "1px solid blue";
        }
      });
    }
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      emailverified = true;
    } else {
      let error = email.parentElement.querySelector(".error");
      error.textContent = "This feild is required";
      email.style.border = "1px solid red";
      email.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
          error.textContent = "Atleast 3 character";
        } else {
          error.textContent = "";
          email.style.border = "1px solid blue";
        }
      });
    }

    if (userverified && emailverified && phoneverified) {
      setcard((prev)=>prev + 1);
      cardno.current = cardno.current + 1;
      console.log(card + " " + cardno.current);
      verified.current = true;
      console.log(verified.current);
    }
    console.log(card);
    
    // inputs.forEach((input)=>{
    //   input.addEventListener("click",()=>{
    //     console.log('hi');

    //   })
    // })
  }
  function manageCardNo() {
    if (card === 1 && verified.current) {
      setcard(card + 1);
      cardno.current = cardno.current + 1;
    } else {
      verifyForm();
    }
  }
  return (
    <div className="part2">
      {card === 1 && (
        <div className="form__container">
          <h1 style={{ marginBottom: ".7rem" }}>Personal info</h1>
          <p className="form__para">
          
            Please provide your name, email, address, and phone number.
          </p>
          <form action="">
            <div className="input__group">
              <label htmlFor="user__name">Name</label>
              <input
                type="text"
                id="user__name"
                className="input"
                placeholder="e.g. Stephen King"
              />
              <div className="errorCon">
                <p className="error"></p>
              </div>
            </div>
            <div className="input__group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="e.g. Stephenking@lorem.com"
              />
              <div className="errorCon">
                <p className="error"></p>
              </div>
            </div>
            <div className="input__group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                id="phone"
                className="input"
                placeholder="e.g. e.g. +1 234 567 890"
              />
              <div className="errorCon">
                <p className="error"></p>
              </div>
            </div>
          </form>
        </div>
      )}
      {card === 2 && <h1>This is second page ${card}</h1>}
      <div className="button__container">
        <button onClick={manageCardNo}>Next Step</button>
      </div>
    </div>
  );
}
