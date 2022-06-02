import type { NextApiRequest, NextApiResponse } from 'next';
import { sortAnswers } from '../../shared/sorter';
import { members } from '../../shared/resources/users';

type Data = any

let answers: Record<string, string> = {};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        answers[req.body.userId] = req.body.anwser;

        return res.status(201).json(req.body.anwser);

    } else {
        res.status(200).json(sortAnswers(answers));
    }

}

