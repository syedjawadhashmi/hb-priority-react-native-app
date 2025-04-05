 export const fetchSerpApiData = async () => {
    try {
      const response = await fetch('https://serpapi.com/search.json?q=Coffee&location=Austin,+Texas,+United+States&hl=en&gl=us&google_domain=google.com', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      // console.log("Ful Response",data)
      return data;
    } catch (error) {
      console.error('Error fetching SerpApi data:', error);
    }
  };
  