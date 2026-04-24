const intervals = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];

function nameIntervals(set: Set<number>) {
    let namedSet: string[] = [];
    set.forEach(n => namedSet.push(intervals[n]));
    return namedSet;
};

function analyzeBase(set: Set<number>) {
    if (set.has(4) && set.has(7)) return '';
    if ((set.has(3) && set.has(7)) || (set.has(3) && set.has(6) && set.has(10))) return 'm';        //Extra check for m7b5 chords which are unique
    if (set.has(3) && set.has(6) && !set.has(10)) return '°';                                     //Extra check for m7b5 chords which are unique
    if (set.has(4) && set.has(8)) return '+';
    if (set.has(5) && set.has(7)) return 'sus4';
    if (set.has(2) && set.has(7) && !set.has(9)) return 'sus2';

    return '';
};

function getModifier(base: string, set: Set<number>) {
    if (set.has(9) && !set.has(2) && !set.has(10) && !set.has(11) && base !== '°') return '6';
    if (set.has(9) && set.has(2) && !set.has(10) && !set.has(11) && base !== '°') return '6/9';
    if (set.has(10)) return '';
    if (set.has(11)) return 'M';
};

function rankExtension(base: string, set: Set<number>) {
    let extensions: number[] = [];

    if (set.has(10) || set.has(11)) extensions.push(7);

    if (base === 'sus2' || base === 'sus4') {
        if ((set.has(10) || set.has(11)) && set.has(2) && ((!set.has(4) && set.has(5)) || (!set.has(3) && set.has(5)))) extensions.push(9);
    } else {
        if ((set.has(10) || set.has(11)) && set.has(2)) extensions.push(9);
    }

    if ((set.has(10) || set.has(11)) && (set.has(3) || set.has(2) || set.has(1)) && (set.has(5)) && (set.has(4) || set.has(3))) extensions.push(11);

    if ((set.has(10) || set.has(11)) && (set.has(2) || set.has(1)) && (set.has(5) || set.has(6)) && set.has(9)) extensions.push(13);

    if (extensions.length > 0) {
        console.log(extensions);
        extensions.sort((a, b) => a - b);
        return extensions[extensions.length - 1];
    };
};

function getAdds(base: string, set: Set<number>) {
    let adds: string[] = [];

    if (!set.has(10) && !set.has(11)) {
        if (set.has(2) && (set.has(3) || set.has(4))) adds.push('add9');
        if (set.has(5) && base !== 'sus4') adds.push('add11');
        if (set.has(9) && (!set.has(8) && !set.has(9)) && base !== '°') adds.push('add13');
    } else if ((set.has(10) || set.has(11)) && (!set.has(2) && !set.has(1))) {
        if (set.has(5) && set.has(4) && !set.has(3)) adds.push('add11')
        if (set.has(9) && base !== '°') adds.push('add13')
    } else if ((set.has(10) || set.has(11)) && (set.has(2) || set.has(1)) && (!set.has(5) && !set.has(6))) {
        if (set.has(9) && base !== '°') adds.push('add13')
    };

    if (adds.length > 0) {
        return `(${adds.join(", ")})`;
    };
}

function getAlterations(base: string, set: Set<number>) {
    let alterations: string[] = [];

    if (set.has(6) && !set.has(7) && base !== '°') alterations.push('b5');
    if (set.has(1)) alterations.push('b9');
    if (set.has(3) && set.has(4)) alterations.push('#9');
    if (set.has(6) && set.has(7)) alterations.push('#11');
    if (set.has(8) && set.has(7)) alterations.push('b13');

    if (alterations.length > 0) return `(${alterations.join(", ")})`;
};

function nameChord(root: string, intervals: number[]) {
    let chordName: string = '';
    const normalizedSet = new Set(intervals);
    const namedIntervals = nameIntervals(normalizedSet);
    const base = analyzeBase(normalizedSet)
    const modifier = getModifier(base, normalizedSet);
    const extensions = rankExtension(base, normalizedSet);
    const alterations = getAlterations(base, normalizedSet);
    const adds = getAdds(base, normalizedSet);

    if (base === 'sus2' || base === 'sus4') {
        chordName = `${root ?? ''}${modifier ?? ''}${extensions ?? ''}${base ?? ''}${alterations ?? ''}${adds ?? ''}`
    } else {
        chordName = `${root ?? ''}${base ?? ''}${modifier ?? ''}${extensions ?? ''}${alterations ?? ''}${adds ?? ''}`
    };

    console.log(chordName);

    return {
        name: chordName,
        intervals: namedIntervals
    };
};

export default nameChord;