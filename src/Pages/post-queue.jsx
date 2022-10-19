<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Post queue</title>
  <link rel="stylesheet" href="./style.css" />
  <div className="back" />
  <div className="back-blue" />
  {/* modal */}
  <div id="body_modal">
    <div className="popUpContainer">
      <div id="modal-top">
        <h2>Schedule Post</h2>
        <button id="close_modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <hr />
      <div id="create-postP">
        <h2>Create Post</h2>
      </div>
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
        <div id="add-date">
          <div className="add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-hash"
              viewBox="0 0 16 16"
            >
              <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-images"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-play-btn"
              viewBox="0 0 16 16"
            >
              <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-file-earmark-arrow-up"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
          </div>
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
        <select name="socials" id="socials-account">
          <option value="#">------Select An Account---------</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="pinterest">Pinterest</option>
          <option value="linkedin">LinkedIn</option>
          <option value="tiktok">TikTok</option>
          <option value="wechat">WeChat</option>
          <option value="telegram">Telegram</option>
          <option value="reddit">Reddit</option>
          <option value="quora">Quora</option>
          <option value="youtube">Youtube</option>
          <option value="skype">Skype</option>
        </select>
        <button id="post-button">Schedule</button>
      </div>
    </div>
  </div>
  <div id="side-bar">
    <div className="side-icons">
      <a href="#">
        <img src="./images for setter app/app logo.jpeg" alt="" />
      </a>
    </div>
    <div className="side-icons">
      <a href="../social-dashboard/index.html">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-grid"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
        </svg>
      </a>
    </div>
    <div className="side-icons">
      <a href="../post-schedule/setterapp.html">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </a>
    </div>
    <div className="side-icons">
      <a href="../post-queue/mypage.html">
        <svg
          id="current"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-bar-chart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
        </svg>
      </a>
    </div>
    <div className="side-icons">
      <a href="../SetterApp Analytics/index.html">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-graph-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
          />
        </svg>
      </a>
    </div>
    <div className="side-icons">
      <a href="../FAQS/FAQS.html">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-patch-question"
          viewBox="0 0 16 16"
        >
          <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
          <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
        </svg>
      </a>
    </div>
  </div>
  {/* header */}
  <header>
    <div id="left-header">
      <h1>Posts</h1>
    </div>
    <div id="right-header">
      <button id="open_modal">Create New Post</button>
      <div className="header-icon profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="currentColor"
          className="bi bi-chat-square-dots"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <div className="message">
          <h3 className="top-boy">
            <span className="blue-color">Messages</span>
          </h3>
          <hr className="demacation" />
          <li>
            <span className="blue-color">
              <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <div className="mid-sec">
              <h3>
                <span className="blue-color">Mr chuks</span>
              </h3>
              <p>Hey!! Nice to meet you</p>
            </div>
            <h4>
              {" "}
              <span className="blue-color">11:32pm</span>
            </h4>
            <div id="reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-reply-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
              </svg>
            </div>
            <div id="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </div>
          </li>
          <li>
            <span className="blue-color">
              <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <div className="mid-sec">
              <h3>
                <span className="blue-color">Mr chuks</span>
              </h3>
              <p>Hey!! Nice to meet you</p>
            </div>
            <h4>
              {" "}
              <span className="blue-color">11:32pm</span>
            </h4>
            <div id="reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-reply-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
              </svg>
            </div>
            <div id="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </div>
          </li>
          <li>
            <span className="blue-color">
              <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <div className="mid-sec">
              <h3>
                <span className="blue-color">Mr chuks</span>
              </h3>
              <p>Hey!! Nice to meet you</p>
            </div>
            <h4>
              {" "}
              <span className="blue-color">11:32pm</span>
            </h4>
            <div id="reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-reply-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
              </svg>
            </div>
            <div id="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </div>
          </li>
        </div>
      </div>
      <div className="header-icon">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="currentColor"
            className="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </a>
      </div>
      <div className="header-icon user-image">
        <img
          src="./image resources/8-removebg-preview 2.png"
          alt="user-image"
          className="user-image"
          width="46px"
          height="46px"
        />
        <div className="view-profile">
          <h3 className="profile-boy">
            <a href="../profile/index.html">
              <span className="blue-color">View Profile</span>
            </a>
          </h3>
          <hr className="demacation" />
          <h3 className="profile-boy">
            <a href="">
              <span className="blue-color">Logout</span>
            </a>
          </h3>
        </div>
      </div>
    </div>
  </header>
  <div id="below-header">
    <div id="left-below-header">
      <div>
        <button id="current">Post Queue</button>
      </div>
      <div>
        <button>Awaiting Approval</button>
      </div>
      <div>
        <button>Schedule Settings</button>
      </div>
    </div>
    <div id="right-below-header">
      <label htmlFor="Set-Timezone" id="Set-Timezone">
        Set-Timezone
      </label>
      <input type="datetime-local" name="Set-Timezone" id="Set-Timezone" />
    </div>
  </div>
  <p id="date">
    <span id="today">Today, </span>22nd of April.
  </p>
  <div className="posts">
    {/* <div class="postcontainers"> */}
    {/* <div class="postImage">
  <img src="../setterApp assets/Lagos-Fellows.png" alt="post image">
</div>


<div class="post-content">
  <h2 class="Headline"> Tech life with Mr shams </h2>
  <h3 id="bodytext">Oya Clear Road for Mr Shams! The Big Brother of TIIDELabs is getting a mansion in Lagos. Our
    real estate agents are dedicated to helping him find houses, apartments, condos and commercial properties.
  </h3>

 
  <div class="hashtags">
    <h3>#techlife</h3>
    <h3>#tiidelab</h3>
    <h3>#house_</h3>
  </div>

 
  <div class="extras">
    <div class="reminder">
      <img src="./images for setter app/Baba.jpeg" alt="reminder img">
      <p>This post will be published Today at 09:30AM</p>
    </div>
    <div class="buttons">
      <button id="edit"> Edit </button>
      <button id="share">Share now</button>
    </div>
  </div>

</div>
    </div>

   


  
    <div class="postcontainers">
     
<div class="postImage">
  <img src="../setterApp assets/Lagos-Fellows.png" alt="post image">
</div>


<div class="post-content">
  <h2 class="Headline">Weekly meet up with fellows.</h2>
  <h3 id="bodytext">An aquascape that has three layers and has a total height of 10cm. This NFT scape is to be
    used in any aquarium and it can
    be ordered in any color combination. As it made of a moldable material (polyurethane) this background.</h3>

 
  <div class="hashtags">
    <h3>#techlife</h3>
    <h3>#tiidelab</h3>
    <h3>#house_</h3>
  </div>

 
  <div class="extras">
    <div class="reminder">
      <img src="./images for setter app/Baba.jpeg" alt="reminder img">
      <p>This post will be published Today at 09:30AM</p>
    </div>
    <div class="buttons">
      <button id="edit"> Edit </button>
      <button id="share">Share now</button>
    </div>
  </div>

</div>
    </div>

    


 
    <div class="postcontainers">
     
<div class="postImage">
  <img src="../setterApp assets/Lagos-Fellows.png" alt="post image">
</div>

     
<div class="post-content">
  <h2 class="Headline"> Hanging out with the pacesetters </h2>
  <h3 id="bodytext">Netflix and chill with the pacesetters on Friday as we relieve the stress of the week long
    task at TIIDElab. It promises to be a fun experience.</h3>
 
  <div class="hashtags">
    <h3>#techlife</h3>
    <h3>#tiidelab</h3>
    <h3>#house_</h3>
  </div>
  
  <div class="extras">
    <div class="reminder">
      <img src="./images for setter app/Baba.jpeg" alt="reminder img">
      <p>This post will be published Today at 09:30AM</p>
    </div>
    <div class="buttons">
      <button id="edit"> Edit </button>
      <button id="share">Share now</button>
    </div>
  </div>

</div>
    </div> */}
  </div>
</>
