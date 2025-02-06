const demo = [
    {
      number: 10,
      Thumbnail:"썸네일",
      competionName:"2024 USAPL KOREA",
      date:"2025-11-05",
      address:"서울시 금천구 가산디지털2로 101",
      memberEngagement:"3명",
      dDay:"D-17"
    },
  ];
  
  const row4Column1 = [
    ...Array.from({ length: 70 }, () => ({
      ...demo[0],
      
    })),
  ];
  
  export default row4Column1;