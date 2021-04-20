async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
  }

  export default getPilots;