import axios, { AxiosResponse } from 'axios';
import { MyData } from '../types.ts';

// Defina o tipo dos dados que você está enviando no corpo da solicitação
/* interface DadosDeEnvio {
  nome: string;
  email: string;
} */


  // Função para fazer a solicitação POST
const fazerRequisicao = async (dados: MyData) => {
  try {
    // Faça a solicitação POST
    const resposta: AxiosResponse = await axios.post('https://localhost:8088/CriarNovaEmpresa', dados);

    // Lide com a resposta
    console.log('Resposta da API:', resposta.data);

    // Você também pode retornar a resposta ou realizar outras ações
    return resposta.data;
  } catch (erro) {
    // Lide com os erros
    console.error('Erro na solicitação POST:', erro);
  }
};

export default fazerRequisicao
