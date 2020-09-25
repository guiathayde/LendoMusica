const buscarLyric = async (artista, musica) => {

    const letraHTTP = await fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`);
    const letraJson = await letraHTTP.json();
    return letraJson;
}

export default buscarLyric;