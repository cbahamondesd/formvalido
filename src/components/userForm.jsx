import React, { useState } from 'react'

const UserForm = () => {
  const [ inputs, setInputs ] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirmpassword : ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entro ");
    const newErrors = {};
    let valorName = inputs.firstname;
    let valorLastName = inputs.lastname;
    let valorEmail = inputs.email;
    let valorPwd = inputs.password;

    if( valorName.length < parseInt(2) ){
      newErrors.firstname = "El nombre tener a lo menos 2 caracteres";
    }

    if( valorLastName.length < parseInt(2) ){
      newErrors.lastname = "El apellido debe a lo menos 2 caracteres";
    }

    if( valorEmail.length < parseInt(5) ){
      newErrors.email = "El email debe tener a lo menos 5 caracteres";
    }

    if( valorPwd.length < parseInt(8) ){
      newErrors.password = "El password debe tener a lo menos 8 caracteres";
    }

    if( inputs.password !== inputs.confirmpassword ){
      newErrors.password = "El password y su confirmacion deben ser iguales";
    }

    if(Object.keys(newErrors).length > 0 ){
      setErrors(newErrors);
      return;
    }

    console.log('Formulario enviado ', inputs);
  }

  return (
    <form onSubmit={ handleSubmit }>
        <h2>Formulario de contacto</h2>
        <div>
          <label>Fistname:</label><input type="text" name="firstname" placeholder="Ingresa nombre" onChange={handleChange} value={inputs.firstname} />
          {errors.firstname && <div>{errors.firstname}</div>}
        </div>
        <div>
          <label>Lastname:</label><input type="text" name="lastname" placeholder="Ingresa apellido" onChange={handleChange} value={inputs.lastname} />
          {errors.lastname && <div>{errors.lastname}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" placeholder="Ingresa email" onChange={handleChange} value={inputs.email}  />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input type="text" name="password" placeholder="Ingresa password" onChange={handleChange} value={inputs.password}  />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="text" name="confirmpassword" placeholder="Confirma password" onChange={handleChange} value={inputs.confirmpassword} />
          {errors.password && <div>{errors.password}</div>}
        </div>
        
        <input type="submit" value="Enviar"/>
      </form>
  );
};      

export default UserForm;
