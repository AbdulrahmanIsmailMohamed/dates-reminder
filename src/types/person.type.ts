export interface Person {
  id: string;
  name: string;
  date: string;
  photo: string;
}

export interface ListProps {
  person: Person[];
}
