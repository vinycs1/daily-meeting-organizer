import { members } from "./resources/users";

export function sortAnswers(answers: Record<string, string>) {

     return Object.keys(answers)
        .map(membersId => ({
            name: members[membersId],
            answer: answers[membersId],
        })).sort(alphabeticallySorter)

}

export function alphabeticallySorter(a: Record<string, string>, b: Record<string, string>) {
    const textA = a.answer?.toUpperCase();
    const textB = b.answer?.toUpperCase();

    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}