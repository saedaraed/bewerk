import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
console.log("🔁 Middleware is running"); 
export default createMiddleware(routing);

export const config = {
  // Applies middleware to all routes
  matcher: ['/((?!_next|.*\\..*).*)'],
};