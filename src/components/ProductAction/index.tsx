import React from 'react';

import { Container,Benefits,Condition,Row,HeartIcon,DispatchTag,PriceCard,PriceRow,InstallmentsInfo,StockStatus,MethodCard,CheckIcon,Actions,Button,ShieldIcon} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon/>
      </Row>
      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon/>

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Beneficio Lorem Ipsum</span>
          <a href="#" className="more">Ver mais opções</a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button >Adiconar ao carinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p>
            Compra garantida, recebe o produto que está esperando ou devolvemos o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
