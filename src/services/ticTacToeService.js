import { requester } from "./requester";

export const aiResponse = async (board) => requester.get('/games/ticTacToe/AIresponse', board);