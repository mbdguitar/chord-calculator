const intervals = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];

function nameIntervals(set: Set<number>) {
    let namedSet: string[] = [];
    set.forEach(n => namedSet.push(intervals[n]));
    return namedSet;
};

interface ChordConditions {
    hasm2: boolean; hasM2: boolean; has2nd: boolean;
    hasm3: boolean; hasM3: boolean; has3rd: boolean;
    has4th: boolean; hasTri: boolean; has5th: boolean;
    hasm6: boolean; hasM6: boolean; has6th: boolean;
    hasm7: boolean; hasM7: boolean; has7th: boolean;
    has9th: boolean; has11th: boolean; has13th: boolean;
}

function getConditions(set: Set<number>): ChordConditions {
    const hasm2 = set.has(1); const hasM2 = set.has(2); const has2nd = set.has(1) || set.has(2);            //All 2nd checks
    const hasm3 = set.has(3); const hasM3 = set.has(4); const has3rd = set.has(3) || set.has(4);            //All 3rd checks
    const has4th = set.has(5); const hasTri = set.has(6); const has5th = set.has(7);                        //4th, Tri, and 5th checks
    const hasm6 = set.has(8); const hasM6 = set.has(9); const has6th = set.has(8) || set.has(9);            //All 6th checks
    const hasm7 = set.has(10); const hasM7 = set.has(11); const has7th = set.has(10) || set.has(11);        //All 7th checks
    const has9th = hasm2 || hasM2 || hasm3; const has11th = has4th || hasTri;                               //9ths & 11ths checks
    const has13th = hasm6 || hasM6;                                                                         //13ths checks

    return {
        hasm2, hasM2, has2nd,
        hasm3, hasM3, has3rd,
        has4th, hasTri, has5th,
        hasm6, hasM6, has6th,
        hasm7, hasM7, has7th,
        has9th, has11th, has13th,
    };
}

function analyzeBase(c: ChordConditions): string {
    if (c.hasM3 && c.has5th) return '';
    if ((c.hasm3 && c.has5th) || (c.hasm3 && c.hasTri && c.hasm7)) return 'm';
    if (c.hasm3 && c.hasTri && !c.hasm7) return '°';
    if (c.hasM3 && c.hasm6) return '+';
    if (c.has4th && c.has5th) return 'sus4';
    if (c.hasM2 && c.has5th && !c.hasM6) return 'sus2';
    return '';
}

function getModifier(base: string, c: ChordConditions): string | undefined {
    if (c.hasM6 && !c.hasM2 && !c.hasm7 && !c.hasM7 && base !== '°') return '6';
    if (c.hasM6 && c.hasM2 && !c.hasm7 && !c.hasM7 && base !== '°') return '6/9';
    if (c.hasm7) return '';
    if (c.hasM7) return 'M';
}

function rankExtension(base: string, c: ChordConditions): number | undefined {
    const extensions: number[] = [];

    if (c.has7th) extensions.push(7);

    if (base === 'sus2' || base === 'sus4') {
        if (c.has7th && c.hasM2 && ((!c.has3rd && c.has4th))) extensions.push(9);
    } else {
        if (c.has7th && c.hasM2) extensions.push(9);
    };

    if (c.has7th && c.has9th && c.has4th && c.has3rd) extensions.push(11);
    if (c.has7th && c.has9th && c.has11th && c.hasM6) extensions.push(13);

    if (extensions.length > 0) {
        console.log(extensions);
        extensions.sort((a, b) => a - b);
        return extensions[extensions.length - 1];
    }
}

function getAdds(base: string, c: ChordConditions): string | undefined {
    const adds: string[] = [];

    if (!c.has7th) {
        if (c.hasM2 && c.has3rd) adds.push('add9');
        if (c.has4th && base !== 'sus4') adds.push('add11');
        if (c.hasM6 && !c.has6th && base !== '°') adds.push('add13');
    } else if (c.has7th && !c.has9th) {
        if (c.has4th && c.hasM3 && !c.hasm3) adds.push('add11');
        if (c.hasM6 && base !== '°') adds.push('add13');
    } else if (c.has7th && c.has9th && !c.has11th) {
        if (c.hasM6 && base !== '°') adds.push('add13');
    }

    if (adds.length > 0) return `(${adds.join(', ')})`;
}

function getAlterations(base: string, c: ChordConditions): string | undefined {
    const alterations: string[] = [];

    if (c.hasTri && !c.has5th && base !== '°') alterations.push('b5');
    if (c.hasm2) alterations.push('b9');
    if (c.hasm3 && c.hasM3) alterations.push('#9');
    if (c.hasTri && c.has5th) alterations.push('#11');
    if (c.hasm6 && c.has5th) alterations.push('b13');

    if (alterations.length > 0) return `(${alterations.join(', ')})`;
}

function nameChord(root: string, intervals: number[]) {
    let chordName: string = '';
    const normalizedSet = new Set(intervals);
    const conditions = getConditions(normalizedSet);
    const namedIntervals = nameIntervals(normalizedSet);
    const base = analyzeBase(conditions)
    const modifier = getModifier(base, conditions);
    const extensions = rankExtension(base, conditions);
    const alterations = getAlterations(base, conditions);
    const adds = getAdds(base, conditions);

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