import { http, HttpResponse } from 'msw'

export const handlers = [
  // And here's a request handler with MSW
  // for the same "GET /user" request that
  // responds with a mock JSON response.
  http.get('/productos/:id', ({ request }) => {

    debugger;
    console.log('Just observing:', request.method, request.url)
    return new Response({nombre: "aasd"})
  }),
]