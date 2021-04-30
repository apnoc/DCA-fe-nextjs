import React from 'react'
import {gql, useQuery, useMutation } from "@apollo/client"
import { Formik, Field, Form } from "formik";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"



const CREATE_SESSION =gql `
mutation createSession($session: SessionInput!) {
createSession(session: $session) {
firstName
lastName
email
phoneNumber
address
}
}
`


function validateEmail(value) {
let error;
if (!value) {
error = 'Required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
error = 'Invalid email address';
}
return error;
}


function validatePhoneNumber(value) {
let error;
if (!value) {
error = 'Required';
} else {

 const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

if (!regex.test(value)) {
error = 'Invalid phone Number';
}else if (value.length > 10) {
  error = 'Invalid phone Number';
}
return error;
}
}


function validateFirstName(value) {
  let error;
  if (!value) {
     error = 'Required';
   } else if (value.length >5) {
     error = 'Must be 5 characters or less';
   }
}




const Contact = () => {

const [ create, { called, error } ] = useMutation(CREATE_SESSION);

if(called) return <p>Contact Details Submitted Successfully!</p>

if(error) return <p>Failed to submit Contact Details</p>

return (
<div
style={{
width: "100%",
display: "flex",
alignContent: "center",
justifyContent: "center",
padding: 10,
}}
>
<Formik
initialValues={{
firstName: "",
lastName: "",
email: "",
phoneNumber:"",
address: "",
}}
onSubmit={ async (values) => {
console.log(values);
await create({ variables: {session: values }});
}}
>
{({ errors, touched, isValidating }) => (

<Form style={{ width: "100%", maxWidth: 500 }}>
<section className="container">
<h1 className="d-flex justify-content-center my-4 py-4">
Contact US
</h1>
</section>
<div className="mb-3" style={{ paddingBottom: 5 }}>
<label htmlFor="inputFirstName">First Name</label>
<Field
id="inputFirstName"
className="form-control"
required
autoFocus
name="firstName"
validate={validateFirstName}
/>
{errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
</div>
<div className="mb-3" style={{ paddingBottom: 5 }}>
<label htmlFor="inputLastName">Last Name</label>
<Field
id="inputLastName"
className="form-control"
required
autoFocus
name="lastName"
/>
</div>
<div className="mb-3" style={{ paddingBottom: 5 }}>
<label htmlFor="inputEmail">Email</label>
<Field
type="textarea"
id="inputEmail"
className="form-control"
required
name="email"
validate={validateEmail}
/>
{errors.email && touched.email && <div>{errors.email}</div>}
</div>
<div className="mb-3" style={{ paddingBottom: 5 }}>
<label htmlFor="inputPhoneNumber">Phone Number</label>
<Field
name="phoneNumber"
id="inputPhoneNumber"
className="form-control"
required
validate={validatePhoneNumber}
/>
{errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
</div>
<div className="mb-3" style={{ paddingBottom: 5 }}>
<label htmlFor="inputAddress">Address</label>
<Field
name="address"
id="inputAddress"
className="form-control"
required
/>
</div>
<div style={{ justifyContent: "center", alignContent: "center" }}>
<button className="btn btn-primary">Submit</button>
</div>
</Form>
)}
</Formik>
</div>
);
}





const ContactForm = () => {
const client = new ApolloClient({
cache: new InMemoryCache(),
link: new HttpLink({
uri: "http://apilink" // your graphql server link
}),
credentials: "same-origin",
})

return (
<>
                                                                                                   
<ApolloProvider client={client}>
<div>
<Contact />
</div>
</ApolloProvider>

</>
);
};

export default ContactForm;
