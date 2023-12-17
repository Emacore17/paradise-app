export interface IEvent {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    description: IDescription;
    dresscode: string;
    price: number;
    includedDrinks: string[];
    tags: string[];
    isAperitivoIncluded: boolean;
  }
  
  interface IDescription {
    long?: string[];
    short: string;
  }
  
  export interface IEventDetail extends IEvent {
    includedDishes?: IIncludedDish[];
  }
  
  export interface IIncludedDish {
    name: string;
    description: string;
    allergens: string[];
  }