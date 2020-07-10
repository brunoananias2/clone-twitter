import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Bruno Ananias</h1>
        <h2>@bruno_ananias</h2>

        <p>
          Developer at <a href="https://www.corpsteknologi.com.br/">@Corpstekbrasil</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Natal, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 08 de março de 1988
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>3672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
