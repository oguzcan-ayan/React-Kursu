import React, {useState} from 'react';

function Form() {

   /*  const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");
 */
    const [form, setForm] = useState({name : "", surname : "", gender : ""});
    const handleChange = e => {
      /* setForm({...form, [e.target.name] : e.target.value}); */
       setForm((prev) => ({...prev, [e.target.name] : e.target.value})); 
    }
  return (
    <>
    <div>
    Name
    </div>

   {/*  <div>
    <input placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)}>
    </input>
    </div>     */}
    <div>
    <input placeholder='Enter your name' value={form.name} name='name' onChange={handleChange}>
    </input>
    </div>

    <div>
    Surname
    </div>

   {/*  <div>
    <input placeholder='Enter your surname' value={surname} onChange={(event) => setSurname(event.target.value)}>
    </input>    
    </div> */}
    <div>
    <input placeholder='Enter your surname' value={form.surname} name='surname' onChange={handleChange}>
    </input>    
    </div>
    <br/>

    <div>
    Gender
    </div>

  {/*   <div>
        <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value={"0"}>Male</option>
            <option value={"1"}>Female</option>
        </select>
    </div> */}
    <div>
      <select value={form.gender} name='gender' onChange={handleChange}>
        <option value={"0"}>Male</option>
        <option value={"1"}>Female</option>
      </select>
    </div>
    <hr/>

    {/* <div><strong>{name} {surname}</strong></div>
    <div><strong>{gender === '0' ? 'Male' : 'Female'}</strong></div> */}
    <div><strong>{form.name} {form.surname}</strong></div>
    <div><strong>{form.gender === '0' ? 'Male' : form.gender === '1' && 'Female'}</strong></div>


    {/* koşul ? doğruysa : yanlışsa */}
    </>
  )
}

export default Form;