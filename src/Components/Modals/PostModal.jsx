import "../../Stylesheets/PostModal.css";

export const PostModal = ({modal, setModal}) => {
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
            <div id="body_modal">
              <div className="popUpContainer">
                <div id="modal-top">
                  <h2>Schedule Post</h2>
                  
                </div>
                <hr />
                <input type="text" id="title" placeholder="Post Title" />
                <div id="inputContainer">
                  <textarea
                    name="input-text"
                    id="input-text"
                    placeholder="What's on your mind?"
                    cols={30}
                    rows={5}
                    defaultValue={""}
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
                        type="datetime-local"
                        name="postDate"
                        id="postDate"
                        placeholder="Post schedule date"
                      />
                    </div>
                  </div>
                </div>
                <div id="select-spacing">
                  <button id="post-button">Schedule</button>
                </div>
              </div>
            </div>
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
