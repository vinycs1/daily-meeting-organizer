import type { NextApiRequest, NextApiResponse } from 'next'
import { members } from '../../shared/resources/users'

type Data = Record<string, string>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
 return  res.status(200).json(Object.entries(members).map(([key, value]) => ({id: key, name: value })))
}

