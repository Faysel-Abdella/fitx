const demo = [
    {
      number: 10,
      name:"홍길동",
      flan:"울티메이트 플랜",
      amount:"200,000",
      occuurenceTime:"2025-04-01 14:32:25",
      division:"결제",
      
    },
  ];
  
  const tableData = [
    ...Array.from({ length: 70 }, (_,index) => ({
      ...demo[0],
      number:index+1
    })),
  ];
  
  export default tableData;