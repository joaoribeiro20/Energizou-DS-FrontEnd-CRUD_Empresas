import React, { useState } from 'react';
import "./StyleForms.css"
import axios from 'axios';

const Forms: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCliente: '',
    Senha: '',
    nomeEmpresa: '',
    cnpj:'',
    cep:'',
    endereco:'',
    numeroEndereco:'',
    telefone:'',
    email:'',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('https://localhost:8088/CriarNovaEmpresa', formData);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };


  return (
    <div className='divFormsMain'>
    <form onSubmit={handleSubmit}>
      <div className='divFormsOFF'>
        <input
          type="text"
          id="nomeCliente"
          name="nomeCliente"
          value={formData.nomeCliente}
          onChange={handleChange}
          placeholder='Nome'
          className='meuInput'
        />
      </div>
      {/* ============================================================= */}
      <div className='divFormsOFF'>

        <input
          type="text"
          id="Senha"
          name="Senha"
          value={formData.Senha}
          onChange={handleChange}
          placeholder='Senha'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
     
        <input
          type="text"
          id="nomeEmpresa"
          name="nomeEmpresa"
          value={formData.nomeEmpresa}
          onChange={handleChange}
          placeholder='Nome da Empresa'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          placeholder='CNPJ'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
       
        <input
          type="text"
          id="cep"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          placeholder='CEP'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
      
        <input
          type="text"
          id=  "endereco"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder='Endereço'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        
        <input
          type="text"
          id="numeroEndereco"
          name="numeroEndereco"
          value={formData.numeroEndereco}
          onChange={handleChange}
          placeholder='Numero'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
      
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder='Telefone'
          className='meuInput'
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='meuInput'
        />
      </div>
      <div className='divFormsOFF'>
        <button className='btnSub' type="submit">Submit</button>
       
      </div> 
      <div className='divFormsOFF'>
         <button className='btnhome'><a href="/">Home</a></button>
        </div>
       
    </form>
    </div>
  );
};

export default Forms;