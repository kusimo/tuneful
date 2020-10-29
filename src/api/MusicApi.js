import axios from 'axios';

const cachingGet = (get) => {
    const cache = new Map()
  
    return function cachedGet (url) {
      const key = url
  
      if (cache.has(key)) {
        return cache.get(key)
      } else {
        const request = get(...arguments)
        cache.set(key, request)
        return request
      }
    }
  }
  
  const instance = axios.create( {
   
})
  instance.get = cachingGet(instance.get)

export default instance;