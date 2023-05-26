class BaseService {
  constructor() {}

  get authUrl() {
    return (window as any).config?.auth_url;
  }
  get baseUrl() {
    return (window as any).config?.base_url;
  }
  get clientId() {
    return (window as any).config?.oauth_client;
  }
  get clientSecret() {
    return (window as any).config?.oauth_secret;
  }
}
export default BaseService;
