import handleResponseFromAPI from './2-then';

test('handleResponseFromAPI return the right response on resolve', () => {
  const promise = Promise.resolve();

  const successResponse = handleResponseFromAPI(promise);
  return expect(successResponse).resolves.toStrictEqual({
    body: 'success',
    status: 200,
  });
});

test('handleResponseFromAPI return the right response on reject', () => {
  const promise = Promise.reject(new Error());

  const successResponse = handleResponseFromAPI(promise);
  return expect(successResponse).resolves.toStrictEqual(new Error());
});

// test('handleResponseFromAPI have a finally callback', async () => {
//   const spy = jest.spyOn(console, 'warn').mockImplementation();

//   const promise = Promise.resolve();
//   await handleResponseFromAPI(promise);
//   expect(spy).toHaveBeenCalledWith('Got a response from the API');
//   spy.mockRestore();
// });
