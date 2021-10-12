import jwt_decode from "jwt-decode";
import axios from "axios";
import { decode } from "jsonwebtoken";


export default async function fetchAccessToken() {
  let accessToken = localStorage.getItem('draft-access-token');

  if (!tokenIsFresh(accessToken)) {
    accessToken = await refreshToken();
    localStorage.setItem('draft-access-token', accessToken);
  }

  return accessToken;
}


function tokenIsFresh(accessToken) {
  let decodedToken = jwt_decode(accessToken);

  console.log("***** Decoded Token Below *****", decodedToken);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    console.log("Token expired.");
    return false;
  } else {
    console.log("Token still current.");
    return true;
  }
}


async function refreshToken() {
  let url = "https://get-kraken.herokuapp.com/api/v1/token/refresh/";
  const refresh = localStorage.getItem('draft-refresh-token');
  
  const response = await axios.post(url, { refresh });

  let JWTToken = response.data.access;

  return JWTToken;
}


export async function getSeriesData(id=null) {
  return await getResourceData('series', id);
}


export async function getEventData(id=null) {
  return await getResourceData('event', id);
}


export async function getUser(id=null) {
  let data = await getResourceData('self');
  console.log("The API returned user logged in ID is: ",data[0].id);
  return data[0].id
}


async function getResourceData(type, id=null) {
  const JWTToken = await fetchAccessToken();

  let url = `http://get-kraken.herokuapp.com/api/v1/${type}/`;

  if(id != null) {
    url += `${id}/`;
  }

  console.log('resource API url: ', url);

  let config = { headers: {"Authorization": `Bearer ${JWTToken}` } };

  try {
    let response = await axios.get(url, config);
    return response.data;
  } catch (e) {
    console.error("Failed to fetch series data due to error")
  }
}


export async function claimGame(game_id) {
  // console.log('resource API url: prepare for token fetch');
  const JWTToken = await fetchAccessToken();
  // console.log('resource API url: completed token fetch');

  // let url = `http://get-kraken.herokuapp.com/api/v1/event/<int:pk>/host/`;
  // let url = `http://get-kraken.herokuapp.com/api/v1/event/${game_id}/host/`;
  let url = `http://get-kraken.herokuapp.com/api/v1/event/27/host/`;

  // console.log('resource API url using to claim: ', url);

  let config = { headers: {"Authorization": `Bearer ${JWTToken}` } };

  try {
    let response = await axios.put(url, config);
    return response;
  } catch (e) {
    console.error("Failed to claim the host role due to error.")
  }
}