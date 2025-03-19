export async function GET(request, {params}) {
    return Response.json({ id: params.id, name: "User"})
}