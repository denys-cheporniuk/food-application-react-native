import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 6ix_DZpORa_F9DKlD2WbGGzsRVSYFqjsiUcosMB5WEVCCCoSrFAzKM4VvmL0GU8ZCoWuDvrKIf5vPEjJVgrrcaVfvHSI-AnIkUJhmFhsWzLCEdo7gFC1KEp59WQdZXYx'
  }
})

