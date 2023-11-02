
const cnpjMask = (value:string) => {
    if (!value) return "";
  
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); // Aplica a máscara XX.XXX.XXX/XXXX-XX
  
    return value;
  };
  const phoneMask = (value:string) => {
    if (!value) return "";
  
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3'); // Aplica a máscara (XX) XXXXX-XXXX
    return value;
  };

   const isEmailValid = (email:string) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if(regex.test(email)){
      return email
    }else{
      return null
    }
  }; 

  const cepMask = (value:string) => {
    if (!value) return "";
  
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/(\d{5})(\d{3})/, '$1-$2'); // Aplica a máscara XXXXX-XXX
  
    return value;
  };
  export {cnpjMask, phoneMask, isEmailValid, cepMask}