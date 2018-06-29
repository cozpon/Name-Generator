let bandId = 0;

export const createName = name => ({
  type: 'CREATE_NAME',
  id: bandId++,
  name
}); // create an object to pass to the REDUCER