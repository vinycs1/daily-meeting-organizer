export function sortAnswers(members: Record<string, string>, answers: Record<string, string>) {
    return Object.keys(answers)
    .map(membersId => ({
        name: members[membersId],
        answer: answers[membersId],
    }))
    .sort(alphabeticallySorter);
}

export function alphabeticallySorter(a: Record<string, string>, b: Record<string, string>) {
    const textA = a.awnser?.toUpperCase();
    const textB = b.awnser?.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}