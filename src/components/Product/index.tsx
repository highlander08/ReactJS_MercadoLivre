import React from "react";

import tshirtimage from "../../assets/tshirt.png";
import SellerInfo from '../../components/SellerInfo';
import ProductAction from '../../components/ProductAction';


import { Container,Row,Panel,Column,Gallery,Section,Description} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtimage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>

          <WarrantySection />

          <WarrantySection />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
      <p className="title">Compra Garantida com o Lorem Ipsum</p>
      <p className="description">
        Receba o produto que está esperando ou devolvemos o seu dinheiro
      </p>
      </span>

      <span>
      <p className="title">Garantia do Vendedor</p>
      <p className="description">Sem Garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>

);


const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
      e de impressos, e vem sendo utilizado desde o século XVI, quando um
      impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
      fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
      séculos, como também ao salto para a editoração
      <br />
      <br />
      itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
      e de impressos, e vem sendo utilizado desde o século XVI, quando um
      impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
      fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
      séculos, como também ao salto para a editoração
    </p>
  </Description>

  );

 export default Product;
