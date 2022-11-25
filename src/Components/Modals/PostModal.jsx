import "../../Stylesheets/PostModal.css";
import { Formik } from "formik";
import axiosInstance from "../../helpers/axiosConfig/axiosConfig";
const Swal = require("sweetalert2");

export const PostModal = ({ modal, setModal }) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="Pmodal-content">
            <Formik
              initialValues={{ title: "", body: "", scheduledDate: "" }}
              onSubmit={async (values, { setSubmitting }) => {
                const { title, body, scheduledDate } = values;
                setSubmitting(true);
                try {
                  let response = await axiosInstance.post("/posts", {
                    title,
                    body,
                    scheduledDate,
                  });
                } catch (error) {
                  Swal.fire({
                    icon: "error",
                    title: "Post not sent",
                    text: "Check your details.",
                    confirmButtonText: "Retry",
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
                  <div id="body_modal">
                    <div className="popUpContainer">
                      <div id="modal-top">
                        <h2>Schedule Post</h2>
                      </div>
                      <hr />
                      <input type="text" id="title" placeholder="Post Title"
                      name="title"
                      value={values.title} 
                      onChange={handleChange}/>
                      <div id="inputContainer">
                        <textarea
                          name="body"
                          id="input-text"
                          placeholder="What's on your mind?"
                          cols={30}
                          rows={5}
                          onChange={handleChange}
                          value={values.body}
                        />
                        <input type="file" accept="image/*" id="picture" />
                        <div id="add-date">
                          <select name="socials" id="socials-account">
                            <option value="#">---Select An Account---</option>
                            <option value="twitter">Twitter</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                          </select>
                          <div>
                            <h6>Set Date</h6>
                            <input
                              onChange={handleChange}
                              type="datetime-local"
                              name="scheduledDate"
                              id="postDate"
                              placeholder="Post schedule date"
                              value={values.scheduledDate}
                            />
                          </div>
                        </div>
                      </div>
                      <div id="select-spacing">
                        <button id="post-button" type="submit" disabled={isSubmitting}  onClick={handleSubmit}>{ isSubmitting ? "Scheduling" : "schedule"}</button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      <p></p>
    </>
  );
};
