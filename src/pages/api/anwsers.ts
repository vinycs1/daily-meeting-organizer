import type { NextApiRequest, NextApiResponse } from 'next'
import { sortAwnsers } from '../../shared/sorter'
import {members} from '../../shared/resources/users'
type Data = any

let anwsers: Record<string, string> = {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    anwsers[req.body.userId] = req.body.anwser

    return res.status(201).json(req.body.anwser)

  } else {

    console.log(anwsers)
    res.status(200).json(sortAwnsers(members, anwsers))
  }

}

