async function postChord(chordData: { root: string, intervals: number[] }) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chordData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error);
        };

        return result;
    } catch (err) {
        console.log(err);
    };
};

export default postChord;