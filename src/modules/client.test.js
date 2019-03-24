import { request } from '../modules/client';

describe('client', () => {
  const mockFetchJSON = url => {
    return new Promise(resolve => {
      resolve({
        json: () => 'api json data',
        headers: { get: key => 'application/json' }
      });
    });
  };
  const mockFetchText = url => {
    return new Promise(resolve => {
      resolve({ text: () => 'api text data', headers: { get: key => '' } });
    });
  };
  const mockFetchError = url => {
    return new Promise((resolve, reject) => {
      reject('unexpected error data');
    });
  };
  it('call fetch function, and return resolved text data', async () => {
    const result = await request('validURL', mockFetchText);
    expect(result).toBe('api text data');
  });

  it('call fetch function, and return resolved json data', async () => {
    const result = await request('validURL', mockFetchJSON);
    expect(result).toBe('api json data');
  });

  it('call fetch function, and return resolved json data', async () => {
    const result = await request('invalidURL', mockFetchError);
    expect(result).toBe('unexpected error data');
  });
});
