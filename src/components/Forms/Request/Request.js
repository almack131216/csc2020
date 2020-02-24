import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const API_PATH = "https://www.amactive.net/csc2020-api/mail/index.php";

const Request = () => {
  let [mailSent, setMailSent] = useState("ok?");
  let [mailFailed, setMailFiled] = useState("bad?");
  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => {
  //   console.log(data);
  // }

  console.log(errors);

  const onSubmit = data => {
    // e.preventDefault();
    console.log("[Request] onSubmit > data = ", data);
    if (errors.length > 0) {
      console.log("[Request] onSubmit > errors (form not sent)", errors);
      return;
    }
    console.log("[Request] onSubmit > send form...");
    axios({
      method: "POST",
      url: `${API_PATH}`,
      data: data
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        // this.resetForm()
        console.log("[Request] onSubmit > send form > success: " + response);
        mailSent = setMailSent("Good!");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
        console.log("[Request] onSubmit > send form > fail: " + response);
        mailFailed = setMailFiled("Bad!");
      }
    });
    // .catch(error => {
    //   console.log("[Request] onSubmit > send form > fail: " + error.message);
    //   mailFailed = setMailFiled("Bad!");
    // });
  };

  return (
    <div>
      <h1>sent:{mailSent}</h1>
      <h1>fail:{mailFailed}</h1>
      <div className="form-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                placeholder="First name"
                name="fName"
                ref={register({
                  required: "First name is required",
                  maxLength: { value: 30, message: "First name is too long" }
                })}
                className={errors.fName ? "inp-error" : ""}
              />
              {errors.fName && (
                <span className="span-error">{errors.fName.message}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                name="lName"
                ref={register({
                  required: "Last name is required",
                  maxLength: { value: 30, message: "Last name is too long" }
                })}
              />
              {errors.lName && (
                <span className="span-error">{errors.lName.message}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                ref={register({
                  required: "Invalid email address",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <span className="span-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile number"
                name="mobile"
                ref={register({ required: true, minLength: 6, maxLength: 12 })}
              />
            </div>
          </div>
          <textarea name="message" ref={register} />
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="pCode">Postcode</label>
              <input
                type="text"
                placeholder="Post Code"
                name="pCode"
                ref={register}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="tel">Telephone</label>
              <input
                type="text"
                placeholder="Telephone"
                name="tel"
                ref={register}
              />
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Request;
