import { NextRequest } from 'next/server';
import { comments } from './data'; //模范数据库

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('which'); // comments?which=1st --> 这里的query就是“1st”
  const filteredComments = query
    ? comments.filter((c) => c.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newComment); //假装更新数据库

  return new Response(JSON.stringify(newComment), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
