import { Pet } from "./Pet";

export interface Adocao {
  id: number;
  pet: Pet;
  email: string;
  donation: number;
}
