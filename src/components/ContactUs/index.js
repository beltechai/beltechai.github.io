import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  ContactUsForm,
  EmailInput,
  NameInput,
  PhoneNumberInput,
  OrganisationName,
  ProductText,
  ProductContainer,
  ProductCheckBox,
  Label,
  RequirementContainer,
  RequirementField,
  Button,
  ErrorText,
} from "./style";

const Product = [
  "Traffic management",
  "Security",
  "Smart City",
  "Public transport",
  "Tourism",
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [requirement, setRequirments] = useState("");
  const [checkedState, setCheckedState] = useState(new Array(5).fill(false));
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [organisationNameError, setOrganisationNameError] = useState("");
  const [checkedError, setCheckedError] = useState("");

  const parsedProduct = (data) => {
    let x = [];
    for(let i = 0; i < data.length ; i++){
      if(data[i]){
        x.push(Product[i]);
      }
    }
    return x;
  }

  const formValidation = () =>{
    console.log("Here we are coming");
    if(!name){
      setNameError("Please Enter Name");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return false;
    }else if(!email || !validateEmail(email)){
      setEmailError("Please enter a valid email");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return false;
    }else if(!phoneNumber){
      setPhoneNumberError("Please enter a valid phone number");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return false;
    }else if(!organisationName){
      setOrganisationNameError("Please enter organisation name");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return false;
    }
    if(nameError || emailError || phoneNumberError || organisationNameError){
      return false;
    }else{
      let checked = false;
      for(let i = 0; i< checkedState.length; i++){
        if(checkedState[i] === true){
          checked = true;
        }
      }
      if(checked){
        return true;
      }else{
        setCheckedError("Please Select at least one product");
        return false;
      }
    }
  }

  const validateEmail  = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return true;
    }else{
      return false;
    }
  }

  const resetForm = () =>{
    setName("");
    setEmail("");
    setCheckedError("");
    setPhoneNumber("");
    setOrganisationName("");
    setCheckedState(new Array(5).fill(false));
  }

  const handleCheckBox = (index) => {
    let temp = [];
    temp = checkedState.map((value, index1) =>
      index === index1 ? !value : value
    );
    setCheckedState(temp);
  };

  const handleSubmit = async () => {
      if(formValidation()){
        try{
        await addDoc(collection(db, "contact"), {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          organisationName: organisationName,
          requirement: requirement,
          product: parsedProduct(checkedState),
          created: Timestamp.now(),
        });
        alert("Your form is Submitted Successfully");
        resetForm();
      }catch(error){
        alert(error);
      }
    }
  };

  return (
    <ContactUsForm>
      <NameInput
        placeholder="Name*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => {
          if (!name) {
            setNameError("Please enter name");
          }else{
            setNameError("");
          }
        }}
        style={{borderColor: nameError ? 'red': ''}}
      />
      {nameError ? <ErrorText>{nameError}</ErrorText> : <></>}
      <EmailInput
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur = {() => {
          if(!validateEmail(email)){
            setEmailError("Please Enter a valid Email");
          }else{
            setEmailError("");
          }
        }}
      />
      {emailError ? <ErrorText>{emailError}</ErrorText> : <></>}
      <PhoneNumberInput
        placeholder="Phone Number*"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onBlur = {() => {
          if(phoneNumber.length > 13 || phoneNumber.length < 10){
            setPhoneNumberError("Please Enter a valid phone Number");
          }else{
            setPhoneNumberError("");
          }
        }}
      />
      {phoneNumberError ? <ErrorText>{phoneNumberError}</ErrorText> : <></>}
      <OrganisationName
        placeholder="Organisation Name*"
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
        onBlur={() => {
          if(!organisationName){
            setOrganisationNameError("Please Enter a organisation name");
          }else{
            setOrganisationNameError("");
          }
        }}
      />
      {organisationNameError ? <ErrorText>{organisationNameError}</ErrorText> : <></>}
      <ProductText>Select product that you are interested in* </ProductText>
      <ProductContainer>
        {Product.map((data, index) => {
          return (
            <ProductCheckBox key={index}>
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleCheckBox(index)}
                style={{ width: "15px", height: "15px" }}
              />
              <Label>{data}</Label>
            </ProductCheckBox>
          );
        })}
      </ProductContainer>
      {checkedError ? <ErrorText>{checkedError}</ErrorText> : <></>}
      <RequirementContainer>
        <RequirementField
          placeholder="Tell us about your requirements"
          value={requirement}
          onChange={(e) => setRequirments(e.target.value)}
        />
      </RequirementContainer>
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </ContactUsForm>
  );
};

export default ContactForm;
