//API call and render methods for top champions section
const loadChampionKeys = async () => {
  var api_url = `https://lolbe2.azurewebsites.net/api/v1/championkeys`;
  try {
    const response = await fetch(api_url);
    const champKeys = await response.json();
    // console.log(champKeys);
    if (response.status === 200) {
      return champKeys;
    }
  } catch (error) {
    console.log(error);
  }
};

loadChampionKeys();
