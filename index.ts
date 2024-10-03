import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestType = "get" | "post" | "put" | "patch" | "delete"

/**
 * A singleton class responsible for making HTTP requests using Axios.
 */
class ApiService {
  /**
   * The single instance of the ApiService class.
   */
  private static instance: ApiService

  /**
   * The Axios instance used for making HTTP requests.
   */
  private axios: Axios

  /**
   * Private constructor to prevent direct instantiation.
   */
  private constructor() {
    /**
     * Initialize the Axios instance with default settings.
     */
    this.axios = axios
    this.axios.defaults.headers.common["Content-Type"] = "application/json"
    this.axios.defaults.timeout = 10000
  }

  /**
   * Returns the single instance of the ApiService class.
   *
   * @returns {ApiService} The instance of the ApiService class.
   */
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }

    return ApiService.instance
  }

  /**
   * Sends an HTTP request using the specified method and URL.
   *
   * This method is a wrapper around the Axios library, providing a convenient way to send HTTP requests.
   *
   * @param {RequestType} type The type of HTTP request (e.g., "get", "post", etc.).
   * @param {string} url The URL of the request.
   * @param {AxiosRequestConfig<T>} [config] The request configuration (optional).
   * @returns {Promise<AxiosResponse | null>} A promise resolving to the response data or null on error.
   */
  public async send<T extends AxiosRequestConfig<T>>(type: RequestType, url: string, config?: T): Promise<AxiosResponse | null> {
    try {
      // Use the Axios instance to send the HTTP request with the specified method and URL
      return await axios[type](url, config)
    } catch (e) {
      // Log any errors that occur during the request
      console.error(e)
      // Return null to indicate that the request failed
      return null
    }
  }
}
/**
 * A convenience export for the ApiService instance.
 */
export const AxiFetch = ApiService.getInstance()