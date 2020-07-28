import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'
import {Flip} from "react-reveal";

import api from '../../services/api'

import * as DonorAction from '../../store/modules/donor/action'

import logo from '../../assets/blood-donation-svgrepo-com.svg'
import imageButton from '../../assets/blood-donation.svg'

import { Container } from './styles';


const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    blood: Yup.string().required('O tipo sanguíneo é obrigatória')
})

export default function Home() {
    const [donors, setDonors] = useState([])

    const [help, setHelp] = useState(() => false)

    const dispatch = useDispatch()

    useEffect(() => {
        async function loadDonors() {
            const response = await api.get('donors')

            const data = response.data.map(donor => ({
                ...donor
            }))

            setDonors(data)
        }

        loadDonors()
    }, [])

    function handleSubmit({ name, email, blood }) {
        dispatch(DonorAction.donorRequest(name, email, blood))
    }

    function handleClick(){
        console.log(help)
        setHelp(!help)
        console.log(help)
    }


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

                <div className="button" onClick={handleClick}>
                    <a href="#" >
                        Quero Ajudar
                    </a>
                </div>
            </header>

            {help && 
            <Flip top duration={1000} distance="20px">
            <section className="form">
                <h2>Entre na lista de doadores</h2>
                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input type="text" name="name" placeholder="Nome Completo" />
                    <Input type="email" name="email" placeholder="Email" />
                    <Input type="text" name="blood" placeholder="Tipo sanguíneo" />
                    <button type="submit" title="Quero Ajudar"><img src={imageButton} alt="" /></button>
                </Form>
            </section>
            </Flip>}

            <main>
                <h2>Últimos <span>doadores</span></h2>

                <section class="donors">
                    {donors.map(donor => (
                        <div class="donor">
                            <div class="blood">{donor.blood}</div>
                            <p>{donor.name}</p>
                        </div>
                    ))}
                </section>
            </main>
        </Container>
    )
}