import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'bootstrap';

function App() {

  return (
    // react Fragment
    <>

      <div className='gmail-container'>
        {/* header */}
        <header className='gmail-header border-bottom'>
          <div className='d-flex'>
            <button className="btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#5f6368"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt="gmail-img"
            />
          </div>
          <InputGroup className="header-search mx-auto">
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control className='bg-transparent border-0'
            />
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup>
          <div className='d-flex align-items-center'>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                />
              </svg>
            </button>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
                />
                <circle fill="#5f6368" cx="12" cy="12" r="3.5" />
              </svg>
            </button>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>

            </button>
            <div
              className='profile-icon rounded-circle bg-danger text-white d-flex align-items-center justify-content-center'
              style={{
                width: "32px",
                height: "32px",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              v
            </div>
          </div>

        </header>
        <div className='container-fluid'>
          <div className='row h-100'>
            {/* side bar */}
            <div className='col-md-2 sidebar'>
              <button className="btn compose-btn d-flex  gap-3 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                Compose
              </button>

              <ul className='flex-column sidebar-nav'>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>

                  Inbox</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                  </svg>
                  Starred</li>
                <li className='nav-item'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  Snoozed</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
                  Sent</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                  </svg>
                  Drafts</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  Purchases</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16">
                    <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                    <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                  </svg>
                  Travel</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>
                  Less</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-exclamation-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  Important</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Scheduled</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  All Mail</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
                  Spam</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Trash</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1" />
                  </svg>
                  subscriptions</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                  </svg>
                  Manage labels</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                  </svg>
                  Create new label</li>

              </ul>
            </div>

            {/* main content */}

            <div className='col-md 10 main-content'>
              { <div className='container'>
                <div className='row'>
                  <div className='col-md 3'>
                    
                    
                    
                    Primary
                    
                  </div>
                  <div className='col-md 3'>
                    Promotions
                  </div>
                  <div className='col-md 3'>
                 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                      </svg>
                      Social
                    
                  </div>
                  <div className='col-md 3'>
                    Updates
                  </div>

                </div>

              </div> }


              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>Google security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{"  "}
                    <span className='snippet'>
                      -We noticed a new login to your account from Chrome on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>Amazon India</span>
                  <span className='subject flex-grow-1 p-2'>
                    Your order has been shipped{"  "}
                    <span className='snippet'>
                      -  Your package is on the way and will arrive by 18 Feb.
                    </span>
                  </span>
                  <span className='time p-2'>  8:15 AM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> LinkedIn</span>
                  <span className='subject flex-grow-1 p-2'>
                    You have 3 new connection requests{"  "}
                    <span className='snippet'>
                      -    See who wants to connect with you this week.
                    </span>
                  </span>
                  <span className='time p-2'>Yesterday</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>GitHub</span>
                  <span className='subject flex-grow-1 p-2'>
                    New sign-in from a new device{"  "}
                    <span className='snippet'>
                      -  We detected a login from Mumbai, Maharashtra.
                    </span>
                  </span>
                  <span className='time p-2'> 11:30 PM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>Paytm</span>
                  <span className='subject flex-grow-1 p-2'>
                    Payment successfu{"  "}
                    <span className='snippet'>
                      -  ₹1,250 has been debited from your account.
                    </span>
                  </span>
                  <span className='time p-2'> 7:05 AM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread' >
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Netflix</span>
                  <span className='subject flex-grow-1 p-2'>
                    New device started streaming{"  "}
                    <span className='snippet'>
                      - Your account is being used on a new device.
                    </span>
                  </span>
                  <span className='time p-2'> Monday</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Flipkarte</span>
                  <span className='subject flex-grow-1 p-2'>
                    Big Billion Days is live!{"  "}
                    <span className='snippet'>
                      - Grab up to 70% off on electronics and fashion.
                    </span>
                  </span>
                  <span className='time p-2'>  2:10 PM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>Swiggy</span>
                  <span className='subject flex-grow-1 p-2'>
                    60% OFF on your favorite restaurants{"  "}
                    <span className='snippet'>
                      -Order now and enjoy free delivery today.
                    </span>
                  </span>
                  <span className='time p-2'>  1:05 PM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> HDFC Bank</span>
                  <span className='subject flex-grow-1 p-2'>
                    Monthly Account Statement – January 2026{"  "}
                    <span className='snippet'>
                      -  Your account statement is now available for download.
                    </span>
                  </span>
                  <span className='time p-2'> 10 Feb</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'>  Instagram</span>
                  <span className='subject flex-grow-1 p-2'>
                    New login to your account{"  "}
                    <span className='snippet'>
                      -   We noticed a login from a new location.
                    </span>
                  </span>
                  <span className='time p-2'>  5:40 PM</span>
                </div>

              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom raed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unraed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom raed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unraed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom raed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unraed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom unraed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom raed'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{"  "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>
              </div>
              <div className='email-list box-1'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button variant="link" className='star-btn p-0 btn p-2'>
                    ☆
                  </button>
                  <span className='sender p-2'> Zoom</span>
                  <span className='subject flex-grow-1 p-2'>
                    Meeting Reminder: Project Discussion{" "}
                    <span className='snippet'>
                      -   Your meeting starts in 30 minutes. Join now.
                    </span>
                  </span>
                  <span className='time p-2'> 10.30 AM</span>
                </div>


              </div>
              <div className='email-list box-1'>


              </div>
              <div className='box-2'>
                <h3>test</h3>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App