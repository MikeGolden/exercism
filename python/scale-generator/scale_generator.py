"""Scale Generator

https://exercism.org/tracks/python/exercises/scale-generator
"""

class Scale:
    """Generate a list of musical scales based on the given `tonic` value.
    
    https://en.wikipedia.org/wiki/Scale_(music)
    
    Parameters:
    ----------
    tonic:
        A string character representing the tonic scale to generate.

    Attributes:
    ----------
    tonic:
        A string character representing the tonic scale to generate.
    pitches:
        A list of strings representing the pitches in the `Scale` objects chromatic scale.
    tonic_index:
        An interger index for the `tonic` in `scale`.
    SHARP_PITCHES:
        A list of strings representing the standard 12 pitch chromatic scale with
        sharp(#) key signatures.
    FLAT_PITCHES:
        A list of strings representing the standard 12 pitch chromatic scale with
        flat(b) key signatures.
    SHARP_TONES:
        A list of strings that have a sharp(#) key signature.
    FLAT_TONES:
        A list of strings that have a flat(b) key signature.
    INTERVALS:
        A dictionary with {string: integer} pairs for each supported interval and it's
        value.
    
    Functions:
    ---------
    chromatic() -> list[str]:
        Return the chromatic scale of the `Scale` objects given `tonic`.
    interval(intervals: str) -> list[str]:
        Return a diatonic scale of the `Scale` objects `tonic`, with the given `intervals`.
    validate_tonic(tonic: str) -> str:
        Return a ValueError if `tonic` is invalid.
    validate_intervals(intervals: str) -> str:
        Return a ValueError if an invalid interval is supplied in `intervals`.

    Raises:
    ------
    ValueError:
        If an invalid `tonic` value is given.
        If an invalid interval is passed when calling `interval()`.
    """
    SHARP_PITCHES = "A   A#  B   C   C#  D   D#  E   F   F#  G   G#".split()
    FLAT_PITCHES =  "A   Bb  B   C   Db  D   Eb  E   F   Gb  G   Ab".split()
    SHARP_TONES =   "A   B   C   D   E   F#  G   a   b   c#  d#  e   f#  g#".split()
    FLAT_TONES =    "Ab  Bb  Cb  Db  Eb  F   Gb  ab  bb  c   d   eb  f   g ".split()
    INTERVALS = {"m": 1, "M": 2, "A": 3}

    def __init__(self, tonic: str):
        self.tonic = self.validate_tonic(tonic)
        self.pitches = self.SHARP_PITCHES if tonic in self.SHARP_TONES else self.FLAT_PITCHES
        self.tonic_index = self.pitches.index(self.tonic.capitalize())

    def chromatic(self) -> list[str]:
        """Return the chromatic scale of the `Scale` objects given `tonic`."""
        return self.pitches[self.tonic_index:] + self.pitches[:self.tonic_index]

    def interval(self, intervals: str) -> list[str]:
        """Return a diatonic scale of the `Scale` objects `tonic`, with the given `intervals`."""
        i = self.tonic_index
        diatonic_scale = [self.pitches[i]]
        for interval in self.validate_intervals(intervals):
            i = (i + self.INTERVALS[interval]) % 12
            diatonic_scale.append(self.pitches[i])
        
        return diatonic_scale

    def validate_tonic(self, tonic: str) -> str:
        """Return a ValueError if `tonic` is invalid."""
        if tonic not in self.SHARP_TONES + self.FLAT_TONES:
            raise ValueError("Invalid tonic value provided for `Scale` object.")
        return tonic

    def validate_intervals(self, intervals: str) -> str:
        """Return a ValueError if an invalid interval is supplied in `intervals`."""
        if not any(i in self.INTERVALS for i in intervals):
            raise ValueError("Only intervals 'm', 'M', and 'A' are supported.")
        return intervals