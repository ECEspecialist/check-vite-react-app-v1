const approvalData = [
               [
                 { id: 1, date: '03/05/2024' },
                 { id: 2, type: 'Casual leave' },
                 { id: 3, duration: '02 (05-06 June)' },
                 { id: 4, status: 'Pending' }
               ],
               [
                 { id: 5, date: '03/05/2024' },
                 { id: 6, type: 'Late entry' },
                 { id: 7, duration: '02 (05-06 July)' },
                 { id: 8, status: 'Rejected' }
               ],
               [
                 { id: 9, date: '03/05/2024' },
                 { id: 10, type: 'Maternity leave' },
                 { id: 11, duration: '10 (05-06 February)' },
                 { id: 12, status: 'Approved' }
               ],
               [
                 { id: 13, date: '03/05/2024' },
                 { id: 14, type: 'Late entry' },
                 { id: 15, duration: '09 (07-06 May)' },
                 { id: 16, status: 'Approved' }
               ],
               [
                 { id: 17, date: '03/05/2024' },
                 { id: 18, type: 'Sick leave' },
                 { id: 19, duration: '01 (15-06 June)'},
                 { id: 20, status: 'Approved' }
               ],
               [
                 { id: 21, date: '03/05/2024' },
                 { id: 22, type: 'Casual leave' },
                 { id: 23, duration: '02 (05-06 June)' },
                 { id: 24, status: 'Pending' }
               ],
               [
                 { id: 25, date: '03/05/2024' },
                 { id: 26, type: 'Late entry' },
                 { id: 27, duration: '02 (05-06 July)' },
                 { id: 28, status: 'Rejected' }
               ],
               [
                 { id: 29, date: '03/05/2024' },
                 { id: 30, type: 'Maternity leave' },
                 { id: 31, duration: '10 (05-06 February)' },
                 { id: 32, status: 'Approved' }
               ],
               [
                 { id: 33, date: '03/05/2024' },
                 { id: 34, type: 'Late entry' },
                 { id: 35, duration: '09 (07-06 May)' },
                 { id: 36, status: 'Approved' }
               ],
               [
                 { id: 37, date: '03/05/2024' },
                 { id: 38, type: 'Sick leave' },
                 { id: 39, duration: '01 (15-06 June)'},
                 { id: 40, status: 'Approved' }
               ]
];

const newEntry = [
  { id: 37, date: '03/05/2024' },
  { id: 38, type: 'Sick leave' },
  { id: 39, duration: '01 (15-06 June)' },
  { id: 40, status: 'Pending' }
];

approvalData.push(newEntry);

export default approvalData