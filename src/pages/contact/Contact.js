import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Contact.scss";
import { db } from "../../utils/firebase";
import LinkedinLogo from "../../assets/li-logo.png";
import MailIcon from "../../assets/mail.svg";
import { linkedinProfile, contactMail } from "../../utils/constants";

const Contact = ({ translate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let newContactInfo = db.push();

    newContactInfo
      .set({ name, email, subject, message })
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("done");
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };
  return (
    <section className="contact-section">
      <section className="contact-form-container">
        <section className="contact-section-text">
          <h1>{translate("contact.header")}</h1>
          <div>{translate("contact.description")}</div>
        </section>
        <section className="contact-section-form">
          <form className="contact-section-form-tag" onSubmit={handleSubmit}>
            <span className="contact-section-form-input">
              <input
                type="text"
                placeholder={translate("contact.form.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
            <span className="contact-section-form-input">
              <input
                type="email"
                placeholder={translate("contact.form.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="contact-section-form-input">
              <input
                type="text"
                placeholder={translate("contact.form.subject")}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </span>
            <span className="contact-section-form-input">
              <textarea
                name="your-message"
                cols="40"
                rows="2"
                aria-invalid="false"
                placeholder={translate("contact.form.message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </span>
            <input
              className="contact-section-form-input submit-button"
              type="submit"
              value={translate("contact.form.button")}
              style={{ color: "#ffffff", background: loading ? "#ccc" : "#000000" }}
            ></input>
          </form>
        </section>
      </section>
      <section className="contact-other-container">
        <div>{translate("contact.prefer")}</div>

        <a className="my-cv-button" href={linkedinProfile} target="_blank" rel="noreferrer">
          <img src={LinkedinLogo} alt="Linkedin Logo" />
        </a>
        <a className="my-cv-button" href={`mailto:${contactMail}`} target="_blank" rel="noreferrer">
          <img src={MailIcon} alt="Mail Icon" />
        </a>
      </section>
    </section>
  );
};

Contact.propTypes = {
  translate: PropTypes.func,
};

export default Contact;
