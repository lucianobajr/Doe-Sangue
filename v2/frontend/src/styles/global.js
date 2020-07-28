import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';



export default createGlobalStyle `
    *{
        margin:0;
        padding:0; 
        outline:0;
        box-sizing:border-box;
    }

    body {
        -webkit-font-smoothing:antialiased;
    }

    #root{
        max-width:1020px;
        margin:0 auto;
        padding:0 20px 50px;
    }

    button{
        cursor: pointer;
    }

`

export const Toast = styled(ToastContainer)
`
    .Toastify__toast--success {
    background: '#ff4f4f';
  }
`