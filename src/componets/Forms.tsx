import React, { useState } from 'react';
import "./StyleForms.css"
import fazerRequisicao from '../Axios/PostNovaEmpresa';

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lide com os dados do formulário, por exemplo, envie para um servidor
    console.log(formData);
    fazerRequisicao(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='divFormsOFF'>
        <label htmlFor="nomeCliente">Nome:</label>
        <input
          type="text"
          id="nomeCliente"
          name="nomeCliente"
          value={formData.nomeCliente}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================= */}
      <div className='divFormsOFF'>
        <label htmlFor="Senha">Senha:</label>
        <input
          type="text"
          id="Senha"
          name="Senha"
          value={formData.Senha}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="nomeEmpresa">Nome Da Empresa:</label>
        <input
          type="text"
          id="nomeEmpresa"
          name="nomeEmpresa"
          value={formData.nomeEmpresa}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id=  "endereco"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="numeroEndereco">Numero:</label>
        <input
          type="text"
          id="numeroEndereco"
          name="numeroEndereco"
          value={formData.numeroEndereco}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </div>
      {/* ============================================================ */}
      <div className='divFormsOFF'>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='divFormsOFF'>
        <button type="submit">Submit</button>
        <button><a href="/">Home</a></button>
      </div>
    </form>
  );
};

export default Forms;