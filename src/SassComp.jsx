import React from "react"

// SASS:
import "./SassComp.scss"

const SassComp = ({ hasError }) => {

  console.log("Sass Comp RENDERED!");

  const renderFormContainer = () => (
    <article className={`container ${hasError ? 'hasError' : ''}`}>
      <label className="label">Input</label>
      <input value="value" className="input" type="text" onChange={() => void(0)} />
      <button className="button">Botao</button>
    </article>
  )

  const renderTextContainer = () => (
    <article className="container">
      <p><strong>Lorem Ipsum</strong> é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
    </article>
  )

  const renderTable = () =>(
    <article className="container">
      <table className="table">
        <thead>
          <tr>
            <th>TH1</th>
            <th>TH2</th>
            <th>TH3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TD1</td>
            <td>TD2</td>
            <td>TD3</td>
          </tr>
          <tr>
            <td>TD1</td>
            <td>TD2</td>
            <td>TD3</td>
          </tr>
        </tbody>
      </table>
    </article>
  )

  return (
    <main>
      { renderFormContainer() }
      { renderTextContainer() }
      { renderTable() }
    </main>
  )
}

export default React.memo(SassComp)