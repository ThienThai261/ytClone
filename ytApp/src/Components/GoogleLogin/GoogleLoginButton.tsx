// src/Components/GoogleLoginButton.tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const GoogleLoginButton = () => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: `564510782303-qkd6cg8ctr0am625l5p1ksnrvegf9022.apps.googleusercontent.com`,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(document.getElementById('google-signin-btn'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  const handleCredentialResponse = (response: any) => {
    const jwt = response.credential;
    console.log('JWT Token:', jwt);

    // Decode or send to backend. For now just store in localStorage
    localStorage.setItem('google_jwt', jwt);

    // You can decode and get info like email, name, etc. (Optional)
    window.location.reload(); // Or redirect user
  };

  return <div id="google-signin-btn"></div>;
};

export default GoogleLoginButton;
