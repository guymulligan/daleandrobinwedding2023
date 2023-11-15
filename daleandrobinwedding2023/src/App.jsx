import './App.css';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


function App() {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [numberOfPeopleJoining, setNumberOfPeopleJoining] = useState('')
  const [namesOfPeopleJoining, setNamesOfPeopleJoining] = useState('')
  const [serviceReceptionBoth, setServiceReceptionBoth] = useState('')
  const [confirmButton, setConfirmButton] = useState(false)

  const form = useRef();
  
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_8yjwr3m', 'template_2yh65gh', form.current, 'IY3jeocAdI_oZpYdX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setConfirmButton(true)
  }
  

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  function handleEmaiAddresslChange(event) {
    setEmailAddress(event.target.value);
  }

  function handleNumberOfPeopleJoiningChange(event) {
    setNumberOfPeopleJoining(event.target.value);
  }

  function handleNamesOfPeopleJoining(event) {
    setNamesOfPeopleJoining(event.target.value);
  }

  let content;

  if (confirmButton == false) {
    
    content = (
    <>
      <div id='page1a' className='page1a'>
        <div className='header'>
          <Link 
            to="page1a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
           <p className='headerHome'>Home</p> 
          </Link>

          <Link 
            to="page2a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={500}
          >
            <p className='headerInfo'>Info</p>
          </Link>

          <Link 
            to="page3a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <p className='headerMenu'>Menu</p>
          </Link>

          <Link
            to="page4a" 
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
          >
            <p className='headerRSVP'>RSVP</p>
          </Link>
        </div>
        <div className='daleandrobin'>
          <p>Dale & Robin</p>
        </div>
        <div className='inviteyou'>
          <p>invite you to their wedding!</p>
        </div>
        <div className='row1'>
          <img src="9.jpg" alt="Row 1, Image 1" />
          <img src="6.png" alt="Row 1, Image 2" />
        </div>
        <div className='shelf1'></div>
        <div className='row2'>
          <img src="5.png" alt="Row 2, Image 1" />
          <img src="7.jpg" alt="Row 2, Image 2" />
        </div>
        <div className='shelf2'></div>
        <div className='moreinfodownstairs'>
          <Link
            to="page2a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={500}
          >
            <p>Books downstairs</p>
          </Link>
        </div>
      </div>

      <div id='page2a' className='page2a'>
        <div className='booksandshelf'>
          <div className='book1'>
            <p>WEDDING INFO</p>
          </div>
          <div className='book2'>
            <p>01 / 03 / 2024</p>
          </div>
          <div className='book3'>
            <p>11.30am</p>
          </div>
          <div className='book4'>
            <p>St. Peter's</p>
            <p>Church</p>
            <p>BD1 1QR</p>
          </div>
          <div className='book5'>
            <p>Reception:</p>
            <p>Castle Gardens @ 2pm</p>
          </div>
          <div className='shelf3'></div>
        </div>
        <div className='magazinesdownstairs'>
          <Link
            to="page3a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={500}
          >
            <p>Magazines downstairs</p>
          </Link>
        </div>
      </div>

      <div id='page3a' className='page3a'>
        <div className='tracklistcover'>
          <div className='tracklisttitle'>
            <p>le menu</p>
          </div>

          <div className='starter'>
            <div className='startertitle'>
              <p>starter</p>
            </div>
            <div className='starterdetail'>
              <p>Roasted tomato bruschetta</p>
            </div>
          </div>
          <div className='main'>
            <div className='maintitle'>
              <p>main</p>
            </div>
            <div className='maindetail'>
              <p>Buffet pork roast and vegetables</p>
            </div>
          </div>
          <div className='dessert'>
            <div className='desserttitle'>
              <p>dessert</p>
            </div>
            <div className='dessertdetail'>
              <p>Madagascan vanilla cheesecake</p>
            </div>
          </div>
          <div className='shelf4'></div>
        </div>
        <div className='RSVPdownstairs'>
          <Link
            to="page4a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
          >
            <p>RSVP downstairs</p>
          </Link>
        </div>
      </div>

      <div id='page4a' className='page4a'>
        <div className='page4acontent'>
          <p className='RSVP'>RSVP</p>
          <p className='joinus'>We'd love for you to join us on our special day - let us know if you can make it!</p>

          <form ref={form} id = 'RSVPQuestions' className='RSVPQuestions' type ='submit' onSubmit={sendEmail}>
            
            <p className='RSVPQ'>Name</p>
            <input type="text" name='Name' value={name} onChange={handleNameChange}></input>

            <p className='RSVPQ'>Phone Number</p>
            <input type='number' name='Number' value={number} onChange={handleNumberChange}></input>

            <p className='RSVPQ'>Email address</p>
            <input name='Email' value={emailAddress} onChange={handleEmaiAddresslChange}></input>

            <p className='RSVPQ'>Number of people joining you</p>
            <input type='number' name='NumberPeopleJoining' value={numberOfPeopleJoining} onChange={handleNumberOfPeopleJoiningChange}></input>

            <p className='RSVPQ'>Names of people joining you</p>
            <input className='RSVPQinputtall' name='NamesPeopleJoining' value={namesOfPeopleJoining} onChange={handleNamesOfPeopleJoining}></input>

            <p className='RSVPQ'>Will you be attending the wedding service, reception or both?</p>

            <label className='RSVPradio'>
              <input className='RSVPradioinput' type="radio" name='ServiceReceptionBoth' value={serviceReceptionBoth} onClick={() => setServiceReceptionBoth('Service')}/>
              Service
            </label>
            <label className='RSVPradio'>
              <input className='RSVPradioinput' type="radio" name='ServiceReceptionBoth' value={serviceReceptionBoth} onClick={() => setServiceReceptionBoth('Reception')}/>
              Reception
            </label>
            <label className='RSVPradio'>
              <input className='RSVPradioinput' type="radio" name='ServiceReceptionBoth' value={serviceReceptionBoth} onClick={() => setServiceReceptionBoth('Both')}/>
              Both
            </label>

          
          <div className='RSVPbuttondiv'>
            
            {/* <Link
            to="page3a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={700}
            duration={500}
          > */}
          <input className='RSVPbutton' type='submit' value='Confirm my choices!'/>

          {/* </Link> */}
          </div>
        </form>
        </div>
        
      </div>
    </>
  );
}

