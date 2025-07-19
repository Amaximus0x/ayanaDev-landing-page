# Klaviyo Email Subscription Setup

This guide walks you through setting up Klaviyo email subscription for your Ayana Dev landing page.

## Prerequisites

1. A Klaviyo account (sign up at [klaviyo.com](https://www.klaviyo.com))
2. A Klaviyo list created for email subscriptions

## Step 1: Get Your Klaviyo Credentials

### API Key
1. Log into your Klaviyo account
2. Go to **Account** → **Settings** → **API Keys**
3. Create a new **Private API Key** with the following permissions:
   - Lists: Read, Write
   - Profiles: Read, Write
   - Subscriptions: Read, Write
4. Copy the API key (starts with `pk_`)

### List ID
1. In your Klaviyo account, go to **Audience** → **Lists & Segments**
2. Click on the list you want to use for email subscriptions
3. In the URL, copy the list ID (the string of characters after `/list/`)
   - Example: `https://www.klaviyo.com/list/ABC123` → List ID is `ABC123`
4. **Alternative method**: Right-click on your list → "Inspect Element" → Look for `data-list-id` attribute
5. **Another way**: Go to list settings and the ID will be shown in the URL or list details

## Step 2: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your Klaviyo credentials:

```env
VITE_KLAVIYO_API_KEY=pk_your_private_api_key_here
VITE_KLAVIYO_LIST_ID=your_list_id_here
```

**Important**: 
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Use `VITE_` prefix for environment variables in Vite projects
- **Don't use quotes around the values** - environment variables should be: `KEY=value` not `KEY='value'`
- **No spaces around the equals sign** - use `KEY=value` not `KEY = value`

## Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your landing page
3. Enter an email address in the subscription form
4. Click "Send"
5. Check your Klaviyo list to confirm the email was added

## Step 4: Production Deployment

For production deployment, you'll need to set environment variables in your hosting platform:

### Vercel
1. Go to your project dashboard
2. Click **Settings** → **Environment Variables**
3. Add both `VITE_KLAVIYO_API_KEY` and `VITE_KLAVIYO_LIST_ID`

### Netlify
1. Go to **Site settings** → **Environment variables**
2. Add both variables with their values

### Other Platforms
Consult your hosting provider's documentation for setting environment variables.

## Features Included

✅ **Email Validation**: Validates email format before submission  
✅ **Loading States**: Shows spinner and disables form during submission  
✅ **Success/Error Messages**: User-friendly feedback messages  
✅ **Automatic Cleanup**: Clears success messages after 5 seconds  
✅ **Error Handling**: Handles API errors gracefully  
✅ **TypeScript Support**: Fully typed for better development experience  

## API Endpoints Used

The integration uses Klaviyo's REST API v2024-10-15:
- `POST /profiles/` - Create or update profiles
- `POST /profile-subscription-bulk-create-jobs/` - Subscribe profiles to lists

## Troubleshooting

### Common Issues

1. **"Klaviyo configuration missing" error**
   - Check that your `.env` file exists and has the correct variable names
   - Ensure you're using the `VITE_` prefix
   - Restart your development server after adding environment variables

2. **API Key Invalid**
   - Verify your API key starts with `pk_`
   - Ensure the API key has the correct permissions
   - Check that the API key hasn't expired

3. **List ID Invalid / "List does not exist" error**
   - **Double-check the list ID** from your Klaviyo dashboard URL
   - **Ensure the list exists and is active**
   - **Try these methods to find the correct List ID:**
     
     **Method 1: From URL**
     - Go to **Audience** → **Lists & Segments**
     - Click on your list
     - Copy the ID from the URL: `https://www.klaviyo.com/list/YOUR_LIST_ID`
     
     **Method 2: From List Settings**
     - Click on your list → **Settings** tab
     - The List ID should be visible in the settings or URL
     
     **Method 3: Create a New List**
     - If you can't find the ID, create a new list
     - Go to **Audience** → **Lists & Segments** → **Create List**
     - Name it "Website Subscribers" or similar
     - Use the new list's ID

4. **CORS Issues (resolved)**
   - The integration now uses Klaviyo's public API endpoints which are browser-compatible
   - If you still encounter CORS issues, ensure your `.env` file is properly formatted without quotes

### Need Help?

- [Klaviyo API Documentation](https://developers.klaviyo.com/en/reference/api_overview)
- [Klaviyo Developer Portal](https://developers.klaviyo.com/)

## Security Notes

- API keys are sensitive data - never expose them in client-side code without the `VITE_` prefix
- Use environment variables for all sensitive configuration
- Regularly rotate your API keys for security
- Monitor your Klaviyo usage to prevent unexpected charges 