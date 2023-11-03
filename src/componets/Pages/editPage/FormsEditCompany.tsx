import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { cepMask, cnpjMask,  phoneMask } from "../../masks";
import { MyData } from "../../Interfaces/typesCompany";


const FormsEditCompany: React.FC<MyData>= (company) => {
const [info, setInfo] = useState(true)

  
   const clearForm = () => {
    const emptyFormData = {
      nomeCliente: '',
      senha: 1,
      nomeEmpresa: '',
      cnpj: '',
      cep: '',
      endereco: '',
      numero: '',
      telefone: '',
      email: '',
    };
  
    setFormData(emptyFormData);
  };  

  const [formData, setFormData] = useState<MyData>({
    
    nomeCliente: '',
    senha: 1,
    nomeEmpresa: '',
    cnpj: '',
    cep: '',
    endereco: '',
    numero: '',
    telefone: '',
    email: '',
  });

 

    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
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
      formData.cnpj = formData.cnpj.replace(/\D/g, '')
      const response = await axios.put(`//localhost:8088/UpdateAll/${company.cnpj.replace(/\D/g, '')}`, formData);
      console.log('Resposta do servidor:', response.data);
      alert('dados atualziados com sucesso')
      setInfo(false)
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        alert(axiosError.response.data);
      } else {
        alert(axiosError.toString());
      }
    }
    
   
  };

  useEffect(() => {
    clearForm();
    setFormData({
      nomeCliente: company.nomeCliente,
      senha: company.senha,
      nomeEmpresa: company.nomeEmpresa,
      cnpj: cnpjMask(company.cnpj),
      cep: cepMask(company.cep),
      endereco: company.endereco,
      numero: company.numero,
      telefone: company.telefone,
      email: company.email,
    });
    setInfo(true)
  }, [company]);

  return (
    <>




{info ? (
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
              maxLength={15}
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
            <label htmlFor="">Informações Sobre a localidade da Empresa</label><br />
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
              value={formData.endereco}
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

            <button className='btnSub' type="submit">Submit</button>

          </div>
        </form>
      </div>


): <div><h3>dados atualizados com sucesso</h3> </div>}

    </>
  );
};
export default FormsEditCompany