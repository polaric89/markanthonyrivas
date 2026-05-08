const WORKER = 'https://markanthonyrivas-contact.mark-anthony-rivas89.workers.dev'

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204 })

export const onRequestPost: PagesFunction = async (context) => {
  const upstream = await fetch(WORKER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: context.request.body,
  })
  const data = await upstream.text()
  return new Response(data, {
    status: upstream.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
