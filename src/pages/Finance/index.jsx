import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { DataGrid, useApi } from '@mui/x-data-grid';

import Header from '../../components/Header'


import api from '../../services/api'

import {FaSearch } from 'react-icons/fa';

import {
  Container,
  HeaderBody,
  H3,
  Form,
  InputContainer,
  InputBusca,
  InputContainerBusca,
  Button,
  Input,
  ContainerGrid,
} from './styles';

const columns = [
  // { field: 'id', headerName: 'ID', width: 200 },
  { field: 'nome', headerName: 'Nome do cliente', width: 300 },
  { field: 'valor', headerName: 'Valor', width: 240 },
  { field: 'desde', headerName: 'Desde', width: 240 },
];

const Finance = () => {
  const [name, setName] = useState('');
  const [clientes, setClientes] = useState([]);

  useEffect(async() => {
    const { data } = await api.get('clientes');
    console.log(data);
    formData(data);
  },[])

  const handleFindByName = async() => {
    const { data } = await api.get(`clientes/cliente?name=${name}`);
    formData(data);
    setName('');
  }

  const formData = async data => {
    const result = await data.map(e => ({
      id: e.id,
      nome: e.nome,
      valor: Number(e.valor).toFixed(2).replace('.', ','),
      desde: moment(e.desde).format("DD/MM/YYYY")
    }))
    setClientes(result);
  }

  return (
    <>
      <Header />
      <Container>
        <HeaderBody>
          <H3>Lista de clientes inadimplentes</H3>
        </HeaderBody>
        <Form>
          <InputContainer>
            <InputContainerBusca>
              <label>Buscar por nome</label>
              <InputBusca>
                <Input value={name} onChange={(text) => setName(text.target.value)}
                />
                <Button type="button" onClick={handleFindByName}>
                  Buscar
                  <FaSearch />
                </Button>
              </InputBusca>
            </InputContainerBusca>

          </InputContainer>
          <ContainerGrid>
            <DataGrid
              rows={clientes}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </ContainerGrid>
        </Form>
      </Container>
    </>
  );
};
export default Finance;
