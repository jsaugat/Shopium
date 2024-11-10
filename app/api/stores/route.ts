import { createResponse } from '@/server/utils/responseHandler';
import { type NextRequest } from 'next/server'

// Route Handlers are not cached by default. You can, however, opt into caching for GET methods by uncommenting the following line :
// export const dynamic = 'force-static'

// CREATE STORE
export const POST = async (req: NextRequest) => {
  try {
    const userId = "randomUserId";
    // const userId = "null";
    if (!userId) {
      return createResponse('Unauthorized', 401);
    }

    return createResponse('Store created successfully', 201);
  } catch (error: any) {
    console.error({ "[SERVER_ERROR]": error.message });
  }
}