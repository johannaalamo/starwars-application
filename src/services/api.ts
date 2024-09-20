import axios from 'axios';
import { Character } from '../interfaces/types';

const BASE_URL = 'https://swapi.dev/api';

export interface PeopleResponse {
  results: Character[];
  next: string | null;
  previous: string | null;
}


export const fetchPeople = async ({ page, search }: { page: number; search?: string }) => {
  const response = await axios.get<PeopleResponse>(`${BASE_URL}/people/`, { params: { page, search }});
  return response.data;
};

export const fetchResource = async (url: string) => {
  const response = await axios.get<any>(url);
  return response.data;
};