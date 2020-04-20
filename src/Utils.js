import axios from 'axios';

export default class Utils {

  static async fetchRemoteData(url) {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      return new Uint8Array(response.data);
    }
    catch(error) {
      throw error;
    }
  }

  static async fetchRemoteNFTData (url) {
    let url1 = url + '.fset'
    let url2 = url + '.iset'
    let url3 = url + '.fset3'
    const response = await axios.all([
      axios.get(url + '.fset', { responseType: 'arraybuffer' }),
      axios.get(url + '.iset', { responseType: 'arraybuffer' }),
      axios.get(url + '.fset3', { responseType: 'arraybuffer' })
    ])
      .catch((error) => { console.error(error) })
    return new Uint8Array(response.data)
  }

  static async fetchRemoteNFTData2 (url) {
    let url1 = url + '.fset'
    let url2 = url + '.iset'
    let url3 = url + '.fset3'
    console.log(url1);
    try {
    const response = await axios.get(url1, { responseType: 'arraybuffer' })
    .then(await axios.get(url2, { responseType: 'arraybuffer' }))
    .then(await axios.get(url3, { responseType: 'arraybuffer' }))
    return new Uint8Array(response.data)
      }
      catch(error) {
        throw error;
      }

    }

    static async fetchRemoteNFTData3 (url) {
      let url1 = url + '.fset'
      let url2 = url + '.iset'
      let url3 = url + '.fset3'
      console.log(url1);
      try {
      const response = await axios.get(url1, { responseType: 'arraybuffer' })
        .then(_ => {
          return axios.get(url2, { responseType: 'arraybuffer' })
        })
        .then(_ => {
          return axios.get(url3, { responseType: 'arraybuffer' })
        })
        return new Uint8Array(response.data)
        }
        catch(error) {
          throw error;
        }
      }

  static string2Uint8Data(string) {
    let data = new Uint8Array(string.length);
    for(let i = 0; i < data.length; i++) {
      data[i] = string.charCodeAt(i) & 0xff;
    }
    return data;
  }
}
