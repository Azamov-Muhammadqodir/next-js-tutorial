export const calculatesEstimatedTimeToRead = (text:string) =>
{
        const wpm = 225;  /// wpm  =>  words per minutes
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time;
};

