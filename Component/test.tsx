type List = {
  store:string;
  menu:string;
  src:any;
  addr:string;
  remain:number;
  sale:number;
  price:number;
  startTime:string;
  endTime:string;
  lat:number;
  long:number
}

type Another= {
  quest:string;
  store:string;
  where:string;
  date:string;

}

type Hash = {
  hashtag:string;
  menu:string;
}

export const info: List[] = [
  {
    store:'송탄햄버거',
    menu:'버거',
    src:require('../assets/food/burger.jpg'),
    addr:'춘천시',
    remain:3,
    sale:25,
    price:6000,
    startTime:'22:00',
    endTime:'23:00',
    long:127.74367729,
    lat:37.88731768
  },
  {
    store:'바른치킨',
    menu:'후라이드치킨',
    src:require('../assets/food/chicken.jpg'),
    addr:'춘천시',
    remain:3,
    sale:25,
    price:12000,
    startTime:"22:00",
    endTime:"23:00",
    long:127.745056,
    lat:37.851983
  },
  {
    store:'송주불냉면',
    menu:'냉면',
    src:require('../assets/food/coldnoodle.jpg'),
    addr:'춘천시',
    remain:3,
    sale:25,
    price:6000,
    startTime:"22:00",
    endTime:"23:00",
    long:127.750474,
    lat:37.879815
  },
  {
    store:'통나무집',
    menu:'닭갈비',
    src:require('../assets/food/dakkalbi.jpg'),
    addr:'춘천시',
    remain:3,
    sale:10,
    price:10000,
    startTime:"22:00",
    endTime:"23:00",
    long:127.793243,
    lat:37.933109
  },
  {
    store:'대암순대국',
    menu:'돼지국밥',
    src:require('../assets/food/gukbab.jpg'),
    addr:'춘천시',
    remain:3,
    sale:20,
    price:7000,
    startTime:"22:00",
    endTime:"23:00",
    long:127.737319,
    lat:37.866333
  }
]

const quest: Another[] = [

]

const tag: Hash[] = [

]