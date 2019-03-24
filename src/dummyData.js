const dummyData = {
  jobs: [
    {id: 1, name: 'Job 1', isComplete: false},
    {id: 2, name: 'Job 2', isComplete: false},
    {id: 3, name: 'Job 3', isComplete: true},
    {id: 4, name: 'Job 4', isComplete: true},
    {id: 5, name: 'Job 5', isComplete: false}
  ],
  tools: [
    { id: 1, name: 'hammer', totalQuantity: 10, availableQuantity: 8},
    { id: 2, name: 'screwdriver', totalQuantity: 20, availableQuantity: 18},
    { id: 3, name: 'anvil', totalQuantity: 50, availableQuantity: 28}
  ]
};

export default dummyData;
