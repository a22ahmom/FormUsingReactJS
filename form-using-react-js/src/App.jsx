import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSubject, setSelectedSubject] = useState({});
  const [uploadResume, setUploadResume] = useState("");
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleGender(e) {
    setSelectedGender(e.target.value);
  }

  function handleSubject(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setSelectedSubject(values => ({...values, [name]: value}))
  }

  // function handleResume(e) {
  //   setUploadResume(e.target.files[0]);
  // }

  function handleUrl(e) {
    setUrl(e.target.value);
  }

  function handleChoice(e) {
    setChoice(e.target.value);
  }

  function handleAbout(e) {
    setAbout(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedGender,
      selectedSubject,
      uploadResume,
      url,
      choice,
      about
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedGender("");
    setSelectedSubject({
      english: false,
      maths: false,
      physics: false,
    });
    setUploadResume(""); // this is a problem (after submission the file name still not reset!). Fix later!
    setUrl("");
    setChoice("");
    setAbout("");
    alert("Form submitted")
  };

  function handleReset(e) {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedGender("");
    setSelectedSubject({
      english: false,
      maths: false,
      physics: false,
    });
    setUploadResume("");
    setUrl("");
    setChoice("");
    setAbout("");
  }

  return (
    <div className='App' class="app">
            
      <fieldset>
        <form action={'#'} method='get'>
          <h1>Fill in your credentials</h1>
          <div class="belowApp">
            <div>
              <label>First Name* <br/> </label>
              <input value={firstName} type='text' class='inputName' placeholder='Enter First Name' onChange={handleFirstName} required/>
            </div>

            <div>
              <label><br/> Last Name* <br/> </label>
              <input value={lastName} type='text' placeholder='Enter Last Name' onChange={handleLastName} required/>
            </div>

            <div>
              <label><br/> Enter Email* <br/> </label>
              <input value={email} type='email' placeholder='Enter email' autoComplete='email' onChange={handleEmail} required/>
            </div>

            <div id='divPhoneNumber'>
              <label><br/> Phone number* <br/> </label>
              <input value={phoneNumber} type='tel' placeholder='Enter Mobile Number' autoComplete='tel' onChange={handlePhoneNumber} required/>
            </div>

            <div id='divGender'>
              <label><br/> Gender* <br/> </label>
            </div>

            <div class="thirdDiv">
              <input type='radio' id='choiceMale' name='gender' value={'male'} checked={selectedGender === 'male'} onChange={handleGender} required/>
              <label>Male</label>

              <input type='radio'id='choiceFemale' name='gender' value={'female'} checked={selectedGender === 'female'} onChange={handleGender} required/>
              <label>Female</label>

              <input type='radio' id='choiceOther' name='gender' value={'other'} checked={selectedGender === 'other'} onChange={handleGender} required/>
              <label>Other</label>
            </div>

            <div id='divSubject'>
              <label>Your best subject <br/> </label>
            </div>

            <div class="fourthDiv">
              <input type='checkbox' id='choiceEnglish' name='english' checked={selectedSubject.english} onChange={handleSubject} />
              <label>English</label>

              <input type='checkbox'id='choiceMaths' name='maths' checked={selectedSubject.maths} onChange={handleSubject} />
              <label>Maths</label>

              <input type='checkbox' id='choicePhysics' name='physics' checked={selectedSubject.physics} onChange={handleSubject} />
              <label>Physics</label>
            </div>

            <div class="fifthDiv">
              <label>Upload Resume* <br/> </label>
              <input type='file' id='uploadResume' name='uploadResume' accept='.pdf' onChange={(e) => 
                setUploadResume(e.target.files[0])
              } required/>
            </div>

            <div class="sixthDiv">
              <label>Enter URL (optional) <br/> </label>
              <input type='url' id='enterURL' name='enterURL' placeholder='Enter url' pattern='https://.*' value={url} onChange={handleUrl}/>
            </div>

            <div class="seventhDiv">
              <label><br/>Select your choice <br/> </label>
              <select name='technologies' id='tech-stack' value={choice} onChange={handleChoice}>
                <option value="">Select your Answer</option>
                <hr/>

                <option value={"javascript"}>Javascript</option>
                <option value={"express"}>Express</option>
                <option value={"mongodb"}>Mongodb</option>
              </select>
            </div>

            <div class="eigthDiv">
              <label><br/> About <br/></label>
              <textarea name='textareaAbout' id='textareaAbout' rows={"10"} cols={"52"} placeholder='About yourself' value={about} onChange={handleAbout}></textarea>
            </div>

            <div id='divSubmitReset'>
              <label><br/>Submit OR Reset<br/></label>
            </div>
            <div class="ninthDiv">

            <button class="resetButton" type='reset' onClick={handleReset}>Reset</button>

              {/* <form onSubmit={handleSubmit}> */}
                <button class="submitButton" type='submit' value={'Submit'} onClick={(e) => handleSubmit(e)} >Submit</button>
              {/* </form> */}

            </div>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default App
