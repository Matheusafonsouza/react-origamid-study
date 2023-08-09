import React from 'react';
import useForm from './hooks/useForm';
import Input from './components/Input';
import Product from './components/Product';


const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cep.validate()) {
      console.log('Submit');
    } else {
      console.log('Error');
    };
  };

  return (
    <>
      <Product />
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          {...email}
        />
        <button type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default App;
