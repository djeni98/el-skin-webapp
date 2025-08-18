import { NextRequest, NextResponse } from 'next/server';
import data from '../products-data.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const foundProducts = data.filter((p) => p.id === id);
  if (!foundProducts || foundProducts.length === 0) {
    return NextResponse.json({ msg: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(foundProducts[0]);
}