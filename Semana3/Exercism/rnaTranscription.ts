export function toRna(dnaSequence: string): string {
    const complementMap: { [key: string]: string } = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    const isValidDnaSequence = /^[ACGT]+$/g.test(dnaSequence);
    if (!isValidDnaSequence) {
        throw new Error('Invalid input DNA.');
    }

    const rnaSequence = dnaSequence.split('').map(nucleotide => complementMap[nucleotide]).join('');

    return rnaSequence;
}