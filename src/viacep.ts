import { instance } from './http';
import { ServerResponse } from './types';

export async function getCepFromViaCep(cep: string) {
  return await instance().request<ServerResponse>({
    method: 'GET',
    url: `/ws/${cep}/json/`,
  });
}