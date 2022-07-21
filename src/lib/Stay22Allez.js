const Stay22Allez = (provider, parameters) => {

  // https://www.stay22.com/allez/{provider}?aid={aid}&campaign={label}&link={final_provider_url}
  const domain = "https://www.stay22.com/allez";
  const URI = new URL(`${domain}/${provider}`);

  const parametersDefaults = {
    aid: 'stay22',  // required
    campaign: 'stay22-poc',
    link: ''
  };

  const params = {...parametersDefaults, ...parameters};

  for (const [key, value] of Object.entries(params)) {
    URI.searchParams.append(key, value);
  }

  return URI.href;
};

export default Stay22Allez;