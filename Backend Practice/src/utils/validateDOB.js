export const validateDOB = (DOB) => {
  const dob = new Date(DOB); // Example DOB
  const dobInDays = Math.floor(dob.getTime() / (1000 * 60 * 60 * 24));
//   console.log("DOB in days:", dobInDays);
  const today = new Date();
  const todayInDays = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  console.log("Today in days:", todayInDays);
  ageInDays = todayInDays - dobInDays;
//   console.log("Age in days:", ageInDays);
//   if(){
//     console.log("Adult");
//   }
};
