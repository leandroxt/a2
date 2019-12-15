import { getCepFromViaCep } from './viacep';

export default {
  Query: {
    async getCep(obj: any, { cep }: { cep: string }) {
      try {
        const address = await getCepFromViaCep(cep);
        return address.data;
      } catch (error) {
        return {};
      }
    }
  }
};
