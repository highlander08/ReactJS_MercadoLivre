import React from 'react';

import { Container,More,Title,LocationCard,LocationIcon,ReputationCard,ReputationThermometer,ReputationRow,SupportIcon,ClockIcon } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informaçôes sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>Fortaleza, Ceara</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li/>
          <li/>
          <li/>
          <li/>
          <li className="active"/>
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Venda nos últimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon/></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon/></strong>
            <span>Venda nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
