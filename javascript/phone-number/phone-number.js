export const clean = (phoneNumber) => {
  let cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  if (cleanPhoneNumber.startsWith('1')) {
    cleanPhoneNumber = cleanPhoneNumber.slice(1);
  }
  return cleanPhoneNumber;
};