if (confirmButton == true) {
  content = (<>
    <div id='page1a' className='page1a'>
    <div className='header'>
          <Link 
            to="page1a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
           <p className='headerHome'>Home</p> 
          </Link>

          <Link 
            to="page2a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={500}
          >
            <p className='headerInfo'>Info</p>
          </Link>

          <Link 
            to="page3a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <p className='headerMenu'>Menu</p>
          </Link>

          <Link
            to="page4b" 
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <p className='headerRSVP'>RSVP</p>
          </Link>
        </div>
      <div className='daleandrobin'>
        <p>Dale and Robin</p>
      </div>
      <div className='inviteyou'>
        <p>invite you to their wedding!</p>
      </div>
      <div className='row1'>
        <img src="9.jpg" alt="Row 1, Image 1" />
        <img src="6.png" alt="Row 1, Image 2" />
      </div>
      <div className='shelf1'></div>
      <div className='row2'>
        <img src="5.png" alt="Row 2, Image 1" />
        <img src="7.jpg" alt="Row 2, Image 2" />
      </div>
      <div className='shelf2'></div>
      <div className='moreinfodownstairs'>
        <Link
          to="page2a"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-10}
          duration={500}
        >
          <p>Books downstairs</p>
        </Link>
      </div>
    </div>

    <div id='page2a' className='page2a'>
      <div className='booksandshelf'>
        <div className='book1'>
          <p>WEDDING INFO</p>
        </div>
        <div className='book2'>
          <p>01 / 03 / 2024</p>
        </div>
        <div className='book3'>
          <p>11.30am</p>
        </div>
        <div className='book4'>
          <p>St. Peter's</p>
          <p>Church</p>
          <p>BD1 1QR</p>
        </div>
        <div className='book5'>
          <p>Reception:</p>
          <p>Castle Gardens @ 2pm</p>
        </div>
        <div className='shelf3'></div>
      </div>
      <div className='magazinesdownstairs'>
        <Link
          to="page3a"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-10}
          duration={500}
        >
          <p>Magazines downstairs</p>
        </Link>
      </div>
    </div>

    <div id='page3a' className='page3a'>
      <div className='tracklistcover'>
        <div className='tracklisttitle'>
          <p>le menu</p>
        </div>

        <div className='starter'>
          <div className='startertitle'>
            <p>starter</p>
          </div>
          <div className='starterdetail'>
            <p>Roasted tomato bruschetta</p>
          </div>
        </div>
        <div className='main'>
          <div className='maintitle'>
            <p>main</p>
          </div>
          <div className='maindetail'>
            <p>Buffet pork roast and vegetables</p>
          </div>
        </div>
        <div className='dessert'>
          <div className='desserttitle'>
            <p>dessert</p>
          </div>
          <div className='dessertdetail'>
            <p>Madagascan vanilla cheesecake</p>
          </div>
        </div>
        <div className='shelf4'></div>
      </div>
      <div className='RSVPdownstairs'>
        <Link
          to="page4b"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
        >
          <p>RSVP downstairs</p>
        </Link>
      </div>
    </div>

    <div id='page4b' className='page4b'>
    <div className='page4bcontent'>
          <p className='RSVP'>RSVP</p>
          <p className='thankyou'>Thank you for letting us know - we can't wait to share our special day with you!</p>

          <div className='RSVPQuestions'>
            <p className='RSVPQ'>Name</p>
            <p className='RSVPA'> {name}</p>

            <p className='RSVPQ'>Phone Number</p>
            <p className='RSVPA'> {number}</p>

            <p className='RSVPQ'>Email address</p>
            <p className='RSVPA'> {emailAddress}</p>

            <p className='RSVPQ'>Number of people joining you</p>
            <p className='RSVPA'> {numberOfPeopleJoining}</p>

            <p className='RSVPQ'>Names of people joining you</p>
            <p className='RSVPA'> {namesOfPeopleJoining}</p>

            <p className='RSVPQ'>Will you be attending the wedding service, reception or both?</p>
            <p className='RSVPA'> {serviceReceptionBoth}</p>
          </div>
          <div className='backToTop'>
            <Link
              to="page1a"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
              >
            <p>Back to top</p>
            </Link>
            </div>
        </div>
        


      </div>
  </>
);
}

return (
  <div className='App'>
    {content}
  </div>
);
}

export default App;
