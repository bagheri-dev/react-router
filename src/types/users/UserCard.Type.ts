export interface IUserCard {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}
