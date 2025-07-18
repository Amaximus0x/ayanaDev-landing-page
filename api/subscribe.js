// Vercel serverless function for Klaviyo email subscription
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*'); // In production, replace * with your domain
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Klaviyo configuration
    const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY || 'pk_910847da95ec868fb1d419e7a9d2bb3026';
    const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID || 'YvHmkS';

    // Call Klaviyo API
    const klaviyoResponse = await fetch(`https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`
      },
      body: JSON.stringify({
        profiles: [{
          email: email.trim(),
          $consent: ['email']
        }]
      })
    });

    if (!klaviyoResponse.ok) {
      const errorData = await klaviyoResponse.json();
      console.error('Klaviyo API Error:', errorData);
      return res.status(400).json({ 
        error: 'Failed to subscribe to newsletter',
        details: errorData 
      });
    }

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Something went wrong. Please try again.' 
    });
  }
} 