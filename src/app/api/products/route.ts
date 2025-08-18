import { NextResponse } from 'next/server';
import data from './products-data.json';

export async function GET() {
  return NextResponse.json(data);
}