import { ImageProps } from "react-native";

export interface shoesDATA {
  id: string;
  name: string;
  image: ImageProps["source"];
  prices: Number;
  description: string;
}

export interface ContextType {
  shoes: shoesDATA[];
}

export const DATAs: shoesDATA[] = [
  {
    id: "1",
    name: "Air Jordan",
    prices: 35,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/AirJordan.png')
  },
  {
    id: "2",
    name: "Air Max Force",
    prices: 30,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/AirMaxForce.png') 
  }, 
  {
    id: "3",
    name: "Free Air Max",
    prices: 27,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/FreeAirMax.png')
  },  
  {
    id: "4",
    name: "Mag Marty McFly",
    prices: 50,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/AirJordanOff-White.png')
  }, 
  {
    id: "5",
    name: "Skate Air Jordan",
    prices: 38,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/SkateAirJordan.png')
  }, 
  {
    id: "6",
    name: "Black Air Max",
    prices: 25,
    description:
      "Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.Os bifes com sal q.b.,os dentes de alho e o louro.Numa frigideira deite um pouco de óleo e de azeite q.b. e deixe fritar os bifes em lume brando durante cerca de 15 minutos ,não se esqueça de virar os bifes para que fritem de ambos os lados.",
    image: require('../../assets/AirMaxBlack.png')
  },   
];