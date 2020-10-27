import React from 'react'
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 100vh;
  width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`
const ContainerDeMensagens = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`
const ContainerDeEntrada = styled.div`
  display:flex;
`
const EntradaNome = styled.input `
  width:100px;
  border-radius: 5px;
`
const EntradaMensagem = styled.input `
  flex-grow: 1;
  border-radius: 5px;
`
const Botao = styled.button `
  border-radius: 5px;
`

class App extends React.Component {
  state = {
    vetorDeMensagens: [],
    usuarioValor: '',
    textoValor: ''
  }

  onChangeUsuarioValor = (event) => {
    this.setState({usuarioValor: event.target.value})
  }

  onChangeTextoValor = (event) => {
    this.setState({textoValor: event.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuarioValor,
      texto: this.state.textoValor
    }
    // console.log(novaMensagem);
    const novoVetorDeMensagens = [...this.state.vetorDeMensagens, novaMensagem]
    this.setState({vetorDeMensagens: novoVetorDeMensagens, usuarioValor: '', textoValor: ''})
    
  }

  enviarComOEnter = (event) => {
    if (event.key === 'Enter'){
      this.enviarMensagem()
    }
  }

  render(){
    // console.log(this.state.usuarioValor);
    // console.log(this.state.textoValor);
    return (
      <ContainerPrincipal>
        <ContainerDeMensagens>
          {this.state.vetorDeMensagens.map((mensagem, indice) => {
            return <p key={indice}>
             <strong>{mensagem.usuario}</strong>: {mensagem.texto}
          </p>
          })}
                 
        </ContainerDeMensagens>
        <ContainerDeEntrada>
          <EntradaNome onChange={this.onChangeUsuarioValor} value={this.state.usuarioValor} placeholder={'Nome'}/>
          <EntradaMensagem onChange={this.onChangeTextoValor} onKeyDown={this.enviarComOEnter} value={this.state.textoValor} placeholder={'Mensagem'}/>
          <Botao onClick={this.enviarMensagem}>Enviar!</Botao>
        </ContainerDeEntrada>  
      </ContainerPrincipal>
    );
  }
}

export default App;
