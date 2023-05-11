import { useNavigate } from 'react-router-dom';
import './Form.css'


const MyForm = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (typeof window !== 'undefined') {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
          if (typeof window !== 'undefined') {
          navigate('/checkout', { state: { formData: data } });
          }
        }
      };
      

    return (
        <div>
            <div className="body-form">
                <form className="forms" onSubmit={handleFormSubmit}>
                    <h1>Faça seu cadastro abaixo</h1>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome" name="name" />
                    </div>

                    <div>
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" name="email" />
                    </div>

                    <div>
                        <label>Telefone</label>
                        <input type="tel" placeholder="Digite seu telefone" name="phone" />
                    </div>

                    <div>
                        <label>Estado</label>
                        <select name="state">
                            <option>Selecione...</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AM</option>
                            <option>AP</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MG</option>
                            <option>MS</option>
                            <option>MT</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>PR</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>RS</option>
                            <option>SC</option>
                            <option>SE</option>
                            <option>SP</option>
                            <option>TO</option>
                        </select>
                    </div>

                    <div>
                        <label>Cidade</label>
                        <input type="text" placeholder="Digite sua cidade" name="city" />
                    </div>

                    <div>
                        <label>CNPJ</label>
                        <input type="text" placeholder="Digite seu CNPJ" name="cnpj" />
                    </div>

                    <div>
                        <label>Faturamento</label>
                        <select name="revenue" >
                            <option>Selecione...</option>
                            <option>Até R$ 1.000,00</option>
                            <option>De R$ 1.000,01 a R$ 5.000,00</option>
                            <option>De R$ 5.000,01 a R$ 10.000,00</option>
                            <option>De R$ 10.000,01 a R$ 50.000,00</option>
                            <option>Acima de R$ 50.000,00</option>
                        </select>
                    </div>

                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>

    );
}

export default MyForm;
