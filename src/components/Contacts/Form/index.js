import { useState, useEffect } from 'react'

const initialFormValues = {fullname: "", phone_number: ""}

function Form({ setContacts, contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])
  
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const onSumbit = (e) => {
    e.preventDefault();

    if(form.fullname === '' || form.phone_number === ''){
      return false;
    }

    setContacts([...contacts, form]);
    
    //setForm(initialFormValues)
  }
  return (
    <div className="list-group">
        <div className="list-group-item">
          <input 
          name="fullname" 
          placeholder="Fullname" 
          value={form.fullname}
          onChange={onChangeInput}
          />
        </div>

        <div className="list-group-item">
          <input 
          name="phone_number" 
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
          />
        </div>

        <div className="btn">
        <button type="button" className="btn btn-primary" onClick={onSumbit}> Add </button>
        </div>
    </div>
  )
}

export default Form