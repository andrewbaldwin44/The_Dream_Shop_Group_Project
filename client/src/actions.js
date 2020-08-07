export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistData = () => ({
  type: "REQUEST_ARTIST_DATA",
});

export const receiveArtistData = (artist) => ({
  type: "RECEIVE_ARTIST_DATA",
  artist,
});

export const receiveArtistDataError = () => ({
  type: "RECEIVE_ARTIST_DATA_ERROR",
});
