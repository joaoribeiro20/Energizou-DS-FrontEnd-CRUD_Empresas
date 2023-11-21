import axios from "axios";


export default function excluir(value:string) {
    axios.delete(`http://localhost:8088/DeleteCompany/${value}`)
      .then(response => {
        response.status
        /* setData(null)
        setInputValue('')
        setMensagemValue(true)
        alert(`Empresa excluida com sucesso!!`) */
      })
      .catch(error => {
        console.log(error)
      });

  }