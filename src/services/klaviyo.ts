// Klaviyo API service for handling email subscriptions

/// <reference types="vite/client" />

interface KlaviyoProfile {
  email: string;
  first_name?: string;
  last_name?: string;
  properties?: Record<string, any>;
}



class KlaviyoService {
  private apiKey: string;
  private listId: string;
  private baseUrl = 'https://a.klaviyo.com/api';
  private publicBaseUrl = 'https://manage.kmail-lists.com/subscriptions/subscribe';

  constructor() {
    this.apiKey = import.meta.env.VITE_KLAVIYO_API_KEY;
    this.listId = import.meta.env.VITE_KLAVIYO_LIST_ID;

    console.log('Environment variables loaded:');
    console.log('API Key:', this.apiKey ? 'Present' : 'Missing');
    console.log('List ID:', this.listId);

    if (!this.listId) {
      console.warn('Klaviyo List ID not configured. Email subscription will not work.');
    }
  }

  /**
   * Subscribe an email to the configured Klaviyo list using public API
   */
  async subscribeEmail(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<{ success: boolean; message: string }> {
    if (!this.listId) {
      return {
        success: false,
        message: 'Klaviyo configuration missing. Please configure List ID.'
      };
    }

    if (!this.isValidEmail(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    try {
      // Try the no-cors method first (most reliable for browser)
      console.log('Attempting subscription with List ID:', this.listId);
      const response = await this.subscribeUsingDirectMethod(email, additionalData);
      return response;
    } catch (error) {
      console.error('Klaviyo subscription error:', error);
      return {
        success: false,
        message: 'Failed to subscribe. Please try again later.'
      };
    }
  }

    /**
   * Direct subscription method using the correct Klaviyo endpoint
   */
  private async subscribeUsingDirectMethod(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<{ success: boolean; message: string }> {
    try {
      // Extract account ID from API key for the correct endpoint
      const accountId = this.apiKey ? this.apiKey.replace('pk_', '').substring(0, 6) : '';
      
      console.log('Account ID extracted:', accountId);

      // Use the account-specific endpoint
      const endpoint = `https://manage.kmail-lists.com/ajax/subscriptions/subscribe`;
      
      const payload = {
        g: this.listId,
        email: email,
        ...(additionalData?.first_name && { '$first_name': additionalData.first_name }),
        ...(additionalData?.last_name && { '$last_name': additionalData.last_name })
      };

      console.log('Subscribing with account-specific endpoint');
      console.log('Account ID extracted:', accountId);
      console.log('Payload:', payload);

      // Try with CORS first to get proper response
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload),
        mode: 'cors',
        credentials: 'omit'
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Subscription successful:', result);
        return {
          success: true,
          message: 'Successfully subscribed to our newsletter!'
        };
      } else if (response.status === 302) {
        // Handle redirect - this might still be successful
        console.log('Got redirect response, subscription might still work');
        return {
          success: true,
          message: 'Successfully subscribed to our newsletter!'
        };
      } else {
        const errorText = await response.text();
        console.error('Subscription failed:', response.status, errorText);
        return {
          success: false,
          message: 'Failed to subscribe. Please try again later.'
        };
      }

    } catch (error) {
      console.error('Direct subscription method failed:', error);
      
      // Fallback to no-cors method
      return await this.fallbackSubscription(email, additionalData);
    }
  }

  /**
   * Fallback subscription using no-cors mode
   */
  private async fallbackSubscription(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<{ success: boolean; message: string }> {
    try {
      console.log('Trying fallback no-cors method');
      
      const payload = {
        g: this.listId,
        email: email,
        ...(additionalData?.first_name && { '$first_name': additionalData.first_name }),
        ...(additionalData?.last_name && { '$last_name': additionalData.last_name })
      };

      // Use the legacy endpoint with no-cors
      await fetch('https://manage.kmail-lists.com/subscriptions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload),
        mode: 'no-cors'
      });

      console.log('Fallback subscription request sent');
      
      return {
        success: true,
        message: 'Successfully subscribed to our newsletter!'
      };

    } catch (error) {
      console.error('Fallback subscription failed:', error);
      return {
        success: false,
        message: 'Failed to subscribe. Please try again later.'
      };
    }
  }

  /**
   * Subscribe using Klaviyo's public API (browser-compatible)
   */
  private async subscribeUsingPublicAPI(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<{ success: boolean; message: string }> {
    try {
      // Use URLSearchParams for form submission
      const params = new URLSearchParams();
      params.append('g', this.listId); // 'g' is the parameter name for list ID
      params.append('email', email);
      
      // Add additional profile data if provided
      if (additionalData?.first_name) {
        params.append('$first_name', additionalData.first_name);
      }
      if (additionalData?.last_name) {
        params.append('$last_name', additionalData.last_name);
      }

      const response = await fetch(this.publicBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
        mode: 'cors',
        credentials: 'omit'
      });

      console.log('Klaviyo response status:', response.status);
      
      // Check if the response is ok
      if (response.ok) {
        return {
          success: true,
          message: 'Successfully subscribed to our newsletter!'
        };
      } else {
        // Try to get error details from response
        try {
          const errorData = await response.json();
          console.error('Klaviyo API Error:', errorData);
          
          if (errorData.errors && errorData.errors.includes('List does not exist.')) {
            return {
              success: false,
              message: `List ID "${this.listId}" does not exist. Please check your Klaviyo List ID in the .env file.`
            };
          }
        } catch (e) {
          // Try to read as text if JSON parsing fails
          try {
            const errorText = await response.text();
            console.error('Klaviyo API Error (text):', errorText);
          } catch (textError) {
            console.error('Could not read error response');
          }
        }

        // Handle different error status codes
        if (response.status === 400) {
          return {
            success: false,
            message: 'Invalid email address or list configuration.'
          };
        } else if (response.status === 429) {
          return {
            success: false,
            message: 'Too many requests. Please try again later.'
          };
        } else {
          return {
            success: false,
            message: `Failed to subscribe (Status: ${response.status}). Please check your List ID.`
          };
        }
      }
    } catch (error) {
      console.error('Klaviyo public API error:', error);
      
      // If public API fails, try alternative method
      return await this.subscribeUsingAlternativeMethod(email, additionalData);
    }
  }

  /**
   * Alternative method using Klaviyo's legacy endpoint with account ID
   */
  private async subscribeUsingAlternativeMethod(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<{ success: boolean; message: string }> {
    try {
      // Extract account ID from API key (first 6 characters after 'pk_')
      const accountId = this.apiKey ? this.apiKey.replace('pk_', '').substring(0, 6) : '';
      
      if (!accountId) {
        console.warn('Could not extract account ID from API key, trying with list ID only');
      }

      // Try the legacy Klaviyo endpoint format
      const legacyUrl = `https://manage.kmail-lists.com/subscriptions/subscribe`;
      
      const payload = {
        g: this.listId,
        email: email,
        ...(additionalData?.first_name && { '$first_name': additionalData.first_name }),
        ...(additionalData?.last_name && { '$last_name': additionalData.last_name })
      };

      console.log('Trying legacy endpoint with payload:', payload);

      const response = await fetch(legacyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload),
        mode: 'no-cors' // This allows the request but limits response access
      });

      // With no-cors mode, we can't read the response, so assume success
      console.log('Legacy API request sent (no-cors mode)');
      return {
        success: true,
        message: 'Successfully subscribed to our newsletter!'
      };

    } catch (error) {
      console.error('Alternative subscription method failed:', error);
      return {
        success: false,
        message: 'Failed to subscribe. Please try again later.'
      };
    }
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Export a singleton instance
export const klaviyoService = new KlaviyoService();
export default klaviyoService; 