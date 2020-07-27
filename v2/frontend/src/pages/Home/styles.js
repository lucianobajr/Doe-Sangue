import styled, { css } from 'styled-components';

export const Container = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  header{
      margin-top:50px;
      display:flex;
      flex-direction:column;
      align-items:center;

      div{
          height: 60px;
          display:flex;
          align-items:center;
          justify-content:center;
          img{
            margin-bottom:10px;
              width:52px;
              height: 52px;
          }
          p{
            font-family:  'Courgette', cursive;
            font-size:60px;
          }
          margin-bottom:50px;
      }

      h1{
        font-family:  'Dancing Script', cursive;
        margin-bottom:50px;
      }
      p{
          margin-bottom:10px;
          font-family:'Roboto', sans-serif;
      }
      
      .button{
          display: flex;
           margin-top: 20px;
           align-items:center;
           justify-content:center;
        a{
          margin-top: 20px;
          background-color: #ff4f4f;
          border: solid 1px #ff4f4f;
          color: white;
          font-weight: 700;
          font-family:'Roboto', sans-serif;
          letter-spacing:1.5px;
          width: max-content;
          padding: 13px 22px;
          text-transform: uppercase;
          border-radius: 6px;
          text-align: center;
          text-decoration: none;
          display: block;
          margin-top: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: all .3s ease-in-out 0s;

        &:hover{
            background-color: #ffffff;
            color: black;
            transition: all .3s ease 0s;
            transform: translateY(-3px);
        }
      }
    }
  }

  .form{
    margin: 0 auto 70px;
    max-height: 90%;
    max-width: 500px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 45px;
    background-color: #ff4f4f;
    padding: 16px 64px;
    align-items: center;
    border-radius: 6px;

    h2{
      text-align: right;
      color: #f9f9f9f9;
      font-size: 18px;
    }

    form{
      input{
        width: 100%;
        margin-bottom: 4px;
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px #ffffff88 solid;
        background-color: white;
        background-color: transparent;

        &::placeholder{
          color: #ffffffaa;
        }
      }
      button{
        width: 100%;
        height: 60px;
        margin-bottom: 4px;
        border-radius: 4px;
        border: 1px #ffffff88 solid;
        background-color: #FFF;
        font-weight: bold;
        transition:all .3s ease 0s ;

        img{
          width:80px;
          height: 45px;
        }
        &:hover{
          background-color:#F8F8F8
        }
      }
    }

    
  }

  main{
    margin: 0 auto 70px;
    max-height: 90%;
    max-width: 500px;
   

    h2{
      span{
        color: #ff4f4f;
      }
    }
    text-align: center;

    .donors {
      margin-top:50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .donor{
      p{
        margin-top: 24px;
        font-size: 14px;
        margin-bottom: 64px;
      }
    }

    .blood {
      color: #ff4f4f;
      font-weight: bold;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &::before{
        content: "";
        background-color: #ff4f4f11;
        width: 40px;
        height: 40px;
        position: absolute;
        border-radius: 50%;
        border-top-right-radius: 0;
        transform: rotate(-45deg);
      }
    }
  }

`;