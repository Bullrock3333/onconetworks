interface DataType {
   id: number; 
   title: string;
   price: string;
   desc: string;
}[]; 

const pre_sale_data: DataType[] = [
   {
      id: 1, 
      title: "PRESALE - 1",
      price: "Price $ 0.003",
      desc: "35 Million $ONCO ",
   },
   {
      id: 2, 
      title: "PRESALE - 2",
      price: "Price $ 0.005",
      desc: "35 Million $ONCO",
   },
   {
      id: 3, 
      title: "PRESALE - 3",
      price: "Price $ 0.007",
      desc: "35 Million $ONCO",
   },
   // {
   //    id: 4, 
   //    title: "PRESALE - 4",
   //    price: "Price $ 0.06",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 5, 
   //    title: "PRESALE - 5",
   //    price: "Price $ 0.07",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 6, 
   //    title: "PRESALE - 6",
   //    price: "Price $0.08",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 7, 
   //    title: "PRESALE - 7",
   //    price: "Price $0.09",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 8, 
   //    title: "PRESALE - 8",
   //    price: "Price $ 0.1",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 9, 
   //    title: "PRESALE - 9",
   //    price: "Price $ 0.11",
   //    desc: "45 Million $ONCO",
   // },
   // {
   //    id: 10, 
   //    title: "PRESALE - 10",
   //    price: "Price $0.12",
   //    desc: "45 Million $ONCO",
   // },
];

export default pre_sale_data;