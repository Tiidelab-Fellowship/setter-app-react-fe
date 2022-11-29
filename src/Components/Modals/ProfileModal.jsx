import React from "react";
import { Formik } from "formik";
import "../../Stylesheets/ProfileModal.css";
import axiosInstance from "../../helpers/axiosConfig/axiosConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProfileModalBusiness = ({ modal, setModal }) => {
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <React.Fragment>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Formik
              initialValues={{
                name: "",
                size: "",
                businessCategoryName: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const { name, size, businessCategoryName } = values;
                setSubmitting(true);

                try {
                  let response = await axiosInstance.post(
                    "/businessInformation",
                    {
                      name,
                      size,
                      businessCategoryName,
                    }
                  );
                  console.log(response);
                  toast.success("Business registration successful", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });  
                    setModal(!modal)             
                  } catch (error) {
                    toast.error('Registration Unsuccessful', {
                      position: "top-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form>
                  <h3 className="Your-Profile">Business Profile</h3>
                  <label className="profileLabelModal">Business Name</label>
                  <br />
                  <input
                    name="name"
                    className="profileModalInput"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <br />
                  <label className="profileLabelModal">Business Size</label>
                  <br />
                  <input
                    name="size"
                    className="profileModalInput"
                    type="text"
                    placeholder="Small, medium or Large-scale"
                    value={values.size}
                    onChange={handleChange}
                  />

                  <br />
                  <label className="profileLabelModal">Business Category</label>
                  <br />
                  {/* <select name="businessCategory" className="profileModalInput" value={values.businessCategoryName}>
                    {category.map((opt) => (
                      <option>{opt}</option>
                    ))}
                  </select> */}
                   <input
                    name="businessCategoryName"
                    className="profileModalInput"
                    type="text"
                    value={values.businessCategoryName}
                    onChange={handleChange}
                  />

                  <br />
                  <button id="close" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button id="close" type="submit" disabled={isSubmitting}  onClick={handleSubmit}>
                    { isSubmitting ? "Registering Business" : "Register"}
                  </button>
                </form>
              )}
            </Formik>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </React.Fragment>
  );
};

export const ProfileModalName = ({ modal2, setModal2 }) => {
  const toggleModal = () => {
    setModal2(!modal2);
  };
  if (modal2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <React.Fragment>
      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <Formik
              initialValues={{
                userName: "",
                phoneNumber: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const { userName, phoneNumber } = values;
                setSubmitting(true);
                const id = JSON.parse(localStorage.getItem("userId"));
                try {
                  let response = await axiosInstance.patch(
                    `/users/${id}`,
                    {
                      phoneNumber,
                      userName,
                    },
                    
                  );
                  console.log(response);
                  toast.success('Profile Updated Successfully', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setModal2(!modal2)
                } catch (error) {
                  toast.error('Profile update unsuccessful', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
            <form>
              <h3 className="Your-Profile">Your Profile</h3>
              <label className="profileLabelModal">UserName</label>
              <br />
              <input
                name="userName"
                className="profileModalInput"
                type="text"
                value={values.userName}
                onChange={handleChange}
              />
              <br />
              <label className="profileLabelModal">Phone</label>
              <br />
              <input
                name="phoneNumber"
                className="profileModalInput"
                type="text"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <br />
              <label className="profileLabelModal">Profile Picture</label>
              <br />
              <input
                className="profileModalInput"
                type="file"
                id="myFile"
                name="filename"
              />
              <button id="close" onClick={toggleModal}>
                Cancel
              </button>
              <button id="close" type="submit" disabled={isSubmitting}  onClick={handleSubmit}>
               {isSubmitting ? "Updating" : "Update"} 
              </button>
            </form>
              )}
              </Formik>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </React.Fragment>
  );
};
