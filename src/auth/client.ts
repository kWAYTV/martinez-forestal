import { adminClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { toast } from 'sonner';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [adminClient()],
  fetchOptions: {
    onError: async context => {
      const { response } = context;
      if (response.status === 429) {
        const retryAfter = response.headers.get('X-Retry-After');
        toast.error('Rate limit exceeded', {
          description: `Retry after ${retryAfter} seconds`
        });
      }
    }
  }
});
