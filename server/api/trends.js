export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const apiKey = config.public.gnewsApiKey;

  const countries = ["us", "gb"]; // USA, UK, Italy, Spain, Portugal
  const countryNames = {
    us: "USA",
    gb: "UK",
  };

  const trends = {};

  // Fetch top 2 articles for each country
  for (const code of countries) {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&country=${code}&max=2&token=${apiKey}`
    );

    if (!res.ok) {
      trends[countryNames[code]] = [{ title: "Unable to fetch", url: "#" }];
      continue;
    }

    const data = await res.json();

    trends[countryNames[code]] = data.articles.map((article) => ({
      title: article.title,
      url: article.url,
    }));
  }

  return trends;
});
