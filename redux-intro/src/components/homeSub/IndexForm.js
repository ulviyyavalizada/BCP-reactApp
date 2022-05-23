import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import SocialLinks from "../common/SocialLinks";
import translate from "../../i18n/translate";
import fromLeftIcon from "../../assets/res/img/left_img.svg";
import uploadFile from "../../assets/res/img/upload_file.svg";
import axios from "axios";
import { configs } from "../../config";
import addFile from "../../assets/res/img/add_file.svg";

import { connect } from "react-redux";
import { Formik, Field, useFormik } from "formik";

function IndexForm({ home, contacts, currentLanguage }) {
  const [selectedFile, setFile] = useState({ selectedFile: null });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  let onFileChange = (event) => {
    setFile({ selectedFile: event.target.files[0] });

    let size = event.target.files[0].size;

    if (event.target.files.length === 0) {
      alert("Fayl yüklənməyib");
    } else if (size > 10097152) {
      setFile({ selectedFile: null });
      alert("Faylın ölçüsü böyükdür");
    }
    validate();
  };

  const initialValues = {
    email: "",
    name: "",
    phone: "",
    content: "",
    file: "",
  };

  const validate = (values) => {
    let errors = {};

    //validate email
    if (!values.email) {
      errors.email = translate("Tələb edilir!");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(errors.email)
    ) {
      errors.email = translate("Uyğun məlumat daxil edilməyib.");
    } else if (values.email.length > 255) {
      errors.email = translate("Simvolların sayı 255-dən aşağı olmalıdır.");
      return errors;
    } else {
      setEmail(values.email);
      return true;
    }

    // validate email
    if (!values.name) {
      errors.name = translate("Tələb edilir!");
    } else if (values.name.match(/\d/)) {
      errors.name = translate("Yalnız hərflər daxil edin");
    } else if (values.name.length > 255) {
      errors.name = translate("Simvolların sayı 255-dən aşağı olmalıdır.");
      return errors;
    } else {
      setName(values.name);
    }

    //validate phone
    if (!values.phone) {
      errors.phone = translate("Tələb edilir!");
      return errors;
    } else {
      setPhone(values.phone);
    }

    //validate content
    if (!values.content) {
      errors.content = translate("Tələb edilir!");
    } else if (values.content.length < 10 && values.content.length > 501) {
      errors.content = translate(
        "Simvolların sayı 10-dan yuxarı 500-dən isə aşağı olmalıdır."
      );
      return errors;
    } else {
      setContent(values.content);
    }

    // Validate file
    if (selectedFile.selectedFile === null) {
      errors.file = translate("Tələb edilir!");
      return errors;
    }
  };

  //Axios post
  const postData = (e) => {
    const configData = {
      headers: { "content-type": "multipart/form-data" },
    };

    let formData = new FormData();

    formData.append("file", selectedFile.selectedFile);
    formData.append("name", name);
    formData.append("content", content);
    formData.append("phone", phone);
    formData.append("email", email);

    axios.post(`${configs[0].apiUrl}/feedbacks`, formData, configData);
  };

  //File name show
  let fileData = () => {
    if (selectedFile.selectedFile) {
      return (
        <Label className="file_label" for="uploadBrief">
          {selectedFile.selectedFile.name}
        </Label>
      );
    } else {
      return (
        <Label className="file_label" for="uploadBrief">
          {translate("Brief yüklə")}
        </Label>
      );
    }
  };

  const formik = useFormik({
    initialValues,
    postData,
    validate,
  });

  return (
    <div className="index_form">
      <div className="form_main_container">
        <div className="form_contact">
          <p className="entrace_form">{translate("Bu formu doldurun və")}</p>
          <div className="middle_form_container">
            <p>{translate("biz sizə geri")}</p>
            <p>{translate("dönəcəyik")}</p>
          </div>
          <div className="form_contact_numbers">
            <div className="left_img">
              <img src={fromLeftIcon} alt="" />
            </div>
            <div className="numbers">
              {!contacts.failed &&
                contacts.load &&
                contacts.data.map(
                  (contact, i) =>
                    contact.type === "phone" && <p key={i}>{contact.value}</p>
                )}
            </div>
          </div>
          <SocialLinks />
        </div>
        <div className="form_main">
          <form id="footer_form" onSubmit={formik.handleSubmit}>
            <div className="form_body">
              <div className="form-group input-group">
                <input
                  className="inputValidate"
                  type="text"
                  name="name"
                  maxLength={255}
                  placeholder={
                    home?.data?.placeholders?.name?.[currentLanguage]
                  }
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                <span className="errorMessage">
                  {formik.errors.name && formik.touched.name}
                </span>
              </div>
              <div className="form-group input-group">
                <input
                  className="inputValidate number_input"
                  type="number"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  placeholder={
                    home?.data?.placeholders?.phone?.[currentLanguage]
                  }
                />
                <span className="errorMessage">
                  {formik.errors.phone && formik.touched.phone}
                </span>
              </div>

              <div className="form-group input-group">
                <input
                  className="inputValidate"
                  type="email"
                  name="email"
                  maxLength={255}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder={
                    home?.data?.placeholders?.email?.[currentLanguage]
                  }
                />
                <span className="errorMessage">
                  {formik.errors.email && formik.touched.email}
                </span>
              </div>

              <div className="form-group file_group">
                {fileData()}
                <input
                  className="file_input inputValidate"
                  id="uploadBrief"
                  name="file"
                  value={formik.values.file}
                  type="file"
                  onChange={onFileChange}
                />
                <span className="errorMessage">
                  {formik.errors.file && formik.touched.file}
                </span>
                <label className="file_icon">
                  <img src={addFile} alt="" />
                </label>
              </div>

              <div className="form-group textarea_group">
                <textarea
                  name="content"
                  placeholder={
                    home?.data?.placeholders?.textarea?.[currentLanguage]
                  }
                  maxLength={500}
                  onChange={formik.handleChange}
                  value={formik.values.content}
                >
                  
                </textarea>
                <span className="errorMessage">
                  {formik.errors.content && formik.touched.content}
                </span>
              </div>
            </div>

            <div className="form_footer">
              <a href="">
                <label className="upload_file">
                  <span>{translate("Öz brief-ni hazırla")}</span>
                  <img src={uploadFile} alt="" />
                </label>
              </a>
              <button type="submit" className="btn_yellow">
                {translate("Göndər")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    home: state.homeReducer,
    contacts: state.contactsReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(IndexForm);
