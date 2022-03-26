import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import  './styles.css'


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Merve',
      phone_number: "122334"
    },
    {
      fullname: 'Esra',
      phone_number: "958585"
    },
    {
      fullname: 'Nazlı',
      phone_number: "4455554"
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts] )

  return (
    <div id="container">
        <h1>Contacts</h1> 
        <List contacts={contacts}/>
        <Form setContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts