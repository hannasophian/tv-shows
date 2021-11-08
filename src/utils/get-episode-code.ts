
function getEpisodeCode(season: number, episode: number): string {
    let str = [(season < 10) ? `S0${season}` : `S${season}`,
    (episode < 10) ? `E0${episode}` : `E${episode}`];
    return str.join("");
}

module.exports = getEpisodeCode;
//export default getEpisodeCode;
export { }