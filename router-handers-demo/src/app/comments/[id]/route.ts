import { comments } from '../data'; //模范数据库

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const updatedText = body.text;

  const foundIdx = comments.findIndex((c) => c.id === parseInt(id));
  comments[foundIdx].text = updatedText;

  return Response.json(comments[foundIdx]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const foundIdx = comments.findIndex((c) => c.id === parseInt(id));
  const deletedComment = comments[foundIdx];
  comments.splice(foundIdx, 1);

  return Response.json(deletedComment);
}
