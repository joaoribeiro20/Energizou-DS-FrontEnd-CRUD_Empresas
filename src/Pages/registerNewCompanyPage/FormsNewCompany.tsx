import React, { useState } from 'react';
import "./StyleForms.css"
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { cnpjMask, phoneMask, cepMask } from '../../componets/masks.ts'
import { MyData } from '../../Interfaces/typesCep.ts'; 

const Forms: React.FC = () => {
  const [cepVia, setcepVia] = useState('');

  const [formData, setFormData] = useState({
    nomeCliente: '',
    senha: '',
    nomeEmpresa: '',
    cnpj: '',
    cep: '',
    endereco: '',
    numero: '',
    telefone: '',
    email: '',
  });

  const testeCEP = async (cep: string) => {
   
    try {
      const response = await axios.get<MyData>(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.log(error);
      // Trate os erros aqui
      throw error;
    }
  }

  const handleChange = async  (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'cep') {
      const teste = value;
      if (teste.length === 8) {
        try {
          const cepData = await testeCEP(value);
          setcepVia(cepData.logradouro)
          console.log(cepData);
        } catch (error) {
          console.error('Erro ao buscar dados de CEP:', error);
        }
      }
    }
    // Mapeie o nome do campo para a função de formatação correspondente
    const formatFunctions: Record<string, (value: string) => string> = {
      telefone: phoneMask,
      cep: cepMask,
      cnpj: cnpjMask,
      
    };
    
    // Verifique se o nome do campo está no mapeamento
    const formatFunction = formatFunctions[name];

    // Se existir uma função de formatação para o campo, aplique-a; caso contrário, use o valor original
    const formattedValue = formatFunction ? formatFunction(value) : value;

    // Atualize o estado com o valor formatado
    setFormData((formData) => ({
      ...formData,
      [name]: formattedValue,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      formData.endereco = cepVia
      const response = await axios.post('//localhost:8088/NewCompany', formData);
      console.log(response.data)
      console.log('Resposta do servidor:', response.data);
      alert('Cadastro Realizado com sucesso!!')
      setFormData({
        nomeCliente: '',
        senha: '',
        nomeEmpresa: '',
        cnpj: '',
        cep: '',
        endereco: '',
        numero: '',
        telefone: '',
        email: '',
      })
      setcepVia('')
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        alert(axiosError.response.data);
      } else {
        alert(axiosError.toString());
      }
    }
    
    
  }


  return (

    <div className='divMainForms'>
      <form onSubmit={handleSubmit}>
        {/* ============================================================= */}
        <div className='containerPerson'>
          <label htmlFor="">Informações Pessoais</label><br />
          <input
            type="text"
            maxLength={40}
            id="nomeCliente"
            name="nomeCliente"
            value={formData.nomeCliente}
            onChange={handleChange}
            placeholder='Nome'
            className='meuInput'
            required
          />
          <input
            type="password"
            id="senha"
            maxLength={20}
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder='Senha'
            className='meuInput'
            required
          />
          <input
            type="tel"
            maxLength={11}
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder='Telefone'
            className='meuInput'
            required
          />
          <input
            type="text"
            id="email"
            maxLength={20}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='meuInput'
            required
          />
        </div>
        {/* ============================================================ */}
        {/* ============================================================ */}
        <div className='containerCompany'>
          <label htmlFor="">Informações Da Empresa</label><br />
          <input
            type="text"
            id="nomeEmpresa"
            maxLength={30}
            name="nomeEmpresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            placeholder='Nome da Empresa'
            className='meuInput'
            required
          />
          <input
            type="text"
            maxLength={14}
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            placeholder='CNPJ'
            className='meuInput'
            required
          />
        </div>
        {/* ============================================================ */}
        {/* ============================================================ */}
        <div className='containerDataFromlocation'>
          <label htmlFor="">Informações Sobre a localidade da Empresa</label>
          <input
            type="text"
            maxLength={9}
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder='CEP'
            className='meuInput'
            required
          />
          <input
            type="text"
            id="endereco"
            maxLength={30}
            name="endereco"
            value={cepVia}
            onChange={handleChange}
            placeholder='Endereço'
            className='meuInput'
            required
          />
          <input
            type="number"
            id="numero"
            maxLength={10}

            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder='Numero'
            className='meuInput'
            required
          />
        </div>
        {/* ============================================================ */}
        <div className='divbtnForms'>


          <Link className='btnFormshome' to="/">Home</Link>
          <button className='btnSub' type="submit">Submit</button>
        </div>
      </form>
    </div>


  );
};

export default Forms;