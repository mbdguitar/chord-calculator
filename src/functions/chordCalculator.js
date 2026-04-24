Object.defineProperty(exports, "__esModule", { value: true });
var intervals = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];
function nameIntervals(set) {
    var namedSet = [];
    set.forEach(function (n) { return namedSet.push(intervals[n]); });
    return namedSet;
}
;
function getConditions(set) {
    var hasm2 = set.has(1);
    var hasM2 = set.has(2);
    var has2nd = set.has(1) || set.has(2); //All 2nd checks
    var hasm3 = set.has(3);
    var hasM3 = set.has(4);
    var has3rd = set.has(3) || set.has(4); //All 3rd checks
    var has4th = set.has(5);
    var hasTri = set.has(6);
    var has5th = set.has(7); //4th, Tri, and 5th checks
    var hasm6 = set.has(8);
    var hasM6 = set.has(9);
    var has6th = set.has(8) || set.has(9); //All 6th checks
    var hasm7 = set.has(10);
    var hasM7 = set.has(11);
    var has7th = set.has(10) || set.has(11); //All 7th checks
    var has9th = hasm2 || hasM2 || hasm3;
    var has11th = has4th || hasTri; //9ths & 11ths checks
    var has13th = hasm6 || hasM6; //13ths checks
    return {
        hasm2: hasm2,
        hasM2: hasM2,
        has2nd: has2nd,
        hasm3: hasm3,
        hasM3: hasM3,
        has3rd: has3rd,
        has4th: has4th,
        hasTri: hasTri,
        has5th: has5th,
        hasm6: hasm6,
        hasM6: hasM6,
        has6th: has6th,
        hasm7: hasm7,
        hasM7: hasM7,
        has7th: has7th,
        has9th: has9th,
        has11th: has11th,
        has13th: has13th,
    };
}
function analyzeBase(c) {
    if (c.hasM3 && c.has5th)
        return '';
    if ((c.hasm3 && c.has5th) || (c.hasm3 && c.hasTri && c.hasm7))
        return 'm';
    if (c.hasm3 && c.hasTri && !c.hasm7)
        return '°';
    if (c.hasM3 && c.hasm6)
        return '+';
    if (c.has4th && c.has5th)
        return 'sus4';
    if (c.hasM2 && c.has5th && !c.hasM6)
        return 'sus2';
    return '';
}
function getModifier(base, c) {
    if (c.hasM6 && !c.hasM2 && !c.hasm7 && !c.hasM7 && base !== '°')
        return '6';
    if (c.hasM6 && c.hasM2 && !c.hasm7 && !c.hasM7 && base !== '°')
        return '6/9';
    if (c.hasm7)
        return '';
    if (c.hasM7)
        return 'M';
}
function rankExtension(base, c) {
    var extensions = [];
    if (c.has7th)
        extensions.push(7);
    if (base === 'sus2' || base === 'sus4') {
        if (c.has7th && c.hasM2 && ((!c.has3rd && c.has4th)))
            extensions.push(9);
    }
    else {
        if (c.has7th && c.hasM2)
            extensions.push(9);
    }
    ;
    if (c.has7th && c.has9th && c.has4th && c.has3rd)
        extensions.push(11);
    if (c.has7th && c.has9th && c.has11th && c.hasM6)
        extensions.push(13);
    if (extensions.length > 0) {
        console.log(extensions);
        extensions.sort(function (a, b) { return a - b; });
        return extensions[extensions.length - 1];
    }
}
function getAdds(base, c) {
    var adds = [];
    if (!c.has7th) {
        if (c.hasM2 && c.has3rd)
            adds.push('add9');
        if (c.has4th && base !== 'sus4')
            adds.push('add11');
        if (c.hasM6 && !c.has6th && base !== '°')
            adds.push('add13');
    }
    else if (c.has7th && !c.has9th) {
        if (c.has4th && c.hasM3 && !c.hasm3)
            adds.push('add11');
        if (c.hasM6 && base !== '°')
            adds.push('add13');
    }
    else if (c.has7th && c.has9th && !c.has11th) {
        if (c.hasM6 && base !== '°')
            adds.push('add13');
    }
    if (adds.length > 0)
        return "(".concat(adds.join(', '), ")");
}
function getAlterations(base, c) {
    var alterations = [];
    if (c.hasTri && !c.has5th && base !== '°')
        alterations.push('b5');
    if (c.hasm2)
        alterations.push('b9');
    if (c.hasm3 && c.hasM3)
        alterations.push('#9');
    if (c.hasTri && c.has5th)
        alterations.push('#11');
    if (c.hasm6 && c.has5th)
        alterations.push('b13');
    if (alterations.length > 0)
        return "(".concat(alterations.join(', '), ")");
}
function nameChord(root, intervals) {
    var chordName = '';
    var normalizedSet = new Set(intervals);
    var conditions = getConditions(normalizedSet);
    var namedIntervals = nameIntervals(normalizedSet);
    var base = analyzeBase(conditions);
    var modifier = getModifier(base, conditions);
    var extensions = rankExtension(base, conditions);
    var alterations = getAlterations(base, conditions);
    var adds = getAdds(base, conditions);
    if (base === 'sus2' || base === 'sus4') {
        chordName = "".concat(root !== null && root !== void 0 ? root : '').concat(modifier !== null && modifier !== void 0 ? modifier : '').concat(extensions !== null && extensions !== void 0 ? extensions : '').concat(base !== null && base !== void 0 ? base : '').concat(alterations !== null && alterations !== void 0 ? alterations : '').concat(adds !== null && adds !== void 0 ? adds : '');
    }
    else {
        chordName = "".concat(root !== null && root !== void 0 ? root : '').concat(base !== null && base !== void 0 ? base : '').concat(modifier !== null && modifier !== void 0 ? modifier : '').concat(extensions !== null && extensions !== void 0 ? extensions : '').concat(alterations !== null && alterations !== void 0 ? alterations : '').concat(adds !== null && adds !== void 0 ? adds : '');
    }
    ;
    console.log(chordName);
    return {
        name: chordName,
        intervals: namedIntervals
    };
}
;
exports.default = nameChord;
