import React, { Component } from 'react';

import logo from '../../assets/blood-donation-svgrepo-com.svg'
import imageButton from '../../assets/blood-donation.svg'

import { Container} from './styles';

class Home extends Component {
    state = {
        button: true,
        form: true,
    }

    handleCLick = () => {
        this.setState({ button: false, form: true})
    }

    render() {

        const { button,form} = this.state
        return (
            <Container>
                <header>
                    <div>
                        <p>D</p>
                        <img src={logo} alt="Doe" />
                        <p>E</p>
                    </div>
                    <h1 className="titulo-principal">A sua doação importa !</h1>
                    <p>Até 3 vidas com 1 doação.</p>
                    <p>Mais de 38.000 doações são necessárias todos os dias.</p>
                    <p>Apenas 1,9% da população brasileira, doa sangue.</p>

                    <div className="button" button={button} onClick={this.handleCLick}>
                        <a href="#" >
                            Quero Ajudar
                        </a>
                    </div>
                </header>

                <section className="form" form={form}>
                    <h2>Entre na lista de doadores</h2>
                    <form>
                        <input type="text" name="name" placeholder="Nome Completo" />
                        <input type="text" name="email" placeholder="Email" />
                        <input type="text" name="blood" placeholder="Tipo sanguíneo" />
                        <button title="Quero Ajudar"><img src={imageButton} alt="" /></button>
                    </form>
                </section>

                <main>
                    <h2>Últimos <span>doadores</span></h2>

                    <section class="donors">

                        <div class="donor">
                            <div class="blood">O-</div>
                            <p>Luciano Belo</p>
                        </div>
                    </section>
                </main>
            </Container>
        )
    }
}

export default Home;