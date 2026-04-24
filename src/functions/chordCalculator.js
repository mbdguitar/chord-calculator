"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intervals = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];
function nameIntervals(set) {
    var namedSet = [];
    set.forEach(function (n) { return namedSet.push(intervals[n]); });
    return namedSet;
}
;
function analyzeBase(set) {
    if (set.has(4) && set.has(7))
        return '';
    if ((set.has(3) && set.has(7)) || (set.has(3) && set.has(6) && set.has(10)))
        return 'm'; //Extra check for m7b5 chords which are unique
    if (set.has(3) && set.has(6) && !set.has(10))
        return '°'; //Extra check for m7b5 chords which are unique
    if (set.has(4) && set.has(8))
        return '+';
    if (set.has(5) && set.has(7))
        return 'sus4';
    if (set.has(2) && set.has(7) && !set.has(9))
        return 'sus2';
    return '';
}
;
function getModifier(base, set) {
    if (set.has(9) && !set.has(2) && !set.has(10) && !set.has(11) && base !== '°')
        return '6';
    if (set.has(9) && set.has(2) && !set.has(10) && !set.has(11) && base !== '°')
        return '6/9';
    if (set.has(10))
        return '';
    if (set.has(11))
        return 'M';
}
;
function rankExtension(base, set) {
    var extensions = [];
    if (set.has(10) || set.has(11))
        extensions.push(7);
    if (base === 'sus2' || base === 'sus4') {
        if ((set.has(10) || set.has(11)) && set.has(2) && ((!set.has(4) && set.has(5)) || (!set.has(3) && set.has(5))))
            extensions.push(9);
    }
    else {
        if ((set.has(10) || set.has(11)) && set.has(2))
            extensions.push(9);
    }
    if ((set.has(10) || set.has(11)) && (set.has(3) || set.has(2) || set.has(1)) && (set.has(5)) && (set.has(4) || set.has(3)))
        extensions.push(11);
    if ((set.has(10) || set.has(11)) && (set.has(2) || set.has(1)) && (set.has(5) || set.has(6)) && set.has(9))
        extensions.push(13);
    if (extensions.length > 0) {
        console.log(extensions);
        extensions.sort(function (a, b) { return a - b; });
        return extensions[extensions.length - 1];
    }
    ;
}
;
function getAdds(base, set) {
    var adds = [];
    if (!set.has(10) && !set.has(11)) {
        if (set.has(2) && (set.has(3) || set.has(4)))
            adds.push('add9');
        if (set.has(5) && base !== 'sus4')
            adds.push('add11');
        if (set.has(9) && (!set.has(8) && !set.has(9)) && base !== '°')
            adds.push('add13');
    }
    else if ((set.has(10) || set.has(11)) && (!set.has(2) && !set.has(1))) {
        if (set.has(5) && set.has(4) && !set.has(3))
            adds.push('add11');
        if (set.has(9) && base !== '°')
            adds.push('add13');
    }
    else if ((set.has(10) || set.has(11)) && (set.has(2) || set.has(1)) && (!set.has(5) && !set.has(6))) {
        if (set.has(9) && base !== '°')
            adds.push('add13');
    }
    ;
    if (adds.length > 0) {
        return "(".concat(adds.join(", "), ")");
    }
    ;
}
function getAlterations(base, set) {
    var alterations = [];
    if (set.has(6) && !set.has(7) && base !== '°')
        alterations.push('b5');
    if (set.has(1))
        alterations.push('b9');
    if (set.has(3) && set.has(4))
        alterations.push('#9');
    if (set.has(6) && set.has(7))
        alterations.push('#11');
    if (set.has(8) && set.has(7))
        alterations.push('b13');
    if (alterations.length > 0)
        return "(".concat(alterations.join(", "), ")");
}
;
function nameChord(root, intervals) {
    var chordName = '';
    var normalizedSet = new Set(intervals);
    var namedIntervals = nameIntervals(normalizedSet);
    var base = analyzeBase(normalizedSet);
    var modifier = getModifier(base, normalizedSet);
    var extensions = rankExtension(base, normalizedSet);
    var alterations = getAlterations(base, normalizedSet);
    var adds = getAdds(base, normalizedSet);
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
