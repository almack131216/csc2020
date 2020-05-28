import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import TitleText from "../../TitleText/TitleText";
import Alert from "../Alert/Alert";
const API_PATH = "https://www.amactive.net/csc2020-api/mail/index.php";

const Request = () => {
  let [mailSent, setMailSent] = useState(null);
  let [mailFailed, setMailFailed] = useState(null);
  let [mailSending, setMailSending] = useState(null);
  const { register, handleSubmit, reset, errors } = useForm();

  // const onSubmit = data => {
  //   console.log(data);
  // }
  console.log("[Request] ERRORS: ", errors);

  const alertSent = (
    <Alert
      class="alert-success"
      text="Request sent. We will be in touch with you soon. Thank you."
    />
  );
  const alertFailed = (
    <Alert
      class="alert-warning"
      text="We could not receive your request. Please call us instead: 01944 758000"
    />
  );
  const alertSending = (
    <Alert class="alert-info" text="Sending your request..." loading={true} />
  );

  const title = "Request a car";
  const titleSub = null;
  const pageText = `<p>If we don't have what you want at present then why not fill in this form to go on our database. If a suitable car comes in then we will be able to contact you for first refusal.
<br><span class="required">*</span> = Mandatory Field</p>`;

  const titlesComponent =
    title || titleSub ? (
      <TitleText title={title} titleSub={titleSub} text={pageText} parseText={true}/>
    ) : null;

  const onSubmit = data => {
    // e.preventDefault();
    console.log("[Request] onSubmit > data = ", data);
    if (errors.length > 0) {
      console.log("[Request] onSubmit > errors (form not sent)", errors);
      return;
    }
    console.log("[Request] onSubmit > send form...");
    mailSent = setMailSent(null);
    mailSending = setMailSending(true);
    mailFailed = setMailFailed(null);
    axios({
      method: "POST",
      url: `${API_PATH}`,
      data: data
    }).then(response => {
      if (response.data.status === "success") {
        // alert("Message Sent.");
        // this.resetForm()
        console.log(
          "[Request] onSubmit > send form > success: " + response.data.message
        );
        mailSending = setMailSending(false);
        mailSent = setMailSent(true);
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
        console.log("[Request] onSubmit > send form > fail: " + response);
        mailSending = setMailSending(false);
        mailFailed = setMailFailed(true);
      }
    });
    // .catch(error => {
    //   console.log("[Request] onSubmit > send form > fail: " + error.message);
    //   mailFailed = setMailFailed("Bad!");
    // });
  };

  return (
    <>
      {titlesComponent}
      <div className="content-inner">
        <div className="form-wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-xs-12">
                <h2>Your Contact Details...</h2>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="fName" className="required">
                  First Name
                </label>
                {errors.fName && (
                  <span className="span-error">{errors.fName.message}</span>
                )}
                <input
                  type="text"
                  placeholder="First name"
                  name="fName"
                  ref={register({
                    required: "required",
                    maxLength: { value: 30, message: "First name is too long" }
                  })}
                  className={errors.fName ? "inp-error" : ""}
                />
              </div>
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="lName" className="required">
                  Last Name
                </label>
                {errors.lName && (
                  <span className="span-error">{errors.lName.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Last name"
                  name="lName"
                  ref={register({
                    required: "required",
                    maxLength: { value: 30, message: "Last name is too long" }
                  })}
                  className={errors.lName ? "inp-error" : ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-12 col-sm-6">
                <label htmlFor="email" className="required">
                  Email Address
                </label>
                {errors.email && (
                  <span className="span-error">{errors.email.message}</span>
                )}
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
                  className={errors.email ? "inp-error" : ""}
                />
              </div>
              <div className="form-group col-xs-6 col-sm-3">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  placeholder="Mobile number"
                  name="mobile"
                  ref={register}
                />
              </div>
              <div className="form-group col-xs-6 col-sm-3">
                <label htmlFor="tel">Telephone</label>
                <input
                  type="tel"
                  placeholder="Telephone"
                  name="tel"
                  ref={register}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="address">Address</label>
                <textarea name="address" ref={register} />
              </div>
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="pCode" className="required">
                  Postcode
                </label>
                {errors.pCode && (
                  <span className="span-error">{errors.pCode.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Post Code"
                  name="pCode"
                  ref={register({
                    required: "required",
                    maxLength: { value: 10, message: "Post code is too long" }
                  })}
                  className={errors.pCode ? "inp-error" : ""}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="form-group col-xs-12">
                <h2>Model you're looking for...</h2>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="carMake" className="required">
                  Make
                </label>
                {errors.carMake && (
                  <span className="span-error">{errors.carMake.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Make"
                  name="carMake"
                  ref={register({
                    required: "required",
                    maxLength: { value: 30, message: "Make is too long" }
                  })}
                  className={errors.carMake ? "inp-error" : ""}
                />
              </div>
              <div className="form-group col-xxs-12 col-xs-6">
                <label htmlFor="carModel" className="required">
                  Model
                </label>
                {errors.carModel && (
                  <span className="span-error">{errors.carModel.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Model"
                  name="carModel"
                  ref={register({
                    required: "required",
                    maxLength: { value: 50, message: "Model name is too long" }
                  })}
                  className={errors.carModel ? "inp-error" : ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-6">
                <label htmlFor="carYear">Year</label>
                <input
                  type="text"
                  placeholder="Make"
                  name="carYear"
                  ref={register}
                />
              </div>
              <div className="form-group col-xs-6">
                <label htmlFor="carColor">Colour</label>
                <input
                  type="text"
                  placeholder="Model"
                  name="carColor"
                  ref={register}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-12">
                <label htmlFor="carNotes">Further Notes</label>
                <textarea name="carNotes" ref={register} />
              </div>
            </div>
            {mailSent ? alertSent : null}
            {mailSending ? alertSending : null}
            {mailFailed ? alertFailed : null}
            <input type="submit" className="btn" value="Send Request" />
            {/* <input type="reset" className="btn pull-right" /> */}
            <input
              type="button"
              value="Dummy Data"
              className="btn pull-right"
              onClick={() => {
                reset({
                  fName: "al",
                  lName: "mack",
                  email: "al_2003_1@hotmail.com",
                  mobile: "+420 123456789",
                  tel: "+420 987654321",
                  address: "this is my address",
                  pCode: "140 00",
                  carMake: "Porsche",
                  carModel: "911 930",
                  carYear: "1984",
                  carColor: "White + black bumpers",
                  carNotes: "The best 911"
                });
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
